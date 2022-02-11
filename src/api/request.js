import axios from 'axios';

export const getRequest = (route) => {
  return new Promise((resolve, reject)=>
    axios.get(route)
      .then((response)=>resolve(response))
      .catch((error)=>reject(error)));
}

export const postRequest = (route, payloads) => {
  return new Promise((resolve, reject)=>
    axios.post(route, payloads, 
      { 
        headers: {
          'Content-Type': 'application/json',
        } 
      })
      .then((response)=>resolve(response))
      .catch((error)=>reject(error)));
}

export const putRequest = (route, payloads) => {
  return new Promise((resolve, reject)=>
    axios.put(route, payloads)
      .then((response)=>resolve(response))
      .catch((error)=>reject(error)));
}

export const deleteRequest = (route) => {
  return new Promise((resolve, reject)=>
    axios.delete(route)
      .then((response)=>resolve(response))
      .catch((error)=>reject(error)));
}