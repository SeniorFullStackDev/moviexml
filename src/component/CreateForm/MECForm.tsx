import React, { useEffect, useImperativeHandle, useRef, useState } from 'react';
import { 
  Box, 
  TextField, 
  Typography, 
  Button,
  Accordion, 
  AccordionSummary,
  AccordionDetails
} from '@mui/material';
import { ValidatorForm, TextValidator, SelectValidator } from 'react-material-ui-form-validator';
import { convertKeyString } from 'utils';
import CustomTextValidator from 'component/CustomTextValidator';
import MenuItem from '@mui/material/MenuItem';
import _ from 'lodash';
import languages from 'config/languages.json';
import resolutions from 'config/resolutions.json';
import purposes from 'config/ArtReference.purposes.json';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MECLocalizedInfoForm from 'component/MECLocalizedInfoForm';
import MECRatingSetForm from 'component/MECRatingSetForm';
import MECPeopleForm from 'component/MECPeopleForm';

interface Props {
  data?:any
}

const Index = React.forwardRef(({ data }:Props, ref) => {

  // const [formData, setFormData] = useState(data);
  const formDataRef = React.useRef(data || {});
  const formRef = React.useRef<any>();
  const [count, setCount] = useState(0);
  // const [movieTitle, setMovieTitle] = useState<string>();

  const contentIDRef = useRef<any>();

  useEffect(()=>{
    console.log('languages --->', languages);
    formDataRef.current = data;
    setCount(count + 1);
  }, [data])

  useImperativeHandle(ref, () => (
    {
      getFormData: () => {
        
        if(formRef.current){
          formRef.current.isFormValid().then((isValid:boolean)=>{
            if(!isValid){
              formRef.current.submit();
              return;
            }
          })
        }
        const source:any = {};
        Object.keys(formDataRef.current).map((key, index)=>{
          _.set(source, key, formDataRef.current[key]);
        });
        return source;
      },
      setMovieTitle:(title:string)=>{
        console.log('setMovieTitle--->', title);
        // update @contentID
        const expectedContentID = `md:cid:org:amzn_studios:${title}`;
        if(contentIDRef.current) contentIDRef.current.setValue(expectedContentID);

      }
    }
  ), [data]);

  const onChangeForm = (e:any) => {
    formDataRef.current = { ...formDataRef.current, [e.target.name]:e.target.value }
  }

  return (
    <Box>
      <Typography variant="h5">MEC</Typography>
      <ValidatorForm
        ref = {formRef}
        onChange = {onChangeForm}
        onSubmit = {()=>{
          return false;
        }}
      >
        <Box
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
        >
          <Typography >BasicMetadata-type</Typography>
          <Box sx = {{ pl:4 }}>
            <CustomTextValidator
              ref = {contentIDRef}
              formData = {formDataRef.current}
              validators={['required']}
              errorMessages={['this field is required']}
              name="BasicMetadata-type.@ContentID"
              label="@ContentID *"
            />

            <MECLocalizedInfoForm parentKey='BasicMetadata-type' />

            <CustomTextValidator
              formData = {formDataRef.current} 
              name="BasicMetadata-type.ReleaseYear" 
              label="ReleaseYear" 
            />
            <br/>

            <CustomTextValidator
              formData = {formDataRef.current} 
              name="BasicMetadata-type.ReleaseDate" 
              label="ReleaseDate" 
            />
            <br/>
            
            <Typography >Release History</Typography>
            <Box sx = {{ pl:4 }}>
              <CustomTextValidator
                formData = {formDataRef.current} 
                name="BasicMetadata-type.ReleaseHistory.ReleaseType" 
                label="ReleaseType *" 
                validators={['required']}
                errorMessages={['this field is required']}/>
              <br/>
              <Typography >DistrTerritory</Typography>
              <Box sx = {{ pl:4 }}>
                <CustomTextValidator
                  formData = {formDataRef.current} 
                  name="BasicMetadata-type.ReleaseHistory.DistrTerritory.country" 
                  label="country *" 
                  validators={['required']}
                  errorMessages={['this field is required']}/>
              </Box>
              <CustomTextValidator
                formData = {formDataRef.current} 
                name="BasicMetadata-type.ReleaseHistory.Date" 
                label="Date *" 
                validators={['required']}
                errorMessages={['this field is required']}/>
            </Box>

            <br/>
            <CustomTextValidator
              formData = {formDataRef.current} 
              name="BasicMetadata-type.WorkType" 
              label="WorkType *" 
              validators={['required']}
              errorMessages={['this field is required']} />

            <Typography >AltIdentifier</Typography>
            <Box sx = {{ pl:4 }}>
              <CustomTextValidator
                formData = {formDataRef.current} 
                name="BasicMetadata-type.AltIdentifier.Namespace" 
                label="Namespace *" 
                validators={['required']}
                errorMessages={['this field is required']} />
              <br/>
              <CustomTextValidator
                formData = {formDataRef.current}
                name="BasicMetadata-type.AltIdentifier.Identifier" 
                label="Identifier *" 
                validators={['required']}
                errorMessages={['this field is required']} />
            </Box>

            {/* <Typography >RatingSet</Typography>
            <Box sx = {{ pl:4 }}>
              <Typography >Rating</Typography>
              <Box sx = {{ pl:4 }}>
                <Typography >Region</Typography>
                <Box sx = {{ pl:4 }}>
                  <CustomTextValidator
                    formData = {formDataRef.current} 
                    name = "BasicMetadata-type.RatingSet.Rating.Region.Country" 
                    label = "Country *" 
                    validators={['required']}
                    errorMessages={['this field is required']} />
                </Box>
                <CustomTextValidator
                  formData = {formDataRef.current} 
                  name = "BasicMetadata-type.RatingSet.Rating.System" 
                  label = "System" 
                  validators={['required']}
                  errorMessages={['this field is required']} />
                <br/>
                <CustomTextValidator
                  formData = {formDataRef.current} 
                  name = "BasicMetadata-type.RatingSet.Rating.Value" 
                  label = "Value *" 
                  validators={['required']}
                  errorMessages={['this field is required']} />
              </Box>
            </Box> */}

            <MECRatingSetForm parentKey='BasicMetadata-type' />
            <br/>
            <MECPeopleForm parentKey='BasicMetadata-type' />
            
            <CustomTextValidator
              formData = {formDataRef.current} 
              name="BasicMetadata-type.OriginalLanguage" 
              label="OriginalLanguage *" 
              validators={['required']}
              errorMessages={['this field is required']} />

            <Typography >AssociatedOrg</Typography>
            <Box sx = {{ pl:4 }}>
              <CustomTextValidator
                formData = {formDataRef.current} 
                name = "BasicMetadata-type.AssociatedOrg.@organizationID" 
                label = "@organizationID *" 
                validators={['required']}
                errorMessages={['this field is required']} />
              <br/>
              <CustomTextValidator
                formData = {formDataRef.current} 
                name = "BasicMetadata-type.AssociatedOrg.@role" 
                label = "@role *" 
                validators={['required']}
                errorMessages={['this field is required']} />
            </Box>
            <Typography >SequenceInfo</Typography>
            <Box sx = {{ pl:4 }}>
              <CustomTextValidator
                formData = {formDataRef.current} 
                name = "BasicMetadata-type.SequenceInfo.Number" 
                label = "Number *" 
                validators={['required']}
                errorMessages={['this field is required']} />
            </Box>
            <Typography >Parent</Typography>
            <Box sx = {{ pl:4 }}>
              <CustomTextValidator
                formData = {formDataRef.current} 
                name = "BasicMetadata-type.Parent.@relationshipType" 
                label = "@relationshipType *" 
                validators={['required']}
                errorMessages={['this field is required']} />
              <CustomTextValidator
                formData = {formDataRef.current} 
                name = "BasicMetadata-type.Parent.ParentContentID" 
                label = "ParentContentID *" 
                validators={['required']}
                errorMessages={['this field is required']} />
            </Box>
          </Box>

          <Typography >CompanyDisplayCredit</Typography>
          <Box sx = {{ pl: 4 }}>
            <Typography >DisplayString</Typography>
            <Box sx = {{ pl: 4 }}>
              <CustomTextValidator
                formData = {formDataRef.current} 
                name="CompanyDisplayCredit.DisplayString.@language" 
                label="@language *" 
                validators={['required']}
                errorMessages={['this field is required']} />
              <br/>
              <CustomTextValidator
                formData = {formDataRef.current} 
                name="CompanyDisplayCredit.DisplayString.value" 
                label="DisplayString *" 
                validators={['required']}
                errorMessages={['this field is required']} />
            </Box>
          </Box>
        </Box>
      </ValidatorForm>
    </Box>
  )
});

export default Index;