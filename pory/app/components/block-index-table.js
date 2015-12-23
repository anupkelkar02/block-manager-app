import Ember from 'ember';

export default Ember.Component.extend({
    didInsertElement()
    {
        // Load Tablesorter on any eligible tables
        Ember.$('.table-sortable').each(function()
        {
            // Get the amount of rows it has
            let rows = Ember.$(this).find('tr').length;

            // Make sure it has more rows than just the header
            if (rows > 1) {

                // Load up tablesorter
                Ember.$(this).tablesorter({
                    sortList: [[0,1]]
                });
            }
        });
    },

    actions: {
        deleteBlock(id)
        {
            // Make them confirm that they want to delete
            let message = "Are you sure?";

            if (confirm(message)) {
                
                // Pass the id up to the controller
                this.get('deleteBlock')(id);

                // Reload Tablesorter on any eligible tables
                Ember.$('.table-sortable').trigger('update').trigger('appendCache');
            }
        }
    }
});
