import React, { useEffect, useImperativeHandle, useState } from 'react';
import { Box, TextField, Typography  } from '@mui/material';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { convertKeyString } from 'utils';
import CustomTextValidator from 'component/CustomTextValidator';
import _ from 'lodash';

interface Props {
  data?:any
}

const Index = React.forwardRef(({ data }:Props, ref) => {

  // const [formData, setFormData] = useState(data);
  const formDataRef = React.useRef(data || {});
  const formRef = React.useRef<any>();
  const [count, setCount] = useState(0);

  useEffect(()=>{
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
              formData = {formDataRef.current}
              validators={['required']}
              errorMessages={['this field is required']}
              name="BasicMetadata-type.@ContentID"
              label="@ContentID *"
            />
            <Typography >LocalizedInfo</Typography>
            <Box sx = {{ pl:4 }}>
              <CustomTextValidator
                formData = {formDataRef.current}
                validators={['required']}
                errorMessages={['this field is required']}
                name="BasicMetadata-type.LocalizedInfo.@Language"
                label="@Language *"
              />
              <br/>
              <CustomTextValidator
                formData = {formDataRef.current}
                name="BasicMetadata-type.LocalizedInfo.TitleDisplay19"
                label="TitleDisplay19"
              />
              <br/>
              <CustomTextValidator
                formData = {formDataRef.current}
                name="BasicMetadata-type.LocalizedInfo.TitleDisplay60"
                label="TitleDisplay60"
              />
              <br/>
              <CustomTextValidator
                formData = {formDataRef.current}
                validators={['required']}
                errorMessages={['this field is required']}
                label="TitleDisplayUnlimited *"
                name="BasicMetadata-type.LocalizedInfo.TitleDisplayUnlimited"
              />

              <Typography >ArtReference</Typography>
              <Box sx = {{ pl:4 }}>
                <CustomTextValidator
                  formData = {formDataRef.current} 
                  label = "@resolution *" 
                  name = "BasicMetadata-type.LocalizedInfo.ArtReference.@resolution" 
                  validators={['required']}
                  errorMessages={['this field is required']} />
                <CustomTextValidator
                  formData = {formDataRef.current} 
                  label = "@purpose *" 
                  name = "BasicMetadata-type.LocalizedInfo.ArtReference.@purpose" 
                  validators={['required']}
                  errorMessages={['this field is required']} />
                <CustomTextValidator
                  formData = {formDataRef.current} 
                  label = "ArtReference *" 
                  name = "BasicMetadata-type.LocalizedInfo.ArtReference.value" 
                  validators={['required']}
                  errorMessages={['this field is required']} />
              </Box>
              <CustomTextValidator
                formData = {formDataRef.current} name="BasicMetadata-type.LocalizedInfo.Summary190" label="Summary190" />
              <br/>
              <CustomTextValidator
                formData = {formDataRef.current} 
                name="BasicMetadata-type.LocalizedInfo.Summary400" 
                label="Summary400 *" 
                style = {{ width:'100%' }}
                multiline
                rows={6}
                validators={['required']}
                errorMessages={['this field is required']} />
              <br/>
              <CustomTextValidator
                formData = {formDataRef.current} 
                name="BasicMetadata-type.LocalizedInfo.Summary4000" 
                label="Summary4000"
                style = {{ width:'100%' }}
                multiline
                rows={6}
              />

              <Typography >Genre</Typography>
              <Box sx = {{ pl:4 }}>
                <CustomTextValidator
                  formData = {formDataRef.current} name="BasicMetadata-type.LocalizedInfo.Genre.@source" label="@source" />
                <CustomTextValidator
                  formData = {formDataRef.current} 
                  name="BasicMetadata-type.LocalizedInfo.Genre.@id" 
                  label="@id *" 
                  validators={['required']}
                  errorMessages={['this field is required']} />
                <CustomTextValidator
                  formData = {formDataRef.current} name="BasicMetadata-type.LocalizedInfo.Genre.@level" label="@level" />
              </Box>

              <CustomTextValidator
                formData = {formDataRef.current} name="BasicMetadata-type.LocalizedInfo.Keyword" label="Keyword" />
              <br />
              <CustomTextValidator
                formData = {formDataRef.current} name="BasicMetadata-type.LocalizedInfo.VersionNotes" label="VersionNotes" />

              <Typography >Region</Typography>
              <Box sx = {{ pl:4 }}>
                <CustomTextValidator
                  formData = {formDataRef.current} name="BasicMetadata-type.LocalizedInfo.Region.Country" label="Country" />
              </Box>

              <CustomTextValidator
                formData = {formDataRef.current} name="BasicMetadata-type.LocalizedInfo.OriginalTitle" label="OriginalTitle" />
              <br />
              <CustomTextValidator
                formData = {formDataRef.current} name="BasicMetadata-type.LocalizedInfo.CopyrightLine" label="CopyrightLine" />
              <br />
              <CustomTextValidator
                formData = {formDataRef.current} name="BasicMetadata-type.LocalizedInfo.PeopleLocal" label="PeopleLocal" />
              <CustomTextValidator
                formData = {formDataRef.current} name="BasicMetadata-type.LocalizedInfo.Description" label="Description" />
              {/* <Typography >ReleaseOrg</Typography>
            <Box sx = {{ pl:4 }}>
              <CustomTextValidator
              formData = {formDataRef.current} name="BasicMetadata-type.LocalizedInfo.ReleaseOrg.@organizationID" label="@organizationID"/>
              <CustomTextValidator
              formData = {formDataRef.current} name="BasicMetadata-type.LocalizedInfo.ReleaseOrg.@idType" label="@idType"/>
              <CustomTextValidator
              formData = {formDataRef.current} name="BasicMetadata-type.LocalizedInfo.ReleaseOrg.@role" label="@role"/>
              <br/>
              <CustomTextValidator
              formData = {formDataRef.current} 
                name="BasicMetadata-type.LocalizedInfo.ReleaseOrg.DisplayName" 
                label="DisplayName *" 
                validators={['required']}
                errorMessages={['this field is required']}/>
              <br/>
              <CustomTextValidator
              formData = {formDataRef.current} name="BasicMetadata-type.LocalizedInfo.ReleaseOrg.SortName" label="SortName" />
              <br/>
              <CustomTextValidator
              formData = {formDataRef.current} name="BasicMetadata-type.LocalizedInfo.ReleaseOrg.AlternateName" label="AlternateName" />
              <br/>
              <CustomTextValidator
              formData = {formDataRef.current} 
                name="BasicMetadata-type.LocalizedInfo.ReleaseOrg.WorkTypeDetail" 
                label="WorkTypeDetail" />
              <br/>
            </Box> */}
            
              <CustomTextValidator
                formData = {formDataRef.current} name="BasicMetadata-type.LocalizedInfo.Location" label="Location" />
            </Box>

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

            <Typography >RatingSet</Typography>
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
            </Box>
            <br/>
            <Typography >People</Typography>
            <Box sx = {{ pl:4 }}>
              <Typography >Job</Typography>
              <Box sx = {{ pl:4 }}>
                <CustomTextValidator
                  formData = {formDataRef.current} 
                  name = "BasicMetadata-type.People.Job.JobFunction" 
                  label = "JobFunction *" 
                  validators={['required']}
                  errorMessages={['this field is required']} />
                <br/>
                <CustomTextValidator
                  formData = {formDataRef.current} name = "BasicMetadata-type.People.Job.BillingBlockOrder" label = "BillingBlockOrder" />
                <br/>
                <CustomTextValidator
                  formData = {formDataRef.current} name = "BasicMetadata-type.People.Job.Character" label = "Character" />
              </Box>

              <Typography >Name</Typography>
              <Box sx = {{ pl:4 }}>
                <Typography >DisplayName</Typography>
                <Box sx = {{ pl:4 }}>
                  <CustomTextValidator
                    formData = {formDataRef.current} 
                    name = "DisplayName" 
                    label = "DisplayName *" 
                    validators={['required']}
                    errorMessages={['this field is required']} />
                </Box>
                <Box sx = {{ pl:4 }}>
                  <CustomTextValidator
                    formData = {formDataRef.current} name = "@language" label = "@language" />
                </Box>
              </Box>
            </Box>

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