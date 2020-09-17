import Model, { hasMany, attr } from '@ember-data/model';

export default class UserModel extends Model {

  @attr('string')
  email;
  @attr('string')
  firstName;
  @attr('string')
  lastName;

  // Relationships

  @hasMany('event')
  events;
  @hasMany('image')
  images;
}
