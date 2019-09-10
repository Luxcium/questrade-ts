export function _getTime(url: string, apiGetFuntion: any) {
  return { url, apiGetFuntion }; //
}

/*
GET time
Retrieves current server time.

Request parameters
No parameters.

Response properties
Property	Type	Description
time
DateTime
Current server time in ISO format and Eastern time zone.
Sample request


GET https://api01.iq.questrade.com/v1/time

Sample JSON response


{
    "time": "2014-10-24T12:14:42.730000-04:00"
}
*/
