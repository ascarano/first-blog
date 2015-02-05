import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    editPost: function(post) {
      post.save().then(function(){
        this.transitionToRoute('post', post);
      }.bind(this));
    },
    deletePost: function(post) {
      post.destroyRecord().then(function(){
        this.transitionToRoute('posts');
      }.bind(this));
    }
  }
});
