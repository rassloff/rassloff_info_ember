import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking'

export default class LoginController extends Controller {
  @service session;

  @tracked errror;
  //@tracked name = 'c1312asd';
  //@tracked password = '12345asdfghj';

  @action
  async login(e) {

    let { username, password } = this;

    e.preventDefault();
    try {
      await this.session.authenticate('authenticator:token', username, password);
    } catch(error) {
      this.error = error;
    }
  }

  @action
  invalidateSession() {
    this.session.invalidate();
  }

  @action
  updateIdentification(e) {
    this.username = e.target.value;
  }

  @action
  updatePassword(e) {
    this.password = e.target.value;
  }
}
