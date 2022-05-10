import React, { useEffect, useState } from 'react';
import { 
  Box, 
  Button, 
  Grid, 
  Typography
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import CircularProgress from '@mui/material/CircularProgress';
import UploadFilesService from 'api/upload';
import FilesContext from 'context/FilesContext';

interface Props {
    fileFeature:string;
    label:string;
}

export default ({ label, fileFeature }:Props) => {

  const [files, setFiles]  = useState([]);
  const [isProgress, setIsProgress] = useState(false);
  const [response, setResponse] = useState<any>({});
  const { filesJSON, setFilesJSON } = React.useContext(FilesContext);

  const onSelectFile = (event:any) => {
    setFiles(event.target.files);
  }

  const uploadFile = () => {
    console.log('----uploadFile----');
    setIsProgress(true);
    UploadFilesService.upload(files[0], (event:any)=>{
      // progress: Math.round((100 * event.loaded) / event.total),
      console.log('progress: ', Math.round((100 * event.loaded) / event.total));
    }).then((res:any)=>{
      setIsProgress(false);
      console.log('res.body ==>', res.data);
      setResponse(res.data);
      setFiles([]);
      setFilesJSON({ ...filesJSON, [fileFeature]: `${res.data.fileName}.${res.data.extension}` });
    })
  }

  console.log('response ==>', response);

  return (
    <Box
      sx={{
        // '& .MuiTextField-root': { m: 1, width: '25ch' },
        m: 1
      }}
    >
      <Box sx = {{ pl:4 }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs = {4}>{label}</Grid>
          <Grid item xs = {4}>{response.fileName}.{response.extension}</Grid>
          <Grid item xs = {4}>
            {
              files[0] && 
                  <Button
                    variant="contained"
                    startIcon = {(isProgress)?<CircularProgress size={16} />:<UploadFileIcon />}
                    component="span"
                    onClick = {uploadFile}
                    disabled = {isProgress}
                  >
                    Upload
                  </Button>
            }
            <label htmlFor="btn-upload">
              <input
                id="btn-upload"
                name="btn-upload"
                style={{ display: 'none' }}
                type="file"
                onChange={onSelectFile} />
              {
                !files[0] && <Button
                  variant="outlined"
                  startIcon = {<AddIcon />}
                  component="span" >
                    Choose Files
                </Button>
              }
            </label>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )

}