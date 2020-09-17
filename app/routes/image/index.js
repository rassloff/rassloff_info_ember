import Route from '@ember/routing/route';

export default class ImageIndexRoute extends Route {
  model() {
    return this.modelFor('image');
  }
}
