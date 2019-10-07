// GET markets
// Retrieves information about supported markets.
// Request parameters
// No parameters.
export interface IMarkets {
  markets: IMarket[];
}
export interface IMarket {
  /** Market name. */
  name: string;

  /** List of Order execution venue code. */
  tradingVenues: string[];

  /** Default trading venue code. */
  defaultTradingVenue: string;

  /** List of primary order route codes. */
  primaryOrderRoutes: string[];

  /** List of secondary order route codes. */
  secondaryOrderRoutes: string[];

  /** List of Level 1 market data feed code */
  level1Feeds: string[];

  /** List of Level 2 market data feed code. */
  level2Feeds: string[];

  /** Pre-market opening time for current trading date. */
  extendedStartTime: Date | string;

  /** Regular market opening time for current trading date. */
  startTime: Date | string;

  /** Regular market closing time for current trading date. */
  endTime: Date | string;

  /** Extended market closing time for current trading date. */
  extendedEndTime: Date | string;

  /** Number of snap quotes that the user can retrieve from a market. */
  snapQuotesLimit: number;
}

/*
aultTradingVenue: 'AUTO',
    primaryOrderRoutes: [ 'AUTO', 'MNGD' ],
    secondaryOrderRoutes: [],
    level1Feeds: [ 'PINX' ],
    level2Feeds: [ 'PINX' ],
    extendedStartTime: '2019-10-07T04:00:00.000000-04:00',
    startTime: '2019-10-07T09:30:00.000000-04:00',
    endTime: '2019-10-07T16:00:00.000000-04:00',
    extendedEndTime: '2019-10-07T20:00:00.000000-04:00',
    snapQuotesLimit: 2147483647 },
  { name: 'OTCBB',
    tradingVenues: [ 'NASDAQ', 'NYSE', 'ARCA', 'PINX', 'OTCBB' ],
    defaultTradingVenue: 'AUTO',
    primaryOrderRoutes: [ 'AUTO', 'MNGD' ],
    secondaryOrderRoutes: [],
    level1Feeds: [ 'PINX' ],
    level2Feeds: [ 'PINX' ],
    extendedStartTime: '2019-10-07T04:00:00.000000-04:00',
    startTime: '2019-10-07T09:30:00.000000-04:00',
    endTime: '2019-10-07T16:00:00.000000-04:00',
    extendedEndTime: '2019-10-07T20:00:00.000000-04:00',
    snapQuotesLimit: 2147483647 },
  { name: 'NEO',
    tradingVenues: [ 'ALPH', 'CXC', 'OMGA', 'ATS', 'NEOL', 'NEO' ],
    defaultTradingVenue: 'AUTO',
    primaryOrderRoutes: [ 'AUTO' ],
    secondaryOrderRoutes: [ 'TSX', 'AUTO', 'AQN', 'AQL' ],
    level1Feeds: [ 'TSX' ],
    level2Feeds: [ 'ALPH', 'CXC', 'NEO', 'NEOL', 'OMGA' ],
    extendedStartTime: '2019-10-07T07:00:00.000000-04:00',
    startTime: '2019-10-07T09:30:00.000000-04:00',
    endTime: '2019-10-07T16:00:00.000000-04:00',
    extendedEndTime: '2019-10-07T20:00:00.000000-04:00',
    snapQuotesLimit: 99999 } ]
     100%    10.16.3    6.11.3  ﯤ 
    neb_401   ~/Developer/LuxciumProject/questrade-ts 
     2.6.2    2.01       next/version    ﯤ  ts-node "/Users/neb_401/Developer/LuxciumProject/questrade-ts/src/debugAndTesting.ts"
Questrade Server Time: 2019-10-07T12:36:13.999000-04:00
Status: ready

{ name: 'TSX',
  tradingVenues:
   [ 'TSX',
     'ALPH',
     'CXC',
     'OMGA',
     'PURE',
     'CNSX',
     'ATS',
     'ICX',
     'LIQ',
     'LYX',
     'CXD',
     'NEOL',
     'NEO',
     'MATCH',
     'CX2' ],
  defaultTradingVenue: 'AUTO',
  primaryOrderRoutes: [ 'AUTO' ],
  secondaryOrderRoutes:
   [ 'TSX', 'AUTO', 'CX2', 'AQN', 'AQL', 'CXC', 'OME', 'OM2', 'CXD' ],
  level1Feeds: [ 'TSX' ],
  level2Feeds: [ 'ALPH', 'CXC', 'NEO', 'NEOL', 'OMGA', 'PURE', 'TSX' ],
  extendedStartTime: '2019-10-07T07:00:00.000000-04:00',
  startTime: '2019-10-07T09:30:00.000000-04:00',
  endTime: '2019-10-07T16:00:00.000000-04:00',
  extendedEndTime: '2019-10-07T20:00:00.000000-04:00',
  snapQuotesLimit: 2147483647 }
Sample request
GET https://api01.iq.questrade.com/v1/markets
Sample JSON response
{
	"markets": [
		{
			"name": "TSX",
			"tradingVenues": [
				"TSX",
				"ALPH",
				"CHIC",
				"OMGA",
				"PURE"
			],
			"defaultTradingVenue": "AUTO",
			"primaryOrderRoutes": [
				"AUTO"
			],
			"secondaryOrderRoutes": [
				"TSX",
				"AUTO"
			],
			"level1Feeds": [
				"ALPH",
				"CHIC",
				"OMGA",
				"PURE",
				"TSX"
			],
			"extendedStartTime": "2014-10-06T07:00:00.000000-04:00",
			"startTime": "2014-10-06T09:30:00.000000-04:00",
			"endTime": "2014-10-06T16:00:00.000000-04:00",
			"currency": "CAD",
			"snapQuotesLimit": 99999
		},
		...
	]
}
*/
