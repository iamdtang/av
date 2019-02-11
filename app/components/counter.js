import Component from '@ember/component';
import { equal } from '@ember/object/computed';

const storage = localStorage;

export default Component.extend({
  totalCount: storage.totalCount || 0,
  cantDecrement: equal('totalCount', 0),
  actions: {
    increment() {
      this.incrementProperty('totalCount');
      storage.totalCount = this.totalCount;
    },
    decrement() {
      if (this.totalCount > 0) {
        this.decrementProperty('totalCount');
        storage.totalCount = this.totalCount;
      }
    }
  }
});
