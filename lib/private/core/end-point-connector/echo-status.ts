import { echo, tablelog } from '../../../resources/side-effects';
import type { ClientResponse } from '../../../resources/side-effects/types';
import type { Credentials } from '../../../typescript';
import { remaningTimeString } from '../next-rate-limiter/remaning-time-string';

function _echoStatus(response: ClientResponse<any>, credentials?: Credentials) {
  // iNFO: ECHO STATUS ON ERROR Block Start ******************************
  if (response.status !== 200) {
    echo('________________________________________________');
    echo(response.status, response.statusText);
    echo(response.data);
    void tablelog(response.headers);
    echo(
      remaningTimeString(
        credentials?.remainingRequests?.secondsRemaning
          ? credentials.remainingRequests.secondsRemaning
          : 0,
      ),
    );
    echo(response.status, response.statusText);
    echo('________________________________________________');
    echo('++++++++++++++++++++++++++++++++++++++++++++++++');
  } else {
    // iNFO: ECHO STATUS ON 200 OK Block Start //-!
    // echo(
    //   remaningTimeString(
    //     credentials?.remainingRequests?.secondsRemaning
    //       /? credentials.remainingRequests.secondsRemaning
    //       : 0
    //   )
    // );
  }
}

export { _echoStatus };
