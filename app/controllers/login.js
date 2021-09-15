import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking'

export default class LoginController extends Controller {
  @service session;

  @tracked errror;
  @tracked name; // = 'c1312asd';
  @tracked password; // = '12345asdfghj';




  @action
  async login(event) {

    //console.log('??? login ???');
    //console.log('??? login ???', this.name);
    //console.log('??? event login ???', event);

    event.preventDefault();
    try {
      await this.session.authenticate('authenticator:token', this.name, this.password);
    } catch(error) {
      this.error = error;
    }
  }





  @action
  update(attr, event) {
    this[attr] = event.target.value;
  }

  @action
  invalidateSession() {
    this.session.invalidate();
  }
}
