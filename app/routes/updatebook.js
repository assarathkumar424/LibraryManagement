import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
	session:service('create-session'),
	notify:service('notification-messages'),
	beforeModel(){
		if(!this.get('session').getloginstatus()){
			this.get('notify').error('PLEASE LOGIN AND ENTER',{
				autoClear:true,
				clearDuration: 2000
				});
			this.transitionTo('signin');
		}
	},
	model(params){
		return this.get('store').findAll('book').then(response =>{
				return response;
		});
	},
	setupController(controller,model){
		this._super(...arguments);
		controller.set('booklist',model);
		controller.set('isuserstudent',this.get('session').getallowaccess());
	}
});
