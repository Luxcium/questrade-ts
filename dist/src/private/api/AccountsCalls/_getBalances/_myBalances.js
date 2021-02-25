"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._myBalances = void 0;
const tslib_1 = require("tslib");
const _myBalances = (myBalances, errorlog = (...error) => error) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        const [perCADcurrent, perUSDcurrent] = myBalances.perCurrencyBalances;
        const [combinedCADcurrent, combinedUSDcurrent,] = myBalances.combinedBalances;
        const [perCADstartOfDay, perUSDstartOfDay,] = myBalances.sodPerCurrencyBalances;
        const [combinedCADstartOfDay, combinedUSDstartOfDay,] = myBalances.sodCombinedBalances;
        const perCurrency = {
            CAD: {
                current: perCADcurrent,
                startOfDay: perCADstartOfDay,
            },
            USD: {
                current: perUSDcurrent,
                startOfDay: perUSDstartOfDay,
            },
        };
        const combined = {
            CAD: {
                current: combinedCADcurrent,
                startOfDay: combinedCADstartOfDay,
            },
            USD: {
                current: combinedUSDcurrent,
                startOfDay: combinedUSDstartOfDay,
            },
        };
        const CAD = {
            combined: {
                current: combinedCADcurrent,
                startOfDay: combinedCADstartOfDay,
            },
            perCurrency: {
                current: perCADcurrent,
                startOfDay: perCADstartOfDay,
            },
        };
        const USD = {
            combined: {
                current: combinedUSDcurrent,
                startOfDay: combinedUSDstartOfDay,
            },
            perCurrency: {
                current: perUSDcurrent,
                startOfDay: perUSDstartOfDay,
            },
        };
        const current = {
            combined: {
                CAD: combinedCADcurrent,
                USD: combinedUSDcurrent,
            },
            perCurrency: {
                CAD: perCADcurrent,
                USD: perUSDcurrent,
            },
        };
        const startOfDay = {
            combined: {
                CAD: combinedCADstartOfDay,
                USD: combinedUSDstartOfDay,
            },
            perCurrency: {
                CAD: perCADstartOfDay,
                USD: perUSDstartOfDay,
            },
        };
        return { CAD, USD, combined, current, perCurrency, startOfDay };
    }
    catch (error) {
        void errorlog(error);
        return {
            CAD: {
                combined: {
                    current: {
                        buyingPower: Number.NaN,
                        cash: Number.NaN,
                        currency: 'CAD',
                        isRealTime: false,
                        maintenanceExcess: Number.NaN,
                        marketValue: Number.NaN,
                        totalEquity: Number.NaN,
                    },
                    startOfDay: {
                        buyingPower: Number.NaN,
                        cash: Number.NaN,
                        currency: 'CAD',
                        isRealTime: false,
                        maintenanceExcess: Number.NaN,
                        marketValue: Number.NaN,
                        totalEquity: Number.NaN,
                    },
                },
                perCurrency: {
                    current: {
                        buyingPower: Number.NaN,
                        cash: Number.NaN,
                        currency: 'CAD',
                        isRealTime: false,
                        maintenanceExcess: Number.NaN,
                        marketValue: Number.NaN,
                        totalEquity: Number.NaN,
                    },
                    startOfDay: {
                        buyingPower: Number.NaN,
                        cash: Number.NaN,
                        currency: 'CAD',
                        isRealTime: false,
                        maintenanceExcess: Number.NaN,
                        marketValue: Number.NaN,
                        totalEquity: Number.NaN,
                    },
                },
            },
            USD: {
                combined: {
                    current: {
                        buyingPower: Number.NaN,
                        cash: Number.NaN,
                        currency: 'USD',
                        isRealTime: false,
                        maintenanceExcess: Number.NaN,
                        marketValue: Number.NaN,
                        totalEquity: Number.NaN,
                    },
                    startOfDay: {
                        buyingPower: Number.NaN,
                        cash: Number.NaN,
                        currency: 'USD',
                        isRealTime: false,
                        maintenanceExcess: Number.NaN,
                        marketValue: Number.NaN,
                        totalEquity: Number.NaN,
                    },
                },
                perCurrency: {
                    current: {
                        buyingPower: Number.NaN,
                        cash: Number.NaN,
                        currency: 'USD',
                        isRealTime: false,
                        maintenanceExcess: Number.NaN,
                        marketValue: Number.NaN,
                        totalEquity: Number.NaN,
                    },
                    startOfDay: {
                        buyingPower: Number.NaN,
                        cash: Number.NaN,
                        currency: 'USD',
                        isRealTime: false,
                        maintenanceExcess: Number.NaN,
                        marketValue: Number.NaN,
                        totalEquity: Number.NaN,
                    },
                },
            },
            combined: {
                CAD: {
                    current: {
                        buyingPower: Number.NaN,
                        cash: Number.NaN,
                        currency: 'CAD',
                        isRealTime: false,
                        maintenanceExcess: Number.NaN,
                        marketValue: Number.NaN,
                        totalEquity: Number.NaN,
                    },
                    startOfDay: {
                        buyingPower: Number.NaN,
                        cash: Number.NaN,
                        currency: 'CAD',
                        isRealTime: false,
                        maintenanceExcess: Number.NaN,
                        marketValue: Number.NaN,
                        totalEquity: Number.NaN,
                    },
                },
                USD: {
                    current: {
                        buyingPower: Number.NaN,
                        cash: Number.NaN,
                        currency: 'USD',
                        isRealTime: false,
                        maintenanceExcess: Number.NaN,
                        marketValue: Number.NaN,
                        totalEquity: Number.NaN,
                    },
                    startOfDay: {
                        buyingPower: Number.NaN,
                        cash: Number.NaN,
                        currency: 'USD',
                        isRealTime: false,
                        maintenanceExcess: Number.NaN,
                        marketValue: Number.NaN,
                        totalEquity: Number.NaN,
                    },
                },
            },
            current: {
                combined: {
                    CAD: {
                        buyingPower: Number.NaN,
                        cash: Number.NaN,
                        currency: 'CAD',
                        isRealTime: false,
                        maintenanceExcess: Number.NaN,
                        marketValue: Number.NaN,
                        totalEquity: Number.NaN,
                    },
                    USD: {
                        buyingPower: Number.NaN,
                        cash: Number.NaN,
                        currency: 'USD',
                        isRealTime: false,
                        maintenanceExcess: Number.NaN,
                        marketValue: Number.NaN,
                        totalEquity: Number.NaN,
                    },
                },
                perCurrency: {
                    CAD: {
                        buyingPower: Number.NaN,
                        cash: Number.NaN,
                        currency: 'CAD',
                        isRealTime: false,
                        maintenanceExcess: Number.NaN,
                        marketValue: Number.NaN,
                        totalEquity: Number.NaN,
                    },
                    USD: {
                        buyingPower: Number.NaN,
                        cash: Number.NaN,
                        currency: 'USD',
                        isRealTime: false,
                        maintenanceExcess: Number.NaN,
                        marketValue: Number.NaN,
                        totalEquity: Number.NaN,
                    },
                },
            },
            perCurrency: {
                CAD: {
                    current: {
                        buyingPower: Number.NaN,
                        cash: Number.NaN,
                        currency: 'CAD',
                        isRealTime: false,
                        maintenanceExcess: Number.NaN,
                        marketValue: Number.NaN,
                        totalEquity: Number.NaN,
                    },
                    startOfDay: {
                        buyingPower: Number.NaN,
                        cash: Number.NaN,
                        currency: 'CAD',
                        isRealTime: false,
                        maintenanceExcess: Number.NaN,
                        marketValue: Number.NaN,
                        totalEquity: Number.NaN,
                    },
                },
                USD: {
                    current: {
                        buyingPower: Number.NaN,
                        cash: Number.NaN,
                        currency: 'USD',
                        isRealTime: false,
                        maintenanceExcess: Number.NaN,
                        marketValue: Number.NaN,
                        totalEquity: Number.NaN,
                    },
                    startOfDay: {
                        buyingPower: Number.NaN,
                        cash: Number.NaN,
                        currency: 'USD',
                        isRealTime: false,
                        maintenanceExcess: Number.NaN,
                        marketValue: Number.NaN,
                        totalEquity: Number.NaN,
                    },
                },
            },
            startOfDay: {
                combined: {
                    CAD: {
                        buyingPower: Number.NaN,
                        cash: Number.NaN,
                        currency: 'CAD',
                        isRealTime: false,
                        maintenanceExcess: Number.NaN,
                        marketValue: Number.NaN,
                        totalEquity: Number.NaN,
                    },
                    USD: {
                        buyingPower: Number.NaN,
                        cash: Number.NaN,
                        currency: 'USD',
                        isRealTime: false,
                        maintenanceExcess: Number.NaN,
                        marketValue: Number.NaN,
                        totalEquity: Number.NaN,
                    },
                },
                perCurrency: {
                    CAD: {
                        buyingPower: Number.NaN,
                        cash: Number.NaN,
                        currency: 'CAD',
                        isRealTime: false,
                        maintenanceExcess: Number.NaN,
                        marketValue: Number.NaN,
                        totalEquity: Number.NaN,
                    },
                    USD: {
                        buyingPower: Number.NaN,
                        cash: Number.NaN,
                        currency: 'USD',
                        isRealTime: false,
                        maintenanceExcess: Number.NaN,
                        marketValue: Number.NaN,
                        totalEquity: Number.NaN,
                    },
                },
            },
        };
    }
});
exports._myBalances = _myBalances;
/*
 {
      "perCurrencyBalances": [
        {
          "currency": "CAD",
          "cash": 100.15,
          "marketValue": 0,
          "totalEquity": 100.15,
          "buyingPower": 100.15,
          "maintenanceExcess": 100.15,
          "isRealTime": true
        },
        {
          "currency": "USD",
          "cash": 100.13,
          "marketValue": 0,
          "totalEquity": 100.13,
          "buyingPower": 100.13,
          "maintenanceExcess": 100.13,
          "isRealTime": false
        }
      ],
      "combinedBalances": [
        {
          "currency": "CAD",
          "cash": 200.25,
          "marketValue": 0,
          "totalEquity": 200.25,
          "buyingPower": 200.25,
          "maintenanceExcess": 200.25,
          "isRealTime": false
        },
        {
          "currency": "USD",
          "cash": 200.23,
          "marketValue": 0,
          "totalEquity": 200.23,
          "buyingPower": 200.23,
          "maintenanceExcess": 200.23,
          "isRealTime": false
        }
      ],
      "sodPerCurrencyBalances": [
        {
          "currency": "CAD",
          "cash": -100.05,
          "marketValue": 0,
          "totalEquity": -100.05,
          "buyingPower": -100.05,
          "maintenanceExcess": -100.05,
          "isRealTime": true
        },
        {
          "currency": "USD",
          "cash": -100.03,
          "marketValue": 0,
          "totalEquity": -100.03,
          "buyingPower": -100.03,
          "maintenanceExcess": -100.03,
          "isRealTime": true
        }
      ],
      "sodCombinedBalances": [
        {
          "currency": "CAD",
          "cash": -200.55,
          "marketValue": 0,
          "totalEquity": -200.55,
          "buyingPower": -200.55,
          "maintenanceExcess": -200.55,
          "isRealTime": true
        },
        {
          "currency": "USD",
          "cash": -200.33,
          "marketValue": 0,
          "totalEquity": -200.33,
          "buyingPower": -200.33,
          "maintenanceExcess": -200.33,
          "isRealTime": true
        }
      ]
    }

*/
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX215QmFsYW5jZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvcHJpdmF0ZS9hcGkvQWNjb3VudHNDYWxscy9fZ2V0QmFsYW5jZXMvX215QmFsYW5jZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVPLE1BQU0sV0FBVyxHQUFHLENBQ3pCLFVBQXFCLEVBQ3JCLFdBQW1CLENBQUMsR0FBRyxLQUFZLEVBQUUsRUFBRSxDQUFDLEtBQUssRUFDdkIsRUFBRTtJQUN4QixJQUFJO1FBQ0YsTUFBTSxDQUFDLGFBQWEsRUFBRSxhQUFhLENBQUMsR0FBRyxVQUFVLENBQUMsbUJBQW1CLENBQUM7UUFDdEUsTUFBTSxDQUNKLGtCQUFrQixFQUNsQixrQkFBa0IsRUFDbkIsR0FBRyxVQUFVLENBQUMsZ0JBQWdCLENBQUM7UUFFaEMsTUFBTSxDQUNKLGdCQUFnQixFQUNoQixnQkFBZ0IsRUFDakIsR0FBRyxVQUFVLENBQUMsc0JBQXNCLENBQUM7UUFFdEMsTUFBTSxDQUNKLHFCQUFxQixFQUNyQixxQkFBcUIsRUFDdEIsR0FBRyxVQUFVLENBQUMsbUJBQW1CLENBQUM7UUFFbkMsTUFBTSxXQUFXLEdBQUc7WUFDbEIsR0FBRyxFQUFFO2dCQUNILE9BQU8sRUFBRSxhQUFhO2dCQUN0QixVQUFVLEVBQUUsZ0JBQWdCO2FBQzdCO1lBQ0QsR0FBRyxFQUFFO2dCQUNILE9BQU8sRUFBRSxhQUFhO2dCQUN0QixVQUFVLEVBQUUsZ0JBQWdCO2FBQzdCO1NBQ0YsQ0FBQztRQUVGLE1BQU0sUUFBUSxHQUFHO1lBQ2YsR0FBRyxFQUFFO2dCQUNILE9BQU8sRUFBRSxrQkFBa0I7Z0JBQzNCLFVBQVUsRUFBRSxxQkFBcUI7YUFDbEM7WUFDRCxHQUFHLEVBQUU7Z0JBQ0gsT0FBTyxFQUFFLGtCQUFrQjtnQkFDM0IsVUFBVSxFQUFFLHFCQUFxQjthQUNsQztTQUNGLENBQUM7UUFFRixNQUFNLEdBQUcsR0FBRztZQUNWLFFBQVEs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Rzt3QkFDN0IsV0FBVyxFQUFFLE1BQU0sQ0FBQyxHQUFHO3dCQUN2QixXQUFXLEVBQUUsTUFBTSxDQUFDLEdBQUc7cUJBQ3hCO29CQUNELEdBQUcsRUFBRTt3QkFDSCxXQUFXLEVBQUUsTUFBTSxDQUFDLEdBQUc7d0JBQ3ZCLElBQUksRUFBRSxNQUFNLENBQUMsR0FBRzt3QkFDaEIsUUFBUSxFQUFFLEtBQUs7d0JBQ2YsVUFBVSxFQUFFLEtBQUs7d0JBQ2pCLGlCQUFpQixFQUFFLE1BQU0sQ0FBQyxHQUFHO3dCQUM3QixXQUFXLEVBQUUsTUFBTSxDQUFDLEdBQUc7d0JBQ3ZCLFdBQVcsRUFBRSxNQUFNLENBQUMsR0FBRztxQkFDeEI7aUJBQ0Y7YUFDRjtTQUNGLENBQUM7S0FDSDtBQUNILENBQUMsQ0FBQSxDQUFDO0FBMVZXLFFBQUEsV0FBVyxlQTBWdEI7QUFFRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBb0ZFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBJQmFsYW5jZXMsIElNeUJhbGFuY2VzLCBMb2dnZXIgfSBmcm9tICcuLi8uLi8uLi8uLi90eXBlc2NyaXB0JztcblxuZXhwb3J0IGNvbnN0IF9teUJhbGFuY2VzID0gYXN5bmMgKFxuICBteUJhbGFuY2VzOiBJQmFsYW5jZXMsXG4gIGVycm9ybG9nOiBMb2dnZXIgPSAoLi4uZXJyb3I6IGFueVtdKSA9PiBlcnJvcixcbik6IFByb21pc2U8SU15QmFsYW5jZXM+ID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBbcGVyQ0FEY3VycmVudCwgcGVyVVNEY3VycmVudF0gPSBteUJhbGFuY2VzLnBlckN1cnJlbmN5QmFsYW5jZXM7XG4gICAgY29uc3QgW1xuICAgICAgY29tYmluZWRDQURjdXJyZW50LFxuICAgICAgY29tYmluZWRVU0RjdXJyZW50LFxuICAgIF0gPSBteUJhbGFuY2VzLmNvbWJpbmVkQmFsYW5jZXM7XG5cbiAgICBjb25zdCBbXG4gICAgICBwZXJDQURzdGFydE9mRGF5LFxuICAgICAgcGVyVVNEc3RhcnRPZkRheSxcbiAgICBdID0gbXlCYWxhbmNlcy5zb2RQZXJDdXJyZW5jeUJhbGFuY2VzO1xuXG4gICAgY29uc3QgW1xuICAgICAgY29tYmluZWRDQURzdGFydE9mRGF5LFxuICAgICAgY29tYmluZWRVU0RzdGFydE9mRGF5LFxuICAgIF0gPSBteUJhbGFuY2VzLnNvZENvbWJpbmVkQmFsYW5jZXM7XG5cbiAgICBjb25zdCBwZXJDdXJyZW5jeSA9IHtcbiAgICAgIENBRDoge1xuICAgICAgICBjdXJyZW50OiBwZXJDQURjdXJyZW50LFxuICAgICAgICBzdGFydE9mRGF5OiBwZXJDQURzdGFydE9mRGF5LFxuICAgICAgfSxcbiAgICAgIFVTRDoge1xuICAgICAgICBjdXJyZW50OiBwZXJVU0RjdXJyZW50LFxuICAgICAgICBzdGFydE9mRGF5OiBwZXJVU0RzdGFydE9mRGF5LFxuICAgICAgfSxcbiAgICB9O1xuXG4gICAgY29uc3QgY29tYmluZWQgPSB7XG4gICAgICBDQUQ6IHtcbiAgICAgICAgY3VycmVudDogY29tYmluZWRDQURjdXJyZW50LFxuICAgICAgICBzdGFydE9mRGF5OiBjb21iaW5lZENBRHN0YXJ0T2ZEYXksXG4gICAgICB9LFxuICAgICAgVVNEOiB7XG4gICAgICAgIGN1cnJlbnQ6IGNvbWJpbmVkVVNEY3VycmVudCxcbiAgICAgICAgc3RhcnRPZkRheTogY29tYmluZWRVU0RzdGFydE9mRGF5LFxuICAgICAgfSxcbiAgICB9O1xuXG4gICAgY29uc3QgQ0FEID0ge1xuICAgICAgY29tYmluZWQ6IHtcbiAgICAgICAgY3VycmVudDogY29tYmluZWRDQURjdXJyZW50LFxuICAgICAgICBzdGFydE9mRGF5OiBjb21iaW5lZENBRHN0YXJ0T2ZEYXksXG4gICAgICB9LFxuICAgICAgcGVyQ3VycmVuY3k6IHtcbiAgICAgICAgY3VycmVudDogcGVyQ0FEY3VycmVudCxcbiAgICAgICAgc3RhcnRPZkRheTogcGVyQ0FEc3RhcnRPZkRheSxcbiAgICAgIH0sXG4gICAgfTtcblxuICAgIGNvbnN0IFVTRCA9IHtcbiAgICAgIGNvbWJpbmVkOiB7XG4gICAgICAgIGN1cnJlbnQ6IGNvbWJpbmVkVVNEY3VycmVudCxcbiAgICAgICAgc3RhcnRPZkRheTogY29tYmluZWRVU0RzdGFydE9mRGF5LFxuICAgICAgfSxcbiAgICAgIHBlckN1cnJlbmN5OiB7XG4gICAgICAgIGN1cnJlbnQ6IHBlclVTRGN1cnJlbnQsXG4gICAgICAgIHN0YXJ0T2ZEYXk6IHBlclVTRHN0YXJ0T2ZEYXksXG4gICAgICB9LFxuICAgIH07XG5cbiAgICBjb25zdCBjdXJyZW50ID0ge1xuICAgICAgY29tYmluZWQ6IHtcbiAgICAgICAgQ0FEOiBjb21iaW5lZENBRGN1cnJlbnQsXG4gICAgICAgIFVTRDogY29tYmluZWRVU0RjdXJyZW50LFxuICAgICAgfSxcbiAgICAgIHBlckN1cnJlbmN5OiB7XG4gICAgICAgIENBRDogcGVyQ0FEY3VycmVudCxcbiAgICAgICAgVVNEOiBwZXJVU0RjdXJyZW50LFxuICAgICAgfSxcbiAgICB9O1xuXG4gICAgY29uc3Qgc3RhcnRPZkRheSA9IHtcbiAgICAgIGNvbWJpbmVkOiB7XG4gICAgICAgIENBRDogY29tYmluZWRDQURzdGFydE9mRGF5LFxuICAgICAgICBVU0Q6IGNvbWJpbmVkVVNEc3RhcnRPZkRheSxcbiAgICAgIH0sXG4gICAgICBwZXJDdXJyZW5jeToge1xuICAgICAgICBDQUQ6IHBlckNBRHN0YXJ0T2ZEYXksXG4gICAgICAgIFVTRDogcGVyVVNEc3RhcnRPZkRheSxcbiAgICAgIH0sXG4gICAgfTtcblxuICAgIHJldHVybiB7IENBRCwgVVNELCBjb21iaW5lZCwgY3VycmVudCwgcGVyQ3VycmVuY3ksIHN0YXJ0T2ZEYXkgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICB2b2lkIGVycm9ybG9nKGVycm9yKTtcblxuICAgIHJldHVybiB7XG4gICAgICBDQUQ6IHtcbiAgICAgICAgY29tYmluZWQ6IHtcbiAgICAgICAgICBjdXJyZW50OiB7XG4gICAgICAgICAgICBidXlpbmdQb3dlcjogTnVtYmVyLk5hTixcbiAgICAgICAgICAgIGNhc2g6IE51bWJlci5OYU4sXG4gICAgICAgICAgICBjdXJyZW5jeTogJ0NBRCcsXG4gICAgICAgICAgICBpc1JlYWxUaW1lOiBmYWxzZSxcbiAgICAgICAgICAgIG1haW50ZW5hbmNlRXhjZXNzOiBOdW1iZXIuTmFOLFxuICAgICAgICAgICAgbWFya2V0VmFsdWU6IE51bWJlci5OYU4sXG4gICAgICAgICAgICB0b3RhbEVxdWl0eTogTnVtYmVyLk5hTixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHN0YXJ0T2ZEYXk6IHtcbiAgICAgICAgICAgIGJ1eWluZ1Bvd2VyOiBOdW1iZXIuTmFOLFxuICAgICAgICAgICAgY2FzaDogTnVtYmVyLk5hTixcbiAgICAgICAgICAgIGN1cnJlbmN5OiAnQ0FEJyxcbiAgICAgICAgICAgIGlzUmVhbFRpbWU6IGZhbHNlLFxuICAgICAgICAgICAgbWFpbnRlbmFuY2VFeGNlc3M6IE51bWJlci5OYU4sXG4gICAgICAgICAgICBtYXJrZXRWYWx1ZTogTnVtYmVyLk5hTixcbiAgICAgICAgICAgIHRvdGFsRXF1aXR5OiBOdW1iZXIuTmFOLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHBlckN1cnJlbmN5OiB7XG4gICAgICAgICAgY3VycmVudDoge1xuICAgICAgICAgICAgYnV5aW5nUG93ZXI6IE51bWJlci5OYU4sXG4gICAgICAgICAgICBjYXNoOiBOdW1iZXIuTmFOLFxuICAgICAgICAgICAgY3VycmVuY3k6ICdDQUQnLFxuICAgICAgICAgICAgaXNSZWFsVGltZTogZmFsc2UsXG4gICAgICAgICAgICBtYWludGVuYW5jZUV4Y2VzczogTnVtYmVyLk5hTixcbiAgICAgICAgICAgIG1hcmtldFZhbHVlOiBOdW1iZXIuTmFOLFxuICAgICAgICAgICAgdG90YWxFcXVpdHk6IE51bWJlci5OYU4sXG4gICAgICAgICAgfSxcbiAgICAgICAgICBzdGFydE9mRGF5OiB7XG4gICAgICAgICAgICBidXlpbmdQb3dlcjogTnVtYmVyLk5hTixcbiAgICAgICAgICAgIGNhc2g6IE51bWJlci5OYU4sXG4gICAgICAgICAgICBjdXJyZW5jeTogJ0NBRCcsXG4gICAgICAgICAgICBpc1JlYWxUaW1lOiBmYWxzZSxcbiAgICAgICAgICAgIG1haW50ZW5hbmNlRXhjZXNzOiBOdW1iZXIuTmFOLFxuICAgICAgICAgICAgbWFya2V0VmFsdWU6IE51bWJlci5OYU4sXG4gICAgICAgICAgICB0b3RhbEVxdWl0eTogTnVtYmVyLk5hTixcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIFVTRDoge1xuICAgICAgICBjb21iaW5lZDoge1xuICAgICAgICAgIGN1cnJlbnQ6IHtcbiAgICAgICAgICAgIGJ1eWluZ1Bvd2VyOiBOdW1iZXIuTmFOLFxuICAgICAgICAgICAgY2FzaDogTnVtYmVyLk5hTixcbiAgICAgICAgICAgIGN1cnJlbmN5OiAnVVNEJyxcbiAgICAgICAgICAgIGlzUmVhbFRpbWU6IGZhbHNlLFxuICAgICAgICAgICAgbWFpbnRlbmFuY2VFeGNlc3M6IE51bWJlci5OYU4sXG4gICAgICAgICAgICBtYXJrZXRWYWx1ZTogTnVtYmVyLk5hTixcbiAgICAgICAgICAgIHRvdGFsRXF1aXR5OiBOdW1iZXIuTmFOLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgc3RhcnRPZkRheToge1xuICAgICAgICAgICAgYnV5aW5nUG93ZXI6IE51bWJlci5OYU4sXG4gICAgICAgICAgICBjYXNoOiBOdW1iZXIuTmFOLFxuICAgICAgICAgICAgY3VycmVuY3k6ICdVU0QnLFxuICAgICAgICAgICAgaXNSZWFsVGltZTogZmFsc2UsXG4gICAgICAgICAgICBtYWludGVuYW5jZUV4Y2VzczogTnVtYmVyLk5hTixcbiAgICAgICAgICAgIG1hcmtldFZhbHVlOiBOdW1iZXIuTmFOLFxuICAgICAgICAgICAgdG90YWxFcXVpdHk6IE51bWJlci5OYU4sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgcGVyQ3VycmVuY3k6IHtcbiAgICAgICAgICBjdXJyZW50OiB7XG4gICAgICAgICAgICBidXlpbmdQb3dlcjogTnVtYmVyLk5hTixcbiAgICAgICAgICAgIGNhc2g6IE51bWJlci5OYU4sXG4gICAgICAgICAgICBjdXJyZW5jeTogJ1VTRCcsXG4gICAgICAgICAgICBpc1JlYWxUaW1lOiBmYWxzZSxcbiAgICAgICAgICAgIG1haW50ZW5hbmNlRXhjZXNzOiBOdW1iZXIuTmFOLFxuICAgICAgICAgICAgbWFya2V0VmFsdWU6IE51bWJlci5OYU4sXG4gICAgICAgICAgICB0b3RhbEVxdWl0eTogTnVtYmVyLk5hTixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHN0YXJ0T2ZEYXk6IHtcbiAgICAgICAgICAgIGJ1eWluZ1Bvd2VyOiBOdW1iZXIuTmFOLFxuICAgICAgICAgICAgY2FzaDogTnVtYmVyLk5hTixcbiAgICAgICAgICAgIGN1cnJlbmN5OiAnVVNEJyxcbiAgICAgICAgICAgIGlzUmVhbFRpbWU6IGZhbHNlLFxuICAgICAgICAgICAgbWFpbnRlbmFuY2VFeGNlc3M6IE51bWJlci5OYU4sXG4gICAgICAgICAgICBtYXJrZXRWYWx1ZTogTnVtYmVyLk5hTixcbiAgICAgICAgICAgIHRvdGFsRXF1aXR5OiBOdW1iZXIuTmFOLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgY29tYmluZWQ6IHtcbiAgICAgICAgQ0FEOiB7XG4gICAgICAgICAgY3VycmVudDoge1xuICAgICAgICAgICAgYnV5aW5nUG93ZXI6IE51bWJlci5OYU4sXG4gICAgICAgICAgICBjYXNoOiBOdW1iZXIuTmFOLFxuICAgICAgICAgICAgY3VycmVuY3k6ICdDQUQnLFxuICAgICAgICAgICAgaXNSZWFsVGltZTogZmFsc2UsXG4gICAgICAgICAgICBtYWludGVuYW5jZUV4Y2VzczogTnVtYmVyLk5hTixcbiAgICAgICAgICAgIG1hcmtldFZhbHVlOiBOdW1iZXIuTmFOLFxuICAgICAgICAgICAgdG90YWxFcXVpdHk6IE51bWJlci5OYU4sXG4gICAgICAgICAgfSxcbiAgICAgICAgICBzdGFydE9mRGF5OiB7XG4gICAgICAgICAgICBidXlpbmdQb3dlcjogTnVtYmVyLk5hTixcbiAgICAgICAgICAgIGNhc2g6IE51bWJlci5OYU4sXG4gICAgICAgICAgICBjdXJyZW5jeTogJ0NBRCcsXG4gICAgICAgICAgICBpc1JlYWxUaW1lOiBmYWxzZSxcbiAgICAgICAgICAgIG1haW50ZW5hbmNlRXhjZXNzOiBOdW1iZXIuTmFOLFxuICAgICAgICAgICAgbWFya2V0VmFsdWU6IE51bWJlci5OYU4sXG4gICAgICAgICAgICB0b3RhbEVxdWl0eTogTnVtYmVyLk5hTixcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBVU0Q6IHtcbiAgICAgICAgICBjdXJyZW50OiB7XG4gICAgICAgICAgICBidXlpbmdQb3dlcjogTnVtYmVyLk5hTixcbiAgICAgICAgICAgIGNhc2g6IE51bWJlci5OYU4sXG4gICAgICAgICAgICBjdXJyZW5jeTogJ1VTRCcsXG4gICAgICAgICAgICBpc1JlYWxUaW1lOiBmYWxzZSxcbiAgICAgICAgICAgIG1haW50ZW5hbmNlRXhjZXNzOiBOdW1iZXIuTmFOLFxuICAgICAgICAgICAgbWFya2V0VmFsdWU6IE51bWJlci5OYU4sXG4gICAgICAgICAgICB0b3RhbEVxdWl0eTogTnVtYmVyLk5hTixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHN0YXJ0T2ZEYXk6IHtcbiAgICAgICAgICAgIGJ1eWluZ1Bvd2VyOiBOdW1iZXIuTmFOLFxuICAgICAgICAgICAgY2FzaDogTnVtYmVyLk5hTixcbiAgICAgICAgICAgIGN1cnJlbmN5OiAnVVNEJyxcbiAgICAgICAgICAgIGlzUmVhbFRpbWU6IGZhbHNlLFxuICAgICAgICAgICAgbWFpbnRlbmFuY2VFeGNlc3M6IE51bWJlci5OYU4sXG4gICAgICAgICAgICBtYXJrZXRWYWx1ZTogTnVtYmVyLk5hTixcbiAgICAgICAgICAgIHRvdGFsRXF1aXR5OiBOdW1iZXIuTmFOLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgY3VycmVudDoge1xuICAgICAgICBjb21iaW5lZDoge1xuICAgICAgICAgIENBRDoge1xuICAgICAgICAgICAgYnV5aW5nUG93ZXI6IE51bWJlci5OYU4sXG4gICAgICAgICAgICBjYXNoOiBOdW1iZXIuTmFOLFxuICAgICAgICAgICAgY3VycmVuY3k6ICdDQUQnLFxuICAgICAgICAgICAgaXNSZWFsVGltZTogZmFsc2UsXG4gICAgICAgICAgICBtYWludGVuYW5jZUV4Y2VzczogTnVtYmVyLk5hTixcbiAgICAgICAgICAgIG1hcmtldFZhbHVlOiBOdW1iZXIuTmFOLFxuICAgICAgICAgICAgdG90YWxFcXVpdHk6IE51bWJlci5OYU4sXG4gICAgICAgICAgfSxcbiAgICAgICAgICBVU0Q6IHtcbiAgICAgICAgICAgIGJ1eWluZ1Bvd2VyOiBOdW1iZXIuTmFOLFxuICAgICAgICAgICAgY2FzaDogTnVtYmVyLk5hTixcbiAgICAgICAgICAgIGN1cnJlbmN5OiAnVVNEJyxcbiAgICAgICAgICAgIGlzUmVhbFRpbWU6IGZhbHNlLFxuICAgICAgICAgICAgbWFpbnRlbmFuY2VFeGNlc3M6IE51bWJlci5OYU4sXG4gICAgICAgICAgICBtYXJrZXRWYWx1ZTogTnVtYmVyLk5hTixcbiAgICAgICAgICAgIHRvdGFsRXF1aXR5OiBOdW1iZXIuTmFOLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHBlckN1cnJlbmN5OiB7XG4gICAgICAgICAgQ0FEOiB7XG4gICAgICAgICAgICBidXlpbmdQb3dlcjogTnVtYmVyLk5hTixcbiAgICAgICAgICAgIGNhc2g6IE51bWJlci5OYU4sXG4gICAgICAgICAgICBjdXJyZW5jeTogJ0NBRCcsXG4gICAgICAgICAgICBpc1JlYWxUaW1lOiBmYWxzZSxcbiAgICAgICAgICAgIG1haW50ZW5hbmNlRXhjZXNzOiBOdW1iZXIuTmFOLFxuICAgICAgICAgICAgbWFya2V0VmFsdWU6IE51bWJlci5OYU4sXG4gICAgICAgICAgICB0b3RhbEVxdWl0eTogTnVtYmVyLk5hTixcbiAgICAgICAgICB9LFxuICAgICAgICAgIFVTRDoge1xuICAgICAgICAgICAgYnV5aW5nUG93ZXI6IE51bWJlci5OYU4sXG4gICAgICAgICAgICBjYXNoOiBOdW1iZXIuTmFOLFxuICAgICAgICAgICAgY3VycmVuY3k6ICdVU0QnLFxuICAgICAgICAgICAgaXNSZWFsVGltZTogZmFsc2UsXG4gICAgICAgICAgICBtYWludGVuYW5jZUV4Y2VzczogTnVtYmVyLk5hTixcbiAgICAgICAgICAgIG1hcmtldFZhbHVlOiBOdW1iZXIuTmFOLFxuICAgICAgICAgICAgdG90YWxFcXVpdHk6IE51bWJlci5OYU4sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBwZXJDdXJyZW5jeToge1xuICAgICAgICBDQUQ6IHtcbiAgICAgICAgICBjdXJyZW50OiB7XG4gICAgICAgICAgICBidXlpbmdQb3dlcjogTnVtYmVyLk5hTixcbiAgICAgICAgICAgIGNhc2g6IE51bWJlci5OYU4sXG4gICAgICAgICAgICBjdXJyZW5jeTogJ0NBRCcsXG4gICAgICAgICAgICBpc1JlYWxUaW1lOiBmYWxzZSxcbiAgICAgICAgICAgIG1haW50ZW5hbmNlRXhjZXNzOiBOdW1iZXIuTmFOLFxuICAgICAgICAgICAgbWFya2V0VmFsdWU6IE51bWJlci5OYU4sXG4gICAgICAgICAgICB0b3RhbEVxdWl0eTogTnVtYmVyLk5hTixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHN0YXJ0T2ZEYXk6IHtcbiAgICAgICAgICAgIGJ1eWluZ1Bvd2VyOiBOdW1iZXIuTmFOLFxuICAgICAgICAgICAgY2FzaDogTnVtYmVyLk5hTixcbiAgICAgICAgICAgIGN1cnJlbmN5OiAnQ0FEJyxcbiAgICAgICAgICAgIGlzUmVhbFRpbWU6IGZhbHNlLFxuICAgICAgICAgICAgbWFpbnRlbmFuY2VFeGNlc3M6IE51bWJlci5OYU4sXG4gICAgICAgICAgICBtYXJrZXRWYWx1ZTogTnVtYmVyLk5hTixcbiAgICAgICAgICAgIHRvdGFsRXF1aXR5OiBOdW1iZXIuTmFOLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIFVTRDoge1xuICAgICAgICAgIGN1cnJlbnQ6IHtcbiAgICAgICAgICAgIGJ1eWluZ1Bvd2VyOiBOdW1iZXIuTmFOLFxuICAgICAgICAgICAgY2FzaDogTnVtYmVyLk5hTixcbiAgICAgICAgICAgIGN1cnJlbmN5OiAnVVNEJyxcbiAgICAgICAgICAgIGlzUmVhbFRpbWU6IGZhbHNlLFxuICAgICAgICAgICAgbWFpbnRlbmFuY2VFeGNlc3M6IE51bWJlci5OYU4sXG4gICAgICAgICAgICBtYXJrZXRWYWx1ZTogTnVtYmVyLk5hTixcbiAgICAgICAgICAgIHRvdGFsRXF1aXR5OiBOdW1iZXIuTmFOLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgc3RhcnRPZkRheToge1xuICAgICAgICAgICAgYnV5aW5nUG93ZXI6IE51bWJlci5OYU4sXG4gICAgICAgICAgICBjYXNoOiBOdW1iZXIuTmFOLFxuICAgICAgICAgICAgY3VycmVuY3k6ICdVU0QnLFxuICAgICAgICAgICAgaXNSZWFsVGltZTogZmFsc2UsXG4gICAgICAgICAgICBtYWludGVuYW5jZUV4Y2VzczogTnVtYmVyLk5hTixcbiAgICAgICAgICAgIG1hcmtldFZhbHVlOiBOdW1iZXIuTmFOLFxuICAgICAgICAgICAgdG90YWxFcXVpdHk6IE51bWJlci5OYU4sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBzdGFydE9mRGF5OiB7XG4gICAgICAgIGNvbWJpbmVkOiB7XG4gICAgICAgICAgQ0FEOiB7XG4gICAgICAgICAgICBidXlpbmdQb3dlcjogTnVtYmVyLk5hTixcbiAgICAgICAgICAgIGNhc2g6IE51bWJlci5OYU4sXG4gICAgICAgICAgICBjdXJyZW5jeTogJ0NBRCcsXG4gICAgICAgICAgICBpc1JlYWxUaW1lOiBmYWxzZSxcbiAgICAgICAgICAgIG1haW50ZW5hbmNlRXhjZXNzOiBOdW1iZXIuTmFOLFxuICAgICAgICAgICAgbWFya2V0VmFsdWU6IE51bWJlci5OYU4sXG4gICAgICAgICAgICB0b3RhbEVxdWl0eTogTnVtYmVyLk5hTixcbiAgICAgICAgICB9LFxuICAgICAgICAgIFVTRDoge1xuICAgICAgICAgICAgYnV5aW5nUG93ZXI6IE51bWJlci5OYU4sXG4gICAgICAgICAgICBjYXNoOiBOdW1iZXIuTmFOLFxuICAgICAgICAgICAgY3VycmVuY3k6ICdVU0QnLFxuICAgICAgICAgICAgaXNSZWFsVGltZTogZmFsc2UsXG4gICAgICAgICAgICBtYWludGVuYW5jZUV4Y2VzczogTnVtYmVyLk5hTixcbiAgICAgICAgICAgIG1hcmtldFZhbHVlOiBOdW1iZXIuTmFOLFxuICAgICAgICAgICAgdG90YWxFcXVpdHk6IE51bWJlci5OYU4sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgcGVyQ3VycmVuY3k6IHtcbiAgICAgICAgICBDQUQ6IHtcbiAgICAgICAgICAgIGJ1eWluZ1Bvd2VyOiBOdW1iZXIuTmFOLFxuICAgICAgICAgICAgY2FzaDogTnVtYmVyLk5hTixcbiAgICAgICAgICAgIGN1cnJlbmN5OiAnQ0FEJyxcbiAgICAgICAgICAgIGlzUmVhbFRpbWU6IGZhbHNlLFxuICAgICAgICAgICAgbWFpbnRlbmFuY2VFeGNlc3M6IE51bWJlci5OYU4sXG4gICAgICAgICAgICBtYXJrZXRWYWx1ZTogTnVtYmVyLk5hTixcbiAgICAgICAgICAgIHRvdGFsRXF1aXR5OiBOdW1iZXIuTmFOLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgVVNEOiB7XG4gICAgICAgICAgICBidXlpbmdQb3dlcjogTnVtYmVyLk5hTixcbiAgICAgICAgICAgIGNhc2g6IE51bWJlci5OYU4sXG4gICAgICAgICAgICBjdXJyZW5jeTogJ1VTRCcsXG4gICAgICAgICAgICBpc1JlYWxUaW1lOiBmYWxzZSxcbiAgICAgICAgICAgIG1haW50ZW5hbmNlRXhjZXNzOiBOdW1iZXIuTmFOLFxuICAgICAgICAgICAgbWFya2V0VmFsdWU6IE51bWJlci5OYU4sXG4gICAgICAgICAgICB0b3RhbEVxdWl0eTogTnVtYmVyLk5hTixcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9O1xuICB9XG59O1xuXG4vKlxuIHtcbiAgICAgIFwicGVyQ3VycmVuY3lCYWxhbmNlc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImN1cnJlbmN5XCI6IFwiQ0FEXCIsXG4gICAgICAgICAgXCJjYXNoXCI6IDEwMC4xNSxcbiAgICAgICAgICBcIm1hcmtldFZhbHVlXCI6IDAsXG4gICAgICAgICAgXCJ0b3RhbEVxdWl0eVwiOiAxMDAuMTUsXG4gICAgICAgICAgXCJidXlpbmdQb3dlclwiOiAxMDAuMTUsXG4gICAgICAgICAgXCJtYWludGVuYW5jZUV4Y2Vzc1wiOiAxMDAuMTUsXG4gICAgICAgICAgXCJpc1JlYWxUaW1lXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiY3VycmVuY3lcIjogXCJVU0RcIixcbiAgICAgICAgICBcImNhc2hcIjogMTAwLjEzLFxuICAgICAgICAgIFwibWFya2V0VmFsdWVcIjogMCxcbiAgICAgICAgICBcInRvdGFsRXF1aXR5XCI6IDEwMC4xMyxcbiAgICAgICAgICBcImJ1eWluZ1Bvd2VyXCI6IDEwMC4xMyxcbiAgICAgICAgICBcIm1haW50ZW5hbmNlRXhjZXNzXCI6IDEwMC4xMyxcbiAgICAgICAgICBcImlzUmVhbFRpbWVcIjogZmFsc2VcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwiY29tYmluZWRCYWxhbmNlc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImN1cnJlbmN5XCI6IFwiQ0FEXCIsXG4gICAgICAgICAgXCJjYXNoXCI6IDIwMC4yNSxcbiAgICAgICAgICBcIm1hcmtldFZhbHVlXCI6IDAsXG4gICAgICAgICAgXCJ0b3RhbEVxdWl0eVwiOiAyMDAuMjUsXG4gICAgICAgICAgXCJidXlpbmdQb3dlclwiOiAyMDAuMjUsXG4gICAgICAgICAgXCJtYWludGVuYW5jZUV4Y2Vzc1wiOiAyMDAuMjUsXG4gICAgICAgICAgXCJpc1JlYWxUaW1lXCI6IGZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImN1cnJlbmN5XCI6IFwiVVNEXCIsXG4gICAgICAgICAgXCJjYXNoXCI6IDIwMC4yMyxcbiAgICAgICAgICBcIm1hcmtldFZhbHVlXCI6IDAsXG4gICAgICAgICAgXCJ0b3RhbEVxdWl0eVwiOiAyMDAuMjMsXG4gICAgICAgICAgXCJidXlpbmdQb3dlclwiOiAyMDAuMjMsXG4gICAgICAgICAgXCJtYWludGVuYW5jZUV4Y2Vzc1wiOiAyMDAuMjMsXG4gICAgICAgICAgXCJpc1JlYWxUaW1lXCI6IGZhbHNlXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcInNvZFBlckN1cnJlbmN5QmFsYW5jZXNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJjdXJyZW5jeVwiOiBcIkNBRFwiLFxuICAgICAgICAgIFwiY2FzaFwiOiAtMTAwLjA1LFxuICAgICAgICAgIFwibWFya2V0VmFsdWVcIjogMCxcbiAgICAgICAgICBcInRvdGFsRXF1aXR5XCI6IC0xMDAuMDUsXG4gICAgICAgICAgXCJidXlpbmdQb3dlclwiOiAtMTAwLjA1LFxuICAgICAgICAgIFwibWFpbnRlbmFuY2VFeGNlc3NcIjogLTEwMC4wNSxcbiAgICAgICAgICBcImlzUmVhbFRpbWVcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJjdXJyZW5jeVwiOiBcIlVTRFwiLFxuICAgICAgICAgIFwiY2FzaFwiOiAtMTAwLjAzLFxuICAgICAgICAgIFwibWFya2V0VmFsdWVcIjogMCxcbiAgICAgICAgICBcInRvdGFsRXF1aXR5XCI6IC0xMDAuMDMsXG4gICAgICAgICAgXCJidXlpbmdQb3dlclwiOiAtMTAwLjAzLFxuICAgICAgICAgIFwibWFpbnRlbmFuY2VFeGNlc3NcIjogLTEwMC4wMyxcbiAgICAgICAgICBcImlzUmVhbFRpbWVcIjogdHJ1ZVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJzb2RDb21iaW5lZEJhbGFuY2VzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiY3VycmVuY3lcIjogXCJDQURcIixcbiAgICAgICAgICBcImNhc2hcIjogLTIwMC41NSxcbiAgICAgICAgICBcIm1hcmtldFZhbHVlXCI6IDAsXG4gICAgICAgICAgXCJ0b3RhbEVxdWl0eVwiOiAtMjAwLjU1LFxuICAgICAgICAgIFwiYnV5aW5nUG93ZXJcIjogLTIwMC41NSxcbiAgICAgICAgICBcIm1haW50ZW5hbmNlRXhjZXNzXCI6IC0yMDAuNTUsXG4gICAgICAgICAgXCJpc1JlYWxUaW1lXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiY3VycmVuY3lcIjogXCJVU0RcIixcbiAgICAgICAgICBcImNhc2hcIjogLTIwMC4zMyxcbiAgICAgICAgICBcIm1hcmtldFZhbHVlXCI6IDAsXG4gICAgICAgICAgXCJ0b3RhbEVxdWl0eVwiOiAtMjAwLjMzLFxuICAgICAgICAgIFwiYnV5aW5nUG93ZXJcIjogLTIwMC4zMyxcbiAgICAgICAgICBcIm1haW50ZW5hbmNlRXhjZXNzXCI6IC0yMDAuMzMsXG4gICAgICAgICAgXCJpc1JlYWxUaW1lXCI6IHRydWVcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cblxuKi9cbiJdfQ==