import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
	notify:service('notification-messages'),
	actions:{
		addauthor(){
			const model=this.get('model');
			this.get('store').createRecord('author',model).save();
			this.get('store').findAll('author').then(response=>{
				response.forEach((items)=>{
					if(items.authorname===model.authorname){
						this.get('notify').success('NEW AUTHOR ADDED SUCESSFULLY',{
							autoClear:true,
							clearDuration: 1000
							});
						this.transitionToRoute('authordetails',items.id);
					}
				});
			});
		}
	}
});
