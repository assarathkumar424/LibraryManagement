import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
	notify:service('notification-messages'),
	actions:{
		addstaff(email){
			this.get('store').findAll('membership').then(response =>{
				var data=response.filterBy('email',email);
				if(data.get('length')===0){
					const model=this.get('model');
					Ember.set(model,'isstudent',false);
					this.get('store').createRecord('membership',model).save();
					this.get('notify').success('SIGN UP SUCcESSFUL',{
						autoClear:true,
						clearDuration: 1000
						});
					this.transitionToRoute('signin');
				}
				else{
					this.get('notify').error('THIS EMAIL ALREADY EXSISTS PLEASE CHOOSE ANOTHER',{
						autoClear:true,
						clearDuration: 1000
						});
				}
			});
		}
	}
});
