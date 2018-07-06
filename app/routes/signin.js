import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
	session:service('create-session'),
	notify:service('notification-messages'),
	beforeModel(){
		if(this.get('session').getloginstatus()){
			this.get('notify').error('YOU ARE LOGGED IN',{
				autoClear:true,
				clearDuration: 1000
				});
			this.transitionTo('options');
		}
	},
	model(){
		return {};
	}
});
