import Model, { belongsTo, attr } from '@ember-data/model';

export default class ImageModel extends Model {
  @attr('string')
  imageName;

  @attr('string')
  imagePath;

  @attr('string')
  imageSize;

  // Relationships

  @belongsTo('event')
  event;

  @belongsTo('user')
  user;
}
