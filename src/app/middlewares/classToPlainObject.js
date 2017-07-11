import * as _ from 'lodash';

/**
 * Redux middleware that transforms object like actions into plain objects.
 */
const classToPlainObject = () => (next: Function) => (action: any) => {
  const plainObjectAction = _.isObjectLike(action) ? _.toPlainObject(action) : action;
  return next(plainObjectAction);
};

export default classToPlainObject;