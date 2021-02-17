import type { ClientRequestConfig } from '../../../resources/side-effects/types';
import type { Credentials } from '../../../typescript';

/**
 * partial application of Core api config builder generating an
 * object of strings value in the format of CoreApiConfig<D> to
 * be sent to client as main parameter.
 */
function _coreApiConfig<D>(credentials: Credentials) {
  // ~~>
  return (VERB: 'GET' | 'POST') => {
    // ~~>
    return (endpoint: string) => {
      // ~~>
      return (postData: D | null): ClientRequestConfig => {
        /**
         * build endpoint url with apiUrl as base.
         */

        // const url = `${credentials.apiUrl}${encodeURIComponent(endpoint)}`;
        const url = credentials.apiUrl + endpoint;
        // ->
        /**
         * set methodh to 'get' or 'post' in the
         * request config/ header.
         */
        const method = VERB.toLowerCase() as 'GET' | 'POST';
        // ->
        /** oAuth2 token informations added to request header. */
        const Authorization = `Bearer ${credentials.accessToken}`;
        // ->
        /**
         * adding account number information
         * can occur in the 'location' header only.
         */
        const location = credentials.accountNumber;
        // ->
        /** adittional information for POST requests. */
        const data = postData;
        // ->
        /** header builder. */
        const headers = {
          Authorization,
          location,
        };

        // ->
        /** config builder. */
        return {
          data,
          headers,
          method,
          url,
        };
      };
    };
  };
}

export { _coreApiConfig };
