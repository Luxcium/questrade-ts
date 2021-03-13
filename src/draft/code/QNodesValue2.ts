// -----------------------------------------------------------------------------!!

export interface QNodesValue2 {
  cb?: any;
  config: any;
  fn: <R>(config?: unknown) => R;
  functionKind?: 'other';
}
