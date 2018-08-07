import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  media: service(),
  showMenu: false,
  actions: {
    toggleMenu() {
      this.toggleProperty('showMenu');
    }
  }
});
