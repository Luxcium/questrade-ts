"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.questradeAPI = void 0;
const tslib_1 = require("tslib");
const _getQuestradeApi_1 = require("../private/api/_getQuestradeApi");
const _credentialsFactory_1 = require("../private/auth/_credentialsFactory");
const queue_1 = require("../private/core/next-rate-limiter/queue");
const side_effects_1 = require("../resources/side-effects");
const utils_1 = require("../utils");
function questradeAPI(apiOptions) {
    var _a, _b;
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        //
        const errorloger = (_a = apiOptions.errorloger) !== null && _a !== void 0 ? _a : side_effects_1.errorlog;
        const apiCallQ = new queue_1.ApiCallQ_();
        void apiCallQ;
        apiOptions.token = utils_1.preValidateToken(apiOptions);
        const proxyFactory = (_b = apiOptions.proxyFactory) !== null && _b !== void 0 ? _b : null;
        const credentials = yield _credentialsFactory_1._credentialsFactory(apiOptions, apiCallQ, proxyFactory);
        return {
            credentials,
            // XXX: WORKING ON questradeApiFactory CALLS
            qtApi: yield _getQuestradeApi_1.questradeApiFactory(credentials, apiCallQ, proxyFactory, errorloger),
        };
    });
}
exports.questradeAPI = questradeAPI;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVkZWVtVG9rZW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcHVibGljL3JlZGVlbVRva2VuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxzRUFBc0U7QUFDdEUsNkVBQTBFO0FBQzFFLG1FQUFvRTtBQUNwRSw0REFBcUQ7QUFFckQsb0NBQTRDO0FBRTVDLFNBQXNCLFlBQVksQ0FBQyxVQUFzQjs7O1FBQ3ZELEVBQUU7UUFFRixNQUFNLFVBQVUsU0FBVyxVQUFVLENBQUMsVUFBVSxtQ0FBSSx1QkFBUSxDQUFDO1FBQzdELE1BQU0sUUFBUSxHQUFHLElBQUksaUJBQVMsRUFBRSxDQUFDO1FBQ2pDLEtBQUssUUFBUSxDQUFDO1FBRWQsVUFBVSxDQUFDLEtBQUssR0FBRyx3QkFBZ0IsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNoRCxNQUFNLFlBQVksU0FBRyxVQUFVLENBQUMsWUFBWSxtQ0FBSSxJQUFJLENBQUM7UUFDckQsTUFBTSxXQUFXLEdBQUcsTUFBTSx5Q0FBbUIsQ0FDM0MsVUFBVSxFQUNWLFFBQVEsRUFDUixZQUFZLENBQ2IsQ0FBQztRQUVGLE9BQU87WUFDTCxXQUFXO1lBQ1gsNENBQTRDO1lBQzVDLEtBQUssRUFBRSxNQUFNLHNDQUFtQixDQUM5QixXQUFXLEVBQ1gsUUFBUSxFQUNSLFlBQVksRUFDWixVQUFVLENBQ1g7U0FDRixDQUFDOztDQUNIO0FBekJELG9DQXlCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHF1ZXN0cmFkZUFwaUZhY3RvcnkgfSBmcm9tICcuLi9wcml2YXRlL2FwaS9fZ2V0UXVlc3RyYWRlQXBpJztcbmltcG9ydCB7IF9jcmVkZW50aWFsc0ZhY3RvcnkgfSBmcm9tICcuLi9wcml2YXRlL2F1dGgvX2NyZWRlbnRpYWxzRmFjdG9yeSc7XG5pbXBvcnQgeyBBcGlDYWxsUV8gfSBmcm9tICcuLi9wcml2YXRlL2NvcmUvbmV4dC1yYXRlLWxpbWl0ZXIvcXVldWUnO1xuaW1wb3J0IHsgZXJyb3Jsb2cgfSBmcm9tICcuLi9yZXNvdXJjZXMvc2lkZS1lZmZlY3RzJztcbmltcG9ydCB7IEFwaU9wdGlvbnMsIExvZ2dlciB9IGZyb20gJy4uL3R5cGVzY3JpcHQnO1xuaW1wb3J0IHsgcHJlVmFsaWRhdGVUb2tlbiB9IGZyb20gJy4uL3V0aWxzJztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHF1ZXN0cmFkZUFQSShhcGlPcHRpb25zOiBBcGlPcHRpb25zKSB7XG4gIC8vXG5cbiAgY29uc3QgZXJyb3Jsb2dlcjogTG9nZ2VyID0gYXBpT3B0aW9ucy5lcnJvcmxvZ2VyID8/IGVycm9ybG9nO1xuICBjb25zdCBhcGlDYWxsUSA9IG5ldyBBcGlDYWxsUV8oKTtcbiAgdm9pZCBhcGlDYWxsUTtcblxuICBhcGlPcHRpb25zLnRva2VuID0gcHJlVmFsaWRhdGVUb2tlbihhcGlPcHRpb25zKTtcbiAgY29uc3QgcHJveHlGYWN0b3J5ID0gYXBpT3B0aW9ucy5wcm94eUZhY3RvcnkgPz8gbnVsbDtcbiAgY29uc3QgY3JlZGVudGlhbHMgPSBhd2FpdCBfY3JlZGVudGlhbHNGYWN0b3J5KFxuICAgIGFwaU9wdGlvbnMsXG4gICAgYXBpQ2FsbFEsXG4gICAgcHJveHlGYWN0b3J5LFxuICApO1xuXG4gIHJldHVybiB7XG4gICAgY3JlZGVudGlhbHMsXG4gICAgLy8gWFhYOiBXT1JLSU5HIE9OIHF1ZXN0cmFkZUFwaUZhY3RvcnkgQ0FMTFNcbiAgICBxdEFwaTogYXdhaXQgcXVlc3RyYWRlQXBpRmFjdG9yeShcbiAgICAgIGNyZWRlbnRpYWxzLFxuICAgICAgYXBpQ2FsbFEsXG4gICAgICBwcm94eUZhY3RvcnksXG4gICAgICBlcnJvcmxvZ2VyLFxuICAgICksXG4gIH07XG59XG4iXX0=