/*
//   !! PRIVATE _SAVEKEY **************************/
//   /**  Saves the latest refreshToken in the file name after the seedToken */
//   export async function saveKey(){
//   return ( async function _saveKey({
//     access_token,
//     api_server,
//     expires_in,
//     refresh_token,
//     token_type,
//   }: ICreds): this {
//     this._accessToken = access_token;
//     this._apiServer = api_server;
//     this._expiresIn = expires_in;
//     this._refreshToken = refresh_token;
//     this._tokenType = token_type;
//     this._apiUrl = `${this._apiServer}${this._apiVersion}`;

//     writeFileSync(this.keyFile, this._refreshToken, 'utf8');

//     return this;
//   })()}
