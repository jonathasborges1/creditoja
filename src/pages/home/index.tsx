import React from 'react';

import { Grid,  Typography, useMediaQuery, useTheme, } from '@mui/material';
import logotipo from "@assets/creditoja-logotipo.jpg"

import FormikSendEmail from '@components/formik';
import NavBar from '@components/navbar';
interface Props {
    children?: React.ReactNode;
}

const Home: React.FC<Props> = ({ children, ...props }) => {
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
        <Grid container justifyContent={"center"} sx={{border: "0px solid blue", padding:0.5}} gap={1}>
{/* +++++++++++ Header +++++++++++ */}
            <Grid item xs={12} lg={10}  sx={{border: "0px solid blue", padding:0.5, marginBottom: isMobile ? "6rem" : "10rem", }} >
                <Grid container
                    sx={{
                        border: "0px solid blue", padding: 2, 
                        position: "fixed", backgroundColor: "#fff", width: isMobile? "100%" : "84%",
                        display: "flex", justifyContent: "space-between", top: 0, left: isMobile ? 0 : "8rem", zIndex:2,
                    }}
                >
                    <Grid item xs={4} sm={2} md={2} lg={1.5} sx={{border: "0px solid blue",}}>
{/* --------------------------- Logotipo --------------------------- */}
                        {isMobile? 
                            (<img src={logotipo} alt="logotipo" width={isTop ? "100%" : "60%"} height={"auto"} style={{ transition: 'all 0.5s ease' }} />) 
                        : 
                            (<img src={logotipo} alt="logotipo" width={isTop ? "100%" : "80%"} height={"auto"} style={{ transition: 'all 0.5s ease' }} />)
                        }

                    </Grid>
                    <Grid item xs={6} sm={9} md={8} lg={8} sx={{display: "flex", justifyContent: "end", alignItems: "center", border: "0px solid blue",}} >
{/* --------------------------- Menu Navegacao  --------------------------- */}
                        <NavBar></NavBar>

                    </Grid>
                </Grid>
            </Grid>

{/* +++++++++++ Body +++++++++++ */}
            <Grid item xs={12} sm={10} md={10} lg={9} sx={{border: "0px solid blue"}}>
                <Grid container justifyContent={"center"} sx={{textAlign: "center"}} gap={2}>
                    <Grid item xs={12} sm={7} md={7} lg={7} sx={{margin: 1,border: "0px solid red"}}>
                        <Typography variant={"h1"} sx={{fontWeight: 400, fontSize: isMobile ? "1.8rem" : "2.8rem"}} >  Faça agora uma simulação </Typography>
                        <Typography variant={"h6"} sx={{fontWeight: 700, fontSize: "1rem", marginTop: 2}} >  Preencha os dados abaixo. </Typography>
                        
                    </Grid>
                    <Grid item xs={10}>
{/* --------------------------- Modulo de Formulario  --------------------------- */}
                        <FormikSendEmail></FormikSendEmail>
                    </Grid>
                </Grid>
            </Grid>

        </Grid>
    )
}

export default Home;


