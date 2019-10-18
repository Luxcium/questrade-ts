export interface CoreApiConfig<D> {
  url: string;
  method: 'get' | 'post';
  headers: {
    Authorization: string;
    location: string;
  };
  data: D | null;
}
