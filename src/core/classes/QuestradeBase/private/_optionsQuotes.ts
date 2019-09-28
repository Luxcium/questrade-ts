import { _axiosApiPost } from '../../../api/_axiosApi';
import { Credentials } from '../../../libraries';
import { OptionType } from '../../../types';

export interface OptionIdFilter {
  optionType?: OptionType;
  underlyingId?: number;
  expiryDate?: Date;
  minstrikePrice?: number;
  maxstrikePrice?: number;
}
export const _optionQuotePostDataFactory = (
  {
    optionType,
    underlyingId,
    expiryDate,
    minstrikePrice,
    maxstrikePrice,
  }: OptionIdFilter,
  optionIds: number[]
) => ({
  filters: [
    {
      optionType,
      underlyingId,
      expiryDate,
      minstrikePrice,
      maxstrikePrice,
    },
  ],
  optionIds,
});
export const _OptionsQuotes = (credentials: Credentials) => (
  optionType: any = 'Call'
) => (underlyingId: any = 0) => (expiryDate: any = 0) => (
  minstrikePrice: any = 0
) => (maxstrikePrice: any = 0) =>
  _axiosApiPost(credentials)(
    _optionQuotePostDataFactory(
      {
        optionType,
        underlyingId,
        expiryDate,
        minstrikePrice,
        maxstrikePrice,
      },
      []
    )
  )('/markets/quotes/options');
/*

optionType
underlyingId
expiryDate
minstrikePrice
maxstrikePrice



     (optionType:any=0)=> (underlyingId:any=0)=> (expiryDate:any=0)=> (minstrikePrice:any=0)=> (maxstrikePrice:any=0)=>


POST https://api01.iq.questrade.com/v1/markets/quotes/options
{
    filters: [
        {
             optionType: Call,
             underlyingId: 27426,
             expiryDate: 2017-01-20T00:00:00.000000-05:00,
             minstrikePrice: 70,
             maxstrikePrice: 80
        },
              ...
      ],
      optionIds:
             [
              9907637,
              9907638,
                  ...
         ]
  }

*/
