import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
	notify:service('notification-messages'),
	actions:{
		addbook(){
			this.get('store').findAll('author').then(response =>{
				return response;
			}).then(response =>{
				var flag=false;
				response.forEach((items)=>{
					if(items.authorname===this.get('model.author')){
						flag=true;
					}
				});
				if(flag){
					const model=this.get('model');
					this.get('store').createRecord('book',model).save();
					this.transitionToRoute('bookslist');
					this.get('notify').success('NEW BOOK ADDED SUCESSFULLY',{
						autoClear:true,
						clearDuration: 1000
						});
				}
				else{
					this.get('notify').error('PLEASE ADD AUTHOR AND COME',{
						autoClear:true,
						clearDuration: 1000
						});
						this.transitionToRoute('addauthor');
				}
			});
		}
	}
});
