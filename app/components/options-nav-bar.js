import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  session:service('create-session'),
	islogged:false,
	isuserstudent:false,
	init(){
    this._super(...arguments);
		this.set('islogged',this.get('session').getloginstatus());
		this.set('isuserstudent',this.get('session').getallowaccess());
	},
});
