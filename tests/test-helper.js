import Application from 'ember-rassloff-info/app';
import config from 'ember-rassloff-info/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
