"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.timeoutPromise = void 0;
const tslib_1 = require("tslib");
/* eslint-disable radar/no-identical-functions */
const util_1 = require("util");
function timeout_(fn, value, delay) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return util_1.promisify(setTimeout)(delay, value).then(fn);
    });
}
exports.timeoutPromise = {
    delay(delay) {
        return {
            fn(fnx) {
                return {
                    value(value) {
                        return timeout_(fnx, value, delay);
                    },
                };
            },
            value(value) {
                return {
                    fn(fnx) {
                        return timeout_(fnx, value, delay);
                    },
                };
            },
        };
    },
    fn(fnx) {
        return {
            delay(delay) {
                return {
                    value(value) {
                        return timeout_(fnx, value, delay);
                    },
                };
            },
            value(value) {
                return {
                    delay(delay) {
                        return timeout_(fnx, value, delay);
                    },
                };
            },
        };
    },
    value(value) {
        return {
            delay(delay) {
                return {
                    fn(fnx) {
                        return timeout_(fnx, value, delay);
                    },
                };
            },
            fn(fnx) {
                return {
                    delay(delay) {
                        return timeout_(fnx, value, delay);
                    },
                };
            },
        };
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZW91dC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlscy90aW1lb3V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxpREFBaUQ7QUFDakQsK0JBQWlDO0FBRWpDLFNBQWUsUUFBUSxDQUFJLEVBQW1CLEVBQUUsS0FBUSxFQUFFLEtBQWE7O1FBQ3JFLE9BQU8sZ0JBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3RELENBQUM7Q0FBQTtBQUVZLFFBQUEsY0FBYyxHQUFHO0lBQzVCLEtBQUssQ0FBQyxLQUFhO1FBQ2pCLE9BQU87WUFDTCxFQUFFLENBQUksR0FBb0I7Z0JBQ3hCLE9BQU87b0JBQ0wsS0FBSyxDQUFDLEtBQVE7d0JBQ1osT0FBTyxRQUFRLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztvQkFDckMsQ0FBQztpQkFDRixDQUFDO1lBQ0osQ0FBQztZQUNELEtBQUssQ0FBSSxLQUFRO2dCQUNmLE9BQU87b0JBQ0wsRUFBRSxDQUFDLEdBQW9CO3dCQUNyQixPQUFPLFFBQVEsQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO29CQUNyQyxDQUFDO2lCQUNGLENBQUM7WUFDSixDQUFDO1NBQ0YsQ0FBQztJQUNKLENBQUM7SUFDRCxFQUFFLENBQUksR0FBb0I7UUFDeEIsT0FBTztZQUNMLEtBQUssQ0FBQyxLQUFhO2dCQUNqQixPQUFPO29CQUNMLEtBQUssQ0FBQyxLQUFRO3dCQUNaLE9BQU8sUUFBUSxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7b0JBQ3JDLENBQUM7aUJBQ0YsQ0FBQztZQUNKLENBQUM7WUFDRCxLQUFLLENBQUMsS0FBUTtnQkFDWixPQUFPO29CQUNMLEtBQUssQ0FBQyxLQUFhO3dCQUNqQixPQUFPLFFBQVEsQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO29CQUNyQyxDQUFDO2lCQUNGLENBQUM7WUFDSixDQUFDO1NBQ0YsQ0FBQztJQUNKLENBQUM7SUFDRCxLQUFLLENBQUksS0FBUTtRQUNmLE9BQU87WUFDTCxLQUFLLENBQUMsS0FBYTtnQkFDakIsT0FBTztvQkFDTCxFQUFFLENBQUMsR0FBb0I7d0JBQ3JCLE9BQU8sUUFBUSxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7b0JBQ3JDLENBQUM7aUJBQ0YsQ0FBQztZQUNKLENBQUM7WUFDRCxFQUFFLENBQUMsR0FBb0I7Z0JBQ3JCLE9BQU87b0JBQ0wsS0FBSyxDQUFDLEtBQWE7d0JBQ2pCLE9BQU8sUUFBUSxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7b0JBQ3JDLENBQUM7aUJBQ0YsQ0FBQztZQUNKLENBQUM7U0FDRixDQUFDO0lBQ0osQ0FBQztDQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSByYWRhci9uby1pZGVudGljYWwtZnVuY3Rpb25zICovXG5pbXBvcnQgeyBwcm9taXNpZnkgfSBmcm9tICd1dGlsJztcblxuYXN5bmMgZnVuY3Rpb24gdGltZW91dF88VD4oZm46ICh2YWw6IFQpID0+IGFueSwgdmFsdWU6IFQsIGRlbGF5OiBudW1iZXIpIHtcbiAgcmV0dXJuIHByb21pc2lmeShzZXRUaW1lb3V0KShkZWxheSwgdmFsdWUpLnRoZW4oZm4pO1xufVxuXG5leHBvcnQgY29uc3QgdGltZW91dFByb21pc2UgPSB7XG4gIGRlbGF5KGRlbGF5OiBudW1iZXIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZm48VD4oZm54OiAodmFsOiBUKSA9PiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB2YWx1ZSh2YWx1ZTogVCkge1xuICAgICAgICAgICAgcmV0dXJuIHRpbWVvdXRfKGZueCwgdmFsdWUsIGRlbGF5KTtcbiAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgfSxcbiAgICAgIHZhbHVlPFQ+KHZhbHVlOiBUKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZm4oZm54OiAodmFsOiBUKSA9PiBhbnkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aW1lb3V0XyhmbngsIHZhbHVlLCBkZWxheSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgIH0sXG4gICAgfTtcbiAgfSxcbiAgZm48VD4oZm54OiAodmFsOiBUKSA9PiBhbnkpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZGVsYXkoZGVsYXk6IG51bWJlcikge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHZhbHVlKHZhbHVlOiBUKSB7XG4gICAgICAgICAgICByZXR1cm4gdGltZW91dF8oZm54LCB2YWx1ZSwgZGVsYXkpO1xuICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICB9LFxuICAgICAgdmFsdWUodmFsdWU6IFQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBkZWxheShkZWxheTogbnVtYmVyKSB7XG4gICAgICAgICAgICByZXR1cm4gdGltZW91dF8oZm54LCB2YWx1ZSwgZGVsYXkpO1xuICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICB9LFxuICAgIH07XG4gIH0sXG4gIHZhbHVlPFQ+KHZhbHVlOiBUKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRlbGF5KGRlbGF5OiBudW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBmbihmbng6ICh2YWw6IFQpID0+IGFueSkge1xuICAgICAgICAgICAgcmV0dXJuIHRpbWVvdXRfKGZueCwgdmFsdWUsIGRlbGF5KTtcbiAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgfSxcbiAgICAgIGZuKGZueDogKHZhbDogVCkgPT4gYW55KSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZGVsYXkoZGVsYXk6IG51bWJlcikge1xuICAgICAgICAgICAgcmV0dXJuIHRpbWVvdXRfKGZueCwgdmFsdWUsIGRlbGF5KTtcbiAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgfSxcbiAgICB9O1xuICB9LFxufTtcbiJdfQ==