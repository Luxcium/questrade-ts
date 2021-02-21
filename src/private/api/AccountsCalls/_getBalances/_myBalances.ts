import type { IBalances, IMyBalances, Logger } from '../../../../typescript';

export const _myBalances = async (
  myBalances: IBalances,
  errorlog: Logger = (...error: any[]) => error,
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
  } catch (error) {
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
