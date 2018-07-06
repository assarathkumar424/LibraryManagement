import { helper } from '@ember/component/helper';

export function pageNumber(params) {
  var value=parseInt(params);
  return value+1;
}

export default helper(pageNumber);
