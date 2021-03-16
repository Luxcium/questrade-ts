/**
 * The 500 stocks in the index are divided into 11 sectors
 *
 * \>The S&P 500 is probably the most widely followed index that tracks the
 * performance of large-cap American stocks. According to
 * S&P Dow Jones Indices, which owns and manages the index, nearly
 * US$10 trillion of stocks is indexed or benchmarked to the index, which
 * includes 500 of the largest American publicly traded companies and captures
 * about 80% of the total value of the U.S. stock market.[1]
 *
 * The 500 stocks in the index are divided into 11 sectors, each of them
 * consisting of companies in the same or related industries.
 *
 * The classification of similar companies into sectors allows investors to
 * buy shares in exchange-traded-funds and mutual funds that invest in
 * individual sectors, thus allowing them to diversify their investment over
 * many companies in the same industry rather than putting all of their money
 * into just one stock.[2]
 *
 * The division of the 500 stocks into different sectors began in 1999.
 * S&P Dow Jones Indices and MSCI, a leading provider of research-based indexes
 * and analytics, developed the Global Industry Classification Standard (GICS),
 * which seeks "to offer an efficient investment tool to capture the breadth,
 * depth and evolution of industry sectors."[3]
 *
 * source : https://www.fxcm.com/uk/insights/the-11-sectors-of-the-sp-500/
 * REFERENCES :
 * [1] Retrieved 09 Jan 2019 https://us.spindices.com/indices/equity/sp-500
 * [2] Retrieved 09 Jan 2019 https://www.thebalance.com/what-are-the-sectors-and-industries-of-the-sandp-500-3957507
 * [3] Retrieved 09 Jan 2019 https://www.msci.com/gics
 *
 */
export enum Sectors {
  SECTOR_NA = 'Sector Not Available',
  ALL_SECTORS = 'All Sectors',

  /**
   * **CONSUMER_DISCRETIONARY: 10.2%**
   * (CONSUMER DISCRETIONARY)
   * This sector consists of businesses whose demand fluctuates based on general
   * economic conditions, such as consumer durables,
   *
   */
  CONSUMER_DISCRETIONARY = 'Consumer Discretionary',

  /**
   * **CONSUMER_STAPLES: 6.7%**
   * (CONSUMER STAPLES)
   * Consumer staples generally consist of necessities, such as food and beverages
   * and personal products. This includes producers of these goods as well as
   * retail companies that sell them, such as supermarkets. Examples include
   * Procter & Gamble, Kimberly-Clark, Coca-Cola and Costco.
   *
   */
  CONSUMER_STAPLES = 'Consumer Staples',

  /**
   * **ENERGY: 6.0%**
   * (ENERGY)
   * The energy sector consists of companies that explore, produce and sell oil
   * and gas products as well as companies that supply equipment
   * and services to them. Companies in this sector include Exxon,
   * Chevron and Kinder Morgan.
   *
   */
  ENERGY = 'Energy',

  /**
   * **FINANCIALS: 13.7%**
   * (FINANCIALS)
   * The financials sector includes commercial banks, insurance companies,
   * consumer lenders, investment firms and the like. Major companies
   * include JPMorgan Chase, Bank of America, Prudential Financial and
   * Discover Financial.
   *
   */
  FINANCIALS = 'Financials',

  /**
   * **HEALTH_CARE: 14.9%**
   * (HEALTH CARE)
   * This sector includes pharmaceuticals manufacturers, hospitals, health care
   * equipment and service providers, and biotechnology and life
   * sciences companies. Prominent companies include Pfizer,
   * Bristol-Myers Squibb and United Health.
   *
   */
  HEALTH_CARE = 'Health Care',

  /**
   * **INDUSTRIALS: 9.7%**
   * (INDUSTRIALS)
   * This sector includes a wide variety of manufacturers and transportation
   * companies, such as defense and aerospace, airlines, railroads,
   * machinery and the like. Major companies include Boeing, General Dynamics,
   * American Airlines, 3M and General Electric.
   *
   */
  INDUSTRIALS = 'Industrials',

  /**
   * **MATERIALS: 2.5%**
   * (MATERIALS)
   * Industries in this sector include chemicals, construction materials,
   * metals and mining, and paper and forest products. DowDuPont,
   * International Paper and Newmont Mining are a few examples of the
   * bigger companies.
   *
   */
  MATERIALS = 'Materials',

  /**
   * **REAL_ESTATE: 2.7%**
   * (REAL ESTATE SECTOR)
   * This sector, some of which was previously included in the financials sector,
   * consists of equity real estate investment trusts and real
   * estate management and development firms. Companies include Host Hotels,
   * Simon Property Group and Public Storage.
   *
   */
  REAL_ESTATE = 'Real Estate',

  /**
   * **INFORMATION_TECHNOLOGY: 20.8%**
   * (TECHNOLOGY)
   * Tech companies include manufacturers and sellers of computer hardware,
   * software, semiconductors and computer equipment in addition to
   * providers of IT services. Companies include Apple, IBM, Microsoft and Cisco.
   *
   */
  INFORMATION_TECHNOLOGY = 'Information Technology',

  /**
   * **UTILITIES: 2.8%**
   * (UTILITIES)
   * This sector includes electric and gas companies, water companies and
   * renewable electricity producers. American Electric Power, Duke Energy,
   * Pacific Gas & Electric and Public Service are among the bigger companies.
   *
   */
  UTILITIES = 'Utilities',

  /**
   * **TELECOMMUNICATION_SERVICES: 9.9%**
   * (COMMUNICATION SERVICES)
   * As noted, this sector now includes social media and traditional media
   * companies as well as cable, landline and mobile telephone carriers.
   *
   */
  TELECOMMUNICATION_SERVICES = 'Telecommunication Services',
}

export const { SECTOR_NA } = Sectors;
export const { ALL_SECTORS } = Sectors;

/**
 * **CONSUMER_DISCRETIONARY: 10.2%**
 * (CONSUMER DISCRETIONARY)
 * This sector consists of businesses whose demand fluctuates based on general
 * economic conditions, such as consumer durables,
 *
 */
export const { CONSUMER_DISCRETIONARY } = Sectors;

/**
 * **CONSUMER_STAPLES: 6.7%**
 * (CONSUMER STAPLES)
 * Consumer staples generally consist of necessities, such as food and beverages
 * and personal products. This includes producers of these goods as well as
 * retail companies that sell them, such as supermarkets. Examples include
 * Procter & Gamble, Kimberly-Clark, Coca-Cola and Costco.
 *
 */
export const { CONSUMER_STAPLES } = Sectors;

/**
 * **ENERGY: 6.0%**
 * (ENERGY)
 * The energy sector consists of companies that explore, produce and sell oil
 * and gas products as well as companies that supply equipment
 * and services to them. Companies in this sector include Exxon,
 * Chevron and Kinder Morgan.
 *
 */
export const { ENERGY } = Sectors;

/**
 * **FINANCIALS: 13.7%**
 * (FINANCIALS)
 * The financials sector includes commercial banks, insurance companies,
 * consumer lenders, investment firms and the like. Major companies
 * include JPMorgan Chase, Bank of America, Prudential Financial and
 * Discover Financial.
 *
 */
export const { FINANCIALS } = Sectors;

/**
 * **HEALTH_CARE: 14.9%**
 * (HEALTH CARE)
 * This sector includes pharmaceuticals manufacturers, hospitals, health care
 * equipment and service providers, and biotechnology and life
 * sciences companies. Prominent companies include Pfizer,
 * Bristol-Myers Squibb and United Health.
 *
 */
export const { HEALTH_CARE } = Sectors;

/**
 * **INDUSTRIALS: 9.7%**
 * (INDUSTRIALS)
 * This sector includes a wide variety of manufacturers and transportation
 * companies, such as defense and aerospace, airlines, railroads,
 * machinery and the like. Major companies include Boeing, General Dynamics,
 * American Airlines, 3M and General Electric.
 *
 */
export const { INDUSTRIALS } = Sectors;

/**
 * **MATERIALS: 2.5%**
 * (MATERIALS)
 * Industries in this sector include chemicals, construction materials,
 * metals and mining, and paper and forest products. DowDuPont,
 * International Paper and Newmont Mining are a few examples of the
 * bigger companies.
 *
 */
export const { MATERIALS } = Sectors;

/**
 * **REAL_ESTATE: 2.7%**
 * (REAL ESTATE SECTOR)
 * This sector, some of which was previously included in the financials sector,
 * consists of equity real estate investment trusts and real
 * estate management and development firms. Companies include Host Hotels,
 * Simon Property Group and Public Storage.
 *
 */
export const { REAL_ESTATE } = Sectors;

/**
 * **INFORMATION_TECHNOLOGY: 20.8%**
 * (TECHNOLOGY)
 * Tech companies include manufacturers and sellers of computer hardware,
 * software, semiconductors and computer equipment in addition to
 * providers of IT services. Companies include Apple, IBM, Microsoft and Cisco.
 *
 */
export const { INFORMATION_TECHNOLOGY } = Sectors;

/**
 * **UTILITIES: 2.8%**
 * (UTILITIES)
 * This sector includes electric and gas companies, water companies and
 * renewable electricity producers. American Electric Power, Duke Energy,
 * Pacific Gas & Electric and Public Service are among the bigger companies.
 *
 */
export const { UTILITIES } = Sectors;

/**
 * **TELECOMMUNICATION_SERVICES: 9.9%**
 * (COMMUNICATION SERVICES)
 * As noted, this sector now includes social media and traditional media
 * companies as well as cable, landline and mobile telephone carriers.
 *
 */
export const { TELECOMMUNICATION_SERVICES } = Sectors;

/*


 The S&P 500 is probably the most widely followed index that tracks the performance of large-cap American stocks.
 According to S&P Dow Jones Indices, which owns and manages the index, nearly US$10 trillion of stocks is indexed or
 benchmarked to the index, which includes 500 of the largest American publicly traded companies and captures about 80%
 of the total value of the U.S. stock market.[1]

 The 500 stocks in the index are divided into 11 sectors, each of them consisting of companies in the same or related
 industries. The classification of similar companies into sectors allows investors to buy shares in exchange-traded-
 funds and mutual funds that invest in individual sectors, thus allowing them to diversify their investment over many
 companies in the same industry rather than putting all of their money into just one stock.[2]

 The division of the 500 stocks into different sectors began in 1999. S&P Dow Jones Indices and MSCI, a leading
 provider of research-based indexes and analytics, developed the Global Industry Classification Standard (GICS), which
 seeks "to offer an efficient investment tool to capture the breadth, depth and evolution of industry sectors."[3]

as follows, with their respective weightings by market capitalisation:,


As of September 2018, the S&P 500 was divided into 11 sec


The 2018 Sector Reclassification

 On 15 November 2017, S&P Dow Jones Indices and MSCI announced a major restructuring of the sectors in the index, which
 at the time included 10 sectors. The changes took effect in September 2018.[5]

 Since more than 10% of the market cap of the companies in the S&P 500 was re-classified, the changes are considered to
 be the biggest in GICS history. Most notably, the former Telecommunication Services sector, which was dominated by a
 handful of large telecom carriers such as AT&T, Verizon and T-Mobile, was renamed Communication Services.

 It expanded to include some companies that had previously been in the Consumer Discretionary and Information
 Technology sectors. Those companies include Facebook, Google parent Alphabet, Netflix, Comcast and Walt Disney.
 Following the recasting of this sector, it now accounts for about 10% of total stock market capitalisation, compared to
 only about 2% previously. Likewise, the sector is now more growth-oriented, whereas previously it consisted mostly of
 value-oriented companies.

 Another major change included moving eBay from the former Information Technology sector, which was renamed to
 Technology, to the Consumer Discretionary category. As a result of these changes, Apple will account for a bigger share
 of the tech sector, while Amazon will have a bigger weighting in the consumer discretionary category.[6]

 Here is a brief description of the types of companies classified into each sector:[2]

 COMMUNICATION SERVICES

 As noted, this sector now includes social media and traditional media companies as well as cable, landline and mobile
 telephone carriers.

 CONSUMER DISCRETIONARY

 This sector consists of businesses whose demand fluctuates based on general economic conditions, such as consumer
 durables, automobiles, hotels and restaurants, retailers and the like. Companies in this sector include Amazon, General
 Motors, Hilton and Nike.

 CONSUMER STAPLES

 Consumer staples generally consist of necessities, such as food and beverages and personal products. This includes
 producers of these goods as well as retail companies that sell them, such as supermarkets. Examples include Procter &
 Gamble, Kimberly-Clark, Coca-Cola and Costco.

 ENERGY

 The energy sector consists of companies that explore, produce and sell oil and gas products as well as companies that
 supply equipment and services to them. Companies in this sector include Exxon, Chevron and Kinder Morgan.

 FINANCIALS

 The financials sector includes commercial banks, insurance companies, consumer lenders, investment firms and the like.
 Major companies include JPMorgan Chase, Bank of America, Prudential Financial and Discover Financial.

 HEALTH CARE

 This sector includes pharmaceuticals manufacturers, hospitals, health care equipment and service providers, and
 biotechnology and life sciences companies. Prominent companies include Pfizer, Bristol-Myers Squibb and United Health.

 INDUSTRIALS

 This sector includes a wide variety of manufacturers and transportation companies, such as defense and aerospace,
 airlines, railroads, machinery and the like. Major companies include Boeing, General Dynamics, American Airlines, 3M
 and General Electric.

 MATERIALS

 Industries in this sector include chemicals, construction materials, metals and mining, and paper and forest products.
 DowDuPont, International Paper and Newmont Mining are a few examples of the bigger companies.

 REAL ESTATE SECTOR

 This sector, some of which was previously included in the financials sector, consists of equity real estate investment
 trusts and real estate management and development firms. Companies include Host Hotels, Simon Property Group and Public
 Storage.

 TECHNOLOGY

 Tech companies include manufacturers and sellers of computer hardware, software, semiconductors and computer equipment
 in addition to providers of IT services. Companies include Apple, IBM, Microsoft and Cisco.

 UTILITIES

 This sector includes electric and gas companies, water companies and renewable electricity producers. American
 Electric Power, Duke Energy, Pacific Gas & Electric and Public Service are among the bigger companies.

 Summary

 The S&P 500 is an index that tracks the 500 largest publicly-traded U.S. companies by market capitalisation, and it's
 divided into 11 sectors based on the similarity of their businesses. The division into sectors allows investors to buy
 exchange-traded funds and mutual funds that invest in each sector, allowing diversification over the entire group
 rather than in just one company. In 2018, the sectors

 were reclassified to bring them up to date with the major business changes over the past 20 years.

 source : https://www.fxcm.com/uk/insights/the-11-sectors-of-the-sp-500/

 REFERENCES

 [1] Retrieved 09 Jan 2019 https://us.spindices.com/indices/equity/sp-500

 [2] Retrieved 09 Jan 2019 https://www.thebalance.com/what-are-the-sectors-and-industries-of-the-sandp-500-3957507

 [3] Retrieved 09 Jan 2019 https://www.msci.com/gics

 [4] Retrieved 09 Jan 2019 https://seekingalpha.com/article/4208069-new-s-and-p-500-sector-weightings-what-you-need-to-
 know

 [5] Retrieved 09 Jan 2019 https://www.msci.com/documents/10199/d56e739d-4455-4bc1-afdd-d738c2ce5a05

 [6] Retrieved 09 Jan 2019 https://www.ssga.com/us/en/intermediary/etfs
 */

/*
 *DISCLOSURE
 *Any opinions, news, research, analyses, prices, other information, or links to
 *third-party sites contained here are provided on an "as-is" basis,
 *as general market commentary and do not constitute investment advice. The market
 *commentary has not been prepared in accordance with legal requirements designed
 *to promote the independence of investment research, and it is therefore not
 *subject to any prohibition on dealing ahead of dissemination. Although this
 *commentary is not produced by an independent source, we takes all sufficient
 *steps to eliminate or prevent any conflicts of interests arising out of the
 *production and dissemination of this communication.
 *
 *Our employees or team or others working on this project commit to acting in the
 *clients' best interests and represent their views without misleading, deceiving,
 *or otherwise impairing the clients' ability to make informed investment
 *decisions.
 *
 *TODO: For more information about our internal organizational and administrative
 *TODO: arrangements for the prevention of conflicts, please refer to the Team
 *TODO: Managing Conflicts Policy.
 *
 *TODO: Please ensure that you read and understand our Full Disclaimer and
 *TODO: Liability provision concerning the foregoing Information, which can be
 *TODO: accessed here.
 *
 */

/*
 * for (const sector in Sectors) {
 *   // Sectors[sector];
 * }
 */

export const SectorList = [
  SECTOR_NA,
  ALL_SECTORS,
  CONSUMER_DISCRETIONARY,
  CONSUMER_STAPLES,
  ENERGY,
  FINANCIALS,
  HEALTH_CARE,
  INDUSTRIALS,
  MATERIALS,
  REAL_ESTATE,
  INFORMATION_TECHNOLOGY,
  UTILITIES,
  TELECOMMUNICATION_SERVICES,
];
