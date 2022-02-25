import _ from 'lodash';
export const convertKeyString = (keys:string, value:any, source:any) => {
  _.set(source, keys, value);
  return source;
}

export const removeEmptyObjects = (obj:any) => {
  return _(obj)
    .pickBy(_.isObject) // pick objects only
    // .mapValues(removeEmptyObjects) // call only for object values
    .omitBy(_.isEmpty) // remove all empty objects
    .assign(_.omitBy(obj, _.isObject)) // assign back primitive values
    .value();
}