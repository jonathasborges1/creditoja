import React from 'react';
import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';
import { Box, Grid, List, ListItemButton, Typography, } from '@mui/material';
import logotipo from "@assets/creditoja-logotipo.jpg"
import { TouchApp } from '@mui/icons-material';
import FormikSendEmail from '@components/formik';
interface Props {
    children?: React.ReactNode;
}

const Home: React.FC<Props> = ({ children, ...props }) => {
     const classes = useStyles();
    return (
        <Grid container justifyContent={"center"} sx={{border: "0px solid blue", padding:0.5}} gap={1}>
{/* +++++++++++ Header +++++++++++ */}
            <Grid item xs={12} lg={10}  sx={{border: "0px solid blue", padding:0.5}} >
                <Grid container justifyContent={"space-between"} sx={{border: "0px solid blue", padding:1}}>
                    <Grid item xs={2}>
{/* --------------------------- Logotipo --------------------------- */}
                        <Box sx={{border: "0px solid purple", width: 200, height: "auto", }}  >
                            <img src={logotipo} alt="logotipo" width={"100%"} height={"auto"} />
                        </Box>
                    </Grid>
                    <Grid item xs={6} sx={{display: "flex", justifyContent: "end", alignItems: "center"}} >
{/* --------------------------- Menu  --------------------------- */}
                        <List 
                            component={"nav"}
                            sx={{display: "inline-flex", gap: 1.5,fontWeight:600, fontSize: "1rem"}}
                        >
                            <ListItemButton sx={{p:1}} href={"https://creditoja.net/index.html"} >Home</ListItemButton>
                            <ListItemButton sx={{p:1}} href={"https://creditoja.net/page1.html"} >Serviços</ListItemButton>
                            <ListItemButton sx={{p:1,mr:0.5}} href={"https://creditoja.net/page2.html"} >Sobre Nós</ListItemButton>
                            <ListItemButton 
                                sx={{
                                    p:1, pl:3, paddingRight:3, 
                                    border: "0px solid red", borderRadius: 10, 
                                    backgroundColor: "#149dcc", color: "#fff", "&:hover": {backgroundColor: '#000', color: '#149dcc'}
                                }} 
                                href={"#"} >
                                <TouchApp 
                                    className={classes.touchApp}
                                    sx={{ 
                                        fontSize: 30, marginRight: 1, 
                                    }} 
                             />SIMULE AGORA
                            </ListItemButton>

                        </List>
                    </Grid>

                </Grid>
            </Grid>

{/* +++++++++++ Body +++++++++++ */}
            <Grid item xs={12} lg={10} sx={{border: "0px solid red"}}>
                <Grid container justifyContent={"center"} sx={{textAlign: "center"}} gap={2}>
                    <Grid item xs={8} sx={{margin: 5,border: "0px solid red"}}>
                        <Typography variant={"h1"} sx={{fontWeight: 400, fontSize: "2.8rem"}} >  Faça agora uma simulação </Typography>
                        <Typography variant={"h6"} sx={{fontWeight: 700, fontSize: "1rem", marginTop: 2}} >  Preencha os dados abaixo. </Typography>
                        
                    </Grid>
                    <Grid item xs={8}>
                        <FormikSendEmail></FormikSendEmail>
                    </Grid>
                </Grid>
            </Grid>

        </Grid>
    )
}

export default Home;

const useStyles = makeStyles((theme: Theme) => ({
    container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    touchApp : {
        animation: "$pulse 1.5s infinite",
        borderRadius: "10px",
    },
    "@keyframes pulse": {
        "0%": {
            transform: "scale(1)",
            boxShadow: "0 0 0 0 rgba(20, 157, 204, 0.7)",
          },
          "70%" : {
            transform: "scale(1.2)",
            boxShadow: "0 0 0 20px rgba(20, 157, 204, 0)"
          },
          "100%" : {
            transform: "scale(1)",
            boxShadow: "0 0 0 0 rgba(20, 157, 204, 0)"
          }
    }
  }));
