import EmberRouter from '@ember/routing/router';
import config from './config/environment';
import Trackable from 'ember-cli-analytics/mixins/trackable';

const Router = EmberRouter.extend(Trackable, {
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('counter');
  this.route('events');
});

export default Router;
