import React from 'react';
import { useHistory } from 'react-router-dom';

import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material"
import Filter1OutlinedIcon from '@mui/icons-material/Filter1Outlined';
import Filter2OutlinedIcon from '@mui/icons-material/Filter2Outlined';
import Filter3OutlinedIcon from '@mui/icons-material/Filter3Outlined';
import Filter4OutlinedIcon from '@mui/icons-material/Filter3Outlined';

const CreditModalitySection: React.FC = () => {
   const theme = useTheme();
   const isMobile = useMediaQuery(theme.breakpoints.only("xs"));

   return(
       <Grid container justifyContent={"center"} sx={{backgroundColor: "#efefef" , pt:2,pb:2, border: "0px solid red" }} >
         <Grid item xs={12} sm={8} md={8} lg={8} sx={{border: "0px solid blue", p: "2rem 8px"}}>
            <Grid container gap={1.5}>
               <Grid item xs={12} sm={12} md={12} lg={12} sx={{border: "0px solid red"}} >
                     <Typography variant='h2' sx={{fontSize: isMobile? "1.5rem" : "2rem", fontWeight: 700}} > Veja como funciona a nossa modalidade de crédito </Typography>
               </Grid>
               <Grid item xs={12} sm={12} md={12} lg={12} sx={{border: "0px solid red", display: "flex", alignItems:"center"}}>
                     <Filter1OutlinedIcon sx={{ color: "#149dcc" ,fontSize: "3rem", mr: 1}}></Filter1OutlinedIcon>
                     <Typography variant='body1' sx={{fontSize: isMobile? "0.8rem" : "1rem", fontWeight:5700}} > 
                        <b>Primeiro atendimento</b>  -  Você nos fala um pouco sobre você, o imóvel e quanto quer emprestado.
                     </Typography>
               </Grid>
               <Grid item xs={12} sm={12} md={12} lg={12} sx={{border: "0px solid red", display: "flex", alignItems:"center"}}>
                     <Filter2OutlinedIcon sx={{ color: "#149dcc" ,fontSize: "3rem", mr: 1}}></Filter2OutlinedIcon>
                     <Typography variant='body1' sx={{fontSize: isMobile? "0.8rem" : "1rem", fontWeight:5700}} > 
                        <b>Anãlise</b>  -  Realizaremos a pré-análise do crédito em no mãximo 2 dias úteis e entraremos em contato com vocë.
                     </Typography>
               </Grid>
               <Grid item xs={12} sm={12} md={12} lg={12} sx={{border: "0px solid red", display: "flex", alignItems:"center"}}>
                     <Filter3OutlinedIcon sx={{ color: "#149dcc" ,fontSize: "3rem", mr: 1}}></Filter3OutlinedIcon>
                     <Typography variant='body1' sx={{fontSize: isMobile? "0.8rem" : "1rem", fontWeight:5700}} > 
                        <b>Contrato </b>  -  Com a anãlise aprovada, formalizaremos o contrato do empréstimo e coletamo a sua assinatura.
                     </Typography>
               </Grid>
               <Grid item xs={12} sm={12} md={12} lg={12} sx={{border: "0px solid red", display: "flex", alignItems:"center"}}>
                     <Filter4OutlinedIcon sx={{ color: "#149dcc" ,fontSize: "3rem", mr: 1}}></Filter4OutlinedIcon>
                     <Typography variant='body1' sx={{fontSize: isMobile? "0.8rem" : "1rem", fontWeight:5700}} > 
                        <b>Depósito</b>  -  Após assinar o contrato, dinheiro cairá na sua conta em no máximoaté 3 dias úteis.
                     </Typography>
               </Grid>
            </Grid>
         </Grid>

       </Grid>
   )
} 

export default CreditModalitySection;