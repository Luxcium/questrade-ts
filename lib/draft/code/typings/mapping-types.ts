import { promiseOf } from '../../../utils';
import { applyListMapping } from '../../../utils/mapping-function';

async function main() {
  const mappableList = ['one', 'two', 'three'];
  const mapperFunction = async (item: string) => promiseOf(item.length);
  const mappedResult = await applyListMapping(mappableList)(mapperFunction);
  console.log(mappedResult);
}

main();
