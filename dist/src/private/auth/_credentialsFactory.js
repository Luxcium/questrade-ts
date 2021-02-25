"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._credentialsFactory = void 0;
const tslib_1 = require("tslib");
const side_effects_1 = require("../../resources/side-effects");
const _getAccounts_1 = require("../api/AccountsCalls/_getAccounts/_getAccounts");
const _getServerTime_1 = require("../api/AccountsCalls/_getServerTime/_getServerTime");
const routes_1 = require("../routes");
const _getPrimaryAccountNumber_1 = require("./_getPrimaryAccountNumber");
const xx_http_auth_xx_1 = require("./xx-http-auth-xx");
/** provide: a token string THEN GET: a 'Promise<Credentials>' */
function _credentialsFactory(apiOptions, apiCallQ, proxyFactory) {
    var _a, _b;
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        let credentials, proxy;
        if (proxyFactory != null) {
            proxy = proxyFactory();
            credentials = yield (proxy.oAuthHttpCredentials === true
                ? xx_http_auth_xx_1._oAuthHttp(apiOptions, proxy)
                : xx_http_auth_xx_1._oAuthHttp(apiOptions, null));
        }
        else {
            // proxy does not exist (is undefined or null) will use undefined
            proxy = null;
            credentials = yield xx_http_auth_xx_1._oAuthHttp(apiOptions);
        }
        try {
            //
            const accounts = yield _getAccounts_1._getAccounts(routes_1._clientGetApi(credentials, apiCallQ, proxy))();
            const time = yield _getServerTime_1._getServerTime(routes_1._clientGetApi(credentials, apiCallQ, proxy))();
            const timZoneOffset = new Date(time).getTimezoneOffset();
            const timZone = -1 * 60 * 1000 * timZoneOffset;
            const serverTime = new Date(time).getTime();
            const expireAt = serverTime + credentials.expiresIn * 1000;
            credentials.expiresAt = new Date(expireAt).toLocaleTimeString();
            credentials.tokenExpiration = new Date(timZone + expireAt);
            credentials.expiresAtRaw = expireAt;
            credentials.serverTime = new Date(timZone + serverTime);
            credentials.serverTimeRaw = serverTime;
            credentials.accountNumber = _getPrimaryAccountNumber_1._getPrimaryAccountNumber(accounts);
            credentials.expiresAt_ = new Date((_a = credentials.expiresAtRaw) !== null && _a !== void 0 ? _a : 0).toLocaleTimeString();
            credentials.serverTime_ = new Date((_b = credentials.serverTimeRaw) !== null && _b !== void 0 ? _b : 0).toLocaleTimeString();
            if (credentials.accountNumber !== '00000000') {
                void side_effects_1.infolog(` Questrade Server ${time}\n`, { Status: 'ready', time }, '\n\n');
            }
            else {
                void side_effects_1.infolog('\n🧐\n🤡 MOCK Server Time:   ', new Date().toISOString(), '\n🍦 Status: MOCKING!!!\n🤨');
            }
        }
        catch (error) {
            void side_effects_1.errorlog(error);
            void side_effects_1.infolog(credentials.toValue());
            throw new Error('_oAuth Error getting credentials in _credentialsFactory');
        }
        return credentials;
    });
}
exports._credentialsFactory = _credentialsFactory;
side_effects_1.echo(`${__dirname}:${__filename}`);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX2NyZWRlbnRpYWxzRmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9wcml2YXRlL2F1dGgvX2NyZWRlbnRpYWxzRmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsK0RBQXVFO0FBRXZFLGlGQUE4RTtBQUM5RSx1RkFBb0Y7QUFFcEYsc0NBQTBDO0FBQzFDLHlFQUFzRTtBQUN0RSx1REFBK0M7QUFFL0MsaUVBQWlFO0FBQ2pFLFNBQWUsbUJBQW1CLENBQ2hDLFVBQXNCLEVBQ3RCLFFBQW1CLEVBRW5CLFlBQTJDOzs7UUFFM0MsSUFBSSxXQUF3QixFQUFFLEtBQTJCLENBQUM7UUFFMUQsSUFBSSxZQUFZLElBQUksSUFBSSxFQUFFO1lBQ3hCLEtBQUssR0FBRyxZQUFZLEVBQUUsQ0FBQztZQUN2QixXQUFXLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsS0FBSyxJQUFJO2dCQUN0RCxDQUFDLENBQUMsNEJBQVUsQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDO2dCQUMvQixDQUFDLENBQUMsNEJBQVUsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztTQUNuQzthQUFNO1lBQ0wsaUVBQWlFO1lBQ2pFLEtBQUssR0FBRyxJQUFJLENBQUM7WUFDYixXQUFXLEdBQUcsTUFBTSw0QkFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQzVDO1FBRUQsSUFBSTtZQUNGLEVBQUU7WUFDRixNQUFNLFFBQVEsR0FBRyxNQUFNLDJCQUFZLENBQ2pDLHNCQUFhLENBQUMsV0FBVyxFQUFFLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FDNUMsRUFBRSxDQUFDO1lBRUosTUFBTSxJQUFJLEdBQUcsTUFBTSwrQkFBYyxDQUMvQixzQkFBYSxDQUFDLFdBQVcsRUFBRSxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQzVDLEVBQUUsQ0FBQztZQUVKLE1BQU0sYUFBYSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLGlCQUFpQixFQUFFLENBQUM7WUFDekQsTUFBTSxPQUFPLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksR0FBRyxhQUFhLENBQUM7WUFDL0MsTUFBTSxVQUFVLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDNUMsTUFBTSxRQUFRLEdBQUcsVUFBVSxHQUFHLFdBQVcsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1lBRTNELFdBQVcsQ0FBQyxTQUFTLEdBQUcsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztZQUNoRSxXQUFXLENBQUMsZUFBZSxHQUFHLElBQUksSUFBSSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUMsQ0FBQztZQUMzRCxXQUFXLENBQUMsWUFBWSxHQUFHLFFBQVEsQ0FBQztZQUNwQyxXQUFXLENBQUMsVUFBVSxHQUFHLElBQUksSUFBSSxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUMsQ0FBQztZQUN4RCxXQUFXLENBQUMsYUFBYSxHQUFHLFVBQVUsQ0FBQztZQUN2QyxXQUFXLENBQUMsYUFBYSxHQUFHLG1EQUF3QixDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQy9ELFdBQVcsQ0FBQyxVQUFVLEdBQUcsSUFBSSxJQUFJLE9BQy9CLFdBQVcsQ0FBQyxZQUFZLG1DQUFJLENBQUMsQ0FDOUIsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1lBQ3ZCLFdBQVcsQ0FBQyxXQUFXLEdBQUcsSUFBSSxJQUFJLE9BQ2hDLFdBQVcsQ0FBQyxhQUFhLG1DQUFJLENBQUMsQ0FDL0IsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1lBRXZCLElBQUksV0FBVyxDQUFDLGFBQWEsS0FBSyxVQUFVLEVBQUU7Z0JBQzVDLEtBQUssc0JBQU8sQ0FDVixxQkFBcUIsSUFBSSxJQUFJLEVBQzdCLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsRUFDekIsTUFBTSxDQUNQLENBQUM7YUFDSDtpQkFBTTtnQkFDTCxLQUFLLHNCQUFPLENBQ1YsK0JBQStCLEVBQy9CLElBQUksSUFBSSxFQUFFLENBQUMsV0FBVyxFQUFFLEVBRXhCLDZCQUE2QixDQUM5QixDQUFDO2FBQ0g7U0FDRjtRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ2QsS0FBSyx1QkFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3JCLEtBQUssc0JBQU8sQ0FBVSxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztZQUM3QyxNQUFNLElBQUksS0FBSyxDQUFDLHlEQUF5RCxDQUFDLENBQUM7U0FDNUU7UUFFRCxPQUFPLFdBQVcsQ0FBQzs7Q0FDcEI7QUFFUSxrREFBbUI7QUFFNUIsbUJBQUksQ0FBQyxHQUFHLFNBQVMsSUFBSSxVQUFVLEVBQUUsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZWNobywgZXJyb3Jsb2csIGluZm9sb2cgfSBmcm9tICcuLi8uLi9yZXNvdXJjZXMvc2lkZS1lZmZlY3RzJztcbmltcG9ydCB0eXBlIHsgQXBpT3B0aW9ucywgQ3JlZGVudGlhbHMsIFByb3h5RmFjdG9yeV8gfSBmcm9tICcuLi8uLi90eXBlc2NyaXB0JztcbmltcG9ydCB7IF9nZXRBY2NvdW50cyB9IGZyb20gJy4uL2FwaS9BY2NvdW50c0NhbGxzL19nZXRBY2NvdW50cy9fZ2V0QWNjb3VudHMnO1xuaW1wb3J0IHsgX2dldFNlcnZlclRpbWUgfSBmcm9tICcuLi9hcGkvQWNjb3VudHNDYWxscy9fZ2V0U2VydmVyVGltZS9fZ2V0U2VydmVyVGltZSc7XG5pbXBvcnQgdHlwZSB7IEFwaUNhbGxRXyB9IGZyb20gJy4uL2NvcmUvbmV4dC1yYXRlLWxpbWl0ZXIvcXVldWUnO1xuaW1wb3J0IHsgX2NsaWVudEdldEFwaSB9IGZyb20gJy4uL3JvdXRlcyc7XG5pbXBvcnQgeyBfZ2V0UHJpbWFyeUFjY291bnROdW1iZXIgfSBmcm9tICcuL19nZXRQcmltYXJ5QWNjb3VudE51bWJlcic7XG5pbXBvcnQgeyBfb0F1dGhIdHRwIH0gZnJvbSAnLi94eC1odHRwLWF1dGgteHgnO1xuXG4vKiogcHJvdmlkZTogYSB0b2tlbiBzdHJpbmcgVEhFTiBHRVQ6IGEgJ1Byb21pc2U8Q3JlZGVudGlhbHM+JyAqL1xuYXN5bmMgZnVuY3Rpb24gX2NyZWRlbnRpYWxzRmFjdG9yeShcbiAgYXBpT3B0aW9uczogQXBpT3B0aW9ucyxcbiAgYXBpQ2FsbFE6IEFwaUNhbGxRXyxcblxuICBwcm94eUZhY3Rvcnk/OiAoKCkgPT4gUHJveHlGYWN0b3J5XykgfCBudWxsLFxuKSB7XG4gIGxldCBjcmVkZW50aWFsczogQ3JlZGVudGlhbHMsIHByb3h5OiBQcm94eUZhY3RvcnlfIHwgbnVsbDtcblxuICBpZiAocHJveHlGYWN0b3J5ICE9IG51bGwpIHtcbiAgICBwcm94eSA9IHByb3h5RmFjdG9yeSgpO1xuICAgIGNyZWRlbnRpYWxzID0gYXdhaXQgKHByb3h5Lm9BdXRoSHR0cENyZWRlbnRpYWxzID09PSB0cnVlXG4gICAgICA/IF9vQXV0aEh0dHAoYXBpT3B0aW9ucywgcHJveHkpXG4gICAgICA6IF9vQXV0aEh0dHAoYXBpT3B0aW9ucywgbnVsbCkpO1xuICB9IGVsc2Uge1xuICAgIC8vIHByb3h5IGRvZXMgbm90IGV4aXN0IChpcyB1bmRlZmluZWQgb3IgbnVsbCkgd2lsbCB1c2UgdW5kZWZpbmVkXG4gICAgcHJveHkgPSBudWxsO1xuICAgIGNyZWRlbnRpYWxzID0gYXdhaXQgX29BdXRoSHR0cChhcGlPcHRpb25zKTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgLy9cbiAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IF9nZXRBY2NvdW50cyhcbiAgICAgIF9jbGllbnRHZXRBcGkoY3JlZGVudGlhbHMsIGFwaUNhbGxRLCBwcm94eSksXG4gICAgKSgpO1xuXG4gICAgY29uc3QgdGltZSA9IGF3YWl0IF9nZXRTZXJ2ZXJUaW1lKFxuICAgICAgX2NsaWVudEdldEFwaShjcmVkZW50aWFscywgYXBpQ2FsbFEsIHByb3h5KSxcbiAgICApKCk7XG5cbiAgICBjb25zdCB0aW1ab25lT2Zmc2V0ID0gbmV3IERhdGUodGltZSkuZ2V0VGltZXpvbmVPZmZzZXQoKTtcbiAgICBjb25zdCB0aW1ab25lID0gLTEgKiA2MCAqIDEwMDAgKiB0aW1ab25lT2Zmc2V0O1xuICAgIGNvbnN0IHNlcnZlclRpbWUgPSBuZXcgRGF0ZSh0aW1lKS5nZXRUaW1lKCk7XG4gICAgY29uc3QgZXhwaXJlQXQgPSBzZXJ2ZXJUaW1lICsgY3JlZGVudGlhbHMuZXhwaXJlc0luICogMTAwMDtcblxuICAgIGNyZWRlbnRpYWxzLmV4cGlyZXNBdCA9IG5ldyBEYXRlKGV4cGlyZUF0KS50b0xvY2FsZVRpbWVTdHJpbmcoKTtcbiAgICBjcmVkZW50aWFscy50b2tlbkV4cGlyYXRpb24gPSBuZXcgRGF0ZSh0aW1ab25lICsgZXhwaXJlQXQpO1xuICAgIGNyZWRlbnRpYWxzLmV4cGlyZXNBdFJhdyA9IGV4cGlyZUF0O1xuICAgIGNyZWRlbnRpYWxzLnNlcnZlclRpbWUgPSBuZXcgRGF0ZSh0aW1ab25lICsgc2VydmVyVGltZSk7XG4gICAgY3JlZGVudGlhbHMuc2VydmVyVGltZVJhdyA9IHNlcnZlclRpbWU7XG4gICAgY3JlZGVudGlhbHMuYWNjb3VudE51bWJlciA9IF9nZXRQcmltYXJ5QWNjb3VudE51bWJlcihhY2NvdW50cyk7XG4gICAgY3JlZGVudGlhbHMuZXhwaXJlc0F0XyA9IG5ldyBEYXRlKFxuICAgICAgY3JlZGVudGlhbHMuZXhwaXJlc0F0UmF3ID8/IDAsXG4gICAgKS50b0xvY2FsZVRpbWVTdHJpbmcoKTtcbiAgICBjcmVkZW50aWFscy5zZXJ2ZXJUaW1lXyA9IG5ldyBEYXRlKFxuICAgICAgY3JlZGVudGlhbHMuc2VydmVyVGltZVJhdyA/PyAwLFxuICAgICkudG9Mb2NhbGVUaW1lU3RyaW5nKCk7XG5cbiAgICBpZiAoY3JlZGVudGlhbHMuYWNjb3VudE51bWJlciAhPT0gJzAwMDAwMDAwJykge1xuICAgICAgdm9pZCBpbmZvbG9nPHVua25vd24+KFxuICAgICAgICBgIFF1ZXN0cmFkZSBTZXJ2ZXIgJHt0aW1lfVxcbmAsXG4gICAgICAgIHsgU3RhdHVzOiAncmVhZHknLCB0aW1lIH0sXG4gICAgICAgICdcXG5cXG4nLFxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdm9pZCBpbmZvbG9nPHVua25vd24+KFxuICAgICAgICAnXFxu8J+nkFxcbvCfpKEgTU9DSyBTZXJ2ZXIgVGltZTogICAnLFxuICAgICAgICBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXG5cbiAgICAgICAgJ1xcbvCfjaYgU3RhdHVzOiBNT0NLSU5HISEhXFxu8J+kqCcsXG4gICAgICApO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICB2b2lkIGVycm9ybG9nKGVycm9yKTtcbiAgICB2b2lkIGluZm9sb2c8dW5rbm93bj4oY3JlZGVudGlhbHMudG9WYWx1ZSgpKTtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ19vQXV0aCBFcnJvciBnZXR0aW5nIGNyZWRlbnRpYWxzIGluIF9jcmVkZW50aWFsc0ZhY3RvcnknKTtcbiAgfVxuXG4gIHJldHVybiBjcmVkZW50aWFscztcbn1cblxuZXhwb3J0IHsgX2NyZWRlbnRpYWxzRmFjdG9yeSB9O1xuXG5lY2hvKGAke19fZGlybmFtZX06JHtfX2ZpbGVuYW1lfWApO1xuIl19