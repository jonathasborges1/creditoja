import React from 'react';

import { Grid, Typography } from '@mui/material';

import CreditModalitySection from '@components/creditModalitySection';
import SimulateNowSection from '@components/simulateNowSection';
import OurMapsSection from '@components/ourContactMaps';
import Header from '@components/header';

interface Props {
    children?: React.ReactNode;
}

const Services: React.FC<Props> = ({ children, ...props }) => {

    return (
        <Grid container justifyContent={"center"} alignItems={"center"} gap={2}>
            <Header></Header>

            <Grid item xs={12} sm={12} md={12} lg={8}  sx={{border: "0px solid blue", pt:4,pb:4, pl:2, pr:2}}>
                {/* <h1>titulo</h1> */}
                <Typography variant='h1' sx={{fontWeight: 700, fontSize:"2.4rem", color: "#0f7699"}}> Serviços </Typography>
                <Typography variant='body2' sx={{fontWeight: 400, fontSize:"1.2rem", pt:1, color: "#767676"}}>  
                    A CréditoJa é uma empresa de crédito que oferece empréstimo com Imóvel em Garantia a juros baixos e de forma rápida, até mesmo para quem tem restrição no nome. Veja a seguir nosso método de avaliação de crédito:
                </Typography>

            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={12} sx={{border: "0px solid blue"}}>
                <CreditModalitySection></CreditModalitySection>
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={12} sx={{border: "0px solid blue"}}>
                <SimulateNowSection></SimulateNowSection>
            </Grid>


            <Grid item xs={12} sm={12} md={12} lg={12} sx={{border: "0px solid blue"}}>
                <OurMapsSection></OurMapsSection>
            </Grid>
             
        </Grid>
    )
}

export default Services;