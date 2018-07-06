import DS from 'ember-data';

export default DS.Model.extend({
	bookname:DS.attr('string'),
	publishedby:DS.attr('string'),
	edition:DS.attr('string'),
	quantity:DS.attr('number'),
	author:DS.attr('string')
	// bookid:DS.attr('number')
});
