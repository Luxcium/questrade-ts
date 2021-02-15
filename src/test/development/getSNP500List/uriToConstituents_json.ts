// Import { Dataset } from 'data.js';
export const uriToConstituents_json =
  'https://pkgstore.datahub.io/' +
  'core/s-and-p-500-companies/' +
  'constituents_json/data/' +
  '64dd3e9582b936b0352fdd826ecd3c95/' +
  'constituents_json.json';

// Const path = 'https://datahub.io/core/s-and-p-500-companies/datapackage.json';

//   // We're using self-invoking function here as we want to use async-await syntax:
// (async () => {
//   Const dataset = await Dataset.load(path);
//   // get list of all resources:
//   For (const id in dataset.resources) {
//   }
//   // get all tabular data(if exists any)
//   For (const id in dataset.resources) {
//     If (dataset.resources[id]._descriptor.format === 'csv') {
//       Const file = dataset.resources[id];
//       // Get a raw stream
//       Const stream = await file.stream();
//       // entire file as a buffer (be careful with large files!)
//       Const buffer = await file.buffer;
//       // print data
//       Stream.pipe(process.stdout);
//     }
//   }
// })();
