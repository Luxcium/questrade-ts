"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._echoStatus = void 0;
const side_effects_1 = require("../../../resources/side-effects");
const requestPerSecondLimit_1 = require("../requestPerSecondLimit");
function _echoStatus(response, credentials) {
    var _a;
    // iNFO: ECHO STATUS ON ERROR Block Start ******************************
    if (response.status !== 200) {
        side_effects_1.echo('________________________________________________');
        side_effects_1.echo(response.status, response.statusText);
        side_effects_1.echo(response.data);
        void side_effects_1.tablelog(response.headers);
        side_effects_1.echo(requestPerSecondLimit_1.remaningTimeString(((_a = credentials === null || credentials === void 0 ? void 0 : credentials.remainingRequests) === null || _a === void 0 ? void 0 : _a.secondsRemaning) ? credentials.remainingRequests.secondsRemaning
            : 0));
        side_effects_1.echo(response.status, response.statusText);
        side_effects_1.echo('________________________________________________');
        side_effects_1.echo('++++++++++++++++++++++++++++++++++++++++++++++++');
    }
    else {
        // iNFO: ECHO STATUS ON 200 OK Block Start //-!
        // echo(
        //   remaningTimeString(
        //     credentials?.remainingRequests?.secondsRemaning
        //       /? credentials.remainingRequests.secondsRemaning
        //       : 0
        //   )
        // );
    }
}
exports._echoStatus = _echoStatus;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX2VjaG9TdGF0dXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvcHJpdmF0ZS9jb3JlL2VuZC1wb2ludC1jb25uZWN0b3IvX2VjaG9TdGF0dXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsa0VBQWlFO0FBR2pFLG9FQUE4RDtBQUU5RCxTQUFTLFdBQVcsQ0FBQyxRQUE2QixFQUFFLFdBQXlCOztJQUMzRSx3RUFBd0U7SUFDeEUsSUFBSSxRQUFRLENBQUMsTUFBTSxLQUFLLEdBQUcsRUFBRTtRQUMzQixtQkFBSSxDQUFDLGtEQUFrRCxDQUFDLENBQUM7UUFDekQsbUJBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMzQyxtQkFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQixLQUFLLHVCQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2hDLG1CQUFJLENBQ0YsMENBQWtCLENBQ2hCLE9BQUEsV0FBVyxhQUFYLFdBQVcsdUJBQVgsV0FBVyxDQUFFLGlCQUFpQiwwQ0FBRSxlQUFlLEVBQzdDLENBQUMsQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsZUFBZTtZQUMvQyxDQUFDLENBQUMsQ0FBQyxDQUNOLENBQ0YsQ0FBQztRQUNGLG1CQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDM0MsbUJBQUksQ0FBQyxrREFBa0QsQ0FBQyxDQUFDO1FBQ3pELG1CQUFJLENBQUMsa0RBQWtELENBQUMsQ0FBQztLQUMxRDtTQUFNO1FBQ0wsK0NBQStDO1FBQy9DLFFBQVE7UUFDUix3QkFBd0I7UUFDeEIsc0RBQXNEO1FBQ3RELHlEQUF5RDtRQUN6RCxZQUFZO1FBQ1osTUFBTTtRQUNOLEtBQUs7S0FDTjtBQUNILENBQUM7QUFFUSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGVjaG8sIHRhYmxlbG9nIH0gZnJvbSAnLi4vLi4vLi4vcmVzb3VyY2VzL3NpZGUtZWZmZWN0cyc7XG5pbXBvcnQgdHlwZSB7IENsaWVudFJlc3BvbnNlIH0gZnJvbSAnLi4vLi4vLi4vcmVzb3VyY2VzL3NpZGUtZWZmZWN0cy90eXBlcyc7XG5pbXBvcnQgdHlwZSB7IENyZWRlbnRpYWxzIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXNjcmlwdCc7XG5pbXBvcnQgeyByZW1hbmluZ1RpbWVTdHJpbmcgfSBmcm9tICcuLi9yZXF1ZXN0UGVyU2Vjb25kTGltaXQnO1xuXG5mdW5jdGlvbiBfZWNob1N0YXR1cyhyZXNwb25zZTogQ2xpZW50UmVzcG9uc2U8YW55PiwgY3JlZGVudGlhbHM/OiBDcmVkZW50aWFscykge1xuICAvLyBpTkZPOiBFQ0hPIFNUQVRVUyBPTiBFUlJPUiBCbG9jayBTdGFydCAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgaWYgKHJlc3BvbnNlLnN0YXR1cyAhPT0gMjAwKSB7XG4gICAgZWNobygnX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fJyk7XG4gICAgZWNobyhyZXNwb25zZS5zdGF0dXMsIHJlc3BvbnNlLnN0YXR1c1RleHQpO1xuICAgIGVjaG8ocmVzcG9uc2UuZGF0YSk7XG4gICAgdm9pZCB0YWJsZWxvZyhyZXNwb25zZS5oZWFkZXJzKTtcbiAgICBlY2hvKFxuICAgICAgcmVtYW5pbmdUaW1lU3RyaW5nKFxuICAgICAgICBjcmVkZW50aWFscz8ucmVtYWluaW5nUmVxdWVzdHM/LnNlY29uZHNSZW1hbmluZ1xuICAgICAgICAgID8gY3JlZGVudGlhbHMucmVtYWluaW5nUmVxdWVzdHMuc2Vjb25kc1JlbWFuaW5nXG4gICAgICAgICAgOiAwLFxuICAgICAgKSxcbiAgICApO1xuICAgIGVjaG8ocmVzcG9uc2Uuc3RhdHVzLCByZXNwb25zZS5zdGF0dXNUZXh0KTtcbiAgICBlY2hvKCdfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX18nKTtcbiAgICBlY2hvKCcrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysnKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBpTkZPOiBFQ0hPIFNUQVRVUyBPTiAyMDAgT0sgQmxvY2sgU3RhcnQgLy8tIVxuICAgIC8vIGVjaG8oXG4gICAgLy8gICByZW1hbmluZ1RpbWVTdHJpbmcoXG4gICAgLy8gICAgIGNyZWRlbnRpYWxzPy5yZW1haW5pbmdSZXF1ZXN0cz8uc2Vjb25kc1JlbWFuaW5nXG4gICAgLy8gICAgICAgLz8gY3JlZGVudGlhbHMucmVtYWluaW5nUmVxdWVzdHMuc2Vjb25kc1JlbWFuaW5nXG4gICAgLy8gICAgICAgOiAwXG4gICAgLy8gICApXG4gICAgLy8gKTtcbiAgfVxufVxuXG5leHBvcnQgeyBfZWNob1N0YXR1cyB9O1xuIl19