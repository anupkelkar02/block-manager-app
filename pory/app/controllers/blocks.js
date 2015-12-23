import Ember from 'ember';
export default Ember.Controller.extend({
    actions: {
        createBlock(data)
        {
        // Create the block
            let block = this.store.createRecord('block', {
                reference: data.reference,
                name: data.name,
                site: data.site,
                creationdate: data.creationdate
               
            });

            // Save the block
            block.save();

            // Create a response
            let response = {
                success: "You successfully created the block."
            };

            return response;
        },
        deleteBlock(id)
        {
            // Find the block
            this.store.findRecord('block', id).then(function(block)
            {
                // Destroy the record
                block.destroyRecord();
            });
        },

        editBlock(data)
        {
            // Find the block
            this.store.findRecord('block', data.id).then(function(block)
            {
                // Update the block
                block.set("reference", data.reference);
                block.set("name", data.name);
                block.set("site", data.site);
                

                // Save the block
                block.save();
            });

            // Create a response
            let response = {
                success: "Your changes were successfully saved."
            };

            return response;
        }
    }
});