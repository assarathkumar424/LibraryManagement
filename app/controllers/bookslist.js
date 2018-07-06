import Controller from '@ember/controller';
import {computed} from '@ember/object'
export default Controller.extend({
	queryParams:['pageNumber'],
	searchedname:"",

	pageNumber:0,
	pageSize:3,
	pages:computed('listedbooks','pageSize',function(){
		var pages=[];
		var temparray=this.get('listedbooks');
		for(let i=0;i<temparray.length;i=i+parseInt(this.get('pageSize'))){
			pages.push(temparray.slice(i,i+parseInt(this.get('pageSize'))));
		}
		return pages;
	}),
	paginatedContent:computed('pages','pageNumber',function(){
		return this.get('pages') [this.get('pageNumber')]
	}),
	actions:{
		displaydetail(id){
			this.transitionToRoute('bookdetails',id);
		},
		searchbook(){
			var searchname=Ember.get(this,'name');
			this.set('searchedname',searchname);
			if(searchname!==""){
				var list=[];
				var data=this.get('model');
				console.log(data);
				data.forEach((item)=>{
					if(item.bookname.toLowerCase().includes(searchname.toLowerCase())){
						list.pushObject(item);
					}
				});
				this.set('paginatedContent',list);
			}
			else{
				this.set('paginatedContent',this.get('pages')[this.get('pageNumber')]);
			}
		}
	}
});
