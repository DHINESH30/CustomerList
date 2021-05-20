import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('sales', function() {
    this.route('customers', function() {
      this.route('details',{path: "/:Key"});
    });
  });
});

export default Router;
