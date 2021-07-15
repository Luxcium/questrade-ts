import { AxiosPromise } from 'axios';

import { ClientResponse } from './ClientResponse';

type Representative = AxiosPromise;
type Specimen = ClientPromise;

// /**
//  * Represents the completion of an asynchronous operation
//  */
// interface PromiseLike<T> {
//   /**
//    * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
//    * resolved value cannot be modified from the callback.
//    * @param onfinally - The callback to execute when the Promise is settled (fulfilled or rejected).
//    * @returns A Promise for the completion of the callback.
//    */
//   finally(onfinally?: (() => void) | undefined | null): Promise<T>;
//   /**
//    * Attaches callbacks for the resolution and/or rejection of the Promise.
//    * @param onfulfilled - The callback to execute when the Promise is resolved.
//    * @param onrejected - The callback to execute when the Promise is rejected.
//    * @returns A Promise for the completion of which ever callback is executed.
//    */
//   then<TResult1 = T, TResult2 = never>(
//     onfulfilled?:
//       | ((value: T) => TResult1 | PromiseLike<TResult1>)
//       | undefined
//       | null,
//     onrejected?:
//       | ((reason: any) => TResult2 | PromiseLike<TResult2>)
//       | undefined
//       | null,
//   ): PromiseLike<TResult1 | TResult2>;

//   /**
//    * Attaches callbacks for the resolution and/or rejection of the Promise.
//    * @param onfulfilled - The callback to execute when the Promise is resolved.
//    * @param onrejected - The callback to execute when the Promise is rejected.
//    * @returns A Promise for the completion of which ever callback is executed.
//    */
//   then<TResult1 = T, TResult2 = never>(
//     onfulfilled?:
//       | ((value: T) => TResult1 | PromiseLike<TResult1>)
//       | undefined
//       | null,
//     onrejected?:
//       | ((reason: any) => TResult2 | PromiseLike<TResult2>)
//       | undefined
//       | null,
//   ): Promise<TResult1 | TResult2>;

//   /**
//    * Attaches a callback for only the rejection of the Promise.
//    * @param onrejected - The callback to execute when the Promise is rejected.
//    * @returns A Promise for the completion of the callback.
//    */
//   catch<TResult = never>(
//     onrejected?:
//       | ((reason: any) => TResult | PromiseLike<TResult>)
//       | undefined
//       | null,
//   ): Promise<T | TResult>;

//   readonly [Symbol.toStringTag]: string;
// }
export interface ClientPromise<T = any> extends Promise<ClientResponse<T>> {}

interface Input {
  sampleA: Specimen;
  sampleB: Representative;
}
interface ReversedOutput {
  sampleA: Representative;
  sampleB: Specimen;
}

void function testFunction(sample: Input): ReversedOutput {
  return sample;
};
