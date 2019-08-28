/** @format */
import {
  axios,
  AxiosRequestConfig,
  AxiosResponse,
  EE,
  Methode,
  oAuthLogic,
} from '.';
import {
  AcountNumber,
  IAccount,
  IAccounts,
  IHeaders,
  IMarket,
  IMarketsResponse,
  Optionals,
  QuestradeAPIOptions,
  Time,
  void_0,
} from '../core/types';
import { Credentials } from './private/Credentials';
import { validateAuthOptions } from './private/validateAuthOptions';
export class QuestradeClient extends EE implements Credentials {
  /**  Gets name of the file where the refreshToken is stored */
  public get keyFile() {
    return this._keyFile || `${this.keyDir}/${this._seedToken}`;
  }
  public set keyFile(key: string) {
    this._keyFile = key;
    // return this._keyFile || `${this.keyDir}/${this._seedToken}`;
  }
  public get qtMarketsNames() {
    return this._qtMarketsNames;
  }
  public get seedToken() {
    return this._seedToken;
  }
  public set seedToken(seed: string) {
    this._seedToken = seed;
  }
  public get qtAccountNumber() {
    this.getPrimaryAccountNumber();
    return this.accountNumber;
  }

  public accounts: any;
  public markets: any;
  public symbols: any;
  public token: any;
  public _seedToken: string;
  public accessToken: string;
  public accountNumber: string | number;
  public apiServer: string;
  public apiUrl: string;
  public apiVersion: string;
  public authUrl: string;
  public expiresIn: number;
  public keyDir: string;
  public _keyFile: string;
  public practice: boolean;
  public refreshToken: string;
  public tokenType: string;
  public _qtMarketsNames: any;

  public constructor(options: QuestradeAPIOptions) {
    super();
    this.accountNumber = '';
    this.apiVersion = 'v1';
    this.keyDir = './keys';
    this._keyFile = '';
    this.practice = false;
    this._seedToken = '';
    this.expiresIn = 0;
    this.tokenType = '';
    this.refreshToken = '';
    this.accessToken = '';
    this.apiUrl = '';
    this.apiServer = '';
    validateAuthOptions(this, options);

    // if (typeof options === 'undefined' || options === undefined) {
    //   throw new Error('questrade_missing_api_key or options');
    // }
    // if (typeof options === 'string' && options.indexOf('/') !== -1) {
    //   this._keyFile = options;
    // }
    // if (typeof options === 'string' && options.indexOf('/') === -1) {
    //   this._seedToken = options;
    // }
    // if (typeof options === 'object') {
    //   this.practice = !!options.practiceAccount;
    //   this.keyDir = options.keyDir || './keys';
    //   this.apiVersion = options.apiVersion || 'v1';
    //   this._keyFile = options.keyFile || '';
    //   this._seedToken = options.seedToken || '';
    //   this.accountNumber = `${options.account}` || '';
    // }

    this.authUrl = this.practice
      ? 'https://practicelogin.q.com'
      : 'https://login.questrade.com';

    // MAIN CLASS CONSTRUCTOR FUNCTION STAR
    const MAIN: void_0 = __ => {
      /**
       * <-- !!START OF SECTION !! -->
       * <-- ASYNC MAIN FUNCTION ()-->
       */

      // !!
      // // *below is the 'MAIN' anonymous async IIFE declaration with the
      // // *'this' keyword as self
      // (async (self: this): Promise<this> => {
      //   try {
      //     let refreshToken: string = self.seedToken || '';
      //     try {
      //       if (!!self._keyFile) {
      //         sync(dirname(self._keyFile));
      //       } else {
      //         sync(self.keyDir);
      //       }
      //       refreshToken = readFileSync(self.keyFile, 'utf8');
      //     } catch (_) {
      //       await access(self.keyFile, constants.F_OK, async none => {
      //         if (none) {
      //           await writeFileSync(self.keyFile, self.seedToken, {
      //             encoding: 'utf8',
      //           });
      //         }
      //       });
      //     }
      //     const { data: credentials } = await self._axiosClient<ICreds>({
      //       url: `${self.authUrl}/oauth2/token`,
      //       params: {
      //         grant_type: 'refresh_token',
      //         refresh_token: refreshToken,
      //       },
      //     });
      //     self.accessToken = credentials.access_token;
      //     self.apiServer = credentials.api_server;
      //     self.expiresIn = credentials.expires_in;
      //     self.refreshToken = credentials.refresh_token;
      //     self.tokenType = credentials.token_type;
      //     self.apiUrl = `${self.apiServer}${self.apiVersion}`;
      //     writeFileSync(self.keyFile, self.refreshToken, 'utf8');
      //     await self.getPrimaryAccountNumber();
      //     await self.qtGetMarketsNames();
      //   } catch (mainError) {
      //     console.error(mainError.message);
      //     self.emit('error', mainError);
      //     throw new Error(mainError.message);
      //   }
      //   return self;
      //   // *Above is the 'MAIN' anonymous async IIFE declaration
      //   // *Below is the call to anonymous async IIFE declared above with the
      //   // *'this' keyword as self
      // })(this)
      // !!
      oAuthLogic(this)
        .then((self: any) => {
          self
            .qtGetTime()
            .then((time: any) => {
              console.info('Server Time:', new Date(time).toLocaleString());
              console.info(
                'self',
                self.tokenType,
                'token expire in',
                self.expiresIn / 60,
                'minutes'
              );
              self.emit('ready', self);
            })
            .catch((err: Error) => {
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
            'Error calling main() from QuestradeClient class in constructor'
          );
        });
      return void 0 && __;
      /**
       * <-- ASYNC MAIN FUNCTION ()-->
       * <-- !! END OF SECTION! !! -->
       */
    }; // MAIN CLASS CONSTRUCTOR FUNCTION END

    MAIN(void 0); // IMMEDIATELY INVOKED FUNCTION MAIN

    /**
     * <-- !! END OF CONSTRUCTOR SECTION! !! -->
     */
    // !! ***********************************************************
  }

  public async qtGetAPI<T>(endpoint: string): Promise<T | null> {
    let data: T | null = null;
    data = await this._api<T>(endpoint, 'GET');
    return data;
  }
  // public async qtGetSymbolID(stockSymbol: string): Promise<T | null> {
  //   // let data: T | null = null;
  //   const data = await this._api<T>(endpoint, 'GET');
  //   return data;
  // }
  public async qtGetTime() {
    try {
      const { time } = await this._api<Time>('/time');
      return time;
    } catch (error) {
      throw new Error(error.message);
    }
  }
  public async getAccounts(): Promise<IAccount[]> {
    try {
      const { accounts } = await this._api<IAccounts>('/accounts');
      return accounts;
    } catch (error) {
      console.error(error.message);
      throw new Error(error.message);
    }
  }
  public async qtGetMarkets(): Promise<IMarket[]> {
    return ((await this.qtGetAPI('/markets')) as IMarketsResponse).markets;
  }
  public async qtGetMarketsNames(): Promise<string[]> {
    this._qtMarketsNames = (await this.qtGetMarkets()).map(
      item => item.name as string
    );
    return this.qtMarketsNames;
  }
  public async qtGetMarket(marketName: string): Promise<IMarket> {
    const markets = ((await this.qtGetAPI(
      '/markets'
    )) as IMarketsResponse).markets.filter(item => item.name === marketName);
    return markets[0] || null;
  }
  public async getPrimaryAccountNumber(): Promise<AcountNumber> {
    const accounts = await this.getAccounts();
    if (accounts.length < 1) {
      throw new Error('No account number found');
    }
    // if only one retur the only one ...
    if (accounts.length === 1) {
      this.accountNumber = accounts[0].number;
      return this.accountNumber;
    }
    // if more than one return the first one marked primary
    const primary = accounts.filter(account => account.isPrimary);
    if (primary.length > 0) {
      this.accountNumber = primary[0].number;
      return this.accountNumber;
    }
    // if none marked primary and more than one return first one
    this.accountNumber = accounts[0].number;
    return this.accountNumber;
  }

  /*
  !! PRIVATE _access **************************/
  /** Validate existence of a file before writing it */
  // private async _writeAccess(path: string, seedToken: string) {
  //   await access(path, constants.F_OK, async none => {
  //     if (none) {
  //       console.info(none);
  //       try {
  //         const options: WriteFileOptions = {
  //           encoding: 'utf8',
  //           mode: 0o666,
  //           flag: 'w',
  //         };
  //         await writeFile(path, seedToken, options, err => {
  //           throw err;
  //         }); // path, seedToken, 'utf8');
  //       } catch (writeError) {
  //         console.error(writeError);
  //         throw writeError;
  //       }
  //     }
  //   });
  // }

  /*
  !! PRIVATE _axiosClient<T> **************************/
  /** Connect the api using Axios as the client */
  private async _axiosClient<T>(
    axiosConfig: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    try {
      const response: AxiosResponse<T> = await axios(axiosConfig);
      // validating response.data is not empty string null or undefined
      if (!response.data) {
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
    let data: T;
    try {
      const response = await this._axiosClient<T>({
        url: this.apiUrl + endpoint,
        params:
          typeof options !== 'undefined' && typeof options === 'object'
            ? options
            : {},
        method,
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
          ...additionalHeaders,
        },
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
  // private async _loadKey(): Promise<this> {
  //   let refreshToken: string = this.seedToken || '';
  //   try {
  //     if (!!this._keyFile) {
  //       sync(dirname(this._keyFile));
  //     } else {
  //       sync(this._keyDir);
  //     }
  //     refreshToken = readFileSync(this.keyFile, 'utf8');
  //   } catch (_) {
  //     await this._writeAccess(this.keyFile, this.seedToken);
  //   }
  //   this._refreshToken = refreshToken;
  //   return this;
  // }

  /*
  !! PRIVATE _SAVEKEY **************************/
  /**  Saves the latest refreshToken in the file name after the seedToken */
  // private _saveKey({
  //   access_token,
  //   api_server,
  //   expires_in,
  //   refresh_token,
  //   token_type,
  // }: ICreds): this {
  //   this._accessToken = access_token;
  //   this._apiServer = api_server;
  //   this._expiresIn = expires_in;
  //   this._refreshToken = refresh_token;
  //   this._tokenType = token_type;
  //   this._apiUrl = `${this._apiServer}${this._apiVersion}`;

  //   writeFileSync(this.keyFile, this._refreshToken, 'utf8');

  //   return this;
  // }

  /*
  !! PRIVATE _ACCOUNTAPI **************************/
  /**  Makes the request to Questrade for Accouns specific transactions */
  // private async _accountApi<T>(
  //   endpoint?: string,
  //   method: Methode = 'GET',
  //   options?: Optionals
  // ) {
  //   if (!this._accountNumber) {
  //     throw new Error('no_account_selected');
  //   }
  //   return this._api<T>(
  //     `/accounts/${this._accountNumber}${endpoint}`,
  //     method,
  //     options,
  //     { location: this._accountNumber }
  //   );
  // }
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
