import { ClientRequestConfig } from '../../resources/side-effects/types';
import { Credentials } from '../../typescript';

/**
 * Partial application of Core api config builder generating an
 * object of strings value in the format of CoreApiConfig<D> to
 * be sent to client as main parameter.
 */
export const _coreApiConfig = <D>(credentials: Credentials) => {
  // ~~>
  return (VERB: 'GET' | 'POST') => {
    // ~~>
    return (endpoint: string) => {
      // ~~>
      return (postData: D | null): ClientRequestConfig => {
        /**
         * Build endpoint url with apiUrl as base.
         */
        const url = credentials.apiUrl + endpoint;
        // ->
        /**
         * Set methodh to 'get' or 'post' in the
         * request config/ header.
         */
        const method = VERB.toLowerCase() as 'GET' | 'POST';
        // ->
        /** oAuth2 token informations added to request header. */
        const Authorization = `Bearer ${credentials.accessToken}`;
        // ->
        /**
         * Adding account number information
         * can occur in the 'location' header only.
         */
        const location = credentials.accountNumber;
        // ->
        /** Adittional information for POST requests. */
        const data = postData;
        // ->
        /** Header builder. */
        const headers = {
          Authorization,
          location,
        };
        // ->
        /** Config builder. */
        const config: ClientRequestConfig = {
          url,
          method,
          headers,
          data,
        };
        // ~~>
        return config;
      };
    };
  };
};
