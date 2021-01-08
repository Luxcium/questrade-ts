# Fantasy Helpers

![](https://raw.github.com/puffnfresh/fantasy-land/master/logo.png)

## General

Helpers are functions that help build programs with [Fantasy World](https://github.com/SimonRichardson/fantasy-world).

## Testing

### Library

Fantasy Helpers uses [nodeunit](https://github.com/caolan/nodeunit) 
for all the tests and because of this there is currently an existing 
[adapter](test/lib/test.js) in the library to help with integration 
between nodeunit and Fantasy Helpers.

### Coverage

Currently Fantasy Helpers is using [Istanbul](https://github.com/gotwarlost/istanbul) 
for code coverage analysis; you can run the coverage via the following
command:

_This assumes that you have istanbul installed correctly._

```
istanbul cover nodeunit -- test/*.js
```

It should report that the total coverage is at 96% for the whole lib, 
because of the polyfils within the functions.