import Ember from 'ember';

export default Ember.ArrayController.extend({
  actions: {
    newPost: function() {
      var title = this.get('postTitle');
      var body = this.get('postBody');

      var post = this.store.createRecord('post', {
        body: body,
        title: title
      });
      this.set('postTitle', '');
      this.set('postBody', '');
      post.save().then(function(){
        this.transitionToRoute('posts');
      }.bind(this));
    }
  }
});
