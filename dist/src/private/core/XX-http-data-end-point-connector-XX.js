"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._httpDataEndPointConnector = void 0;
const tslib_1 = require("tslib");
const side_effects_1 = require("../../resources/side-effects");
const end_point_connector_1 = require("./end-point-connector");
const { getHttpClient } = side_effects_1.sideEffects;
function _httpDataEndPointConnector({ apiCallQ, config, credentials, proxy, errorlog, handlerOptions, }) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        try {
            let httpClient = (conf) => tslib_1.__awaiter(this, void 0, void 0, function* () { return getHttpClient()(conf); });
            if ((proxy === null || proxy === void 0 ? void 0 : proxy.httpDataEndPointConnector) && proxy.activate) {
                const someName = proxy.activate(handlerOptions);
                httpClient = (conf) => tslib_1.__awaiter(this, void 0, void 0, function* () { return someName(conf); });
            }
            const response = yield apiCallQ.addToQueue({
                config,
                fn: httpClient,
            });
            if (response.status !== 200) {
                // console.error('STATUS:', response.status);
                // console.error('REQUEST:', response.request);
                console.error('CONFIG:', response.config);
                console.error('HEADERS:', response.headers);
                console.error('DATA:', response.data);
                console.error('STATUS:', response.status);
                console.error('STATUSTEXT:', response.statusText);
            }
            if (response === null || response === void 0 ? void 0 : response.data) {
                end_point_connector_1._updateCredentials(config, response, credentials);
                return response.data;
            }
            end_point_connector_1._echoStatus(response, credentials);
        }
        catch (error) {
            // eRROR HANDLER: ECHO STATUS ON ERROR //-!
            throw new Error(...errorlog(`ERROR: Can't retrive data from call to API (${error.message})`));
        }
        throw new Error(...errorlog("Can't complete call to API"));
    });
}
exports._httpDataEndPointConnector = _httpDataEndPointConnector;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiWFgtaHR0cC1kYXRhLWVuZC1wb2ludC1jb25uZWN0b3ItWFguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvcHJpdmF0ZS9jb3JlL1hYLWh0dHAtZGF0YS1lbmQtcG9pbnQtY29ubmVjdG9yLVhYLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSwrREFBMkQ7QUFRM0QsK0RBQXdFO0FBR3hFLE1BQU0sRUFBRSxhQUFhLEVBQUUsR0FBRywwQkFBVyxDQUFDO0FBU3RDLFNBQWUsMEJBQTBCLENBQU8sRUFDOUMsUUFBUSxFQUNSLE1BQU0sRUFDTixXQUFXLEVBQ1gsS0FBSyxFQUNMLFFBQVEsRUFDUixjQUFjLEdBQ1k7O1FBQzFCLElBQUk7WUFDRixJQUFJLFVBQVUsR0FBdUQsQ0FDbkUsSUFBeUIsRUFDekIsRUFBRSx3REFBQyxPQUFBLGFBQWEsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFBLEdBQUEsQ0FBQztZQUUzQixJQUFJLENBQUEsS0FBSyxhQUFMLEtBQUssdUJBQUwsS0FBSyxDQUFFLHlCQUF5QixLQUFJLEtBQUssQ0FBQyxRQUFRLEVBQUU7Z0JBQ3RELE1BQU0sUUFBUSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUM7Z0JBRWhELFVBQVUsR0FBRyxDQUFPLElBQXlCLEVBQUUsRUFBRSx3REFBQyxPQUFBLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQSxHQUFBLENBQUM7YUFDbEU7WUFFRCxNQUFNLFFBQVEsR0FBeUIsTUFBTSxRQUFRLENBQUMsVUFBVSxDQUFDO2dCQUMvRCxNQUFNO2dCQUNOLEVBQUUsRUFBRSxVQUFVO2FBQ2YsQ0FBQyxDQUFDO1lBRUgsSUFBSSxRQUFRLENBQUMsTUFBTSxLQUFLLEdBQUcsRUFBRTtnQkFDM0IsNkNBQTZDO2dCQUM3QywrQ0FBK0M7Z0JBQy9DLE9BQU8sQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDMUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUM1QyxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3RDLE9BQU8sQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDMUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2FBQ25EO1lBRUQsSUFBSSxRQUFRLGFBQVIsUUFBUSx1QkFBUixRQUFRLENBQUUsSUFBSSxFQUFFO2dCQUNsQix3Q0FBa0IsQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLFdBQVcsQ0FBQyxDQUFDO2dCQUVsRCxPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUM7YUFDdEI7WUFFRCxpQ0FBVyxDQUFDLFFBQVEsRUFBRSxXQUFXLENBQUMsQ0FBQztTQUNwQztRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ2QsMkNBQTJDO1lBRTNDLE1BQU0sSUFBSSxLQUFLLENBQ2IsR0FBRyxRQUFRLENBQ1QsK0NBQStDLEtBQUssQ0FBQyxPQUFPLEdBQUcsQ0FDaEUsQ0FDRixDQUFDO1NBQ0g7UUFFRCxNQUFNLElBQUksS0FBSyxDQUFDLEdBQUcsUUFBUSxDQUFDLDRCQUE0QixDQUFDLENBQUMsQ0FBQztJQUM3RCxDQUFDO0NBQUE7QUFHUSxnRUFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzaWRlRWZmZWN0cyB9IGZyb20gJy4uLy4uL3Jlc291cmNlcy9zaWRlLWVmZmVjdHMnO1xuaW1wb3J0IHR5cGUge1xuICBDbGllbnRQcm9taXNlLFxuICBDbGllbnRSZXF1ZXN0Q29uZmlnLFxuICBDbGllbnRSZXNwb25zZSxcbiAgUHJveHlIYW5kbGVyT3B0aW9ucyxcbn0gZnJvbSAnLi4vLi4vcmVzb3VyY2VzL3NpZGUtZWZmZWN0cy90eXBlcyc7XG5pbXBvcnQgdHlwZSB7IENyZWRlbnRpYWxzLCBMb2dnZXIsIFByb3h5RmFjdG9yeV8gfSBmcm9tICcuLi8uLi90eXBlc2NyaXB0JztcbmltcG9ydCB7IF9lY2hvU3RhdHVzLCBfdXBkYXRlQ3JlZGVudGlhbHMgfSBmcm9tICcuL2VuZC1wb2ludC1jb25uZWN0b3InO1xuaW1wb3J0IHR5cGUgeyBBcGlDYWxsUV8gfSBmcm9tICcuL25leHQtcmF0ZS1saW1pdGVyL3F1ZXVlJztcblxuY29uc3QgeyBnZXRIdHRwQ2xpZW50IH0gPSBzaWRlRWZmZWN0cztcbnR5cGUgSHR0cERhdGFFbmRQb2ludENvbm5lY3RvciA9IHtcbiAgYXBpQ2FsbFE6IEFwaUNhbGxRXztcbiAgY29uZmlnOiBDbGllbnRSZXF1ZXN0Q29uZmlnO1xuICBjcmVkZW50aWFsczogQ3JlZGVudGlhbHM7XG4gIHByb3h5OiBQcm94eUZhY3RvcnlfIHwgbnVsbDtcbiAgZXJyb3Jsb2c6IExvZ2dlcjtcbiAgaGFuZGxlck9wdGlvbnM6IFByb3h5SGFuZGxlck9wdGlvbnM7XG59O1xuYXN5bmMgZnVuY3Rpb24gX2h0dHBEYXRhRW5kUG9pbnRDb25uZWN0b3I8REFUQT4oe1xuICBhcGlDYWxsUSxcbiAgY29uZmlnLFxuICBjcmVkZW50aWFscyxcbiAgcHJveHksXG4gIGVycm9ybG9nLFxuICBoYW5kbGVyT3B0aW9ucyxcbn06IEh0dHBEYXRhRW5kUG9pbnRDb25uZWN0b3IpIHtcbiAgdHJ5IHtcbiAgICBsZXQgaHR0cENsaWVudDogPFM+KGNvbmY6IENsaWVudFJlcXVlc3RDb25maWcpID0+IENsaWVudFByb21pc2U8Uz4gPSBhc3luYyAoXG4gICAgICBjb25mOiBDbGllbnRSZXF1ZXN0Q29uZmlnLFxuICAgICkgPT4gZ2V0SHR0cENsaWVudCgpKGNvbmYpO1xuXG4gICAgaWYgKHByb3h5Py5odHRwRGF0YUVuZFBvaW50Q29ubmVjdG9yICYmIHByb3h5LmFjdGl2YXRlKSB7XG4gICAgICBjb25zdCBzb21lTmFtZSA9IHByb3h5LmFjdGl2YXRlKGhhbmRsZXJPcHRpb25zKTtcblxuICAgICAgaHR0cENsaWVudCA9IGFzeW5jIChjb25mOiBDbGllbnRSZXF1ZXN0Q29uZmlnKSA9PiBzb21lTmFtZShjb25mKTtcbiAgICB9XG5cbiAgICBjb25zdCByZXNwb25zZTogQ2xpZW50UmVzcG9uc2U8REFUQT4gPSBhd2FpdCBhcGlDYWxsUS5hZGRUb1F1ZXVlKHtcbiAgICAgIGNvbmZpZyxcbiAgICAgIGZuOiBodHRwQ2xpZW50LFxuICAgIH0pO1xuXG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyAhPT0gMjAwKSB7XG4gICAgICAvLyBjb25zb2xlLmVycm9yKCdTVEFUVVM6JywgcmVzcG9uc2Uuc3RhdHVzKTtcbiAgICAgIC8vIGNvbnNvbGUuZXJyb3IoJ1JFUVVFU1Q6JywgcmVzcG9uc2UucmVxdWVzdCk7XG4gICAgICBjb25zb2xlLmVycm9yKCdDT05GSUc6JywgcmVzcG9uc2UuY29uZmlnKTtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0hFQURFUlM6JywgcmVzcG9uc2UuaGVhZGVycyk7XG4gICAgICBjb25zb2xlLmVycm9yKCdEQVRBOicsIHJlc3BvbnNlLmRhdGEpO1xuICAgICAgY29uc29sZS5lcnJvcignU1RBVFVTOicsIHJlc3BvbnNlLnN0YXR1cyk7XG4gICAgICBjb25zb2xlLmVycm9yKCdTVEFUVVNURVhUOicsIHJlc3BvbnNlLnN0YXR1c1RleHQpO1xuICAgIH1cblxuICAgIGlmIChyZXNwb25zZT8uZGF0YSkge1xuICAgICAgX3VwZGF0ZUNyZWRlbnRpYWxzKGNvbmZpZywgcmVzcG9uc2UsIGNyZWRlbnRpYWxzKTtcblxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gICAgfVxuXG4gICAgX2VjaG9TdGF0dXMocmVzcG9uc2UsIGNyZWRlbnRpYWxzKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAvLyBlUlJPUiBIQU5ETEVSOiBFQ0hPIFNUQVRVUyBPTiBFUlJPUiAvLy0hXG5cbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAuLi5lcnJvcmxvZyhcbiAgICAgICAgYEVSUk9SOiBDYW4ndCByZXRyaXZlIGRhdGEgZnJvbSBjYWxsIHRvIEFQSSAoJHtlcnJvci5tZXNzYWdlfSlgLFxuICAgICAgKSxcbiAgICApO1xuICB9XG5cbiAgdGhyb3cgbmV3IEVycm9yKC4uLmVycm9ybG9nKFwiQ2FuJ3QgY29tcGxldGUgY2FsbCB0byBBUElcIikpO1xufVxuLy8gfVxuXG5leHBvcnQgeyBfaHR0cERhdGFFbmRQb2ludENvbm5lY3RvciB9O1xuIl19