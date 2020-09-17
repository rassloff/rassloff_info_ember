import Model, { hasMany, belongsTo, attr } from '@ember-data/model';

export default class EventModel extends Model {

  @attr('string')
  date;
  @attr('string')
  description;
  @attr('string')
  location;
  @attr('string')
  title;

  // Relationships

  @hasMany('image')
  images;

  @belongsTo('user')
  user;
}
