"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._getSymbolSearch = void 0;
const tslib_1 = require("tslib");
const _getSymbolSearchAll_1 = require("./_getSymbolSearchAll");
// + _getSymbolSearch
/** _getSymbolSearch */
const _getSymbolSearch = (clientGetApi, errorlog = (...error) => error) => (prefix, offset = 0) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        //
        const symbols = yield _getSymbolSearchAll_1._getSymbolSearchAll(clientGetApi)(prefix, offset);
        const count = symbols.length;
        let result = null;
        if (symbols[0]) {
            [result] = symbols;
            result.count = count || 0;
            result.all = symbols;
            return [result];
        }
        return [];
        //
    }
    catch (error) {
        //
        void errorlog(error);
        return [];
        //
    }
});
exports._getSymbolSearch = _getSymbolSearch;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX2dldFN5bWJvbFNlYXJjaC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9wcml2YXRlL2FwaS9NYXJrZXRzQ2FsbHMvX2dldFN5bWJvbFNlYXJjaC9fZ2V0U3ltYm9sU2VhcmNoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFHQSwrREFBNEQ7QUFFNUQscUJBQXFCO0FBQ3JCLHVCQUF1QjtBQUNoQixNQUFNLGdCQUFnQixHQUFHLENBQzlCLFlBR3FCLEVBQ3JCLFdBQW1CLENBQUMsR0FBRyxLQUFZLEVBQUUsRUFBRSxDQUFDLEtBQUssRUFDN0MsRUFBRSxDQUFDLENBQU8sTUFBYyxFQUFFLE1BQU0sR0FBRyxDQUFDLEVBQWtDLEVBQUU7SUFDeEUsSUFBSTtRQUNGLEVBQUU7UUFDRixNQUFNLE9BQU8sR0FBRyxNQUFNLHlDQUFtQixDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztRQUN4RSxNQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDO1FBQzdCLElBQUksTUFBTSxHQUErQixJQUFJLENBQUM7UUFFOUMsSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDZCxDQUFDLE1BQU0sQ0FBQyxHQUFHLE9BQU8sQ0FBQztZQUNuQixNQUFNLENBQUMsS0FBSyxHQUFHLEtBQUssSUFBSSxDQUFDLENBQUM7WUFDMUIsTUFBTSxDQUFDLEdBQUcsR0FBRyxPQUFPLENBQUM7WUFFckIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ2pCO1FBRUQsT0FBTyxFQUFFLENBQUM7UUFDVixFQUFFO0tBQ0g7SUFBQyxPQUFPLEtBQUssRUFBRTtRQUNkLEVBQUU7UUFDRixLQUFLLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVyQixPQUFPLEVBQUUsQ0FBQztRQUVWLEVBQUU7S0FDSDtBQUNILENBQUMsQ0FBQSxDQUFDO0FBL0JXLFFBQUEsZ0JBQWdCLG9CQStCM0IiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgeyBlcnJvcmxvZyB9IGZyb20gJy4uLy4uLy4uLy4uL3Jlc291cmNlcy9zaWRlLWVmZmVjdHMnO1xuaW1wb3J0IHR5cGUgeyBQcm94eUhhbmRsZXJPcHRpb25zIH0gZnJvbSAnLi4vLi4vLi4vLi4vcmVzb3VyY2VzL3NpZGUtZWZmZWN0cy90eXBlcyc7XG5pbXBvcnQgdHlwZSB7IElTeW1ib2xTZWFyY2hSZXN1bHQsIExvZ2dlciB9IGZyb20gJy4uLy4uLy4uLy4uL3R5cGVzY3JpcHQnO1xuaW1wb3J0IHsgX2dldFN5bWJvbFNlYXJjaEFsbCB9IGZyb20gJy4vX2dldFN5bWJvbFNlYXJjaEFsbCc7XG5cbi8vICsgX2dldFN5bWJvbFNlYXJjaFxuLyoqIF9nZXRTeW1ib2xTZWFyY2ggKi9cbmV4cG9ydCBjb25zdCBfZ2V0U3ltYm9sU2VhcmNoID0gKFxuICBjbGllbnRHZXRBcGk6IDxSPihcbiAgICBlbmRwb2ludDogc3RyaW5nLFxuICAgIGhhbmRsZXJPcHRpb25zOiBQcm94eUhhbmRsZXJPcHRpb25zLFxuICApID0+ICgpID0+IFByb21pc2U8Uj4sXG4gIGVycm9ybG9nOiBMb2dnZXIgPSAoLi4uZXJyb3I6IGFueVtdKSA9PiBlcnJvcixcbikgPT4gYXN5bmMgKHByZWZpeDogc3RyaW5nLCBvZmZzZXQgPSAwKTogUHJvbWlzZTxJU3ltYm9sU2VhcmNoUmVzdWx0W10+ID0+IHtcbiAgdHJ5IHtcbiAgICAvL1xuICAgIGNvbnN0IHN5bWJvbHMgPSBhd2FpdCBfZ2V0U3ltYm9sU2VhcmNoQWxsKGNsaWVudEdldEFwaSkocHJlZml4LCBvZmZzZXQpO1xuICAgIGNvbnN0IGNvdW50ID0gc3ltYm9scy5sZW5ndGg7XG4gICAgbGV0IHJlc3VsdDogSVN5bWJvbFNlYXJjaFJlc3VsdCB8IG51bGwgPSBudWxsO1xuXG4gICAgaWYgKHN5bWJvbHNbMF0pIHtcbiAgICAgIFtyZXN1bHRdID0gc3ltYm9scztcbiAgICAgIHJlc3VsdC5jb3VudCA9IGNvdW50IHx8IDA7XG4gICAgICByZXN1bHQuYWxsID0gc3ltYm9scztcblxuICAgICAgcmV0dXJuIFtyZXN1bHRdO1xuICAgIH1cblxuICAgIHJldHVybiBbXTtcbiAgICAvL1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIC8vXG4gICAgdm9pZCBlcnJvcmxvZyhlcnJvcik7XG5cbiAgICByZXR1cm4gW107XG5cbiAgICAvL1xuICB9XG59O1xuIl19