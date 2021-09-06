import classic from 'ember-classic-decorator';
import { action } from '@ember/object';
import Controller from '@ember/controller';

@classic
export default class IndexController extends Controller {
  @action
  async delete() {
    let user = this.model;
    await user.destroyRecord();
    await this.transitionToRoute('users');
  }
}
