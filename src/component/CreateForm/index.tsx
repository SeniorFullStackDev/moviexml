import * as React from 'react';
import { 
  Button,
  Grid,
  Typography,
  Box,
  Link
} from '@mui/material';
import MMCForm from './MMCForm';
import MECForm from './MECForm';
import FilesForm from './FilesForm';
import { Divider } from '@mui/material';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { useParams } from 'react-router-dom';
import CustomTextValidator from 'component/CustomTextValidator';
// import { mec, mmc } from 'utils/demo';
import { createNewMovie, getMovieDetail, updateMovie } from 'api'
import _ from 'lodash';

import MECContext from 'context/MECContext';
import MMCContext from 'context/MMCContext';
import FilesContext from 'context/FilesContext';
import moment from 'moment';
import AppMenu from 'component/AppMenu';

const drawerWidth = 360;

export default function CreateForm() {

  const { id } = useParams();

  const formRef = React.useRef<any>();
  const [isRequesting, setIsRequesting] = React.useState(false);
  const [movieData, setMovieData] = React.useState<any>({ title:'' });

  const [mecJSON, setMECJSON] = React.useState<any>({
    ReleaseDate:moment().format('yyyy-MM-DD'),
    ReleaseYear:moment().format('yyyy'),
    ReleaseHistory: {
      Date:moment().format('yyyy-MM-DD')
    }
  });
  const mecCxtValue = React.useMemo(() => ({ mecJSON, setMECJSON }), [mecJSON, movieData]);

  const [mmcJSON, setMMCJSON] = React.useState<any>({});
  const mmcCxtValue = React.useMemo(() => ({ mmcJSON, setMMCJSON }), [mmcJSON, movieData]);

  const [filesJSON, setFilesJSON] = React.useState<any>({});
  const filesCxtValue = React.useMemo(() => ({ filesJSON, setFilesJSON }), [filesJSON, movieData]);

  React.useEffect(()=>{
    if(id){
      getMovieDetail(id).then((res:any)=>{
        setMovieData(res.data);
        setMECJSON(res.data.mec);
        setMMCJSON(res.data.mmc);
        document.title = res.data.title
      }).catch((err)=>console.log);
    }
  }, [id]);

  const onSubmit = (e:any) => {

    // e.preventDefault();
    // Object.keys(e.target.elements).map((key:any)=>{
    //   const input = e.target.elements[key];
    //   if(input.name){
    //     console.log('element.name ===>', input.name);
    //     console.log('element.name ===>', input.value);
    //   }
    // })

    // return;

    const payload = { title:movieData.title, mec:mecJSON, mmc:mmcJSON };

    if(payload.title && payload.mmc && payload.mec){
      if(movieData.id){
        updateMovie(movieData.id, payload).then((res:any)=>{
          setIsRequesting(false);
        }).catch(err=>{
          setIsRequesting(false);
          console.log(err);
        });
      }else{
        createNewMovie(payload).then((res:any)=>{
          location.href = '/';
          setIsRequesting(false);
        }).catch(err=>{
          setIsRequesting(false);
          console.log(err);
        });
      }
    }
  }

  console.log('filesJSON ==>', filesJSON);

  return (
    <Box sx = {{ pt:'20px' }}>
      <Box sx = {{ display:'flex' }}>
        <AppMenu drawerWidth = {drawerWidth} />
        <Box  component="main"
          sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}>
          <ValidatorForm
            ref = {formRef}
            autoComplete="off"
            onSubmit = {onSubmit}
          >
            <Box>
              <Box sx = {{ mb:'20px', mt:'20px' }}>
                <Typography variant='h5'>{(id)?'Update':'New Movie'}</Typography>
                <br/>
                <CustomTextValidator
                  required
                  value = {movieData.title}                  
                  validators={['required']} 
                  errorMessages={['this field is required']}
                  onBlur = {(e:any)=>{
                    const title = e.target.value.replace(/\s/g, '').toLowerCase();
                    setMovieData({ ...movieData, title });

                    const contentID = `md:cid:org:amzn_studios:${title}`;
                    _.set(mecJSON, 'BasicMetadata-type.@ContentID', contentID);
                    setMECJSON({ ...mecJSON });
                  }}
                  name="title" 
                  label="Movie Title" />
          
              </Box>
              <Divider />
              <Box sx={{ width: '100%', mt:'20px' }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} id="mec-form">
                    <MECContext.Provider value={mecCxtValue}>
                      <MECForm movieTitle = {movieData.title} />
                    </MECContext.Provider>
                  </Grid>
                  <Grid item xs={12} id="mmc-form">
                    <Divider />
                    <MMCContext.Provider value={mmcCxtValue}>
                      <MMCForm />
                    </MMCContext.Provider>
                  </Grid>
                  <Grid item xs={12} id="files-form">
                    <Divider />
                    <FilesContext.Provider value={filesCxtValue}>
                      <Box sx = {{ mt:1 }}>
                        <Typography variant="h5">Files</Typography>
                        <FilesForm fileFeature='quicktime_feature' label="#1 Quicktime Feature" />
                        <FilesForm fileFeature='quicktime_trailer' label="#2 Quicktime Trailer" />
                        <FilesForm fileFeature='box_art' label="#3 Box art" />
                        <FilesForm fileFeature='hero_art' label="#4 Hero art" />
                        <FilesForm fileFeature='post_image' label="#5 Post Image" />
                        <FilesForm fileFeature='subtitle' label="#6 Subtitle" />
                      </Box>
                    </FilesContext.Provider>
                  </Grid>
                </Grid>
              </Box>
            </Box>
            <Box>
              <Button type='submit' variant="outlined" disabled = {isRequesting}>Submit</Button>
            </Box>
          </ValidatorForm>
        </Box>
      </Box>
    </Box>
  );
}
