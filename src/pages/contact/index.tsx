import React from 'react';

import { Grid, Typography, useMediaQuery, useTheme, } from '@mui/material';

import FormikSendEmail from '@components/formik';
import Header from '@components/header';

interface Props {
    children?: React.ReactNode;
}

const Contact: React.FC<Props> = ({ children, ...props }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.only("xs"));
    return (
        <Grid item xs={12} sm={10} md={10} lg={9} sx={{border: "0px solid blue"}}>
            <Grid container justifyContent={"center"} sx={{textAlign: "center"}} gap={2}>
                <Header></Header>
                <Grid item xs={12} sm={9} md={9} lg={8} sx={{margin: 1,border: "0px solid red"}}>
                    <Typography variant={"h1"} sx={{fontWeight: 400, fontSize: isMobile ? "1.8rem" : "2.8rem"}} >  Faça agora uma simulação </Typography>
                    <Typography variant={"h6"} sx={{fontWeight: 700, fontSize: "1rem", marginTop: 2}} >  Preencha os dados abaixo. </Typography>
                    
                </Grid>
                <Grid item xs={10}>
    {/* --------------------------- Modulo de Formulario  --------------------------- */}
                    <FormikSendEmail></FormikSendEmail>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Contact;