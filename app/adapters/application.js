import classic from 'ember-classic-decorator';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';
import JSONAPIAdapter from '@ember-data/adapter/json-api';
import config from '../config/environment';
import { camelize } from '@ember/string';
import { pluralize } from 'ember-inflector';

@classic
export default class Application extends JSONAPIAdapter {
  @service
  auth;

  coalesceFindRequests = true;
  host = config.api.host;
  namespace = config.api.namespace;

  @computed('auth.accessToken')
  get headers() {
    let headers = {};
    headers['Authorization'] = `Bearer ${this.auth.accessToken}`;
    return headers;
  }

  pathForType(modelName) {
    return camelize(pluralize(modelName));
  }
}

