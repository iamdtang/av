import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

// const PAGE_ID = '1118053411550221'; // av
const PAGE_ID = '107774535942892'; // I wanna rage
// https://developers.facebook.com/docs/graph-api/reference/page/events/

export default Controller.extend({
  torii: service(),
  actions: {
    login() {
      this.torii.open('facebook-connect').then(() => {
        // FB.api(`/${PAGE_ID}/events`, {
        //   time_filter: 'upcoming'
        // }, function(response) {
        //   console.log(response);
        // });

        FB.api(`/${PAGE_ID}`, function(response) {
          console.log(response);
        });
      });
    }
  }
});
