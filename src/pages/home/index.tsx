import React from 'react';
import { useHistory } from 'react-router-dom';

import { Button, Card, CardActions, CardContent, CardMedia, Grid,  Typography, useMediaQuery, useTheme, } from '@mui/material';

import HelpCenterOutlinedIcon from '@mui/icons-material/HelpCenterOutlined';
import TouchAppOutlinedIcon from '@mui/icons-material/TouchAppOutlined';
import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


import { mdiInstagram } from '@mdi/js';
import { mdiFacebook } from '@mdi/js';

import banner from "@assets/creditoja-banner.jpg";
import blog1 from "@assets/creditoja-blog1.jpg";
import blog2 from "@assets/creditoja-blog2.jpg";

import FormikSendEmail from '@components/formik';
import Icon from '@mdi/react';
import ROUTES from '@config/routes';
import Header from '@components/header';
import CreditModalitySection from '@components/creditModalitySection';
interface Props {
    children?: React.ReactNode;
}

const Home: React.FC<Props> = ({ children, ...props }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.only("xs"));
    const history = useHistory();

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


    const handleRedirectForm = () => {
        history.push(ROUTES.CONTACT);
    }

    const handleRedirectService = () => {
        history.push(ROUTES.SERVICES);
     }

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
                    <Button onClick={handleRedirectService} sx={{backgroundColor: "#e17d19", borderRadius: 8, padding: "16px 32px 16px 32px", "&:hover": {backgroundColor: "green"} }}> 
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
                    <Grid container justifyContent={"center"} sx={{padding: isMobile? 2 : 5}}>
                        <Grid item xs={12} sm={8} md={8} lg={6} sx={{border: "0px solid blue"}}>
                            <iframe 
                                width={"100%"}
                                height={isMobile? "200" : "360"}
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
            <Grid container justifyContent={"center"} gap={0.5} sx={{backgroundColor: "#efefef", p: "2rem 0px"}}>
                <Grid item xs={12} sm={6} md={6} lg={3.9} sx={{p:2}}>
                    <Card sx={{p:2,}}>
                        <CardMedia image={blog1} sx={{ height: 140 }} title="Blog 1"></CardMedia>
                        <CardContent>
                            <Typography variant="body2" sx={{fontSize: "1rem", fontWeight:500}} color="text.secondary">
                                Mesmo com restrição em seu nome, com a CréditoJa é possível fazer seu empréstimo. Fale com nossos consultores e tire todas as suas dúvidas. Conheça todas as vantagens do nosso modelo de crédito.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button onClick={handleRedirectService} size="large" sx={{backgroundColor: "#149dcc", color: "#fff", fontSize:"1rem", borderRadius: 2}}>Saiba Mais</Button>
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
                            <Button onClick={handleRedirectService} size="large" sx={{backgroundColor: "#149dcc", color: "#fff", fontSize:"1rem", borderRadius: 2}}>Saiba Mais</Button>
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
                            <Button onClick={handleRedirectService} size="large" sx={{backgroundColor: "#149dcc", color: "#fff", fontSize:"1rem", borderRadius: 2}}>Saiba Mais</Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        )
    }

    const NowSection: React.FC = () => {
        return(
            <Grid container justifyContent={"center"} alignItems={"center"} sx={{border: "0px solid blue", textAlign:"center", pt: 5, pb:5}} gap={2}>
                <Grid item xs={12} sm={11} md={11} lg={5}>
                    <Grid container justifyContent={"center"} alignItems={"center"} sx={{border: "0px solid red"}}>
                        <Grid item xs={12} sm={6} md={6} lg={8}>
                            <Typography variant='h2'sx={{fontSize: "1.4rem", fontWeight:500 ,mb: 2}} >Garanta o seu Credito Agora!</Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={10} sx={{border: "0px solid black"}} >
                            <Typography variant='h3' sx={{fontSize: "2.2rem", fontWeight:700}} >Faça agora sua simulação</Typography>
                        </Grid>

                    </Grid>
                </Grid>
                <Grid item xs={12} sm={11} md={11} lg={3} sx={{border: "0px solid purple",}}>
                    <Button sx={{backgroundColor: "#149dcc", color: "#fff", borderRadius: 5 , p: isMobile? 1 : 2}} onClick={handleRedirectForm} >
                        <WhatsAppIcon sx={{fontSize: "2rem", marginRight:0.5}} ></WhatsAppIcon>
                        <Typography variant='h2' sx={{fontSize: isMobile? "1rem" :"1.4rem", fontWeight:600, }} >SIMULE AGORA</Typography>
                    </Button> 
                </Grid>
            </Grid>
        )
    }

    const SocialMediaSection: React.FC = () => {
        return(
            <Grid container component={"section"} justifyContent={"center"} alignItems={"center"} sx={{border: "0px solid blue", textAlign:"center", pt: 5, pb:5}} gap={2} >
                
                <Grid item xs={12} sm={11} md={11} lg={12}>
                    <Typography variant='h3' sx={{fontWeight: 500, }} > SIGA A CREDITOJA </Typography>
                </Grid>

                <Grid item xs={12} sm={11} md={11} lg={1} sx={{display: "flex", justifyContent:"center", gap:2, border: "0px solid red" , }} >
                    <a href="https://instagram.com/creditoja">
                        <Icon path={mdiInstagram} style={{color: "#149dcc"}} size={2} />
                    </a>
                    <a href="#">
                        <Icon path={mdiFacebook} style={{color: "#149dcc"}} size={2} />
                    </a>
                </Grid>
                
            </Grid>
        )
    }

    const MapSection: React.FC = () => {
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
                                    <Typography variant='body2' sx={{fontWeight: 500, fontSize:"1rem", color: "#fff"}}> Com: 2538-4752 | Cel: (11) 95210-2875 |  (11) 96364.0668 | (11) 3832- 9358</Typography>
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
    
    return (
        <Grid container justifyContent={"center"} sx={{border: "0px solid blue", padding:0}} gap={1}>

            <Grid item xs={12} lg={12}  sx={{border: "0px solid red", marginBottom: isMobile ? "3rem" : "5rem",  }} >
{/* ++++++++++++++++++++ Header ++++++++++++++++++++ */}
                <Header></Header>
            </Grid>



{/* +++++++++++ Body +++++++++++ */}

            <Grid item xs={12} sm={12} md={12} lg={12} sx={{border: "0px solid blue"}}>
                <HomeSection></HomeSection>
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={12} sx={{border: "0px solid blue"}}>
                <ServiceSection></ServiceSection>
            </Grid>
            
            <Grid item xs={12} sm={12} md={12} lg={12} sx={{border: "0px solid blue",}}>
                <BlogSection></BlogSection>
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={12} sx={{border: "0px solid blue"}}>
                <NowSection></NowSection>
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={12} sx={{border: "0px solid blue"}}>
                <CreditModalitySection></CreditModalitySection>
            </Grid>
            
            <Grid item xs={12} sm={12} md={12} lg={12} sx={{border: "0px solid blue"}}>
                <SocialMediaSection></SocialMediaSection>
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={12} sx={{border: "0px solid blue"}}>
                <MapSection></MapSection>
            </Grid>

            
            
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


