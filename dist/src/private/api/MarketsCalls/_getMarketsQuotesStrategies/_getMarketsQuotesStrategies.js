"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._getMarketsQuotesStrategies = void 0;
const tslib_1 = require("tslib");
const _getMarketsQuotesStrategies = (clientPostApi, errorlog = (...error) => error) => (strategyVariantRequestData) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield clientPostApi(strategyVariantRequestData)('/markets/quotes/strategies', { noCaching: true })();
    }
    catch (error) {
        void errorlog(error);
        return {
            /** ask price */
            askPrice: Number.NaN,
            /** bid price */
            bidPrice: Number.NaN,
            /** delta */
            delta: Number.NaN,
            /** gamma */
            gamma: Number.NaN,
            /** whether or not the data is real-time */
            isRealTime: false,
            /** open price */
            openPrice: Number.NaN,
            /** rho */
            rho: Number.NaN,
            /** theta */
            theta: Number.NaN,
            /** underlying name */
            underlying: 'ERROR',
            /** underlying ID */
            underlyingId: Number.NaN,
            /** variant ID corresponding to variant in request */
            variantId: Number.NaN,
            /** vega */
            vega: Number.NaN,
            /** volatility */
            volatility: Number.NaN,
        };
    }
});
exports._getMarketsQuotesStrategies = _getMarketsQuotesStrategies;
// https://api01.iq.questrade.com/v1/markets/quotes/strategies
// https://api01.iq.questrade.com/v1/markets/quotes/strategies
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX2dldE1hcmtldHNRdW90ZXNTdHJhdGVnaWVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL3ByaXZhdGUvYXBpL01hcmtldHNDYWxscy9fZ2V0TWFya2V0c1F1b3Rlc1N0cmF0ZWdpZXMvX2dldE1hcmtldHNRdW90ZXNTdHJhdGVnaWVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFPTyxNQUFNLDJCQUEyQixHQUFHLENBQ3pDLGFBS3FCLEVBQ3JCLFdBQW1CLENBQUMsR0FBRyxLQUFZLEVBQUUsRUFBRSxDQUFDLEtBQUssRUFDN0MsRUFBRSxDQUFDLENBQ0gsMEJBQWtELEVBQ3RCLEVBQUU7SUFDOUIsSUFBSTtRQUNGLE9BQU8sTUFBTSxhQUFhLENBQ3hCLDBCQUEwQixDQUMzQixDQUFvQiw0QkFBNEIsRUFBRSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUM7S0FDM0U7SUFBQyxPQUFPLEtBQUssRUFBRTtRQUNkLEtBQUssUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXJCLE9BQU87WUFDTCxnQkFBZ0I7WUFDaEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxHQUFHO1lBQ3BCLGdCQUFnQjtZQUNoQixRQUFRLEVBQUUsTUFBTSxDQUFDLEdBQUc7WUFDcEIsWUFBWTtZQUNaLEtBQUssRUFBRSxNQUFNLENBQUMsR0FBRztZQUNqQixZQUFZO1lBQ1osS0FBSyxFQUFFLE1BQU0sQ0FBQyxHQUFHO1lBQ2pCLDJDQUEyQztZQUMzQyxVQUFVLEVBQUUsS0FBSztZQUNqQixpQkFBaUI7WUFDakIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxHQUFHO1lBQ3JCLFVBQVU7WUFDVixHQUFHLEVBQUUsTUFBTSxDQUFDLEdBQUc7WUFDZixZQUFZO1lBQ1osS0FBSyxFQUFFLE1BQU0sQ0FBQyxHQUFHO1lBQ2pCLHNCQUFzQjtZQUN0QixVQUFVLEVBQUUsT0FBTztZQUNuQixvQkFBb0I7WUFDcEIsWUFBWSxFQUFFLE1BQU0sQ0FBQyxHQUFHO1lBQ3hCLHFEQUFxRDtZQUNyRCxTQUFTLEVBQUUsTUFBTSxDQUFDLEdBQUc7WUFDckIsV0FBVztZQUNYLElBQUksRUFBRSxNQUFNLENBQUMsR0FBRztZQUNoQixpQkFBaUI7WUFDakIsVUFBVSxFQUFFLE1BQU0sQ0FBQyxHQUFHO1NBQ3ZCLENBQUM7S0FDSDtBQUNILENBQUMsQ0FBQSxDQUFDO0FBL0NXLFFBQUEsMkJBQTJCLCtCQStDdEM7QUFFRiw4REFBOEQ7QUFDOUQsOERBQThEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBQcm94eUhhbmRsZXJPcHRpb25zIH0gZnJvbSAnLi4vLi4vLi4vLi4vcmVzb3VyY2VzL3NpZGUtZWZmZWN0cy90eXBlcyc7XG5pbXBvcnQgdHlwZSB7XG4gIElTdHJhdGVnaWVzUXVvdGVzLFxuICBMb2dnZXIsXG4gIFN0cmF0ZWd5VmFyaWFudFJlcXVlc3QsXG59IGZyb20gJy4uLy4uLy4uLy4uL3R5cGVzY3JpcHQnO1xuXG5leHBvcnQgY29uc3QgX2dldE1hcmtldHNRdW90ZXNTdHJhdGVnaWVzID0gKFxuICBjbGllbnRQb3N0QXBpOiA8RD4oXG4gICAgcG9zdERhdGE6IEQgfCBudWxsLFxuICApID0+IDxSPihcbiAgICBlbmRwb2ludDogc3RyaW5nLFxuICAgIGhhbmRsZXJPcHRpb25zOiBQcm94eUhhbmRsZXJPcHRpb25zLFxuICApID0+ICgpID0+IFByb21pc2U8Uj4sXG4gIGVycm9ybG9nOiBMb2dnZXIgPSAoLi4uZXJyb3I6IGFueVtdKSA9PiBlcnJvcixcbikgPT4gYXN5bmMgKFxuICBzdHJhdGVneVZhcmlhbnRSZXF1ZXN0RGF0YTogU3RyYXRlZ3lWYXJpYW50UmVxdWVzdCxcbik6IFByb21pc2U8SVN0cmF0ZWdpZXNRdW90ZXM+ID0+IHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gYXdhaXQgY2xpZW50UG9zdEFwaTxTdHJhdGVneVZhcmlhbnRSZXF1ZXN0PihcbiAgICAgIHN0cmF0ZWd5VmFyaWFudFJlcXVlc3REYXRhLFxuICAgICk8SVN0cmF0ZWdpZXNRdW90ZXM+KCcvbWFya2V0cy9xdW90ZXMvc3RyYXRlZ2llcycsIHsgbm9DYWNoaW5nOiB0cnVlIH0pKCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgdm9pZCBlcnJvcmxvZyhlcnJvcik7XG5cbiAgICByZXR1cm4ge1xuICAgICAgLyoqIGFzayBwcmljZSAqL1xuICAgICAgYXNrUHJpY2U6IE51bWJlci5OYU4sXG4gICAgICAvKiogYmlkIHByaWNlICovXG4gICAgICBiaWRQcmljZTogTnVtYmVyLk5hTixcbiAgICAgIC8qKiBkZWx0YSAqL1xuICAgICAgZGVsdGE6IE51bWJlci5OYU4sXG4gICAgICAvKiogZ2FtbWEgKi9cbiAgICAgIGdhbW1hOiBOdW1iZXIuTmFOLFxuICAgICAgLyoqIHdoZXRoZXIgb3Igbm90IHRoZSBkYXRhIGlzIHJlYWwtdGltZSAqL1xuICAgICAgaXNSZWFsVGltZTogZmFsc2UsXG4gICAgICAvKiogb3BlbiBwcmljZSAqL1xuICAgICAgb3BlblByaWNlOiBOdW1iZXIuTmFOLFxuICAgICAgLyoqIHJobyAqL1xuICAgICAgcmhvOiBOdW1iZXIuTmFOLFxuICAgICAgLyoqIHRoZXRhICovXG4gICAgICB0aGV0YTogTnVtYmVyLk5hTixcbiAgICAgIC8qKiB1bmRlcmx5aW5nIG5hbWUgKi9cbiAgICAgIHVuZGVybHlpbmc6ICdFUlJPUicsXG4gICAgICAvKiogdW5kZXJseWluZyBJRCAqL1xuICAgICAgdW5kZXJseWluZ0lkOiBOdW1iZXIuTmFOLFxuICAgICAgLyoqIHZhcmlhbnQgSUQgY29ycmVzcG9uZGluZyB0byB2YXJpYW50IGluIHJlcXVlc3QgKi9cbiAgICAgIHZhcmlhbnRJZDogTnVtYmVyLk5hTixcbiAgICAgIC8qKiB2ZWdhICovXG4gICAgICB2ZWdhOiBOdW1iZXIuTmFOLFxuICAgICAgLyoqIHZvbGF0aWxpdHkgKi9cbiAgICAgIHZvbGF0aWxpdHk6IE51bWJlci5OYU4sXG4gICAgfTtcbiAgfVxufTtcblxuLy8gaHR0cHM6Ly9hcGkwMS5pcS5xdWVzdHJhZGUuY29tL3YxL21hcmtldHMvcXVvdGVzL3N0cmF0ZWdpZXNcbi8vIGh0dHBzOi8vYXBpMDEuaXEucXVlc3RyYWRlLmNvbS92MS9tYXJrZXRzL3F1b3Rlcy9zdHJhdGVnaWVzXG4iXX0=