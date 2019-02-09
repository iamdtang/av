import Component from '@ember/component';
import { equal } from '@ember/object/computed';

export default Component.extend({
  totalCount: sessionStorage.totalCount || 0,
  cantDecrement: equal('totalCount', 0),
  actions: {
    increment() {
      this.incrementProperty('totalCount');
      sessionStorage.totalCount = this.totalCount;
    },
    decrement() {
      if (this.totalCount > 0) {
        this.decrementProperty('totalCount');
        sessionStorage.totalCount = this.totalCount;
      }
    }
  }
});
