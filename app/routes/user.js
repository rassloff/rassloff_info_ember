import Route from '@ember/routing/route';

export default class UserRoute extends Route {
  model({ user_id: userId }) {
    return this.store.findRecord('user', userId);
  }
}
