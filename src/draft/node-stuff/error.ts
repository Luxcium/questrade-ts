// Creating a TypeError
// export const nulll = null;
import net from 'net';

try {
  // @ts-ignore
  throw new TypeError('Hello', 'someFile.js', 10);
} catch (error) {
  console.log(error instanceof TypeError); // true
  console.log(error.message); // "Hello"
  console.log(error.name); // "TypeError"
  console.log(error.fileName); // "someFile.js"
  console.log(error.lineNumber); // 10
  console.log(error.columnNumber); // 0
  // console.log(error.stack); // "@Scratchpad/2:2:9\n"
}

// Catching a TypeError

try {
  // @ts-ignore
  null.f();
} catch (error) {
  console.log(error instanceof TypeError); // true
  console.log(error.message); // "null has no properties"
  console.log(error.name); // "TypeError"
  console.log(error.fileName); // "Scratchpad/1"
  console.log(error.lineNumber); // 2
  console.log(error.columnNumber); // 2
  // console.log(error.stack); // "@Scratchpad/2:2:3\n"
}

const connection = net.connect('0.0.0.0');

// Adding an 'error' event handler to a stream:
connection.on('error', err => {
  // If the connection is reset by the server, or if it can't
  // connect at all, or on any sort of error encountered by
  // the connection, the error will be sent here.
  console.error(err);
});

// connection.pipe(process.stdin);
