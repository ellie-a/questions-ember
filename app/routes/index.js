import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('question');

  },
  // actions: {
  //
  // }
});

// return Ember.RSVP.hash({
//   questions: this.store.findAll('question'),
//   answers: this.store.findAll('answer')
// });
