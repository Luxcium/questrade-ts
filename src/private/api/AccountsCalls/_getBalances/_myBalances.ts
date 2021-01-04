import { IBalances, IMyBalances } from '../../../../typescript';

export const _myBalances = async (
  myBalances: IBalances,
): Promise<IMyBalances> => {
  try {
    const [perCADcurrent, perUSDcurrent] = myBalances.perCurrencyBalances;
    const [
      combinedCADcurrent,
      combinedUSDcurrent,
    ] = myBalances.combinedBalances;
    const [
      perCADstartOfDay,
      perUSDstartOfDay,
    ] = myBalances.sodPerCurrencyBalances;
    const [
      combinedCADstartOfDay,
      combinedUSDstartOfDay,
    ] = myBalances.sodCombinedBalances;

    const perCurrency = {
      CAD: {
        startOfDay: perCADstartOfDay,
        current: perCADcurrent,
      },
      USD: {
        startOfDay: perUSDstartOfDay,
        current: perUSDcurrent,
      },
    };
    const combined = {
      CAD: {
        startOfDay: combinedCADstartOfDay,
        current: combinedCADcurrent,
      },
      USD: {
        startOfDay: combinedUSDstartOfDay,
        current: combinedUSDcurrent,
      },
    };
    const CAD = {
      perCurrency: {
        startOfDay: perCADstartOfDay,
        current: perCADcurrent,
      },
      combined: {
        startOfDay: combinedCADstartOfDay,
        current: combinedCADcurrent,
      },
    };
    const USD = {
      combined: {
        startOfDay: combinedUSDstartOfDay,
        current: combinedUSDcurrent,
      },
      perCurrency: {
        startOfDay: perUSDstartOfDay,
        current: perUSDcurrent,
      },
    };

    const current = {
      perCurrency: {
        CAD: perCADcurrent,
        USD: perUSDcurrent,
      },
      combined: {
        CAD: combinedCADcurrent,
        USD: combinedUSDcurrent,
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
    return { perCurrency, combined, current, startOfDay, CAD, USD };
  } catch (error) {
    console.error(error); // TODO: List the side effects

    return {
      perCurrency: {
        CAD: {
          startOfDay: {
            currency: 'CAD',
            cash: Number.NaN,
            marketValue: Number.NaN,
            totalEquity: Number.NaN,
            buyingPower: Number.NaN,
            maintenanceExcess: Number.NaN,
            isRealTime: false,
          },
          current: {
            currency: 'CAD',
            cash: Number.NaN,
            marketValue: Number.NaN,
            totalEquity: Number.NaN,
            buyingPower: Number.NaN,
            maintenanceExcess: Number.NaN,
            isRealTime: false,
          },
        },
        USD: {
          startOfDay: {
            currency: 'USD',
            cash: Number.NaN,
            marketValue: Number.NaN,
            totalEquity: Number.NaN,
            buyingPower: Number.NaN,
            maintenanceExcess: Number.NaN,
            isRealTime: false,
          },
          current: {
            currency: 'USD',
            cash: Number.NaN,
            marketValue: Number.NaN,
            totalEquity: Number.NaN,
            buyingPower: Number.NaN,
            maintenanceExcess: Number.NaN,
            isRealTime: false,
          },
        },
      },
      combined: {
        CAD: {
          startOfDay: {
            currency: 'CAD',
            cash: Number.NaN,
            marketValue: Number.NaN,
            totalEquity: Number.NaN,
            buyingPower: Number.NaN,
            maintenanceExcess: Number.NaN,
            isRealTime: false,
          },
          current: {
            currency: 'CAD',
            cash: Number.NaN,
            marketValue: Number.NaN,
            totalEquity: Number.NaN,
            buyingPower: Number.NaN,
            maintenanceExcess: Number.NaN,
            isRealTime: false,
          },
        },
        USD: {
          startOfDay: {
            currency: 'USD',
            cash: Number.NaN,
            marketValue: Number.NaN,
            totalEquity: Number.NaN,
            buyingPower: Number.NaN,
            maintenanceExcess: Number.NaN,
            isRealTime: false,
          },
          current: {
            currency: 'USD',
            cash: Number.NaN,
            marketValue: Number.NaN,
            totalEquity: Number.NaN,
            buyingPower: Number.NaN,
            maintenanceExcess: Number.NaN,
            isRealTime: false,
          },
        },
      },
      current: {
        perCurrency: {
          CAD: {
            currency: 'CAD',
            cash: Number.NaN,
            marketValue: Number.NaN,
            totalEquity: Number.NaN,
            buyingPower: Number.NaN,
            maintenanceExcess: Number.NaN,
            isRealTime: false,
          },
          USD: {
            currency: 'USD',
            cash: Number.NaN,
            marketValue: Number.NaN,
            totalEquity: Number.NaN,
            buyingPower: Number.NaN,
            maintenanceExcess: Number.NaN,
            isRealTime: false,
          },
        },
        combined: {
          CAD: {
            currency: 'CAD',
            cash: Number.NaN,
            marketValue: Number.NaN,
            totalEquity: Number.NaN,
            buyingPower: Number.NaN,
            maintenanceExcess: Number.NaN,
            isRealTime: false,
          },
          USD: {
            currency: 'USD',
            cash: Number.NaN,
            marketValue: Number.NaN,
            totalEquity: Number.NaN,
            buyingPower: Number.NaN,
            maintenanceExcess: Number.NaN,
            isRealTime: false,
          },
        },
      },
      startOfDay: {
        combined: {
          CAD: {
            currency: 'CAD',
            cash: Number.NaN,
            marketValue: Number.NaN,
            totalEquity: Number.NaN,
            buyingPower: Number.NaN,
            maintenanceExcess: Number.NaN,
            isRealTime: false,
          },
          USD: {
            currency: 'USD',
            cash: Number.NaN,
            marketValue: Number.NaN,
            totalEquity: Number.NaN,
            buyingPower: Number.NaN,
            maintenanceExcess: Number.NaN,
            isRealTime: false,
          },
        },
        perCurrency: {
          CAD: {
            currency: 'CAD',
            cash: Number.NaN,
            marketValue: Number.NaN,
            totalEquity: Number.NaN,
            buyingPower: Number.NaN,
            maintenanceExcess: Number.NaN,
            isRealTime: false,
          },
          USD: {
            currency: 'USD',
            cash: Number.NaN,
            marketValue: Number.NaN,
            totalEquity: Number.NaN,
            buyingPower: Number.NaN,
            maintenanceExcess: Number.NaN,
            isRealTime: false,
          },
        },
      },
      CAD: {
        perCurrency: {
          startOfDay: {
            currency: 'CAD',
            cash: Number.NaN,
            marketValue: Number.NaN,
            totalEquity: Number.NaN,
            buyingPower: Number.NaN,
            maintenanceExcess: Number.NaN,
            isRealTime: false,
          },
          current: {
            currency: 'CAD',
            cash: Number.NaN,
            marketValue: Number.NaN,
            totalEquity: Number.NaN,
            buyingPower: Number.NaN,
            maintenanceExcess: Number.NaN,
            isRealTime: false,
          },
        },
        combined: {
          startOfDay: {
            currency: 'CAD',
            cash: Number.NaN,
            marketValue: Number.NaN,
            totalEquity: Number.NaN,
            buyingPower: Number.NaN,
            maintenanceExcess: Number.NaN,
            isRealTime: false,
          },
          current: {
            currency: 'CAD',
            cash: Number.NaN,
            marketValue: Number.NaN,
            totalEquity: Number.NaN,
            buyingPower: Number.NaN,
            maintenanceExcess: Number.NaN,
            isRealTime: false,
          },
        },
      },
      USD: {
        combined: {
          startOfDay: {
            currency: 'USD',
            cash: Number.NaN,
            marketValue: Number.NaN,
            totalEquity: Number.NaN,
            buyingPower: Number.NaN,
            maintenanceExcess: Number.NaN,
            isRealTime: false,
          },
          current: {
            currency: 'USD',
            cash: Number.NaN,
            marketValue: Number.NaN,
            totalEquity: Number.NaN,
            buyingPower: Number.NaN,
            maintenanceExcess: Number.NaN,
            isRealTime: false,
          },
        },
        perCurrency: {
          startOfDay: {
            currency: 'USD',
            cash: Number.NaN,
            marketValue: Number.NaN,
            totalEquity: Number.NaN,
            buyingPower: Number.NaN,
            maintenanceExcess: Number.NaN,
            isRealTime: false,
          },
          current: {
            currency: 'USD',
            cash: Number.NaN,
            marketValue: Number.NaN,
            totalEquity: Number.NaN,
            buyingPower: Number.NaN,
            maintenanceExcess: Number.NaN,
            isRealTime: false,
          },
        },
      },
    };
  }
};

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
