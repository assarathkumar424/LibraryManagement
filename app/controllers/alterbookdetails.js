import Controller from '@ember/controller';

export default Controller.extend({
  actions:{
    updatebookdetails(id){
      this.get('store').findRecord('book',id).then(response =>{
        response.save();
        this.transitionToRoute('bookdetails',id);
      });
    }
  }
});
