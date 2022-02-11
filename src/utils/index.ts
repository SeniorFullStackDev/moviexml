import _ from 'lodash';
export const convertKeyString = (keys:string, value:any, source:any) => {
  _.set(source, keys, value);
  return source;
}