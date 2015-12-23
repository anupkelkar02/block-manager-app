import Ember from 'ember';

export default Ember.Component.extend({
    tagName: "tr",

    actions: {
        deleteBlock()
        {
            // Get the id
            let id = this.block.id;

            // Pass the id up to the delete function of the index table
            this.get('deleteBlock')(id);
        },

        editBlock()
        {
            // Get the block
            let block = this.block;

            // Set the block's data in the edit block modal
            Ember.$('#editBlockModalId').val(block.get('id')).trigger('change');
            Ember.$('#editBlockModalReference').val(block.get('reference')).trigger('change');
            Ember.$('#editBlockModalName').val(block.get('name')).trigger('change');
            Ember.$('#editBlockModalSite').val(block.get('site')).trigger('change');
            

            // Show the edit block modal
            Ember.$('#editBlockModal').modal();
        }
    }
});
