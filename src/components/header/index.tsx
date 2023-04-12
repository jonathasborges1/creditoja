import React from 'react';

import {  Grid, useMediaQuery, useTheme, } from '@mui/material';

import NavBar from '@components/navbar';
import logotipo from "@assets/creditoja-logotipo.jpg";

interface Props {
   children?: React.ReactNode;
}

const Header: React.FC<Props> = ({ children, ...props }) => {
   const theme = useTheme();
   const isMobile = useMediaQuery(theme.breakpoints.only("xs"));

   const [isTop, setIsTop] = React.useState(true);

   React.useEffect(() => {
     const handleScroll = () => {
       const scrollTop = window.pageYOffset;
       if (scrollTop === 0) {
         setIsTop(true);
       } else {
         setIsTop(false);
       }
     };
     window.addEventListener('scroll', handleScroll);
     return () => window.removeEventListener('scroll', handleScroll);
   }, []);

   return (
      <Grid item xs={12} lg={12}  sx={{border: "0px solid red", marginBottom: isMobile ? "3rem" : "5rem",  }} >
      {/* ++++++++++++++++++++ Header ++++++++++++++++++++ */}
                      <Grid container
                          sx={{
                              border: "0px solid blue", 
                              position: "fixed", backgroundColor: "#fff", 
                              padding: isMobile? "8px 16px 4px 16px" : "0px 10rem 0px 15rem",
                              display: "flex", justifyContent: "space-between", top: 0, zIndex:3,
                          }}
                      >
      {/* --------------------------- Logotipo --------------------------- */}
                          <Grid item xs={4} sm={2} md={2} lg={1.5} sx={{border: "0px solid red",}}>
      
                              {isMobile? 
                                  (<img src={logotipo} alt="logotipo" width={isTop ? "80%" : "60%"} height={"auto"} style={{ transition: 'all 0.5s ease' }} />) 
                              : 
                                  (<img src={logotipo} alt="logotipo" width={isTop ? "100%" : "75%"} height={"auto"} style={{ transition: 'all 0.5s ease' }} />)
                              }
      
                          </Grid>
      {/* --------------------------- Menu Navegacao  --------------------------- */} 
                          <Grid item xs={6} sm={9} md={8} lg={8} sx={{display: "flex", justifyContent: "end", alignItems: "center", border: "0px solid blue", p:0, m:0}} >
                              <NavBar></NavBar>
                          </Grid>
                      </Grid>
                  </Grid>
      
   )
}

export default Header;