"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._getQuotesByIds = void 0;
const tslib_1 = require("tslib");
const utils_1 = require("../../../../utils");
// + _getQuotesByID
/** _getQuotesFromSymbolID */
const _getQuotesByIds = (clientGetApi, errorlog = (...error) => error) => (ids) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        return (yield clientGetApi(`/markets/quotes?ids=${utils_1.urlEncode(ids.join(','))}`, {
            noCaching: true,
        })()).quotes;
    }
    catch (error) {
        void errorlog(error);
        return [];
    }
});
exports._getQuotesByIds = _getQuotesByIds;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX2dldFF1b3Rlc0J5SWRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL3ByaXZhdGUvYXBpL01hcmtldHNDYWxscy9fZ2V0UXVvdGVzQnlJZHMvX2dldFF1b3Rlc0J5SWRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSw2Q0FBOEM7QUFFOUMsbUJBQW1CO0FBQ25CLDZCQUE2QjtBQUN0QixNQUFNLGVBQWUsR0FBRyxDQUM3QixZQUdxQixFQUNyQixXQUFtQixDQUFDLEdBQUcsS0FBWSxFQUFFLEVBQUUsQ0FBQyxLQUFLLEVBQzdDLEVBQUUsQ0FBQyxDQUFPLEdBQWEsRUFBcUIsRUFBRTtJQUM5QyxJQUFJO1FBQ0YsT0FBTyxDQUNMLE1BQU0sWUFBWSxDQUNoQix1QkFBdUIsaUJBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFDakQ7WUFDRSxTQUFTLEVBQUUsSUFBSTtTQUNoQixDQUNGLEVBQUUsQ0FDSixDQUFDLE1BQU0sQ0FBQztLQUNWO0lBQUMsT0FBTyxLQUFLLEVBQUU7UUFDZCxLQUFLLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVyQixPQUFPLEVBQUUsQ0FBQztLQUNYO0FBQ0gsQ0FBQyxDQUFBLENBQUM7QUFyQlcsUUFBQSxlQUFlLG1CQXFCMUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IFByb3h5SGFuZGxlck9wdGlvbnMgfSBmcm9tICcuLi8uLi8uLi8uLi9yZXNvdXJjZXMvc2lkZS1lZmZlY3RzL3R5cGVzJztcbmltcG9ydCB0eXBlIHsgSVF1b3RlLCBJUXVvdGVzLCBMb2dnZXIgfSBmcm9tICcuLi8uLi8uLi8uLi90eXBlc2NyaXB0JztcbmltcG9ydCB7IHVybEVuY29kZSB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzJztcblxuLy8gKyBfZ2V0UXVvdGVzQnlJRFxuLyoqIF9nZXRRdW90ZXNGcm9tU3ltYm9sSUQgKi9cbmV4cG9ydCBjb25zdCBfZ2V0UXVvdGVzQnlJZHMgPSAoXG4gIGNsaWVudEdldEFwaTogPFI+KFxuICAgIGVuZHBvaW50OiBzdHJpbmcsXG4gICAgaGFuZGxlck9wdGlvbnM6IFByb3h5SGFuZGxlck9wdGlvbnMsXG4gICkgPT4gKCkgPT4gUHJvbWlzZTxSPixcbiAgZXJyb3Jsb2c6IExvZ2dlciA9ICguLi5lcnJvcjogYW55W10pID0+IGVycm9yLFxuKSA9PiBhc3luYyAoaWRzOiBudW1iZXJbXSk6IFByb21pc2U8SVF1b3RlW10+ID0+IHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gKFxuICAgICAgYXdhaXQgY2xpZW50R2V0QXBpPElRdW90ZXM+KFxuICAgICAgICBgL21hcmtldHMvcXVvdGVzP2lkcz0ke3VybEVuY29kZShpZHMuam9pbignLCcpKX1gLFxuICAgICAgICB7XG4gICAgICAgICAgbm9DYWNoaW5nOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgKSgpXG4gICAgKS5xdW90ZXM7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgdm9pZCBlcnJvcmxvZyhlcnJvcik7XG5cbiAgICByZXR1cm4gW107XG4gIH1cbn07XG4iXX0=