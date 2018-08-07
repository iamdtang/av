import Component from '@ember/component';
import { equal } from '@ember/object/computed';

export default Component.extend({
  totalCount: localStorage.totalCount || 0,
  cantDecrement: equal('totalCount', 0),
  actions: {
    increment() {
      this.incrementProperty('totalCount');
      localStorage.totalCount = this.totalCount;
    },
    decrement() {
      if (this.totalCount > 0) {
        this.decrementProperty('totalCount');
        localStorage.totalCount = this.totalCount;
      }
    }
  }
});
