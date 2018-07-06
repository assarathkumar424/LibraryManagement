import DS from 'ember-data';

export default DS.Model.extend({
	authorname:DS.attr('string'),
	country:DS.attr('string')
	// authorid:DS.attr('number')
});
