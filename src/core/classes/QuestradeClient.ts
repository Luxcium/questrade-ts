// -------------------------------------------------------------------------- //
// - Copyright (c) Benjamin Vincent Kasapoglu (Luxcium). All rights reserved.
// - Licensed under the MIT License.
// - See License.txt in the project root for license information.
// - ------------------------------------------------------------------------ //

   async function qtGetAPI<T>(endpoint: string): Promise<T | null> {
    let data: T | null = null;
    data = await this._api<T>(endpoint, 'GET');
    return data;
  }

  async function qtGetSymbolID(stockSymbol: string): Promise<T | null> {
    // let data: T | null = null;
    const data = await this._api<T>(endpoint, 'GET');
    return data;
  }


  async function qtGetTime() {
    try {
      const { time } = await this._api<Time>('/time');
      return time;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async function getAccounts(): Promise<IAccount[]> {
    try {
      const { accounts } = await this._api<IAccounts>('/accounts');
      return accounts;
    } catch (error) {
      console.error(error.message);
      throw new Error(error.message);
    }
  }

  async function qtGetMarkets(): Promise<IMarket[]> {
    return ((await this.qtGetAPI('/markets')) as IMarketsResponse).markets;
  }




  async function _writeAccess(path: string, seedToken: string) {

    //   await access(path, constants.F_OK, async function none => {
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




  async function _accountApi<T>(
    endpoint?: string,
    method: Methode = 'GET',
    options?: Optionals
  ) {
    if (!this._accountNumber) {
      throw new Error('no_account_selected');
    }
    return this._api<T>(
      `/accounts/${this._accountNumber}${endpoint}`,
      method,
      options,
      { location: this._accountNumber }
    );
  }
  async function _api<T>(
    endpoint: string,
    method: Methode = 'GET',
    options?: Optionals,
    additionalHeaders?: IHeaders
  ): Promise<T> {

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
// -------------------------------------------------------------------------- //
