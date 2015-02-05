import Ember from 'ember';

export default Ember.ArrayController.extend({
  queryParams: ['q'],
  q: null,
  actions: {
    searchApi: function() {
      var search = this.get('q');
      console.log(search);

      this.store.find('post', {q: search}).then(function(posts) {
        this.set('model', posts)
      }.bind(this));

    }
  }

});
