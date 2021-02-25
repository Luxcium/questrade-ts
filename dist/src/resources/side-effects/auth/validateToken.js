"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateToken = void 0;
const tslib_1 = require("tslib");
const fs_1 = require("fs");
const path_1 = tslib_1.__importDefault(require("path"));
const __1 = require("..");
const api_options_credentials_factory_1 = require("./api-options-credentials-factory");
const { dirname } = path_1.default;
const validateToken = (options) => {
    const credentials = api_options_credentials_factory_1.apiOptionsCredentialsFactory(options);
    let refreshToken = credentials.seedToken;
    try {
        if (credentials.keyFile) {
            __1.sync(dirname(credentials.keyFile));
        }
        else {
            __1.sync(credentials.keyDir);
        }
        credentials.keyFile =
            credentials.keyFile || `${credentials.keyDir}/${credentials.seedToken}`;
        refreshToken = fs_1.readFileSync(credentials.keyFile, 'utf8');
    }
    catch (_a) {
        credentials.keyFile =
            credentials.keyFile || `${credentials.keyDir}/${credentials.seedToken}`;
        fs_1.access(credentials.keyFile, fs_1.constants.F_OK, (none) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
            if (none) {
                fs_1.writeFileSync(credentials.keyFile, credentials.seedToken, {
                    encoding: 'utf8',
                });
            }
        }));
    }
    return { credentials, refreshToken };
};
exports.validateToken = validateToken;
// export function (
//   options: QuestradeAPIOptions,
// ): {
//   refreshToken: string;
//   credentials: Credentials;
// } {
//   return _validateToken(options);
// }
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGVUb2tlbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9yZXNvdXJjZXMvc2lkZS1lZmZlY3RzL2F1dGgvdmFsaWRhdGVUb2tlbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsMkJBQW9FO0FBQ3BFLHdEQUF3QjtBQUd4QiwwQkFBMEI7QUFDMUIsdUZBQWlGO0FBRWpGLE1BQU0sRUFBRSxPQUFPLEVBQUUsR0FBRyxjQUFJLENBQUM7QUFFbEIsTUFBTSxhQUFhLEdBQUcsQ0FBQyxPQUFtQixFQUFFLEVBQUU7SUFDbkQsTUFBTSxXQUFXLEdBQUcsOERBQTRCLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDMUQsSUFBSSxZQUFZLEdBQVcsV0FBVyxDQUFDLFNBQVMsQ0FBQztJQUVqRCxJQUFJO1FBQ0YsSUFBSSxXQUFXLENBQUMsT0FBTyxFQUFFO1lBQ3ZCLFFBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7U0FDcEM7YUFBTTtZQUNMLFFBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDMUI7UUFFRCxXQUFXLENBQUMsT0FBTztZQUNqQixXQUFXLENBQUMsT0FBTyxJQUFJLEdBQUcsV0FBVyxDQUFDLE1BQU0sSUFBSSxXQUFXLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDMUUsWUFBWSxHQUFHLGlCQUFZLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztLQUMxRDtJQUFDLFdBQU07UUFDTixXQUFXLENBQUMsT0FBTztZQUNqQixXQUFXLENBQUMsT0FBTyxJQUFJLEdBQUcsV0FBVyxDQUFDLE1BQU0sSUFBSSxXQUFXLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDMUUsV0FBTSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsY0FBUyxDQUFDLElBQUksRUFBRSxDQUFNLElBQUksRUFBQyxFQUFFO1lBQ3ZELElBQUksSUFBSSxFQUFFO2dCQUNSLGtCQUFhLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxXQUFXLENBQUMsU0FBUyxFQUFFO29CQUN4RCxRQUFRLEVBQUUsTUFBTTtpQkFDakIsQ0FBQyxDQUFDO2FBQ0o7UUFDSCxDQUFDLENBQUEsQ0FBQyxDQUFDO0tBQ0o7SUFFRCxPQUFPLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxDQUFDO0FBQ3ZDLENBQUMsQ0FBQztBQTNCVyxRQUFBLGFBQWEsaUJBMkJ4QjtBQUVGLG9CQUFvQjtBQUNwQixrQ0FBa0M7QUFDbEMsT0FBTztBQUNQLDBCQUEwQjtBQUMxQiw4QkFBOEI7QUFDOUIsTUFBTTtBQUNOLG9DQUFvQztBQUNwQyxJQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYWNjZXNzLCBjb25zdGFudHMsIHJlYWRGaWxlU3luYywgd3JpdGVGaWxlU3luYyB9IGZyb20gJ2ZzJztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuXG5pbXBvcnQgdHlwZSB7IEFwaU9wdGlvbnMgfSBmcm9tICcuLi8uLi8uLi90eXBlc2NyaXB0JztcbmltcG9ydCB7IHN5bmMgfSBmcm9tICcuLic7XG5pbXBvcnQgeyBhcGlPcHRpb25zQ3JlZGVudGlhbHNGYWN0b3J5IH0gZnJvbSAnLi9hcGktb3B0aW9ucy1jcmVkZW50aWFscy1mYWN0b3J5JztcblxuY29uc3QgeyBkaXJuYW1lIH0gPSBwYXRoO1xuXG5leHBvcnQgY29uc3QgdmFsaWRhdGVUb2tlbiA9IChvcHRpb25zOiBBcGlPcHRpb25zKSA9PiB7XG4gIGNvbnN0IGNyZWRlbnRpYWxzID0gYXBpT3B0aW9uc0NyZWRlbnRpYWxzRmFjdG9yeShvcHRpb25zKTtcbiAgbGV0IHJlZnJlc2hUb2tlbjogc3RyaW5nID0gY3JlZGVudGlhbHMuc2VlZFRva2VuO1xuXG4gIHRyeSB7XG4gICAgaWYgKGNyZWRlbnRpYWxzLmtleUZpbGUpIHtcbiAgICAgIHN5bmMoZGlybmFtZShjcmVkZW50aWFscy5rZXlGaWxlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN5bmMoY3JlZGVudGlhbHMua2V5RGlyKTtcbiAgICB9XG5cbiAgICBjcmVkZW50aWFscy5rZXlGaWxlID1cbiAgICAgIGNyZWRlbnRpYWxzLmtleUZpbGUgfHwgYCR7Y3JlZGVudGlhbHMua2V5RGlyfS8ke2NyZWRlbnRpYWxzLnNlZWRUb2tlbn1gO1xuICAgIHJlZnJlc2hUb2tlbiA9IHJlYWRGaWxlU3luYyhjcmVkZW50aWFscy5rZXlGaWxlLCAndXRmOCcpO1xuICB9IGNhdGNoIHtcbiAgICBjcmVkZW50aWFscy5rZXlGaWxlID1cbiAgICAgIGNyZWRlbnRpYWxzLmtleUZpbGUgfHwgYCR7Y3JlZGVudGlhbHMua2V5RGlyfS8ke2NyZWRlbnRpYWxzLnNlZWRUb2tlbn1gO1xuICAgIGFjY2VzcyhjcmVkZW50aWFscy5rZXlGaWxlLCBjb25zdGFudHMuRl9PSywgYXN5bmMgbm9uZSA9PiB7XG4gICAgICBpZiAobm9uZSkge1xuICAgICAgICB3cml0ZUZpbGVTeW5jKGNyZWRlbnRpYWxzLmtleUZpbGUsIGNyZWRlbnRpYWxzLnNlZWRUb2tlbiwge1xuICAgICAgICAgIGVuY29kaW5nOiAndXRmOCcsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHsgY3JlZGVudGlhbHMsIHJlZnJlc2hUb2tlbiB9O1xufTtcblxuLy8gZXhwb3J0IGZ1bmN0aW9uIChcbi8vICAgb3B0aW9uczogUXVlc3RyYWRlQVBJT3B0aW9ucyxcbi8vICk6IHtcbi8vICAgcmVmcmVzaFRva2VuOiBzdHJpbmc7XG4vLyAgIGNyZWRlbnRpYWxzOiBDcmVkZW50aWFscztcbi8vIH0ge1xuLy8gICByZXR1cm4gX3ZhbGlkYXRlVG9rZW4ob3B0aW9ucyk7XG4vLyB9XG4iXX0=