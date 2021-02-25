"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._updateCredentials = void 0;
const side_effects_1 = require("../../../resources/side-effects");
const requestPerSecondLimit_1 = require("../requestPerSecondLimit");
function _updateCredentials(_config, response, credentials) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    try {
        if (credentials) {
            // iNFO: CREDENTIALS UPTADE  Block Start *********************************
            // response;
            credentials.config_ = _config;
            credentials.response_ = response;
            [, credentials.configUrl_] = `${_config.url}`.split('questrade.com/');
            credentials.fromCache = (_b = (_a = response.headers) === null || _a === void 0 ? void 0 : _a.fromCache) !== null && _b !== void 0 ? _b : false;
            credentials.fromApi = (_d = (_c = response.headers) === null || _c === void 0 ? void 0 : _c.fromApi) !== null && _d !== void 0 ? _d : true;
            credentials.proxy = (_f = (_e = response.headers) === null || _e === void 0 ? void 0 : _e.proxy) !== null && _f !== void 0 ? _f : null;
            credentials.urlTimeUTC = new Date((_h = (_g = credentials.response_.headers) === null || _g === void 0 ? void 0 : _g.date) !== null && _h !== void 0 ? _h : null);
            let maximumperseconds = 20;
            if (credentials.fromCache) {
                maximumperseconds = 21;
            }
            credentials.remainingRequests = requestPerSecondLimit_1.remainingRequests(response, maximumperseconds);
        }
    }
    catch (error_) {
        void side_effects_1.errorlog('error_:', error_.message);
        void side_effects_1.infolog("To pass tests remove 'throw' error in _httpDataEndPointConnector");
        throw new Error(error_);
    }
}
exports._updateCredentials = _updateCredentials;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX3VwZGF0ZUNyZWRlbnRpYWxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL3ByaXZhdGUvY29yZS9lbmQtcG9pbnQtY29ubmVjdG9yL191cGRhdGVDcmVkZW50aWFscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxrRUFBb0U7QUFNcEUsb0VBQTZEO0FBRTdELFNBQVMsa0JBQWtCLENBQ3pCLE9BQTRCLEVBQzVCLFFBQXdCLEVBQ3hCLFdBQXlCOztJQUV6QixJQUFJO1FBQ0YsSUFBSSxXQUFXLEVBQUU7WUFDZiwwRUFBMEU7WUFFMUUsWUFBWTtZQUNaLFdBQVcsQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1lBQzlCLFdBQVcsQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1lBQ2pDLENBQUMsRUFBRSxXQUFXLENBQUMsVUFBVSxDQUFDLEdBQUcsR0FBRyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFDdEUsV0FBVyxDQUFDLFNBQVMsZUFBRyxRQUFRLENBQUMsT0FBTywwQ0FBRSxTQUFTLG1DQUFJLEtBQUssQ0FBQztZQUM3RCxXQUFXLENBQUMsT0FBTyxlQUFHLFFBQVEsQ0FBQyxPQUFPLDBDQUFFLE9BQU8sbUNBQUksSUFBSSxDQUFDO1lBQ3hELFdBQVcsQ0FBQyxLQUFLLGVBQUcsUUFBUSxDQUFDLE9BQU8sMENBQUUsS0FBSyxtQ0FBSSxJQUFJLENBQUM7WUFDcEQsV0FBVyxDQUFDLFVBQVUsR0FBRyxJQUFJLElBQUksYUFDL0IsV0FBVyxDQUFDLFNBQVMsQ0FBQyxPQUFPLDBDQUFFLElBQUksbUNBQUksSUFBSSxDQUM1QyxDQUFDO1lBQ0YsSUFBSSxpQkFBaUIsR0FBRyxFQUFFLENBQUM7WUFFM0IsSUFBSSxXQUFXLENBQUMsU0FBUyxFQUFFO2dCQUN6QixpQkFBaUIsR0FBRyxFQUFFLENBQUM7YUFDeEI7WUFFRCxXQUFXLENBQUMsaUJBQWlCLEdBQUcseUNBQWlCLENBQy9DLFFBQVEsRUFDUixpQkFBaUIsQ0FDbEIsQ0FBQztTQUNIO0tBQ0Y7SUFBQyxPQUFPLE1BQU0sRUFBRTtRQUNmLEtBQUssdUJBQVEsQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3pDLEtBQUssc0JBQU8sQ0FDVixrRUFBa0UsQ0FDbkUsQ0FBQztRQUVGLE1BQU0sSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDekI7QUFDSCxDQUFDO0FBRVEsZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZXJyb3Jsb2csIGluZm9sb2cgfSBmcm9tICcuLi8uLi8uLi9yZXNvdXJjZXMvc2lkZS1lZmZlY3RzJztcbmltcG9ydCB0eXBlIHtcbiAgQ2xpZW50UmVxdWVzdENvbmZpZyxcbiAgQ2xpZW50UmVzcG9uc2UsXG59IGZyb20gJy4uLy4uLy4uL3Jlc291cmNlcy9zaWRlLWVmZmVjdHMvdHlwZXMnO1xuaW1wb3J0IHR5cGUgeyBDcmVkZW50aWFscyB9IGZyb20gJy4uLy4uLy4uL3R5cGVzY3JpcHQnO1xuaW1wb3J0IHsgcmVtYWluaW5nUmVxdWVzdHMgfSBmcm9tICcuLi9yZXF1ZXN0UGVyU2Vjb25kTGltaXQnO1xuXG5mdW5jdGlvbiBfdXBkYXRlQ3JlZGVudGlhbHMoXG4gIF9jb25maWc6IENsaWVudFJlcXVlc3RDb25maWcsXG4gIHJlc3BvbnNlOiBDbGllbnRSZXNwb25zZSxcbiAgY3JlZGVudGlhbHM/OiBDcmVkZW50aWFscyxcbikge1xuICB0cnkge1xuICAgIGlmIChjcmVkZW50aWFscykge1xuICAgICAgLy8gaU5GTzogQ1JFREVOVElBTFMgVVBUQURFICBCbG9jayBTdGFydCAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcblxuICAgICAgLy8gcmVzcG9uc2U7XG4gICAgICBjcmVkZW50aWFscy5jb25maWdfID0gX2NvbmZpZztcbiAgICAgIGNyZWRlbnRpYWxzLnJlc3BvbnNlXyA9IHJlc3BvbnNlO1xuICAgICAgWywgY3JlZGVudGlhbHMuY29uZmlnVXJsX10gPSBgJHtfY29uZmlnLnVybH1gLnNwbGl0KCdxdWVzdHJhZGUuY29tLycpO1xuICAgICAgY3JlZGVudGlhbHMuZnJvbUNhY2hlID0gcmVzcG9uc2UuaGVhZGVycz8uZnJvbUNhY2hlID8/IGZhbHNlO1xuICAgICAgY3JlZGVudGlhbHMuZnJvbUFwaSA9IHJlc3BvbnNlLmhlYWRlcnM/LmZyb21BcGkgPz8gdHJ1ZTtcbiAgICAgIGNyZWRlbnRpYWxzLnByb3h5ID0gcmVzcG9uc2UuaGVhZGVycz8ucHJveHkgPz8gbnVsbDtcbiAgICAgIGNyZWRlbnRpYWxzLnVybFRpbWVVVEMgPSBuZXcgRGF0ZShcbiAgICAgICAgY3JlZGVudGlhbHMucmVzcG9uc2VfLmhlYWRlcnM/LmRhdGUgPz8gbnVsbCxcbiAgICAgICk7XG4gICAgICBsZXQgbWF4aW11bXBlcnNlY29uZHMgPSAyMDtcblxuICAgICAgaWYgKGNyZWRlbnRpYWxzLmZyb21DYWNoZSkge1xuICAgICAgICBtYXhpbXVtcGVyc2Vjb25kcyA9IDIxO1xuICAgICAgfVxuXG4gICAgICBjcmVkZW50aWFscy5yZW1haW5pbmdSZXF1ZXN0cyA9IHJlbWFpbmluZ1JlcXVlc3RzKFxuICAgICAgICByZXNwb25zZSxcbiAgICAgICAgbWF4aW11bXBlcnNlY29uZHMsXG4gICAgICApO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3JfKSB7XG4gICAgdm9pZCBlcnJvcmxvZygnZXJyb3JfOicsIGVycm9yXy5tZXNzYWdlKTtcbiAgICB2b2lkIGluZm9sb2coXG4gICAgICBcIlRvIHBhc3MgdGVzdHMgcmVtb3ZlICd0aHJvdycgZXJyb3IgaW4gX2h0dHBEYXRhRW5kUG9pbnRDb25uZWN0b3JcIixcbiAgICApO1xuXG4gICAgdGhyb3cgbmV3IEVycm9yKGVycm9yXyk7XG4gIH1cbn1cblxuZXhwb3J0IHsgX3VwZGF0ZUNyZWRlbnRpYWxzIH07XG4iXX0=