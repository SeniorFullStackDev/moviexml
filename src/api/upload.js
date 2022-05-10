import axios from 'axios';
import config from './config';

class UploadFilesService {
  upload(file, onUploadProgress) {
    let formData = new FormData();
  
    formData.append('file', file);
  
    return axios.post(`${config.host}/api/file/upload`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      onUploadProgress,
    });
  }
  
  getFiles() {
    return axios.get('/api/files');
  }
}
  
export default new UploadFilesService();