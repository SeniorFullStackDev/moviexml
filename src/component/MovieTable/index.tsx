import React, { useEffect, useState } from 'react';
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
  Box,
  Link
} from '@mui/material';

import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';

import DownloadIcon from '@mui/icons-material/Download';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import { saveAs } from 'file-saver';
import config from 'api/config';
import { getAllMovies, deleteMovie } from 'api';
import ConfirmDialog from 'component/ConfirmDialog';

export default function MovieTable() {

  const [tableData, setTableData] = useState<any[]>([]);

  useEffect(()=>{
    loadTable();
  }, [])

  const loadTable = () => {
    getAllMovies()
      .then(res=>{
        setTableData(res.data);
      }).catch((err:any)=>{
        console.log(err);
      })
  }

  const [openDialog, setOpenDialog] = React.useState(false);
  const [activeMovie, setActiveMovie] = React.useState(0);

  const downloadXML = (data:any) => {

    const mecLink = `${config.host}/api/movies/xml/download/mec/${data.id}`;
    saveAs(mecLink, `${data.title}-MEC.xml`);

    const mmcLink = `${config.host}/api/movies/xml/download/mmc/${data.id}`;
    saveAs(mmcLink, `${data.title}-MMC.xml`);
  }
  return (
    <Box sx = {{ pt:'20px' }}>
      <Box sx = {{ mb:'8px', display:'flex' }}>
        <Link href='/movies/create' underline="none" sx = {{ ml:'auto', mr:'0' }}>
          <Button  variant='outlined'>New</Button>
        </Link>
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
                  <IconButton onClick = {()=>{downloadXML(row)}}>
                    <DownloadIcon />
                  </IconButton>
                  <IconButton>
                    <Link href = {`/movies/edit/${row.id}`}>
                      <EditIcon />
                    </Link>
                  </IconButton>
                  <IconButton 
                    onClick = {()=>{
                      setActiveMovie(row.id);
                      setOpenDialog(true);
                    }}>
                    <DeleteIcon/>
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <ConfirmDialog 
        open = {openDialog} 
        onClose  = {()=>{
          setOpenDialog(false);
        }}
        onCancel  = {()=>{
          setOpenDialog(false);
          setActiveMovie(0);
        }}
        onOkay  = {()=>{
          if(activeMovie) deleteMovie(activeMovie);
          setActiveMovie(0);
          setOpenDialog(false);
          loadTable();
        }}
      />
    </Box>
  );
}
