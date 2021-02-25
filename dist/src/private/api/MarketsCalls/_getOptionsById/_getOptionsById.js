"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._getOptionsById = void 0;
const tslib_1 = require("tslib");
const utils_1 = require("../../../../utils");
// + _getOptionsById
/*
  |-···――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――···-|
*/
/** _getOptionsSymbols */
const _getOptionsById = (clientGetApi, errorlog = (...error) => error) => (symbolID) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        return (yield clientGetApi(`/symbols/${utils_1.urlEncode(symbolID)}/options`, {
            noCaching: true,
        })()).optionChain;
        /*
      |-···――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――···-|
        */
    }
    catch (error) {
        void errorlog(error);
        return [];
    }
});
exports._getOptionsById = _getOptionsById;
/*
  |-···――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――···-|
*/
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX2dldE9wdGlvbnNCeUlkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL3ByaXZhdGUvYXBpL01hcmtldHNDYWxscy9fZ2V0T3B0aW9uc0J5SWQvX2dldE9wdGlvbnNCeUlkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFNQSw2Q0FBOEM7QUFFOUMsb0JBQW9CO0FBQ3BCOztFQUVFO0FBQ0YseUJBQXlCO0FBQ2xCLE1BQU0sZUFBZSxHQUFHLENBQzdCLFlBR3FCLEVBQ3JCLFdBQW1CLENBQUMsR0FBRyxLQUFZLEVBQUUsRUFBRSxDQUFDLEtBQUssRUFDN0MsRUFBRSxDQUFDLENBQU8sUUFBZ0IsRUFBMkIsRUFBRTtJQUN2RCxJQUFJO1FBQ0YsT0FBTyxDQUNMLE1BQU0sWUFBWSxDQUNoQixZQUFZLGlCQUFTLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFDekM7WUFDRSxTQUFTLEVBQUUsSUFBSTtTQUNoQixDQUNGLEVBQUUsQ0FDSixDQUFDLFdBQVcsQ0FBQztRQUNkOztVQUVFO0tBQ0g7SUFBQyxPQUFPLEtBQUssRUFBRTtRQUNkLEtBQUssUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXJCLE9BQU8sRUFBRSxDQUFDO0tBQ1g7QUFDSCxDQUFDLENBQUEsQ0FBQztBQXhCVyxRQUFBLGVBQWUsbUJBd0IxQjtBQUNGOztFQUVFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBQcm94eUhhbmRsZXJPcHRpb25zIH0gZnJvbSAnLi4vLi4vLi4vLi4vcmVzb3VyY2VzL3NpZGUtZWZmZWN0cy90eXBlcyc7XG5pbXBvcnQgdHlwZSB7XG4gIElPcHRpb25DaGFpbixcbiAgSU9wdGlvbkNoYWlucyxcbiAgTG9nZ2VyLFxufSBmcm9tICcuLi8uLi8uLi8uLi90eXBlc2NyaXB0JztcbmltcG9ydCB7IHVybEVuY29kZSB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzJztcblxuLy8gKyBfZ2V0T3B0aW9uc0J5SWRcbi8qXG4gIHwtwrfCt8K34oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCVwrfCt8K3LXxcbiovXG4vKiogX2dldE9wdGlvbnNTeW1ib2xzICovXG5leHBvcnQgY29uc3QgX2dldE9wdGlvbnNCeUlkID0gKFxuICBjbGllbnRHZXRBcGk6IDxSPihcbiAgICBlbmRwb2ludDogc3RyaW5nLFxuICAgIGhhbmRsZXJPcHRpb25zOiBQcm94eUhhbmRsZXJPcHRpb25zLFxuICApID0+ICgpID0+IFByb21pc2U8Uj4sXG4gIGVycm9ybG9nOiBMb2dnZXIgPSAoLi4uZXJyb3I6IGFueVtdKSA9PiBlcnJvcixcbikgPT4gYXN5bmMgKHN5bWJvbElEOiBudW1iZXIpOiBQcm9taXNlPElPcHRpb25DaGFpbltdPiA9PiB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIChcbiAgICAgIGF3YWl0IGNsaWVudEdldEFwaTxJT3B0aW9uQ2hhaW5zPihcbiAgICAgICAgYC9zeW1ib2xzLyR7dXJsRW5jb2RlKHN5bWJvbElEKX0vb3B0aW9uc2AsXG4gICAgICAgIHtcbiAgICAgICAgICBub0NhY2hpbmc6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICApKClcbiAgICApLm9wdGlvbkNoYWluO1xuICAgIC8qXG4gIHwtwrfCt8K34oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCVwrfCt8K3LXxcbiAgICAqL1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHZvaWQgZXJyb3Jsb2coZXJyb3IpO1xuXG4gICAgcmV0dXJuIFtdO1xuICB9XG59O1xuLypcbiAgfC3Ct8K3wrfigJXigJXigJXigJXigJXigJXigJXigJXigJXigJXigJXigJXigJXigJXigJXigJXigJXigJXigJXigJXigJXigJXigJXigJXigJXigJXigJXigJXigJXigJXigJXigJXigJXigJXigJXigJXigJXigJXigJXigJXigJXigJXigJXigJXigJXigJXigJXigJXigJXigJXigJXigJXigJXigJXigJXigJXigJXigJXigJXigJXigJXigJXigJXigJXigJXigJXigJXigJXCt8K3wrctfFxuKi9cbiJdfQ==