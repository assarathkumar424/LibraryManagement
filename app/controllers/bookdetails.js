import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
	notify:service('notification-messages'),
	actions:{

		authordetail(name){
			this.get('store').findAll('author').then(response =>{
				var data=response.findBy('authorname',name);
				this.transitionToRoute('authordetails',data.id);
			});
		},

		reducebookcount(id){
			var booksavailable=parseInt(this.get('model.quantity'));
			if(booksavailable<1){
				this.get('notify').error('BOOKS ARE NOT AVAILABLE',{
					autoClear:true,
					clearDuration: 1000
					});
			}
			else{
				this.get('store').findRecord('book',id).then(response => {
					response.set('quantity',(booksavailable-1));
					response.save();
					this.get('notify').success('HAPPY READING',{
						autoClear:true,
						clearDuration: 1000
						});
					this.transitionToRoute('bookdetails',this.get('model.id'));
				});

			}
		},

		increasebookcount(id){
			var booksavailable=parseInt(this.get('model.quantity'));
			this.get('store').findRecord('book',id).then(response => {
				response.set('quantity',(booksavailable+1));
				response.save();
				this.get('notify').success('THANK YOU',{
					autoClear:true,
					clearDuration: 1000
					});
				this.transitionToRoute('bookdetails',this.get('model.id'));
			});
		},

		delete(id){
			if(confirm('are you sure to delete this book')){
			this.get('store').findRecord('book',id).then(response =>{
				response.destroyRecord();
				response.save();
			});
			this.transitionToRoute('bookslist');
		}
		},

		update(id){
			this.transitionToRoute('alterbookdetails',id);
		}
	}
});
