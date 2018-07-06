import { helper } from '@ember/component/helper';

export function selectBooksOfAuthor(params,namedArgs/*, hash*/) {
	var booksarray=params.filterBy(params.author,namedArgs.name)
  return booksarray;
}

export default helper(selectBooksOfAuthor);

