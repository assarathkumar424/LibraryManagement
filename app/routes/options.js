import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  session:service('create-session'),
  beforeModel(){
		if(!this.get('session').getloginstatus()){
      this.get('notify').error('PLEASE LOGIN AND ENTER',{
      	autoClear:true,
      	clearDuration: 2000
      	});
			this.transitionTo('signin');
		}
	},
  setupController(controller,model){
  	this._super(...arguments);
  	controller.set('isuserstudent',this.get('session').getallowaccess());
  }
});
