import type { ClientResponse } from '../../../resources/side-effects/types';
export declare const remainingRequests: <T>(response: ClientResponse<T>, maximumperseconds?: number) => {
    maximumperseconds: number;
    maximums: [number, number, number];
    minutesRemaning: number;
    possiblePerSeconds: number;
    remaining: number;
    secondsRemaning: number;
    timeNow: number;
    timeThen: number;
};
//# sourceMappingURL=remainingRequests.d.ts.map