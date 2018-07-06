import DS from 'ember-data';

export default DS.Model.extend({
	name:DS.attr('string'),
	email:DS.attr('string'),
	registerno:DS.attr('string'),
	department:DS.attr('string'),
	password:DS.attr('string'),
	isstudent:DS.attr('boolean')
});
