export type FnAtoB<A, B> = (val: A) => B;
export type FnAB<B> = <A>(val: A) => B;

// export type {  FsImplementationSync,
//   made,
//   mode,
//   optionsSync,
// } from './'
