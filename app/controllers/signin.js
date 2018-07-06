import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
	session:service('create-session'),
	notify:service('notification-messages'),
	issuccess:false,
	isastudent:false,
	idvalue:null,
	actions:{
		studentsignup(){
			this.transitionToRoute('studentsignup');
		},
		staffsignup(){
			this.transitionToRoute('staffsignup');
		},
		validate(email,password){
			this.get('store').findAll('membership').then(response =>{
				response.forEach((item)=>{
					if(item.email===email && item.password===password){
						this.set('issuccess',true);
						this.set('isastudent',item.isstudent);
						this.set('idvalue',item);
					}
				})
				if(this.get('issuccess')){
					this.get('notify').success('HAVE A HAPPY READING',{
						autoClear:true,
						clearDuration: 1000
						});
					this.get('session').setloginstatus(true);
					this.get('session').setuserid(this.get('idvalue'));
					this.get('session').setallowaccess(this.get('isastudent'));
					this.transitionToRoute('options');
				}
				else{
					this.get('notify').error('WRONG DETAILS PLEASE ENTER CORRECTLY',{
						autoClear:true,
						clearDuration: 1000
						});
				}
			});
		}
	}
});
