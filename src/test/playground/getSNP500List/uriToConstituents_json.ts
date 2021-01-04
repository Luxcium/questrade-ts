// import { Dataset } from 'data.js';
// tslint:disable-next-line: variable-name
export const uriToConstituents_json =
  'https://pkgstore.datahub.io/' +
  'core/s-and-p-500-companies/' +
  'constituents_json/data/' +
  '64dd3e9582b936b0352fdd826ecd3c95/' +
  'constituents_json.json';

// const path = 'https://datahub.io/core/s-and-p-500-companies/datapackage.json';

//   // We're using self-invoking function here as we want to use async-await syntax:
// (async () => {
//   const dataset = await Dataset.load(path);
//   // get list of all resources:
//   // tslint:disable-next-line: forin
//   for (const id in dataset.resources) {
//   }
//   // get all tabular data(if exists any)
//   for (const id in dataset.resources) {
//     if (dataset.resources[id]._descriptor.format === 'csv') {
//       const file = dataset.resources[id];
//       // Get a raw stream
//       const stream = await file.stream();
//       // entire file as a buffer (be careful with large files!)
//       const buffer = await file.buffer;
//       // print data
//       stream.pipe(process.stdout);
//     }
//   }
// })();
