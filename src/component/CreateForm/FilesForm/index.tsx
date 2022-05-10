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
    fileType:'image'|'file'
}

export default ({ label, fileFeature, fileType }:Props) => {

  const [files, setFiles]  = useState<any[]>([]);
  const [isProgress, setIsProgress] = useState(false);
  const [response, setResponse] = useState<any>({});
  const { filesJSON, setFilesJSON } = React.useContext(FilesContext);

  const onSelectFile = (event:any) => {
    console.log('---onSelectFile---', fileFeature);
    setFiles(event.target.files);
    setFilesJSON({ ...filesJSON, [fileFeature]: event.target.files[0].name });
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

  console.log('filesJSON ==>', filesJSON);

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
          <Grid item xs = {4}>{files[0]?files[0].name:''}</Grid>
          <Grid item xs = {4}>
            {/* {
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
            } */}
            <label htmlFor={fileFeature}>
              <input
                id={fileFeature}
                name={fileFeature}
                style={{ display: 'none' }}
                type="file"
                accept={fileType == 'image'? 'image/png, image/gif, image/jpeg': ''}
                onChange={onSelectFile} />
              <Button
                variant="outlined"
                startIcon = {<AddIcon />}
                component="span" >
                    Choose Files
              </Button>
            </label>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )

}