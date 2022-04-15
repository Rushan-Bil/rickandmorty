import * as React from 'react';
import { Link } from 'react-router-dom';
import './ButtonAppBar.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Rick and Morty
          </Typography>
          <Link to={'/'} className='BarButton'>
            <Button color="inherit">R&M characters</Button>
          </Link>
          <Link to={'/aboutme'} className='BarButton'>
            <Button color="inherit">About me</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
