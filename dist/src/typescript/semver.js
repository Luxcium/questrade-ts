"use strict";
/*

export type valid semver = <version core>
                 | <version core> "-" <pre-release>
                 | <version core> "+" <build>
                 | <version core> "-" <pre-release> "+" <build>

export type version core = <major> "." <minor> "." <patch>

export type major = <numeric identifier>

export type minor = <numeric identifier>

export type patch = <numeric identifier>

export type pre-release = <dot-separated pre-release identifiers>

export type dot-separated pre-release identifiers = <pre-release identifier>
                                          | <pre-release identifier> "." <dot-separated pre-release identifiers>

export type build = <dot-separated build identifiers>

export type dot-separated build identifiers = <build identifier>
                                    | <build identifier> "." <dot-separated build identifiers>

export type pre-release identifier = <alphanumeric identifier>
                           | <numeric identifier>

export type build identifier = <alphanumeric identifier>
                     | <digits>

export type alphanumeric identifier = NonDigit
                            | NonDigit IdentifierCharacters
                            | IdentifierCharacters NonDigit
                            | IdentifierCharacters NonDigit IdentifierCharacters

export type numeric identifier = "0"
                       | PositiveDigit
                       | PositiveDigit <digits>

export type IdentifierCharacters = IdentifierCharacter
                          | IdentifierCharacter IdentifierCharacters


export type Digits = Digit
           | Digit <digits>


*/
Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VtdmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3R5cGVzY3JpcHQvc2VtdmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBZ0RFIiwic291cmNlc0NvbnRlbnQiOlsiLypcblxuZXhwb3J0IHR5cGUgdmFsaWQgc2VtdmVyID0gPHZlcnNpb24gY29yZT5cbiAgICAgICAgICAgICAgICAgfCA8dmVyc2lvbiBjb3JlPiBcIi1cIiA8cHJlLXJlbGVhc2U+XG4gICAgICAgICAgICAgICAgIHwgPHZlcnNpb24gY29yZT4gXCIrXCIgPGJ1aWxkPlxuICAgICAgICAgICAgICAgICB8IDx2ZXJzaW9uIGNvcmU+IFwiLVwiIDxwcmUtcmVsZWFzZT4gXCIrXCIgPGJ1aWxkPlxuXG5leHBvcnQgdHlwZSB2ZXJzaW9uIGNvcmUgPSA8bWFqb3I+IFwiLlwiIDxtaW5vcj4gXCIuXCIgPHBhdGNoPlxuXG5leHBvcnQgdHlwZSBtYWpvciA9IDxudW1lcmljIGlkZW50aWZpZXI+XG5cbmV4cG9ydCB0eXBlIG1pbm9yID0gPG51bWVyaWMgaWRlbnRpZmllcj5cblxuZXhwb3J0IHR5cGUgcGF0Y2ggPSA8bnVtZXJpYyBpZGVudGlmaWVyPlxuXG5leHBvcnQgdHlwZSBwcmUtcmVsZWFzZSA9IDxkb3Qtc2VwYXJhdGVkIHByZS1yZWxlYXNlIGlkZW50aWZpZXJzPlxuXG5leHBvcnQgdHlwZSBkb3Qtc2VwYXJhdGVkIHByZS1yZWxlYXNlIGlkZW50aWZpZXJzID0gPHByZS1yZWxlYXNlIGlkZW50aWZpZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDxwcmUtcmVsZWFzZSBpZGVudGlmaWVyPiBcIi5cIiA8ZG90LXNlcGFyYXRlZCBwcmUtcmVsZWFzZSBpZGVudGlmaWVycz5cblxuZXhwb3J0IHR5cGUgYnVpbGQgPSA8ZG90LXNlcGFyYXRlZCBidWlsZCBpZGVudGlmaWVycz5cblxuZXhwb3J0IHR5cGUgZG90LXNlcGFyYXRlZCBidWlsZCBpZGVudGlmaWVycyA9IDxidWlsZCBpZGVudGlmaWVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCA8YnVpbGQgaWRlbnRpZmllcj4gXCIuXCIgPGRvdC1zZXBhcmF0ZWQgYnVpbGQgaWRlbnRpZmllcnM+XG5cbmV4cG9ydCB0eXBlIHByZS1yZWxlYXNlIGlkZW50aWZpZXIgPSA8YWxwaGFudW1lcmljIGlkZW50aWZpZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICB8IDxudW1lcmljIGlkZW50aWZpZXI+XG5cbmV4cG9ydCB0eXBlIGJ1aWxkIGlkZW50aWZpZXIgPSA8YWxwaGFudW1lcmljIGlkZW50aWZpZXI+XG4gICAgICAgICAgICAgICAgICAgICB8IDxkaWdpdHM+XG5cbmV4cG9ydCB0eXBlIGFscGhhbnVtZXJpYyBpZGVudGlmaWVyID0gTm9uRGlnaXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE5vbkRpZ2l0IElkZW50aWZpZXJDaGFyYWN0ZXJzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBJZGVudGlmaWVyQ2hhcmFjdGVycyBOb25EaWdpdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSWRlbnRpZmllckNoYXJhY3RlcnMgTm9uRGlnaXQgSWRlbnRpZmllckNoYXJhY3RlcnNcblxuZXhwb3J0IHR5cGUgbnVtZXJpYyBpZGVudGlmaWVyID0gXCIwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgfCBQb3NpdGl2ZURpZ2l0XG4gICAgICAgICAgICAgICAgICAgICAgIHwgUG9zaXRpdmVEaWdpdCA8ZGlnaXRzPlxuXG5leHBvcnQgdHlwZSBJZGVudGlmaWVyQ2hhcmFjdGVycyA9IElkZW50aWZpZXJDaGFyYWN0ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfCBJZGVudGlmaWVyQ2hhcmFjdGVyIElkZW50aWZpZXJDaGFyYWN0ZXJzXG5cblxuZXhwb3J0IHR5cGUgRGlnaXRzID0gRGlnaXRcbiAgICAgICAgICAgfCBEaWdpdCA8ZGlnaXRzPlxuXG5cbiovXG5cbmV4cG9ydCB0eXBlIElkZW50aWZpZXJDaGFyYWN0ZXIgPSBEaWdpdCB8IE5vbkRpZ2l0O1xuZXhwb3J0IHR5cGUgTm9uRGlnaXQgPSBMZXR0ZXIgfCAnLSc7XG5leHBvcnQgdHlwZSBEaWdpdCA9ICcwJyB8IFBvc2l0aXZlRGlnaXQ7XG5leHBvcnQgdHlwZSBQb3NpdGl2ZURpZ2l0ID0gJzEnIHwgJzInIHwgJzMnIHwgJzQnIHwgJzUnIHwgJzYnIHwgJzcnIHwgJzgnIHwgJzknO1xuZXhwb3J0IHR5cGUgTGV0dGVyID1cbiAgfCAnQSdcbiAgfCAnQidcbiAgfCAnQydcbiAgfCAnRCdcbiAgfCAnRSdcbiAgfCAnRidcbiAgfCAnRydcbiAgfCAnSCdcbiAgfCAnSSdcbiAgfCAnSidcbiAgfCAnSydcbiAgfCAnTCdcbiAgfCAnTSdcbiAgfCAnTidcbiAgfCAnTydcbiAgfCAnUCdcbiAgfCAnUSdcbiAgfCAnUidcbiAgfCAnUydcbiAgfCAnVCdcbiAgfCAnVSdcbiAgfCAnVidcbiAgfCAnVydcbiAgfCAnWCdcbiAgfCAnWSdcbiAgfCAnWidcbiAgfCAnYSdcbiAgfCAnYidcbiAgfCAnYydcbiAgfCAnZCdcbiAgfCAnZSdcbiAgfCAnZidcbiAgfCAnZydcbiAgfCAnaCdcbiAgfCAnaSdcbiAgfCAnaidcbiAgfCAnaydcbiAgfCAnbCdcbiAgfCAnbSdcbiAgfCAnbidcbiAgfCAnbydcbiAgfCAncCdcbiAgfCAncSdcbiAgfCAncidcbiAgfCAncydcbiAgfCAndCdcbiAgfCAndSdcbiAgfCAndidcbiAgfCAndydcbiAgfCAneCdcbiAgfCAneSdcbiAgfCAneic7XG4iXX0=