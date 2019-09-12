// - Copyright (c) Benjamin Vincent Kasapoglu (Luxcium). All rights reserved.
// - Licensed under the MIT License.
// - See License.txt in the project root for license information.

export interface IQuestradeAPIOptions {
  practiceAccount?: boolean;
  test?: boolean;
  keyDir?: string;
  apiVersion?: string;
  keyFile?: string;
  seedToken?: seedToken;
  account?: string | number;
}

type seedToken = string;

type keyFile = string;

export type QuestradeAPIOptions = IQuestradeAPIOptions | seedToken | keyFile;
