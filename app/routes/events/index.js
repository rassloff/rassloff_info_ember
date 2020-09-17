import Route from '@ember/routing/route';

export default class EventsIndexRoute extends Route {
  model() {
    return this.store.findAll('event');
  }
}
