import Reflux from 'reflux';
import Actions from '../actions/people_actions';

var Store = Reflux.createStore({
  listenables: Actions,

  init() {
    this.people = [];
  },

  onAdd(name) {
    this.people.push(name);
    this.trigger(this.people);
  },

  onRemove(index) {
    this.people.splice(index, 1);
    this.trigger(this.people);
  },

  onShuffle() {
    this.people.sort(function(a, b) {
      return 0.5 - Math.random();
    });
    this.trigger(this.people);
  }
});

export default Store;
