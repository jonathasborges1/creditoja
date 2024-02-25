import { useUserSession } from '@context/UserSessionContext';
import { Grid } from '@mui/material';
import Home from '@pages/home';
import React from 'react';

interface Props {
   children?: React.ReactNode;
}

const Serasa: React.FC<Props> = ({ children, ...props }) => {

   const { handleSerasa } = useUserSession();
   handleSerasa(true);

   return (
      <Grid>
         <h1>Serasa</h1>
         <Home></Home>
      </Grid>
   )
}

export default Serasa;