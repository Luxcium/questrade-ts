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

/** @deprecated -   */
export type IdentifierCharacter = Digit | NonDigit;
/** @deprecated -   */
export type NonDigit = Letter | '-';
/** @deprecated -   */
export type Digit = '0' | PositiveDigit;
/** @deprecated -   */
export type PositiveDigit = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';
/** @deprecated -   */
export type Letter =
  | 'A'
  | 'B'
  | 'C'
  | 'D'
  | 'E'
  | 'F'
  | 'G'
  | 'H'
  | 'I'
  | 'J'
  | 'K'
  | 'L'
  | 'M'
  | 'N'
  | 'O'
  | 'P'
  | 'Q'
  | 'R'
  | 'S'
  | 'T'
  | 'U'
  | 'V'
  | 'W'
  | 'X'
  | 'Y'
  | 'Z'
  | 'a'
  | 'b'
  | 'c'
  | 'd'
  | 'e'
  | 'f'
  | 'g'
  | 'h'
  | 'i'
  | 'j'
  | 'k'
  | 'l'
  | 'm'
  | 'n'
  | 'o'
  | 'p'
  | 'q'
  | 'r'
  | 's'
  | 't'
  | 'u'
  | 'v'
  | 'w'
  | 'x'
  | 'y'
  | 'z';
