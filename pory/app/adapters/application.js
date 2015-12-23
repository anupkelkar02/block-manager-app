import PouchDB from 'pouchdb';
import { Adapter } from 'ember-pouch';

var db = new PouchDB('sap_software');

export default Adapter.extend({
  db: db
});

