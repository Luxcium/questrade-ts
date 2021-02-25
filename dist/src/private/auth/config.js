"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configs = void 0;
function configs(arg) {
    // const { refreshToken, credentials } = validateToken(apiOptions);
    return {
        config: {
            method: 'GET',
            params: {
                grant_type: 'refresh_token',
                refresh_token: arg.refreshToken,
            },
            url: `${arg.credentials.authUrl}/oauth2/token`,
        },
        credentials: arg.credentials,
    };
}
exports.configs = configs;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3ByaXZhdGUvYXV0aC9jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBR0EsU0FBZ0IsT0FBTyxDQUFDLEdBR3ZCO0lBQ0MsbUVBQW1FO0lBQ25FLE9BQU87UUFDTCxNQUFNLEVBQUU7WUFDTixNQUFNLEVBQUUsS0FBSztZQUNiLE1BQU0sRUFBRTtnQkFDTixVQUFVLEVBQUUsZUFBZTtnQkFDM0IsYUFBYSxFQUFFLEdBQUcsQ0FBQyxZQUFZO2FBQ2hDO1lBQ0QsR0FBRyxFQUFFLEdBQUcsR0FBRyxDQUFDLFdBQVcsQ0FBQyxPQUFPLGVBQWU7U0FDL0M7UUFDRCxXQUFXLEVBQUUsR0FBRyxDQUFDLFdBQVc7S0FDN0IsQ0FBQztBQUNKLENBQUM7QUFoQkQsMEJBZ0JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBDbGllbnRSZXF1ZXN0Q29uZmlnIH0gZnJvbSAnLi4vLi4vcmVzb3VyY2VzL3NpZGUtZWZmZWN0cy90eXBlc2NyaXB0JztcbmltcG9ydCB0eXBlIHsgQ3JlZGVudGlhbHMgfSBmcm9tICcuLi8uLi90eXBlc2NyaXB0JztcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZ3MoYXJnOiB7XG4gIHJlZnJlc2hUb2tlbjogc3RyaW5nO1xuICBjcmVkZW50aWFsczogQ3JlZGVudGlhbHM7XG59KTogeyBjb25maWc6IENsaWVudFJlcXVlc3RDb25maWc7IGNyZWRlbnRpYWxzOiBDcmVkZW50aWFscyB9IHtcbiAgLy8gY29uc3QgeyByZWZyZXNoVG9rZW4sIGNyZWRlbnRpYWxzIH0gPSB2YWxpZGF0ZVRva2VuKGFwaU9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIGNvbmZpZzoge1xuICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgIHBhcmFtczoge1xuICAgICAgICBncmFudF90eXBlOiAncmVmcmVzaF90b2tlbicsXG4gICAgICAgIHJlZnJlc2hfdG9rZW46IGFyZy5yZWZyZXNoVG9rZW4sXG4gICAgICB9LFxuICAgICAgdXJsOiBgJHthcmcuY3JlZGVudGlhbHMuYXV0aFVybH0vb2F1dGgyL3Rva2VuYCxcbiAgICB9LFxuICAgIGNyZWRlbnRpYWxzOiBhcmcuY3JlZGVudGlhbHMsXG4gIH07XG59XG4iXX0=