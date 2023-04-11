import React from 'react';

import { Button, Card, CardActions, CardContent, CardMedia, Grid,  Typography, useMediaQuery, useTheme, } from '@mui/material';
import HelpCenterOutlinedIcon from '@mui/icons-material/HelpCenterOutlined';
import TouchAppOutlinedIcon from '@mui/icons-material/TouchAppOutlined';
import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import logotipo from "@assets/creditoja-logotipo.jpg";
import banner from "@assets/creditoja-banner.jpg";
import blog1 from "@assets/creditoja-blog1.jpg";
import blog2 from "@assets/creditoja-blog2.jpg";

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


    const HomeSection: React.FC = () => { 
        return(
            <Grid container justifyContent={"center"} 
                sx={{border: "0px solid red", padding: 0.5, paddingTop: 0, paddingBottom: 15,         
                backgroundImage: `url(${banner})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "fixed",
                position:"relative",
            }} 
                gap={3}
            >
                {/* LAYER PARA APLICAR OPACIDADE NO BACKGROUND IMAGE */}
                <Grid container sx={{height:"100%", minHeight: "50vh", position:"absolute", backgroundColor: `rgba(7, 59, 76,0.7)`,  border: "0px solid red", zIndex: 1}}></Grid>

                <Grid item xs={12} lg={8} sx={{border: "0px solid blue", marginTop: 10, zIndex: 2 }} textAlign={"center"} >, 
                    <Typography variant='h1' 
                        sx={{
                            mb:0,
                            fontWeight: 700,
                            fontSize: isMobile ? "1.8rem" : "2.5rem",
                            color: "#fff",
                        }}
                    >
                        Empréstimo com imóvel em garantia para empresas e pessoas negativadas</Typography>
                </Grid>
                <Grid item xs={12} lg={7} sx={{border: "0px solid blue", zIndex: 2 }} textAlign={"center"} >
                    <Typography variant='h6' 
                        sx={{
                            fontWeight: 400,
                            fontSize: isMobile ? "0.8rem" : "1.5rem",
                            color: "#fff",
                        }}
                    >
                        Não cobramos pagamentos antecipados
                    </Typography>
                </Grid>
                <Grid item xs={12} lg={7} sx={{border: "0px solid blue", zIndex: 2}} textAlign={"center"} >
                    <Button sx={{backgroundColor: "#e17d19", borderRadius: 8, padding: "16px 32px 16px 32px", "&:hover": {backgroundColor: "green"} }}> 
                        <HelpCenterOutlinedIcon sx={{color:'#fff', marginRight: 0.5}}></HelpCenterOutlinedIcon>
                        <Typography variant='h2' 
                            sx={{color:"#fff", fontSize:"1rem", fontWeight: 700 }}
                        >
                            SAIBA MAIS 
                        </Typography> 
                    </Button>
                </Grid>

            </Grid>
        )
    }

    const ServiceSection: React.FC = () => {
        return(
            <Grid container justifyContent={"center"} gap={0.5}>
                <Grid item xs={12} sm={6} md={6} lg={3.9} sx={{border: "0px solid red", textAlign: "center", padding: 2}}>
                    <TouchAppOutlinedIcon sx={{fontSize:'6rem', color:"#149dcc"}}></TouchAppOutlinedIcon>
                    <Typography variant={"h6"} sx={{fontWeight: 500}} >Nosso Crédito com Garantia de Imóvel é o mais eficiente e rápido do mercado!</Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={3.9} sx={{border: "0px solid red", textAlign: "center", padding: 2}}>
                    <CurrencyExchangeOutlinedIcon sx={{fontSize:'6rem', color:"#149dcc", }}></CurrencyExchangeOutlinedIcon>
                    <Typography variant={"h6"} sx={{fontWeight: 500, mt:0.2}} >Em poucos dias você tem o valor que precisa disponibilizado em sua conta.</Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={3.9} sx={{border: "0px solid red", textAlign: "center", padding: 2}}>
                    <EditNoteOutlinedIcon sx={{fontSize:'6rem', color:"#149dcc"}}></EditNoteOutlinedIcon>
                    <Typography variant={"h6"} sx={{fontWeight: 500}} >Com um imóvel em garantia, você paga menos juros, já que os riscos são menores.</Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} sx={{border: "0px solid red"}}>
                    <Grid container justifyContent={"center"} sx={{margin: isMobile? 1 : 5}}>
                        <Grid item xs={12} sm={8} md={8} lg={6} sx={{border: "0px solid blue"}}>
                            <iframe width={isMobile? "360" : "560" }  height={isMobile? "215" : "315" } 
                                // style={{position: "relative"}}
                                src="https://www.youtube.com/embed/6EcqrSb-EXg" 
                                title="YouTube video player" 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                allowFullScreen>
                            </iframe> 
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }

    const BlogSection: React.FC = () => {
        return(
            <Grid container justifyContent={"center"} gap={0.5} sx={{backgroundColor: "#efefef"}} >
                <Grid item xs={12} sm={6} md={6} lg={3.9} sx={{p:2}}>
                    <Card sx={{p:2}}>
                        <CardMedia image={blog1} sx={{ height: 140 }} title="Blog 1"></CardMedia>
                        <CardContent>
                            <Typography variant="body2" sx={{fontSize: "1rem", fontWeight:500}} color="text.secondary">
                                Mesmo com restrição em seu nome, com a CréditoJa é possível fazer seu empréstimo. Fale com nossos consultores e tire todas as suas dúvidas. Conheça todas as vantagens do nosso modelo de crédito.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="large" sx={{backgroundColor: "#149dcc", color: "#fff", fontSize:"1rem", borderRadius: 2}}>Saiba Mais</Button>
                        </CardActions>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={6} md={6} lg={3.9} sx={{p:2}}>
                    <Card sx={{p:2}}>
                        <CardMedia image={blog2} sx={{ height: 140 }} title="Blog 2"></CardMedia>
                        <CardContent>
                            <Typography variant="body2" sx={{fontSize: "1rem", fontWeight:500}} color="text.secondary">
                            Com nosso modelo de empréstimo, o valor pode ser usado para qualquer finalidade, pois não é necessário especificar o destino do empréstimo solicitado, ao contrário das outras modalidades de empréstimo.                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="large" sx={{backgroundColor: "#149dcc", color: "#fff", fontSize:"1rem", borderRadius: 2}}>Saiba Mais</Button>
                        </CardActions>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={6} md={6} lg={3.9} sx={{p:2}}>
                    <Card sx={{p:2}}>
                        <CardMedia image={blog1} sx={{ height: 140 }} title="Blog 1"></CardMedia>
                        <CardContent>
                            <Typography variant="body2" sx={{fontSize: "1rem", fontWeight:500}}  color="text.secondary">
                                Mesmo com restrição em seu nome, com a CréditoJa é possível fazer seu empréstimo. Fale com nossos consultores e tire todas as suas dúvidas. Conheça todas as vantagens do nosso modelo de crédito.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="large" sx={{backgroundColor: "#149dcc", color: "#fff", fontSize:"1rem", borderRadius: 2}}>Saiba Mais</Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        )
    }

    const NowSection: React.FC = () => {
        return(
            <Grid container justifyContent={"center"} sx={{border: "0px solid blue", pt: 2, pb:2}}>
                <Grid item xs={12} sm={11} md={11} lg={10}>
                    <Grid container justifyContent={"center"} sx={{border: "0px solid red"}}>
                        <Grid item xs={12} sm={6} md={6} lg={6}>
                            <Typography variant='h2'sx={{fontSize: "1.4rem", fontWeight:500}} >Garanta o seu Credito Agora!</Typography>
                            <Typography variant='h3' sx={{fontSize: "2.5rem", fontWeight:700}} >Faça agora sua simulação</Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={3} textAlign={"center"}>
                            <Button sx={{backgroundColor: "#149dcc", color: "#fff", borderRadius: 5 , p:2}} >
                                <WhatsAppIcon sx={{fontSize: "2rem", marginRight:0.5}} ></WhatsAppIcon>
                                <Typography variant='h2' sx={{fontSize: "1.4rem", fontWeight:600, }} >SIMULE AGORA</Typography>
                            </Button>
                        
                        </Grid>
                    </Grid>
                </Grid>


            </Grid>
        )
    }


    return (
        <Grid container justifyContent={"center"} sx={{border: "0px solid blue", padding:0}} gap={1}>

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



{/* +++++++++++ Body +++++++++++ */}

            {/* <Grid item xs={12} sm={12} md={12} lg={12} sx={{border: "0px solid blue"}}>
                <HomeSection></HomeSection>
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={12} sx={{border: "0px solid blue"}}>
                <ServiceSection></ServiceSection>
            </Grid>
            
            <Grid item xs={12} sm={12} md={12} lg={12} sx={{border: "0px solid blue"}}>
                <BlogSection></BlogSection>
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={12} sx={{border: "0px solid blue"}}>
                <NowSection></NowSection>
            </Grid> */}

            

            <Grid item xs={12} sm={10} md={10} lg={9} sx={{border: "0px solid blue"}}>
                <Grid container justifyContent={"center"} sx={{textAlign: "center"}} gap={2}>
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

        </Grid>
    )
}

export default Home;


