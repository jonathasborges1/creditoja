import React from 'react';

import { Grid, Typography } from '@mui/material';


interface Props {
   children?: React.ReactNode;
}

const OurMapsSection: React.FC<Props> = ({ children, ...props }) => {
   return(
      <Grid container justifyContent={"center"} sx={{backgroundColor:  "#149dcc", border: "0px solid blue", padding:2}} gap={2}>
          <Grid item xs={12} sm={12} md={12} lg={10}>
              <Typography variant='h2' sx={{fontWeight: 700, fontSize:"2.4rem"}}> Nossos Contatos</Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={10}>
              <Typography variant='h6' sx={{fontWeight: 700, fontSize:"1rem"}}> CNPJ:  <span style={{color: "#fff", fontWeight: 500}}>39.689.939/0001-40</span></Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={10}>
              <Grid container>
                  <Grid item xs={12} sm={12} md={12} lg={6} sx={{border: "0px solid red"}} >
                      <Grid container alignItems={"center"} gap={3}> 
                          <Grid item xs={12} lg={12}>
                              <Typography variant='h6' sx={{fontWeight: 700, fontSize:"1.2rem"}}> Endereço:</Typography>
                              <Typography variant='body2' sx={{fontWeight: 500, fontSize:"1rem", color: "#fff"}}> Rua Albion 536 - Sala 02 - Lapa - CEP 05077-130</Typography>
                          </Grid>
                          <Grid item xs={12} lg={12}>
                              <Typography variant='h6' sx={{fontWeight: 700, fontSize:"1.2rem"}}> Telefone:</Typography>
                              <Typography variant='body2' sx={{fontWeight: 500, fontSize:"1rem", color: "#fff"}}> Com: 2538-4752 | Cel: (11) 95339-6880</Typography>
                          </Grid>
                          <Grid item xs={12} lg={12}>
                              <Typography variant='h6' sx={{fontWeight: 700, fontSize:"1.2rem"}}> Email:</Typography>
                              <Typography variant='body2' sx={{fontWeight: 500, fontSize:"1rem", color: "#fff"}}>creditoja@creditoja.net</Typography>
                          </Grid>
                      </Grid>

                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={6} sx={{border: "0px solid blue",}}> 
      
                      <iframe 
                          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3658.2495623052628!2d-46.7098176!3d-23.5235248!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef889cff7058b%3A0x54950d48e1c64ba4!2sR.%20Albion%2C%20536%20-%20Lapa%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2005077-130%2C%20Brasil!5e0!3m2!1spt-BR!2sus!4v1681239418106!5m2!1spt-BR!2sus"
                          title="Google Maps" 
                          aria-hidden="true" 
                          frameBorder="0" 
                          loading="lazy"
                          height="300"
                          referrerPolicy="no-referrer-when-downgrade"
                          style={{  width: "100%", top: 0, left: 0, border: "none",}}> 
                      </iframe>

                  </Grid>
              </Grid>
          </Grid>
      </Grid>
  )
}

export default OurMapsSection;