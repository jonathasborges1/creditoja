import React from 'react';

import { Button, Grid,  Typography, useMediaQuery, useTheme, } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useHistory } from 'react-router-dom';
import ROUTES from '@config/routes';

const SimulateNowSection: React.FC = () => {
   const theme = useTheme();
   const isMobile = useMediaQuery(theme.breakpoints.only("xs"));
   const history = useHistory();

   const handleRedirectForm = () => {
      history.push(ROUTES.CONTACT);
   }
   return(
       <Grid container justifyContent={"center"} alignItems={"center"} sx={{border: "0px solid blue", textAlign:"center", pt: 5, pb:5}} gap={2}>
           <Grid item xs={12} sm={11} md={11} lg={5}>
               <Grid container justifyContent={"center"} alignItems={"center"} sx={{border: "0px solid red"}}>
                   <Grid item xs={12} sm={6} md={6} lg={8}>
                       <Typography variant='h2'sx={{fontSize: "1.4rem", fontWeight:500 ,mb: 2}} >Garanta o seu Credito Agora!</Typography>
                   </Grid>
                   <Grid item xs={12} sm={6} md={6} lg={10} sx={{border: "0px solid black"}} >
                       <Typography variant='h3' sx={{fontSize: "2.2rem", fontWeight:700}} >Faça agora sua simulação</Typography>
                   </Grid>

               </Grid>
           </Grid>
           <Grid item xs={12} sm={11} md={11} lg={3} sx={{border: "0px solid purple",}}>
               <Button sx={{backgroundColor: "#149dcc", color: "#fff", borderRadius: 5 , p: isMobile? 1 : 2}} onClick={handleRedirectForm} >
                   <WhatsAppIcon sx={{fontSize: "2rem", marginRight:0.5}} ></WhatsAppIcon>
                   <Typography variant='h2' sx={{fontSize: isMobile? "1rem" :"1.4rem", fontWeight:600, }} >SIMULE AGORA</Typography>
               </Button> 
           </Grid>
       </Grid>
   )
}

export default SimulateNowSection;