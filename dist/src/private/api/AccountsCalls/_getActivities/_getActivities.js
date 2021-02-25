"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._getActivities = void 0;
const tslib_1 = require("tslib");
const utils_1 = require("../../../../utils");
// + _getActivities
/** pROVIDE: credentials, startTime string and endTime string THEN GET: a 'Promise\<IAccountActivity[]\>' */
const _getActivities = (accountGetApi, errorlog = (...error) => error) => (startTime) => {
    //
    return (endTime) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        try {
            const dateTime = utils_1.urlEncodeDateTool(startTime, endTime);
            const endpoint = `/activities?${dateTime}`;
            const accountGet = accountGetApi(endpoint);
            const activities = yield accountGet();
            return activities.activities;
        }
        catch (error) {
            void errorlog(error);
            return [];
        }
    });
};
exports._getActivities = _getActivities;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX2dldEFjdGl2aXRpZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvcHJpdmF0ZS9hcGkvQWNjb3VudHNDYWxscy9fZ2V0QWN0aXZpdGllcy9fZ2V0QWN0aXZpdGllcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBS0EsNkNBQXNEO0FBRXRELG1CQUFtQjtBQUNuQiw0R0FBNEc7QUFDckcsTUFBTSxjQUFjLEdBQUcsQ0FDNUIsYUFBK0QsRUFDL0QsV0FBbUIsQ0FBQyxHQUFHLEtBQVksRUFBRSxFQUFFLENBQUMsS0FBSyxFQUM3QyxFQUFFLENBQUMsQ0FBQyxTQUFpQixFQUFFLEVBQUU7SUFDekIsRUFBRTtJQUNGLE9BQU8sQ0FBTyxPQUFlLEVBQStCLEVBQUU7UUFDNUQsSUFBSTtZQUNGLE1BQU0sUUFBUSxHQUFHLHlCQUFpQixDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztZQUN2RCxNQUFNLFFBQVEsR0FBRyxlQUFlLFFBQVEsRUFBRSxDQUFDO1lBQzNDLE1BQU0sVUFBVSxHQUFHLGFBQWEsQ0FBYyxRQUFRLENBQUMsQ0FBQztZQUN4RCxNQUFNLFVBQVUsR0FBRyxNQUFNLFVBQVUsRUFBRSxDQUFDO1lBRXRDLE9BQU8sVUFBVSxDQUFDLFVBQVUsQ0FBQztTQUM5QjtRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ2QsS0FBSyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7WUFFckIsT0FBTyxFQUFFLENBQUM7U0FDWDtJQUNILENBQUMsQ0FBQSxDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBbkJXLFFBQUEsY0FBYyxrQkFtQnpCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUge1xuICBJQWNjb3VudEFjdGl2aXR5LFxuICBJQWN0aXZpdGllcyxcbiAgTG9nZ2VyLFxufSBmcm9tICcuLi8uLi8uLi8uLi90eXBlc2NyaXB0JztcbmltcG9ydCB7IHVybEVuY29kZURhdGVUb29sIH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMnO1xuXG4vLyArIF9nZXRBY3Rpdml0aWVzXG4vKiogcFJPVklERTogY3JlZGVudGlhbHMsIHN0YXJ0VGltZSBzdHJpbmcgYW5kIGVuZFRpbWUgc3RyaW5nIFRIRU4gR0VUOiBhICdQcm9taXNlXFw8SUFjY291bnRBY3Rpdml0eVtdXFw+JyAqL1xuZXhwb3J0IGNvbnN0IF9nZXRBY3Rpdml0aWVzID0gKFxuICBhY2NvdW50R2V0QXBpOiA8Uj4oYWNjb3VudEVuZHBvaW50OiBzdHJpbmcpID0+ICgpID0+IFByb21pc2U8Uj4sXG4gIGVycm9ybG9nOiBMb2dnZXIgPSAoLi4uZXJyb3I6IGFueVtdKSA9PiBlcnJvcixcbikgPT4gKHN0YXJ0VGltZTogc3RyaW5nKSA9PiB7XG4gIC8vXG4gIHJldHVybiBhc3luYyAoZW5kVGltZTogc3RyaW5nKTogUHJvbWlzZTxJQWNjb3VudEFjdGl2aXR5W10+ID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZGF0ZVRpbWUgPSB1cmxFbmNvZGVEYXRlVG9vbChzdGFydFRpbWUsIGVuZFRpbWUpO1xuICAgICAgY29uc3QgZW5kcG9pbnQgPSBgL2FjdGl2aXRpZXM/JHtkYXRlVGltZX1gO1xuICAgICAgY29uc3QgYWNjb3VudEdldCA9IGFjY291bnRHZXRBcGk8SUFjdGl2aXRpZXM+KGVuZHBvaW50KTtcbiAgICAgIGNvbnN0IGFjdGl2aXRpZXMgPSBhd2FpdCBhY2NvdW50R2V0KCk7XG5cbiAgICAgIHJldHVybiBhY3Rpdml0aWVzLmFjdGl2aXRpZXM7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHZvaWQgZXJyb3Jsb2coZXJyb3IpO1xuXG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICB9O1xufTtcbiJdfQ==