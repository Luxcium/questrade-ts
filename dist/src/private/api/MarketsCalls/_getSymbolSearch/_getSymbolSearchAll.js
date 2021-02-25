"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._getSymbolSearchAll = void 0;
const tslib_1 = require("tslib");
const utils_1 = require("../../../../utils");
// + _getSymbolSearchAll
/** _getSymbolSearch */
const _getSymbolSearchAll = (clientGetApi, errorlog = (...error) => error) => (prefix, offset = 0) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        const _prefix = utils_1.urlEncode(`${prefix.toUpperCase()}`);
        const _offset = utils_1.urlEncode(`${offset}`);
        const _endpoint = `/symbols/search?prefix=${_prefix}&offset=${_offset}`;
        const _results = yield clientGetApi(_endpoint, {
            noCaching: true,
        })();
        if (_results && _results.symbols) {
            return _results.symbols.map(result => {
                const len = _results.symbols.length;
                result.count = len > 0 ? len : 0;
                return result;
            });
        }
        return _results.symbols;
    }
    catch (error) {
        void errorlog(error);
        return [];
    }
});
exports._getSymbolSearchAll = _getSymbolSearchAll;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX2dldFN5bWJvbFNlYXJjaEFsbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9wcml2YXRlL2FwaS9NYXJrZXRzQ2FsbHMvX2dldFN5bWJvbFNlYXJjaC9fZ2V0U3ltYm9sU2VhcmNoQWxsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFPQSw2Q0FBOEM7QUFFOUMsd0JBQXdCO0FBQ3hCLHVCQUF1QjtBQUNoQixNQUFNLG1CQUFtQixHQUFHLENBQ2pDLFlBR3FCLEVBQ3JCLFdBQW1CLENBQUMsR0FBRyxLQUFZLEVBQUUsRUFBRSxDQUFDLEtBQUssRUFDN0MsRUFBRSxDQUFDLENBQU8sTUFBYyxFQUFFLE1BQU0sR0FBRyxDQUFDLEVBQWtDLEVBQUU7SUFDeEUsSUFBSTtRQUNGLE1BQU0sT0FBTyxHQUFHLGlCQUFTLENBQUMsR0FBRyxNQUFNLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3JELE1BQU0sT0FBTyxHQUFHLGlCQUFTLENBQUMsR0FBRyxNQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZDLE1BQU0sU0FBUyxHQUFHLDBCQUEwQixPQUFPLFdBQVcsT0FBTyxFQUFFLENBQUM7UUFDeEUsTUFBTSxRQUFRLEdBQUcsTUFBTSxZQUFZLENBQXVCLFNBQVMsRUFBRTtZQUNuRSxTQUFTLEVBQUUsSUFBSTtTQUNoQixDQUFDLEVBQUUsQ0FBQztRQUVMLElBQUksUUFBUSxJQUFJLFFBQVEsQ0FBQyxPQUFPLEVBQUU7WUFDaEMsT0FBTyxRQUFRLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRTtnQkFDbkMsTUFBTSxHQUFHLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7Z0JBRXBDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBRWpDLE9BQU8sTUFBTSxDQUFDO1lBQ2hCLENBQUMsQ0FBQyxDQUFDO1NBQ0o7UUFFRCxPQUFPLFFBQVEsQ0FBQyxPQUFPLENBQUM7S0FDekI7SUFBQyxPQUFPLEtBQUssRUFBRTtRQUNkLEtBQUssUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXJCLE9BQU8sRUFBRSxDQUFDO0tBQ1g7QUFDSCxDQUFDLENBQUEsQ0FBQztBQS9CVyxRQUFBLG1CQUFtQix1QkErQjlCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHsgZXJyb3Jsb2cgfSBmcm9tICcuLi8uLi8uLi8uLi9yZXNvdXJjZXMvc2lkZS1lZmZlY3RzJztcbmltcG9ydCB0eXBlIHsgUHJveHlIYW5kbGVyT3B0aW9ucyB9IGZyb20gJy4uLy4uLy4uLy4uL3Jlc291cmNlcy9zaWRlLWVmZmVjdHMvdHlwZXMnO1xuaW1wb3J0IHR5cGUge1xuICBJU3ltYm9sU2VhcmNoUmVzdWx0LFxuICBJU3ltYm9sU2VhcmNoUmVzdWx0cyxcbiAgTG9nZ2VyLFxufSBmcm9tICcuLi8uLi8uLi8uLi90eXBlc2NyaXB0JztcbmltcG9ydCB7IHVybEVuY29kZSB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzJztcblxuLy8gKyBfZ2V0U3ltYm9sU2VhcmNoQWxsXG4vKiogX2dldFN5bWJvbFNlYXJjaCAqL1xuZXhwb3J0IGNvbnN0IF9nZXRTeW1ib2xTZWFyY2hBbGwgPSAoXG4gIGNsaWVudEdldEFwaTogPFI+KFxuICAgIGVuZHBvaW50OiBzdHJpbmcsXG4gICAgaGFuZGxlck9wdGlvbnM6IFByb3h5SGFuZGxlck9wdGlvbnMsXG4gICkgPT4gKCkgPT4gUHJvbWlzZTxSPixcbiAgZXJyb3Jsb2c6IExvZ2dlciA9ICguLi5lcnJvcjogYW55W10pID0+IGVycm9yLFxuKSA9PiBhc3luYyAocHJlZml4OiBzdHJpbmcsIG9mZnNldCA9IDApOiBQcm9taXNlPElTeW1ib2xTZWFyY2hSZXN1bHRbXT4gPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IF9wcmVmaXggPSB1cmxFbmNvZGUoYCR7cHJlZml4LnRvVXBwZXJDYXNlKCl9YCk7XG4gICAgY29uc3QgX29mZnNldCA9IHVybEVuY29kZShgJHtvZmZzZXR9YCk7XG4gICAgY29uc3QgX2VuZHBvaW50ID0gYC9zeW1ib2xzL3NlYXJjaD9wcmVmaXg9JHtfcHJlZml4fSZvZmZzZXQ9JHtfb2Zmc2V0fWA7XG4gICAgY29uc3QgX3Jlc3VsdHMgPSBhd2FpdCBjbGllbnRHZXRBcGk8SVN5bWJvbFNlYXJjaFJlc3VsdHM+KF9lbmRwb2ludCwge1xuICAgICAgbm9DYWNoaW5nOiB0cnVlLFxuICAgIH0pKCk7XG5cbiAgICBpZiAoX3Jlc3VsdHMgJiYgX3Jlc3VsdHMuc3ltYm9scykge1xuICAgICAgcmV0dXJuIF9yZXN1bHRzLnN5bWJvbHMubWFwKHJlc3VsdCA9PiB7XG4gICAgICAgIGNvbnN0IGxlbiA9IF9yZXN1bHRzLnN5bWJvbHMubGVuZ3RoO1xuXG4gICAgICAgIHJlc3VsdC5jb3VudCA9IGxlbiA+IDAgPyBsZW4gOiAwO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3Jlc3VsdHMuc3ltYm9scztcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICB2b2lkIGVycm9ybG9nKGVycm9yKTtcblxuICAgIHJldHVybiBbXTtcbiAgfVxufTtcbiJdfQ==