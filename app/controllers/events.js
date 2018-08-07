import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

const PAGE_ID = '1118053411550221';
// https://developers.facebook.com/docs/graph-api/reference/page/events/

export default Controller.extend({
  torii: service(),
  actions: {
    login() {
      this.torii.open('facebook-connect').then(() => {
        FB.api(`/${PAGE_ID}`, {
          time_filter: 'upcoming'
        }, function(response) {
          console.log(response);
        });

        FB.api('/113124472034820', function(response) {
          console.log(response);
        });
      });
    }
  }
});
