import React from 'react';

import { Box, Grid,  Typography, useMediaQuery, useTheme, } from '@mui/material';
import logotipo from "@assets/creditoja-logotipo.jpg"

import FormikSendEmail from '@components/formik';
import NavBar from '@components/navbar';
interface Props {
    children?: React.ReactNode;
}

const Home: React.FC<Props> = ({ children, ...props }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.only("xs"));
    return (
        <Grid container justifyContent={"center"} sx={{border: "0px solid blue", padding:0.5}} gap={1}>
{/* +++++++++++ Header +++++++++++ */}
            <Grid item xs={12} lg={10}  sx={{border: "0px solid blue", padding:0.5}} >
                <Grid container justifyContent={"space-between"} sx={{border: "0px solid blue", padding:1}}>
                    <Grid item xs={4} sm={2} md={2} lg={2} sx={{border: "1px solid blue",}}>
{/* --------------------------- Logotipo --------------------------- */}
                        <img src={logotipo} alt="logotipo" width={"100%"} height={"auto"} />

                    </Grid>
                    <Grid item xs={6} sm={9} md={8} lg={8} sx={{display: "flex", justifyContent: "end", alignItems: "center", border: "1px solid blue",}} >
{/* --------------------------- Menu Navegacao  --------------------------- */}
                        <NavBar></NavBar>

                    </Grid>

                </Grid>
            </Grid>

{/* +++++++++++ Body +++++++++++ */}
            <Grid item xs={12} sm={10} md={10} lg={9} sx={{border: "0px solid blue"}}>
                <Grid container justifyContent={"center"} sx={{textAlign: "center"}} gap={2}>
                    <Grid item xs={12} sm={7} md={7} lg={6} sx={{margin: 1,border: "1px solid red"}}>
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


