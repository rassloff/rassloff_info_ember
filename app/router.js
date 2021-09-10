import EmberRouter from '@ember/routing/router';
import config from 'ember-rassloff-info/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('contact');

  this.route('event', { path: 'event/:event_id' }, function() {});
  this.route('events', function() {});

  this.route('image', { path: 'image/:image_id' },function() {});
  this.route('images', function() {});

  this.route('user', { path: 'user/:user_id' }, function() {});
  this.route('users', function() {});

  this.route('readme');
  this.route('login');
});
