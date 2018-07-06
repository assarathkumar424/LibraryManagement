import Service from '@ember/service';

export default Service.extend({
  loginstatus:false,
  allowaccess:true,
  userid:null,
  setloginstatus(value){
    this.set('loginstatus',value);
  },
  getloginstatus(){
    return this.get('loginstatus');
  },
  setallowaccess(value){
    this.set('allowaccess',value);
  },
  getallowaccess(){
    return this.get('allowaccess');
  },
  setuserid(value){
    this.set('userid',value);
  },
  getuserid(){
    return this.get('userid');
  }
});
