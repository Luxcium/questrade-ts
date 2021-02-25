"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMyToken = void 0;
const dotenv_1 = require("dotenv");
function getMyToken() {
    var _a, _b;
    dotenv_1.config();
    if (process.env.NODE_ENV === 'development') {
        return (_a = process.env.QUESTRADE_API_TOKEN_JS) !== null && _a !== void 0 ? _a : '';
    }
    return (_b = process.env.QUESTRADE_API_TOKEN) !== null && _b !== void 0 ? _b : '';
}
exports.getMyToken = getMyToken;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0TXlUb2tlbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9yZXNvdXJjZXMvc2lkZS1lZmZlY3RzL2RlZmF1bHQtYmVoYXZpb3VyL2dldE15VG9rZW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsbUNBQWdDO0FBRWhDLFNBQWdCLFVBQVU7O0lBQ3hCLGVBQU0sRUFBRSxDQUFDO0lBQ1QsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsS0FBSyxhQUFhLEVBQUU7UUFDMUMsYUFBTyxPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixtQ0FBSSxFQUFFLENBQUM7S0FDakQ7SUFFRCxhQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLG1DQUFJLEVBQUUsQ0FBQztBQUMvQyxDQUFDO0FBUEQsZ0NBT0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25maWcgfSBmcm9tICdkb3RlbnYnO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TXlUb2tlbigpOiBzdHJpbmcge1xuICBjb25maWcoKTtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgcmV0dXJuIHByb2Nlc3MuZW52LlFVRVNUUkFERV9BUElfVE9LRU5fSlMgPz8gJyc7XG4gIH1cblxuICByZXR1cm4gcHJvY2Vzcy5lbnYuUVVFU1RSQURFX0FQSV9UT0tFTiA/PyAnJztcbn1cbiJdfQ==