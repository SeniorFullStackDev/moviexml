import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';

interface Props {
    open:boolean;
    onClose:()=>void;
    onOkay?:()=>void;
    onCancel?:()=>void;
}

export default function ConfirmDialog({ open, onClose, onCancel, onOkay }:Props) {
  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog
      maxWidth = "sm"
      fullWidth
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}
    >
      <DialogTitle sx={{ m: 0, p: 2 }}>
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
      Do you really want to delete this movie?
      </DialogContent>
      <DialogActions>
        <Button autoFocus 
          onClick={()=>{
            if(onCancel) onCancel();
          }}>
            Cancel
        </Button>
        <Button
          onClick={()=>{
            if(onOkay) onOkay();
          }}>
            Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
}
