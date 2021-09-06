import classic from 'ember-classic-decorator';
import { action } from '@ember/object';
import { readOnly } from '@ember/object/computed';
import Controller from '@ember/controller';
import { isEmpty } from '@ember/utils';

@classic
export default class IndexController extends Controller {
  @readOnly('model')
  users;

  @action
  filterGreaterThanOrEqual(value, min) {
    if (isEmpty(value) || isEmpty(min)) {
      return true;
    }

    return value >= min;
  }
}
