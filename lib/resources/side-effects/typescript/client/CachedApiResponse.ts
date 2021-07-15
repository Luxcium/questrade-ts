export type CachedApiResponse = {
  response: {
    clientRequest: any;
    config: {
      url: string;
    };
    data: any;
    headers: {
      'content-length': string;
      'content-type': string;
      'date': string;
      'x-ratelimit-remaining': string;
      'x-ratelimit-reset': string;
    };
    status: number;
    statusText: string;
  };
  time: string | Date;
  DATA_HSH: string;
  path: string;
  data: any;
  URL_HSH: string;
  UDATAGRAM: string;
};
