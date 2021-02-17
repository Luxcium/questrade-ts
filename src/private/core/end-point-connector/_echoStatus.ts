import { echo, tablelog } from '../../../resources/side-effects';
import type { ClientResponse } from '../../../resources/side-effects/types';
import type { Credentials } from '../../../typescript';
import { remaningTimeString } from '../requestPerSecondLimit';

function _echoStatus(response: ClientResponse<any>, credentials?: Credentials) {
  // iNFO: ECHO STATUS ON ERROR Block Start ******************************
  if (response.status !== 200) {
    void echo<unknown>('________________________________________________');
    void echo<unknown>(response.status, response.statusText);
    void echo<unknown>(response.data);
    void tablelog(response.headers);
    void echo<unknown>(
      remaningTimeString(
        credentials?.remainingRequests?.secondsRemaning
          ? credentials.remainingRequests.secondsRemaning
          : 0,
      ),
    );
    void echo<unknown>(response.status, response.statusText);
    void echo<unknown>('________________________________________________');
    void echo<unknown>('++++++++++++++++++++++++++++++++++++++++++++++++');
  } else {
    // iNFO: ECHO STATUS ON 200 OK Block Start //-!
    // void echo(
    //   remaningTimeString(
    //     credentials?.remainingRequests?.secondsRemaning
    //       /? credentials.remainingRequests.secondsRemaning
    //       : 0
    //   )
    // );
  }
}

export { _echoStatus };
