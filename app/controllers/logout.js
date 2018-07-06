import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  session:service('create-session'),
  notify:service('notification-messages'),
  actions:{
    logout(){
      this.get('session').setloginstatus(false);
      this.get('session').setuserid(null);
      this.get('notify').success('YOU ARE LOGGED OUT',{
        autoClear:true,
        clearDuration: 1000
        });
      this.transitionToRoute('home');
    }
  }
});
