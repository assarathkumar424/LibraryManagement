import Controller from '@ember/controller';

export default Controller.extend({
	book:null,
	booktitle:null,
	actions:{
		getbookname(book){
			this.set('book',book);
			this.set('booktitle',book.bookname);
		},
		updatebook(value){
			var booksavailable=parseInt(this.get('book').quantity);
			var val=parseInt(value);
			this.get('store').findRecord('book',this.get('book').id).then(response => {
				response.set('quantity',(booksavailable+val));
				response.save();
				this.transitionToRoute('bookdetails',this.get('book').id);
			});
		}
	}
});
