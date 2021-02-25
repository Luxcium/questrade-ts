"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._coreApiConfig = void 0;
/**
 * partial application of Core api config builder generating an
 * object of strings value in the format of CoreApiConfig<D> to
 * be sent to client as main parameter.
 */
function _coreApiConfig(credentials) {
    // ~~>
    return (VERB) => {
        // ~~>
        return (endpoint) => {
            // ~~>
            return (postData) => {
                /**
                 * build endpoint url with apiUrl as base.
                 */
                // const url = `${credentials.apiUrl}${encodeURIComponent(endpoint)}`;
                const url = credentials.apiUrl + endpoint;
                // ->
                /**
                 * set methodh to 'get' or 'post' in the
                 * request config/ header.
                 */
                const method = VERB.toLowerCase();
                // ->
                /** oAuth2 token informations added to request header. */
                const Authorization = `Bearer ${credentials.accessToken}`;
                // ->
                /**
                 * adding account number information
                 * can occur in the 'location' header only.
                 */
                const location = credentials.accountNumber;
                // ->
                /** adittional information for POST requests. */
                const data = postData;
                // ->
                /** header builder. */
                const headers = {
                    Authorization,
                    location,
                };
                // ->
                /** config builder. */
                return {
                    data,
                    headers,
                    method,
                    url,
                };
            };
        };
    };
}
exports._coreApiConfig = _coreApiConfig;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX2NvcmVBcGlDb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvcHJpdmF0ZS9jb3JlL2VuZC1wb2ludC1jb25uZWN0b3IvX2NvcmVBcGlDb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBR0E7Ozs7R0FJRztBQUNILFNBQVMsY0FBYyxDQUFJLFdBQXdCO0lBQ2pELE1BQU07SUFDTixPQUFPLENBQUMsSUFBb0IsRUFBRSxFQUFFO1FBQzlCLE1BQU07UUFDTixPQUFPLENBQUMsUUFBZ0IsRUFBRSxFQUFFO1lBQzFCLE1BQU07WUFDTixPQUFPLENBQUMsUUFBa0IsRUFBdUIsRUFBRTtnQkFDakQ7O21CQUVHO2dCQUVILHNFQUFzRTtnQkFDdEUsTUFBTSxHQUFHLEdBQUcsV0FBVyxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUM7Z0JBQzFDLEtBQUs7Z0JBQ0w7OzttQkFHRztnQkFDSCxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFvQixDQUFDO2dCQUNwRCxLQUFLO2dCQUNMLHlEQUF5RDtnQkFDekQsTUFBTSxhQUFhLEdBQUcsVUFBVSxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQzFELEtBQUs7Z0JBQ0w7OzttQkFHRztnQkFDSCxNQUFNLFFBQVEsR0FBRyxXQUFXLENBQUMsYUFBYSxDQUFDO2dCQUMzQyxLQUFLO2dCQUNMLGdEQUFnRDtnQkFDaEQsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDO2dCQUN0QixLQUFLO2dCQUNMLHNCQUFzQjtnQkFDdEIsTUFBTSxPQUFPLEdBQUc7b0JBQ2QsYUFBYTtvQkFDYixRQUFRO2lCQUNULENBQUM7Z0JBRUYsS0FBSztnQkFDTCxzQkFBc0I7Z0JBQ3RCLE9BQU87b0JBQ0wsSUFBSTtvQkFDSixPQUFPO29CQUNQLE1BQU07b0JBQ04sR0FBRztpQkFDSixDQUFDO1lBQ0osQ0FBQyxDQUFDO1FBQ0osQ0FBQyxDQUFDO0lBQ0osQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQUVRLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBDbGllbnRSZXF1ZXN0Q29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vcmVzb3VyY2VzL3NpZGUtZWZmZWN0cy90eXBlcyc7XG5pbXBvcnQgdHlwZSB7IENyZWRlbnRpYWxzIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXNjcmlwdCc7XG5cbi8qKlxuICogcGFydGlhbCBhcHBsaWNhdGlvbiBvZiBDb3JlIGFwaSBjb25maWcgYnVpbGRlciBnZW5lcmF0aW5nIGFuXG4gKiBvYmplY3Qgb2Ygc3RyaW5ncyB2YWx1ZSBpbiB0aGUgZm9ybWF0IG9mIENvcmVBcGlDb25maWc8RD4gdG9cbiAqIGJlIHNlbnQgdG8gY2xpZW50IGFzIG1haW4gcGFyYW1ldGVyLlxuICovXG5mdW5jdGlvbiBfY29yZUFwaUNvbmZpZzxEPihjcmVkZW50aWFsczogQ3JlZGVudGlhbHMpIHtcbiAgLy8gfn4+XG4gIHJldHVybiAoVkVSQjogJ0dFVCcgfCAnUE9TVCcpID0+IHtcbiAgICAvLyB+fj5cbiAgICByZXR1cm4gKGVuZHBvaW50OiBzdHJpbmcpID0+IHtcbiAgICAgIC8vIH5+PlxuICAgICAgcmV0dXJuIChwb3N0RGF0YTogRCB8IG51bGwpOiBDbGllbnRSZXF1ZXN0Q29uZmlnID0+IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIGJ1aWxkIGVuZHBvaW50IHVybCB3aXRoIGFwaVVybCBhcyBiYXNlLlxuICAgICAgICAgKi9cblxuICAgICAgICAvLyBjb25zdCB1cmwgPSBgJHtjcmVkZW50aWFscy5hcGlVcmx9JHtlbmNvZGVVUklDb21wb25lbnQoZW5kcG9pbnQpfWA7XG4gICAgICAgIGNvbnN0IHVybCA9IGNyZWRlbnRpYWxzLmFwaVVybCArIGVuZHBvaW50O1xuICAgICAgICAvLyAtPlxuICAgICAgICAvKipcbiAgICAgICAgICogc2V0IG1ldGhvZGggdG8gJ2dldCcgb3IgJ3Bvc3QnIGluIHRoZVxuICAgICAgICAgKiByZXF1ZXN0IGNvbmZpZy8gaGVhZGVyLlxuICAgICAgICAgKi9cbiAgICAgICAgY29uc3QgbWV0aG9kID0gVkVSQi50b0xvd2VyQ2FzZSgpIGFzICdHRVQnIHwgJ1BPU1QnO1xuICAgICAgICAvLyAtPlxuICAgICAgICAvKiogb0F1dGgyIHRva2VuIGluZm9ybWF0aW9ucyBhZGRlZCB0byByZXF1ZXN0IGhlYWRlci4gKi9cbiAgICAgICAgY29uc3QgQXV0aG9yaXphdGlvbiA9IGBCZWFyZXIgJHtjcmVkZW50aWFscy5hY2Nlc3NUb2tlbn1gO1xuICAgICAgICAvLyAtPlxuICAgICAgICAvKipcbiAgICAgICAgICogYWRkaW5nIGFjY291bnQgbnVtYmVyIGluZm9ybWF0aW9uXG4gICAgICAgICAqIGNhbiBvY2N1ciBpbiB0aGUgJ2xvY2F0aW9uJyBoZWFkZXIgb25seS5cbiAgICAgICAgICovXG4gICAgICAgIGNvbnN0IGxvY2F0aW9uID0gY3JlZGVudGlhbHMuYWNjb3VudE51bWJlcjtcbiAgICAgICAgLy8gLT5cbiAgICAgICAgLyoqIGFkaXR0aW9uYWwgaW5mb3JtYXRpb24gZm9yIFBPU1QgcmVxdWVzdHMuICovXG4gICAgICAgIGNvbnN0IGRhdGEgPSBwb3N0RGF0YTtcbiAgICAgICAgLy8gLT5cbiAgICAgICAgLyoqIGhlYWRlciBidWlsZGVyLiAqL1xuICAgICAgICBjb25zdCBoZWFkZXJzID0ge1xuICAgICAgICAgIEF1dGhvcml6YXRpb24sXG4gICAgICAgICAgbG9jYXRpb24sXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gLT5cbiAgICAgICAgLyoqIGNvbmZpZyBidWlsZGVyLiAqL1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGRhdGEsXG4gICAgICAgICAgaGVhZGVycyxcbiAgICAgICAgICBtZXRob2QsXG4gICAgICAgICAgdXJsLFxuICAgICAgICB9O1xuICAgICAgfTtcbiAgICB9O1xuICB9O1xufVxuXG5leHBvcnQgeyBfY29yZUFwaUNvbmZpZyB9O1xuIl19