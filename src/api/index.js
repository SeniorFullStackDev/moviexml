import { deleteRequest, getRequest, postRequest, putRequest } from './request'
import config from './config';

export const getAllMovies = () => {
  return  getRequest(`${config.host}/api/movies`)
}

export const createNewMovie = (payload) => {
  return  postRequest(`${config.host}/api/movies`, payload)
}

export const updateMovie = (id, payload) => {
  return  putRequest(`${config.host}/api/movies/${id}`, payload)
}

export const deleteMovie = (id) => {
  return  deleteRequest(`${config.host}/api/movies/${id}`)
}