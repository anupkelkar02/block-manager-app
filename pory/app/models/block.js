import DS from 'ember-data';

export default DS.Model.extend({
    reference: DS.attr('string'),
    name : DS.attr('string'),
    site : DS.attr('string'),
    surveyor : DS.attr('string'),
    creationdate : DS.attr('string'),
     rev: DS.attr('string')
    
});