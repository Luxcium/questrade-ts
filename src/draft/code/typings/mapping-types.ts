import { mappingFunction, promiseOf } from '../../../utils';

async function main() {
  const mappableList = ['one', 'two', 'three'];
  const mapperFunction = async (item: string) => promiseOf(item.length);
  const mappedResult = await mappingFunction(mappableList, mapperFunction);
  console.log(mappedResult);
}

main();
