import React from 'react';

import { Grid, Typography, useTheme, useMediaQuery } from '@mui/material';

import Header from '@components/header';
import OurMapsSection from '@components/ourContactMaps';
import { mdiEyeCircleOutline } from '@mdi/js'

import Icon from '@mdi/react';
import { mdiStarCircleOutline } from '@mdi/js';
import { mdiAccountGroupOutline } from '@mdi/js';

interface Props {
    children?: React.ReactNode; 
}

const About: React.FC<Props> = ({ children, ...props }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.only("xs"));

    return (
        <Grid container justifyContent={"center"} alignItems={"center"} gap={2}>
            <Header></Header>

            <Grid item xs={12} sm={12} md={12} lg={8}  sx={{border: "0px solid blue", pt:4, pb:4, pl: 2, pr:2}}>
    
                <Typography variant='h1' sx={{fontWeight: 700, fontSize:"2.4rem", color: "#0f7699"}}> Sobre Nós </Typography>

                <Typography variant='body2' sx={{fontWeight: 400, fontSize: isMobile? "1rem" : "1.2rem", pt:1, color: "#767676"}}>  
                    A CréditoJa é uma empresa que conta com profissionais altamente qualificados do mercado financeiro. Tal experiência resulta em sempre apresentar soluções que visam propor melhores acordos e benefícios aos clientes que precisam de empréstimo com imóvel em garantia para empresas e pessoas negativadas.                
                </Typography>

            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={8}  sx={{border: "0px solid blue", pt:4,pb:4}}>
                <Grid container textAlign={"center"} sx={{border: "0px solid purple", pt:0.5, pb:0.5 }} gap={1}>

                    <Grid item xs={12} sm={12} md={12} lg={3.8} sx={{border: "0px solid purple", display:"flex", gap: 0.5 , p: 0.5}}> 
                        
                        <Grid item sx={{border: "0px solid black", p:0.5}}>
                            <Icon path={mdiStarCircleOutline} size={3} style={{color:"#0f7699"}} />
                        </Grid>

                        <Grid item textAlign={"left"} sx={{border: "0px solid red", p:0.5}}>
                            <Typography variant='h4' sx={{fontWeight: 400,pb:1}} >
                                Missão                        
                            </Typography>
                            <Typography variant='body1' sx={{fontWeight: 400, color: "#767676", fontSize: "0.9rem"}} >
                                Oferecer empréstimo para que pessoas negativadas consigam se resstabelecer seu crédito no mercado.
                            </Typography>
                        </Grid>

                    </Grid>
                    
                    <Grid item xs={12} sm={12} md={12} lg={3.8} sx={{border: "0px solid purple", display:"flex", gap: 0.5 , p:0.5}}> 
                        
                        <Grid item sx={{border: "0px solid black", p:0.5}}>
                            <Icon path={mdiEyeCircleOutline} size={3} style={{color:"rgb(15, 118, 153)"}} />
                        </Grid>

                        <Grid item textAlign={"left"} sx={{border: "0px solid red", p:0.5}}>
                            <Typography variant='h4' sx={{fontWeight: 400,pb:1}} >
                                Visão                        
                            </Typography>
                            <Typography variant='body1' sx={{fontWeight: 400, color: "#767676", fontSize: "0.9rem"}} >      
                                Ser pioneira em empréstimo com imóvel em garantia pra empresas e pessoas negativadas.&nbsp;
                            </Typography>
                        </Grid>

                    </Grid>

                    <Grid item xs={12} sm={12} md={12} lg={3.8} sx={{border: "0px solid purple", display:"flex", gap: 0.5 , p:0.5}}> 
                        
                        <Grid item sx={{border: "0px solid black", p:0.5}}>
                            <Icon path={mdiAccountGroupOutline} size={3} style={{color:"rgb(15, 118, 153)"}} />
                        </Grid>

                        <Grid item textAlign={"left"} sx={{border: "0px solid red", p:0.5}}>
                            <Typography variant='h4' sx={{fontWeight: 400,pb:1}} >
                                Valores                        
                            </Typography>
                            <Typography variant='body1' sx={{fontWeight: 400, color: "#767676", fontSize: "0.9rem"}} >      
                                Ética, Respeito, Empatia e Honestidade.&nbsp;
                            </Typography>
                        </Grid>

                    </Grid>
                   
                </Grid>
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={12} sx={{border: "0px solid blue"}}>
                <OurMapsSection></OurMapsSection>
            </Grid>
            
             
        </Grid>
    )
}

export default About