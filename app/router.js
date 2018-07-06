import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('studentsignup');
  this.route('staffsignup');
  this.route('signin');
  this.route('bookslist');
  this.route('home');
  this.route('bookdetails',{path:'/bookdetails/:id'});
  this.route('authorslist');
  this.route('authordetails',{path:'/authordetails/:id'});
  this.route('addbook');
  this.route('updatebook');
  this.route('addauthor');
  this.route('loading');
  this.route('logout');
  this.route('options');
  this.route('profile');
  this.route('error',{path:'/error'});
  this.route('alterbookdetails',{path:'/alterbookdetails/:id'});
});

export default Router;
