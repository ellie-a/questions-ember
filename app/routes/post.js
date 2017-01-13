import Ember from 'ember';

export default Ember.Route.extend({
  actions : {
    saveQuestion(params) {
      console.log(params);
      var newQuestion = this.store.createRecord('question', params);
      newQuestion.save();
      this.transitionTo('index');
    }
  }
});
