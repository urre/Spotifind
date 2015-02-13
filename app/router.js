import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource("search", { path: '/'}, function() {
      this.route("results", { path: "/results/:id" });
  });
});

export default Router;
