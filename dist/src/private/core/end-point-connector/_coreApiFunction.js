"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._coreApiFunction = void 0;
const tslib_1 = require("tslib");
const XX_http_data_end_point_connector_XX_1 = require("../XX-http-data-end-point-connector-XX");
const _coreApiConfig_1 = require("./_coreApiConfig");
function _coreApiFunction(credentials, apiCallQ, proxy, errorlog = (...error) => error) {
    // ~~>
    return (VERB) => {
        // ~~>
        return (postData) => {
            // ~~>
            return (endpoint, handlerOptions /* = {} */) => {
                // ~~>
                return () => tslib_1.__awaiter(this, void 0, void 0, function* () {
                    const configBuilder = _coreApiConfig_1._coreApiConfig(credentials);
                    const getEndPoint = configBuilder(VERB);
                    const endPoint = getEndPoint(endpoint);
                    const config = endPoint(postData);
                    return XX_http_data_end_point_connector_XX_1._httpDataEndPointConnector({
                        apiCallQ,
                        config,
                        credentials,
                        errorlog,
                        handlerOptions,
                        proxy,
                    });
                });
            };
        };
    };
}
exports._coreApiFunction = _coreApiFunction;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX2NvcmVBcGlGdW5jdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9wcml2YXRlL2NvcmUvZW5kLXBvaW50LWNvbm5lY3Rvci9fY29yZUFwaUZ1bmN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFHQSxnR0FBb0Y7QUFDcEYscURBQWtEO0FBRWxELFNBQVMsZ0JBQWdCLENBQ3ZCLFdBQXdCLEVBQ3hCLFFBQW1CLEVBQ25CLEtBQTJCLEVBQzNCLFdBQW1CLENBQUMsR0FBRyxLQUFZLEVBQUUsRUFBRSxDQUFDLEtBQUs7SUFFN0MsTUFBTTtJQUNOLE9BQU8sQ0FBQyxJQUFvQixFQUFFLEVBQUU7UUFDOUIsTUFBTTtRQUNOLE9BQU8sQ0FBSSxRQUFrQixFQUFFLEVBQUU7WUFDL0IsTUFBTTtZQUNOLE9BQU8sQ0FDTCxRQUFnQixFQUNoQixjQUFtQyxDQUFDLFVBQVUsRUFDOUMsRUFBRTtnQkFDRixNQUFNO2dCQUNOLE9BQU8sR0FBcUIsRUFBRTtvQkFDNUIsTUFBTSxhQUFhLEdBQUcsK0JBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQztvQkFDbEQsTUFBTSxXQUFXLEdBQUcsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUN4QyxNQUFNLFFBQVEsR0FBRyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQ3ZDLE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFFbEMsT0FBTyxnRUFBMEIsQ0FBSTt3QkFDbkMsUUFBUTt3QkFDUixNQUFNO3dCQUNOLFdBQVc7d0JBQ1gsUUFBUTt3QkFDUixjQUFjO3dCQUNkLEtBQUs7cUJBQ04sQ0FBQyxDQUFDO2dCQUNMLENBQUMsQ0FBQSxDQUFDO1lBQ0osQ0FBQyxDQUFDO1FBQ0osQ0FBQyxDQUFDO0lBQ0osQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQUVRLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgUHJveHlIYW5kbGVyT3B0aW9ucyB9IGZyb20gJy4uLy4uLy4uL3Jlc291cmNlcy9zaWRlLWVmZmVjdHMvdHlwZXMnO1xuaW1wb3J0IHR5cGUgeyBDcmVkZW50aWFscywgTG9nZ2VyLCBQcm94eUZhY3RvcnlfIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXNjcmlwdCc7XG5pbXBvcnQgdHlwZSB7IEFwaUNhbGxRXyB9IGZyb20gJy4uL25leHQtcmF0ZS1saW1pdGVyL3F1ZXVlJztcbmltcG9ydCB7IF9odHRwRGF0YUVuZFBvaW50Q29ubmVjdG9yIH0gZnJvbSAnLi4vWFgtaHR0cC1kYXRhLWVuZC1wb2ludC1jb25uZWN0b3ItWFgnO1xuaW1wb3J0IHsgX2NvcmVBcGlDb25maWcgfSBmcm9tICcuL19jb3JlQXBpQ29uZmlnJztcblxuZnVuY3Rpb24gX2NvcmVBcGlGdW5jdGlvbihcbiAgY3JlZGVudGlhbHM6IENyZWRlbnRpYWxzLFxuICBhcGlDYWxsUTogQXBpQ2FsbFFfLFxuICBwcm94eTogUHJveHlGYWN0b3J5XyB8IG51bGwsXG4gIGVycm9ybG9nOiBMb2dnZXIgPSAoLi4uZXJyb3I6IGFueVtdKSA9PiBlcnJvcixcbikge1xuICAvLyB+fj5cbiAgcmV0dXJuIChWRVJCOiAnR0VUJyB8ICdQT1NUJykgPT4ge1xuICAgIC8vIH5+PlxuICAgIHJldHVybiA8RD4ocG9zdERhdGE6IEQgfCBudWxsKSA9PiB7XG4gICAgICAvLyB+fj5cbiAgICAgIHJldHVybiA8Uj4oXG4gICAgICAgIGVuZHBvaW50OiBzdHJpbmcsXG4gICAgICAgIGhhbmRsZXJPcHRpb25zOiBQcm94eUhhbmRsZXJPcHRpb25zIC8qID0ge30gKi8sXG4gICAgICApID0+IHtcbiAgICAgICAgLy8gfn4+XG4gICAgICAgIHJldHVybiBhc3luYyAoKTogUHJvbWlzZTxSPiA9PiB7XG4gICAgICAgICAgY29uc3QgY29uZmlnQnVpbGRlciA9IF9jb3JlQXBpQ29uZmlnKGNyZWRlbnRpYWxzKTtcbiAgICAgICAgICBjb25zdCBnZXRFbmRQb2ludCA9IGNvbmZpZ0J1aWxkZXIoVkVSQik7XG4gICAgICAgICAgY29uc3QgZW5kUG9pbnQgPSBnZXRFbmRQb2ludChlbmRwb2ludCk7XG4gICAgICAgICAgY29uc3QgY29uZmlnID0gZW5kUG9pbnQocG9zdERhdGEpO1xuXG4gICAgICAgICAgcmV0dXJuIF9odHRwRGF0YUVuZFBvaW50Q29ubmVjdG9yPFI+KHtcbiAgICAgICAgICAgIGFwaUNhbGxRLFxuICAgICAgICAgICAgY29uZmlnLFxuICAgICAgICAgICAgY3JlZGVudGlhbHMsXG4gICAgICAgICAgICBlcnJvcmxvZyxcbiAgICAgICAgICAgIGhhbmRsZXJPcHRpb25zLFxuICAgICAgICAgICAgcHJveHksXG4gICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICB9O1xuICAgIH07XG4gIH07XG59XG5cbmV4cG9ydCB7IF9jb3JlQXBpRnVuY3Rpb24gfTtcbiJdfQ==