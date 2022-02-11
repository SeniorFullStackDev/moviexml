import * as React from 'react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead,
  TableRow, 
  Paper,  
  Button,
  IconButton,
  Box
} from '@mui/material';

import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';

import DownloadIcon from '@mui/icons-material/Download';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


interface Props {
  tableData: any[];
}

export default function BasicTable({ tableData }: Props) {
  const handleClickOpen = () => {
    console.log('--handleClickOpen--');
  };
  return (
    <Box sx = {{ pt:'20px' }}>
      <Box sx = {{ mb:'8px', display:'flex' }}>
        <Button sx = {{ ml:'auto', mr:'0' }} variant='outlined' onClick = {handleClickOpen}>New</Button>
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell align="center">MEC</TableCell>
              <TableCell align="center">MMC</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((row) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.title}
                </TableCell>
                <TableCell align="center">{row.mec?<RadioButtonCheckedIcon color='primary'/>:<RadioButtonUncheckedIcon />}</TableCell>
                <TableCell align="center">{row.mmc?<RadioButtonCheckedIcon color='primary'/>:<RadioButtonUncheckedIcon />}</TableCell>
                <TableCell align="center">
                  <IconButton>
                    <DownloadIcon />
                  </IconButton>
                  <IconButton>
                    <EditIcon />
                  </IconButton>
                  <IconButton>
                    <DeleteIcon/>
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
