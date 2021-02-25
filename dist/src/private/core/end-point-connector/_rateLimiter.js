"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._rateLimiter = void 0;
const tslib_1 = require("tslib");
const next_rate_limiter_1 = require("../next-rate-limiter");
const requestPerSecondLimit_1 = require("../requestPerSecondLimit");
function _rateLimiter(configs) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        // function limitingRequest<T>(fn: Function, hertz?: number): Promise<T>
        const { config, httpClient, maxPerSeconds, possiblePerSeconds, useNewRateLimiter, credentials, } = configs;
        if (possiblePerSeconds <= (maxPerSeconds || 20) && possiblePerSeconds > 0) {
            if (useNewRateLimiter) {
                return next_rate_limiter_1.newRequestLimiter({
                    config,
                    credentials,
                    httpClient,
                });
            }
            // const requestLimiter = limitingRequest; //(possiblePerSeconds); ClientPromise<R>
            const httpCall = () => tslib_1.__awaiter(this, void 0, void 0, function* () { return httpClient(config); });
            return requestPerSecondLimit_1.limitingRequest(httpCall, possiblePerSeconds);
        }
        // iNFO: httpClient: <R>(conf: ClientRequestConfig) => ClientPromise<R>     //-!
        return httpClient(config);
    });
}
exports._rateLimiter = _rateLimiter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX3JhdGVMaW1pdGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL3ByaXZhdGUvY29yZS9lbmQtcG9pbnQtY29ubmVjdG9yL19yYXRlTGltaXRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBS0EsNERBQXlEO0FBQ3pELG9FQUEyRDtBQUUzRCxTQUFlLFlBQVksQ0FBSSxPQU85Qjs7UUFDQyx3RUFBd0U7UUFDeEUsTUFBTSxFQUNKLE1BQU0sRUFDTixVQUFVLEVBQ1YsYUFBYSxFQUNiLGtCQUFrQixFQUNsQixpQkFBaUIsRUFDakIsV0FBVyxHQUNaLEdBQUcsT0FBTyxDQUFDO1FBRVosSUFBSSxrQkFBa0IsSUFBSSxDQUFDLGFBQWEsSUFBSSxFQUFFLENBQUMsSUFBSSxrQkFBa0IsR0FBRyxDQUFDLEVBQUU7WUFDekUsSUFBSSxpQkFBaUIsRUFBRTtnQkFDckIsT0FBTyxxQ0FBaUIsQ0FBSTtvQkFDMUIsTUFBTTtvQkFDTixXQUFXO29CQUNYLFVBQVU7aUJBQ1gsQ0FBQyxDQUFDO2FBQ0o7WUFFRCxtRkFBbUY7WUFDbkYsTUFBTSxRQUFRLEdBQTJCLEdBQVMsRUFBRSx3REFBQyxPQUFBLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQSxHQUFBLENBQUM7WUFFeEUsT0FBTyx1Q0FBZSxDQUFDLFFBQVEsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1NBQ3REO1FBRUQsZ0ZBQWdGO1FBQ2hGLE9BQU8sVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzVCLENBQUM7Q0FBQTtBQUVRLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUge1xuICBDbGllbnRQcm9taXNlLFxuICBDbGllbnRSZXF1ZXN0Q29uZmlnLFxufSBmcm9tICcuLi8uLi8uLi9yZXNvdXJjZXMvc2lkZS1lZmZlY3RzL3R5cGVzJztcbmltcG9ydCB0eXBlIHsgQ3JlZGVudGlhbHMgfSBmcm9tICcuLi8uLi8uLi90eXBlc2NyaXB0JztcbmltcG9ydCB7IG5ld1JlcXVlc3RMaW1pdGVyIH0gZnJvbSAnLi4vbmV4dC1yYXRlLWxpbWl0ZXInO1xuaW1wb3J0IHsgbGltaXRpbmdSZXF1ZXN0IH0gZnJvbSAnLi4vcmVxdWVzdFBlclNlY29uZExpbWl0JztcblxuYXN5bmMgZnVuY3Rpb24gX3JhdGVMaW1pdGVyPFI+KGNvbmZpZ3M6IHtcbiAgaHR0cENsaWVudDogKGNvbmY6IENsaWVudFJlcXVlc3RDb25maWcpID0+IENsaWVudFByb21pc2U8YW55PjtcbiAgY29uZmlnOiBDbGllbnRSZXF1ZXN0Q29uZmlnO1xuICBwb3NzaWJsZVBlclNlY29uZHM6IG51bWJlcjtcbiAgbWF4UGVyU2Vjb25kcz86IG51bWJlciB8IG51bGw7XG4gIHVzZU5ld1JhdGVMaW1pdGVyOiBib29sZWFuO1xuICBjcmVkZW50aWFscz86IENyZWRlbnRpYWxzO1xufSkgLyogOiBDbGllbnRQcm9taXNlPFI+ICovIHtcbiAgLy8gZnVuY3Rpb24gbGltaXRpbmdSZXF1ZXN0PFQ+KGZuOiBGdW5jdGlvbiwgaGVydHo/OiBudW1iZXIpOiBQcm9taXNlPFQ+XG4gIGNvbnN0IHtcbiAgICBjb25maWcsXG4gICAgaHR0cENsaWVudCxcbiAgICBtYXhQZXJTZWNvbmRzLFxuICAgIHBvc3NpYmxlUGVyU2Vjb25kcyxcbiAgICB1c2VOZXdSYXRlTGltaXRlcixcbiAgICBjcmVkZW50aWFscyxcbiAgfSA9IGNvbmZpZ3M7XG5cbiAgaWYgKHBvc3NpYmxlUGVyU2Vjb25kcyA8PSAobWF4UGVyU2Vjb25kcyB8fCAyMCkgJiYgcG9zc2libGVQZXJTZWNvbmRzID4gMCkge1xuICAgIGlmICh1c2VOZXdSYXRlTGltaXRlcikge1xuICAgICAgcmV0dXJuIG5ld1JlcXVlc3RMaW1pdGVyPFI+KHtcbiAgICAgICAgY29uZmlnLFxuICAgICAgICBjcmVkZW50aWFscyxcbiAgICAgICAgaHR0cENsaWVudCxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIGNvbnN0IHJlcXVlc3RMaW1pdGVyID0gbGltaXRpbmdSZXF1ZXN0OyAvLyhwb3NzaWJsZVBlclNlY29uZHMpOyBDbGllbnRQcm9taXNlPFI+XG4gICAgY29uc3QgaHR0cENhbGw6ICgpID0+IENsaWVudFByb21pc2U8Uj4gPSBhc3luYyAoKSA9PiBodHRwQ2xpZW50KGNvbmZpZyk7XG5cbiAgICByZXR1cm4gbGltaXRpbmdSZXF1ZXN0KGh0dHBDYWxsLCBwb3NzaWJsZVBlclNlY29uZHMpO1xuICB9XG5cbiAgLy8gaU5GTzogaHR0cENsaWVudDogPFI+KGNvbmY6IENsaWVudFJlcXVlc3RDb25maWcpID0+IENsaWVudFByb21pc2U8Uj4gICAgIC8vLSFcbiAgcmV0dXJuIGh0dHBDbGllbnQoY29uZmlnKTtcbn1cblxuZXhwb3J0IHsgX3JhdGVMaW1pdGVyIH07XG4iXX0=