"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._getMarketsQuotesOptions = void 0;
const tslib_1 = require("tslib");
const _getMarketsQuotesOptions = (clientPostApi) => (optionIds, underlyingId, expiryDate, optionType = null, minstrikePrice = 0, maxstrikePrice = 0) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const postData = !!optionIds && optionIds.length > 0
        ? {
            optionIds,
        }
        : {
            filters: [
                {
                    expiryDate,
                    maxstrikePrice: maxstrikePrice || 0,
                    minstrikePrice: minstrikePrice || 0,
                    optionType: optionType || void 0,
                    underlyingId,
                },
            ],
        };
    return (yield clientPostApi(postData)('/markets/quotes/options', { noCaching: true })()).quotes;
});
exports._getMarketsQuotesOptions = _getMarketsQuotesOptions;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX2dldE1hcmtldHNRdW90ZXNPcHRpb25zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL3ByaXZhdGUvYXBpL01hcmtldHNDYWxscy9fZ2V0TWFya2V0c1F1b3Rlc09wdGlvbnMvX2dldE1hcmtldHNRdW90ZXNPcHRpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFTTyxNQUFNLHdCQUF3QixHQUFHLENBQ3RDLGFBS3FCLEVBQ3JCLEVBQUUsQ0FBQyxDQUNILFNBQTBCLEVBQzFCLFlBQW9CLEVBQ3BCLFVBQWtCLEVBQ2xCLGFBQTRCLElBQUksRUFDaEMsaUJBQWdDLENBQUMsRUFDakMsaUJBQWdDLENBQUMsRUFDUCxFQUFFO0lBQzVCLE1BQU0sUUFBUSxHQUNaLENBQUMsQ0FBQyxTQUFTLElBQUksU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDO1FBQ2pDLENBQUMsQ0FBQztZQUNFLFNBQVM7U0FDVjtRQUNILENBQUMsQ0FBQztZQUNFLE9BQU8sRUFBRTtnQkFDUDtvQkFDRSxVQUFVO29CQUNWLGNBQWMsRUFBRSxjQUFjLElBQUksQ0FBQztvQkFDbkMsY0FBYyxFQUFFLGNBQWMsSUFBSSxDQUFDO29CQUNuQyxVQUFVLEVBQUUsVUFBVSxJQUFJLEtBQUssQ0FBQztvQkFDaEMsWUFBWTtpQkFDYjthQUNGO1NBQ0YsQ0FBQztJQUVSLE9BQU8sQ0FDTCxNQUFNLGFBQWEsQ0FBa0IsUUFBUSxDQUFDLENBQzVDLHlCQUF5QixFQUN6QixFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsQ0FDcEIsRUFBRSxDQUNKLENBQUMsTUFBTSxDQUFDO0FBQ1gsQ0FBQyxDQUFBLENBQUM7QUF0Q1csUUFBQSx3QkFBd0IsNEJBc0NuQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgUHJveHlIYW5kbGVyT3B0aW9ucyB9IGZyb20gJy4uLy4uLy4uLy4uL3Jlc291cmNlcy9zaWRlLWVmZmVjdHMvdHlwZXMnO1xuaW1wb3J0IHR5cGUge1xuICBGaWx0ZXJzQXJyYXksXG4gIElPcHRpb25zUXVvdGUsXG4gIElPcHRpb25zUXVvdGVzLFxuICBPcHRpb25zSWRBcnJheSxcbiAgT3B0aW9uc1Bvc3REYXRhLFxufSBmcm9tICcuLi8uLi8uLi8uLi90eXBlc2NyaXB0JztcblxuZXhwb3J0IGNvbnN0IF9nZXRNYXJrZXRzUXVvdGVzT3B0aW9ucyA9IChcbiAgY2xpZW50UG9zdEFwaTogPEQ+KFxuICAgIHBvc3REYXRhOiBEIHwgbnVsbCxcbiAgKSA9PiA8Uj4oXG4gICAgZW5kcG9pbnQ6IHN0cmluZyxcbiAgICBoYW5kbGVyT3B0aW9uczogUHJveHlIYW5kbGVyT3B0aW9ucyxcbiAgKSA9PiAoKSA9PiBQcm9taXNlPFI+LFxuKSA9PiBhc3luYyAoXG4gIG9wdGlvbklkczogbnVtYmVyW10gfCBudWxsLFxuICB1bmRlcmx5aW5nSWQ6IG51bWJlcixcbiAgZXhwaXJ5RGF0ZTogc3RyaW5nLFxuICBvcHRpb25UeXBlOiBzdHJpbmcgfCBudWxsID0gbnVsbCxcbiAgbWluc3RyaWtlUHJpY2U6IG51bWJlciB8IG51bGwgPSAwLFxuICBtYXhzdHJpa2VQcmljZTogbnVtYmVyIHwgbnVsbCA9IDAsXG4pOiBQcm9taXNlPElPcHRpb25zUXVvdGVbXT4gPT4ge1xuICBjb25zdCBwb3N0RGF0YTogRmlsdGVyc0FycmF5IHwgT3B0aW9uc0lkQXJyYXkgPVxuICAgICEhb3B0aW9uSWRzICYmIG9wdGlvbklkcy5sZW5ndGggPiAwXG4gICAgICA/IHtcbiAgICAgICAgICBvcHRpb25JZHMsXG4gICAgICAgIH1cbiAgICAgIDoge1xuICAgICAgICAgIGZpbHRlcnM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgZXhwaXJ5RGF0ZSxcbiAgICAgICAgICAgICAgbWF4c3RyaWtlUHJpY2U6IG1heHN0cmlrZVByaWNlIHx8IDAsXG4gICAgICAgICAgICAgIG1pbnN0cmlrZVByaWNlOiBtaW5zdHJpa2VQcmljZSB8fCAwLFxuICAgICAgICAgICAgICBvcHRpb25UeXBlOiBvcHRpb25UeXBlIHx8IHZvaWQgMCxcbiAgICAgICAgICAgICAgdW5kZXJseWluZ0lkLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9O1xuXG4gIHJldHVybiAoXG4gICAgYXdhaXQgY2xpZW50UG9zdEFwaTxPcHRpb25zUG9zdERhdGE+KHBvc3REYXRhKTxJT3B0aW9uc1F1b3Rlcz4oXG4gICAgICAnL21hcmtldHMvcXVvdGVzL29wdGlvbnMnLFxuICAgICAgeyBub0NhY2hpbmc6IHRydWUgfSxcbiAgICApKClcbiAgKS5xdW90ZXM7XG59O1xuIl19