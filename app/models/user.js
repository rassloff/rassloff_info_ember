import Model, { hasMany, attr } from '@ember-data/model';

export default class UserModel extends Model {

  @attr('string')
  email;

  @attr('string')
  firstName;

  @attr('string')
  lastName;

  @attr('string')
  name;

  @attr('string')
  username;

  @attr('string')
  password;
  // Relationships

  @hasMany('event')
  events;

  @hasMany('image')
  images;
}
