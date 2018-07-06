import Controller from '@ember/controller';

export default Controller.extend({
	actions:{
		displaydetail(id){
			this.transitionToRoute('authordetails',id);
		}
	}
});
