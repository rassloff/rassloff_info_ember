import Route from '@ember/routing/route';

export default class ImagesIndexRoute extends Route {
  model() {
    return this.store.findAll('image');
  }
}
