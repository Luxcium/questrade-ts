/** @format */
// import { sync } from '../utils/mkdirp';
// import fs from 'fs';
import { sync } from 'mkdirp';
import {
  access,
  AcountNumber,
  axios,
  AxiosRequestConfig,
  AxiosResponse,
  constants,
  dirname,
  EE,
  ICreds,
  IHeaders,
  Methode,
  Optionals,
  QuestradeAPIOptions,
  readFileSync,
  Time,
  writeFileSync,
} from '.';
import { void_0 } from './void_0';

const MY_ACCT_NUMBER = 51648972;

export class Questrade extends EE {
  /**  Gets name of the file where the refreshToken is stored */
  public get keyFile() {
    return this._keyFile || `${this._keyDir}/${this._seedToken}`;
  }
  public get seedToken() {
    return this._seedToken;
  }
  public accounts: any;
  public markets: any;
  public symbols: any;
  public token: any;
  private _seedToken: string;
  private _accessToken: string;
  private _accountNumber: AcountNumber;
  private _apiServer: string;
  private _apiUrl: string;
  private _apiVersion: string;
  private _authUrl: string;
  private _expiresIn: number;
  private _keyDir: string;
  private _keyFile: string;
  private _practice: boolean;
  private _refreshToken: string;
  private _tokenType: string;

  public constructor(options: QuestradeAPIOptions) {
    super();
    this._accountNumber = '';
    this._apiVersion = 'v1';
    this._keyDir = './keys';
    this._keyFile = '';
    this._practice = false;
    this._seedToken = '';
    this._expiresIn = 0;
    this._tokenType = '';

    if (typeof options === 'undefined' || options === undefined) {
      throw new Error('questrade_missing_api_key or options');
    }
    if (typeof options === 'string' && options.indexOf('/') !== -1) {
      this._keyFile = options;
    }
    if (typeof options === 'string' && options.indexOf('/') === -1) {
      this._seedToken = options;
    }
    if (typeof options === 'object') {
      // Set to true if using a practice account
      // (http://www.questrade.com/api/free-practice-account)
      this._practice =
        options.practiceAccount === undefined
          ? false
          : !!options.practiceAccount;
      // Directory where the last refreshToken is stored.
      // The file name will have to be seedToken
      this._keyDir = options.keyDir || './keys';
      // Used as part of the API URL
      this._apiVersion = options.apiVersion || 'v1';
      // File that stores the last refreshToken.
      // Not really neede if you keep the seedToken and the keyDir
      this._keyFile = options.keyFile || '';
      // The original token obtained mannuelly from the interface
      this._seedToken = options.seedToken || '';
      // The default Account agains wich the API are made.
      // GetAccounts() will return the possible values
      this._accountNumber = `${options.account}` || '';
    }
    // The refresh token used to login and get the new accessToken,
    // the new refreshToken (next time to log in) and the api_server
    this._refreshToken = '';
    // Stores The unique token that is used to call each API call,
    //  Changes everytime you Refresh Tokens (aka Login)
    this._accessToken = '';
    // The server your connection needs to be made to (changes sometimes)
    // this._apiServer = '';
    // Strores the URL (without the endpoint)
    // to use for regular GET/POST Apis
    this._apiUrl = '';
    this._apiServer = '';
    this._authUrl = this._practice
      ? 'https://practicelogin.q.com'
      : 'https://login.questrade.com';

    // MAIN CLASS CONSTRUCTOR FUNCTION STAR
    const MAIN: void_0 = __ => {
      /**
       * <-- !!START OF SECTION !! -->
       * <-- ASYNC MAIN FUNCTION ()-->
       */
      (async () => {
        try {
          await this._loadKey()._refreshKey();
          // await this.getPrimaryAccountNumber();
        } catch (mainError) {
          console.error(mainError.message);
          this.emit(
            'error',
            'Main error in Questrade Class Constructor',
            mainError
          );
          throw new Error(mainError.message);
        }
      })(/* this.seedToken */)
        .then(() => {
          this.getTime()
            .then(time => {
              console.info('Server Time:', new Date(time).toLocaleString());
              console.info(
                'This',
                this._tokenType,
                'token expire in',
                this._expiresIn / 60,
                'minutes'
              );
              this.emit('ready');
            })
            .catch(err => {
              console.error(err);
              try {
                this.emit('error', 'Can not get server time', err);
              } catch (error) {
                console.error('Canot get server time');
              }
            });
        })
        .catch(_callingMainError => {
          console.error(
            'Error calling main() QuestradeClass in constructor'
            // callingMainError
          );
        });
      return void 0 && __;
      /**
       * <-- ASYNC MAIN FUNCTION ()-->
       * <-- !! END OF SECTION! !! -->
       */
    }; // MAIN CLASS CONSTRUCTOR FUNCTION END
    MAIN(void 0); // IMMEDIATELY INVOKED FUNCTION
  }
  public async getTime() {
    try {
      const { time } = await this._api<Time>('/time');
      return time;
    } catch (error) {
      throw new Error(error.message);
    }
  }
  public async getPrimaryAccountNumber(): Promise<AcountNumber> {
    this._accountNumber = MY_ACCT_NUMBER;
    return this._accountNumber;
    // }
    /* if (!reset && this._accountNumber.toString().length === 8) {
      return this._accountNumber;
    }
    // if zero available then throw
    const accounts = await this.getAccounts();
    if (accounts.length < 1) {
      throw new Error('No account number found');
    }
    // if only one retur the only one ...
    if (accounts.length === 1) {
      this._accountNumber = accounts[0].number;
      return this._accountNumber;
    }
    // if more than one return the first one marked primary
    const primary = accounts.filter(account => account.isPrimary);
    if (primary.length > 0) {
      this._accountNumber = primary[0].number;
      return this._accountNumber;
    }
    // if none marked primary and more than one return first one
    this._accountNumber = accounts[0].number;
    return this._accountNumber;
  */
  }
  /*
  !! PRIVATE _access **************************/
  /** Validate existence of a file before writing it */
  private async _access(
    path: string,
    seedToken: string,
    utf8: string = 'utf8',
    wfs: any = writeFileSync
  ) {
    // (this.keyFile, this.seedToken, 'utf8',writeFileSync)
    await access(path, constants.F_OK, none => {
      if (none) {
        console.info(none);
        try {
          wfs(path, seedToken, utf8);
        } catch (writeError) {
          console.error(writeError);
        }
      }
    });
  }

  /*
  !! PRIVATE _axiosClient<T> **************************/
  /** Connect the api using Axios as the client */
  private async _axiosClient<T>(
    /*  url: string,
    params: any,
    method: Methode = 'GET',
    headers?: IHeaders */
    axiosConfig: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    try {
      /*  const axiosConfig: AxiosRequestConfig = {
        url,
        params,
        headers,
        method,
      }; */
      /*
      !! Where the magic hapends ...
      * Connection to the REST API using axios:
      */
      const response: AxiosResponse<T> = await axios(axiosConfig);
      if (response.data === null) {
        throw new Error();
      } else {
        return response as AxiosResponse<T>;
      }
    } catch (error) {
      throw error;
    }
  }

  /*
  !! PRIVATE _API<T> **************************/
  /**  Method that actually mades the GET/POST request to Questrade */
  private async _api<T>(
    endpoint: string,
    method: Methode = 'GET',
    options?: Optionals,
    additionalHeaders?: IHeaders
  ): Promise<T> {
    let params: Optionals = {};
    if (typeof options !== 'undefined' && typeof options === 'object') {
      params = options;
    }
    const auth = `Bearer ${this._accessToken}`;
    const url: string = this._apiUrl + endpoint;
    const headers: IHeaders = {
      Authorization: auth,
      ...additionalHeaders,
    };

    // !!
    let data: T;
    try {
      const response = await this._axiosClient<T>({
        url,
        params,
        method,
        headers,
      });
      data = response.data;
    } catch (apiError) {
      try {
        console.error(
          '\nAPI error in call to api:\n',
          `\n${apiError.message}`,
          `\nError code: ${apiError.response.data.code}`,
          `\n${apiError.response.data.message}`
        );
      } catch (dateError) {
        console.error(
          '\nAPI error in the response from the api:',
          `\n${dateError.message}`
        );
      }
      throw apiError;
    }
    return data;
  }

  /*
  !! PRIVATE _LOADKEY *************************/
  /**  Reads the refreshToken stored in the file (if it exist) */
  private _loadKey(): this {
    let refreshToken: string = this.seedToken || '';
    try {
      if (!!this._keyFile) {
        sync(dirname(this._keyFile));
      } else {
        sync(this._keyDir);
      }
      refreshToken = readFileSync(this.keyFile, 'utf8');
    } catch (error) {
      this._access(this.keyFile, this.seedToken);
      // writeFileSync(this.keyFile, this.seedToken, 'utf8');
      // this._saveKey();
      // console.error("Error while 'Loading Token Key()'");
      // throw error;
    }
    this._refreshToken = refreshToken;
    return this;
  }

  /*
  !! PRIVATE _REFRESHKEY **************************/
  /**  Gets  the refresh_token from Questrade API serice */
  private async _refreshKey(): Promise<this> {
    try {
      const url = `${this._authUrl}/oauth2/token`;
      const params = {
        grant_type: 'refresh_token',
        refresh_token: this._refreshToken,
      };
      const response = await this._axiosClient<ICreds>({ url, params });
      const data = response.data;

      const creds: ICreds = data;
      return this._saveKey({ ...creds });
    } catch (error) {
      console.error('at _refreshKey()', error.message);
      throw new Error(error.message);
    }
  }

  /*
  !! PRIVATE _SAVEKEY **************************/
  /**  Saves the latest refreshToken in the file name after the seedToken */
  private _saveKey({
    access_token,
    api_server,
    expires_in,
    refresh_token,
    token_type,
  }: ICreds): this {
    this._accessToken = access_token;
    this._apiServer = api_server;
    this._expiresIn = expires_in;
    this._refreshToken = refresh_token;
    this._tokenType = token_type;
    this._apiUrl = `${this._apiServer}${this._apiVersion}`;

    writeFileSync(this.keyFile, this._refreshToken, 'utf8');

    return this;
  }
}

/*
// getTime
getAccounts
getAccounts/:id/positions
getAccounts/:id/balances
getAccounts/:id/executions
getAccounts/:id/orders[/:orderId]
getAccounts/:id/activities

getSymbols/:id
getSymbols/search
getSymbols/:id/options
getMarkets
getMarkets/quotes/:id
getMarkets/quotes/options
getMarkets/quotes/strategies
getMarkets/candles/:id
  */

/*
  !! PRIVATE _ACCOUNTAPI **************************/
/**  Makes the request to Questrade for Accouns specific transactions */
/*   private async _accountApi<T>(
    method?: Methode,
    endpoint?: string,
    options?: Optionals
  ) {
    if (!this._accountNumber) {
      throw new Error('no_account_selected');
    }
    return this._api<T>(
      method,
      `/accounts/${this._accountNumber}${endpoint}`,
      options,
      { location: this._accountNumber }
    );
  } */

// * PUBLIC ##############################################
/*! public get getServerTime(): Promise<string> {
    return this._getTime();
  } */

// * PUBLIC ##############################################
/*  public set account(accountNumber: string | number) {
    this._accountNumber = accountNumber.toString();
  } */

// * PUBLIC ##############################################
/*   public async getAccounts(): Promise<IAccount[]> {
    try {
      const { accounts } = await this._api<IAccounts>('GET', '/accounts');
      return accounts;
    } catch (error) {
      console.error(error.message);
      throw new Error(error.message);
    }
  } */
// * PUBLIC ##############################################
/* public async getActivities(
    range: TimeRange = {}
  ): Promise<IAccountActivity[]> {
    try {
      const { startTime, endTime } = this._rangeValidation(range);
      const { activities } = await this._accountApi<IActivities>(
        'GET',
        '/activities',
        {
          endTime,
          startTime,
        }
      );
      return activities;
    } catch (error) {
      console.error(error.message);
      throw new Error(error.message);
    }
  } */
// * PUBLIC ##############################################
/*  public async getBalances(): Promise<IBalances> {
    try {
      const balances = await this._accountApi<IBalances>('GET', '/balances');
      return balances;
    } catch (error) {
      console.error(error.message);
      throw new Error(error.message);
    }
  } */
// * PUBLIC ##############################################
/* public async getCandles(
    id: idType,
    rangeAndInterval: TimeRangeInterval = {
      interval: HistoricalDataGranularity.OneDay,
    }
  ): Promise<ICandle[]> {
    try {
      const { startTime, endTime, interval } = this._rangeValidation(
        rangeAndInterval
      );
      const { candles } = await this._api<ICandles>(
        'GET',
        `/markets/candles/${id}`,
        {
          endTime,
          interval,
          startTime,
        }
      );
      return candles;
    } catch (error) {
      console.error(error.message);
      throw new Error(error.message);
    }
  }
  */
// * PUBLIC ##############################################
/*  public async getExecutions(range: TimeRange = {}): Promise<IExecution[]> {
    try {
      const { startTime, endTime } = this._rangeValidation(range);
      const executions = await this._accountApi<IExecutions>(
        'GET',
        '/executions',
        { startTime, endTime }
      );
      return executions.executions;
    } catch (error) {
      console.error(error.message);
      throw new Error(error.message);
    }
  } */
// * PUBLIC ##############################################
/*  public async getMarkets(): Promise<IMarket[]> {
    try {
      const { markets } = await this._api<IMarketsResponse>('GET', '/markets');
      return markets; // keyBy(response.markets, 'name');
    } catch (error) {
      console.error(error.message);
      throw new Error(error.message);
    }
  }
  */
// * PUBLIC ##############################################
/*  public async getOptionQuote(filters_: IFilter[] | IFilter) {
    try {
      let filters = filters_;
      if (!Array.isArray(filters) && typeof filters === 'object') {
        filters = [filters];
      }
      const { quotes } = await this._api<IOptionsQuotes>(
        'GET',
        '/markets/quotes/options',
        {
          filters,
        }
      );
      return quotes;
    } catch (error) {
      console.error(error.message);
      throw new Error(error.message);
    }
  } */
// * PUBLIC ##############################################
/*  public async getOrdersAll(range?: TimeRange): Promise<IOrder[]> {
    try {
      return this.getOrder(undefined, {
        stateFilter: OrderStateFilterType.All,
        ...range,
      });
    } catch (error) {
      console.error(error.message);
      throw new Error(error.message);
    }
  } */
// * PUBLIC ##############################################
/* public async getOrdersClosed(range?: TimeRange): Promise<IOrder[]> {
    try {
      return this.getOrder(undefined, {
        stateFilter: OrderStateFilterType.Closed,
        ...range,
      });
    } catch (error) {
      console.error(error.message);
      throw new Error(error.message);
    }
  } */
// * PUBLIC ##############################################
/* public async getOrdersOpen(range?: TimeRange): Promise<IOrder[]> {
    try {
      return this.getOrder(undefined, {
        stateFilter: OrderStateFilterType.Open,
        ...range,
      });
    } catch (error) {
      console.error(error.message);
      throw new Error(error.message);
    }
  } */
// * PUBLIC ##############################################
/*  public async getOrder(
    orderId?: idType,
    orderOptions: OrdersOptions = {
      stateFilter: OrderStateFilterType.All,
    }
  ): Promise<IOrder[]> {
    const rangeValidated = this._rangeValidation(orderOptions);
    try {
      const url = !orderId ? '/orders' : `/orders/${orderId}`;
      console.log('url:', url);
      const { orders } = await this._accountApi<IOrders>(
        'GET',
        '/orders',
        rangeValidated
      );
      // if (!orders.length) {
      //   throw Error('order_not_found');
      // }
      return orders;
    } catch (error) {
      console.error(error.message);
      throw new Error(error.message);
    }
  } */
// * PUBLIC ##############################################
/*  public async getOrdersByIds(ids: idType[]): Promise<IOrder[]> {
    try {
      if (!Array.isArray(ids)) {
        throw new Error('missing_ids');
      }
      if (!ids.length) return [];
      const { orders } = await this._accountApi<IOrders>('GET', '/orders', {
        ids: ids.join(','),
      });
      return orders;
    } catch (error) {
      console.error(error.message);
      throw new Error(error.message);
    }
  } */
// * PUBLIC ##############################################
/*  public async getPositions(): Promise<IPosition[]> {
    try {
      const positions = await this._accountApi<IPositions>('GET', '/positions');
      return positions.positions;
    } catch (error) {
      console.error(error.message);
      throw new Error(error.message);
    }
  } */
// * PUBLIC ##############################################

// * PUBLIC ##############################################
/*  public async getQuote(id: idType): Promise<IQuote> {
    try {
      let symID = '';
      if (typeof id === 'number') {
        symID = id.toString();
      }
      const { quotes } = await this._api<IQuotes>(
        'GET',
        `/markets/quotes/${symID}`
      );
      return quotes[0];
    } catch (error) {
      console.error(error.message);
      throw new Error(error.message);
    }
  } */
// * PUBLIC ##############################################
/*  public async getQuotes(ids: idsType): Promise<IQuote[]> {
    try {
      if (!Array.isArray(ids)) {
        throw new Error('missing_ids');
      }
      if (!ids.length) return [];
      const { quotes } = await this._api<IQuotes>('GET', '/markets/quotes', {
        ids: ids.join(','),
      });
      return quotes;
    } catch (error) {
      console.error(error.message);
      throw new Error(error.message);
    }
  } */
// * PUBLIC ##############################################
/* public async getServerTimeObject(): Promise<IDateObject> {
    const serverTime = await this._getTime();
    const timeMoment = moment(serverTime);
    const weekDay = timeMoment.localeData().weekdays()[timeMoment.weekday()];
    const returnDate = {
      serverTime,
      UTC: timeMoment.toJSON(),
      timeObject: timeMoment.toObject(),
      toUTCDate: timeMoment.toDate(),
      toArray: timeMoment.toArray(),
      date: {
        day: weekDay,
        date: timeMoment.date(),
        month: timeMoment.month() + 1,
        year: timeMoment.year(),
      },
      time: {
        hour: timeMoment.hour(),
        minute: timeMoment.minute(),
        second: timeMoment.second(),
        milliseconds: timeMoment.milliseconds(),
        unixmilliseconds: timeMoment.valueOf(),
        unix: timeMoment.unix(),
        utcOffset: timeMoment.utcOffset(),
      },
      isValid: timeMoment.isValid(),
      dayOfYear: timeMoment.dayOfYear(),
      weekOfTheYeay: timeMoment.isoWeek(),
      weekday: timeMoment.weekday(),
      isLeapYear: timeMoment.isLeapYear(),
      daysInMonth: timeMoment.daysInMonth(),
      weeksInYear: timeMoment.isoWeeksInYear(),
      quarter: timeMoment.quarter(),
      locale: timeMoment.locale(),
    };
    return returnDate;
  }
  // * PUBLIC ##############################################
  // public async getstockSymbolId(stockSymbol: string): Promise<number> {
  //   return (await this.searchSymbol(stockSymbol)).symbolId;
  // } */
// * PUBLIC ##############################################
/*  public async getEquitySymbols(
    idOrSymbol: number | string
  ): Promise<IEquitySymbol[]> {
    try {
      let params;
      if (typeof idOrSymbol === 'number' || !isNaN(Number(idOrSymbol))) {
        params = {
          ids: Number(idOrSymbol),
        };
      } else if (typeof idOrSymbol === 'string') {
        params = {
          names: idOrSymbol,
        };
      }
      if (params === undefined) {
        throw new Error('missing_ID_or_Symbol');
      }
      const { symbols } = await this._api<IEquitySymbols>(
        'GET',
        '/symbols',
        params
      );
      return symbols;
    } catch (error) {
      console.error(error.message);
      throw new Error(error.message);
    }
  } */
// * PUBLIC ##############################################
/*  public async search(prefix: string, offset: number = 0): Promise<any> {
    try {
      const { equitySymbols } = await this._api<any>('GET', '/symbols/search', {
        offset,
        prefix,
      });
      return equitySymbols;
    } catch (error) {
      console.error(error.message);
      throw new Error(error.message);
    }
  } */
// * PUBLIC ##############################################
/*  public async searchSymbol(
    stockSymbol: string,
    offset: number = 0
  ): Promise<any> {
    try {
      const equitySymbols = await this._api<any>('GET', '/symbols/search', {
        offset,
        prefix: stockSymbol,
      });
      console.log(equitySymbols);
      // return keyBy<IEquitySymbol>(equitySymbols, 'symbol')[
      //   stockSymbol.toUpperCase()
      // ];
      // const some = equitySymbols.find(
      //   symb => symb.symbol === stockSymbol.toUpperCase()
      // );
      // if (!!some) {
      //   return some;
      // }
      // throw new Error("Can't find symbol");
    } catch (error) {
      console.error(error.message);
      // throw new Error(error.message);
    }
  }
  // ? async method _accountApi<T>
  // Method that appends the set account to
  // the API calls so all calls are made */

/*
!! private ++++++++++++++++++++++++++++++++++++++++++++*/
/* private async _getTime(): Promise<string> {

  }
  // ? async method _loadKey()
  //  ,
  // otherwise uses the seedToken */

/*
!! private ++++++++++++++++++++++++++++++++++++++++++++*/
// ?   private _rangeValidation(rangeOptions: TimeRange = {})
// used to validate range of start and end dates and setting
// a 30 day default value */
/*
!! private ++++++++++++++++++++++++++++++++++++++++++++*/
/* private _rangeValidation(rangeOptions: TimeRange = {}): Optionals {
    if (rangeOptions.startTime && !moment(rangeOptions.startTime).isValid()) {
      throw new Error('start_time_invalid');
    }
    if (rangeOptions.endTime && !moment(rangeOptions.endTime).isValid()) {
      throw new Error('end_time_invalid');
    }
    const startTime = rangeOptions.startTime
      ? moment(rangeOptions.startTime).toISOString()
      : moment()
          .startOf('day')
          .subtract(30, 'days')
          .toISOString();
    const endTime = rangeOptions.endTime
      ? moment(rangeOptions.endTime).toISOString()
      : moment().toISOString();
    return { startTime, endTime, ...rangeOptions };
  }
 */
