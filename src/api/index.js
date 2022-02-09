import { getRequest } from './request'
import config from './config';

export const getAllMovies = () => {
  return  getRequest(`${config.host}/api/movies`)
}