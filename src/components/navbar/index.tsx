import React from 'react';

import useMediaQuery from '@mui/material/useMediaQuery';
import { Box, Drawer, Link, List, ListItem, ListItemButton, ListItemText, Theme, useTheme } from '@mui/material';
import { TouchApp } from '@mui/icons-material';
import { makeStyles } from '@mui/styles';

import MenuIcon from '@mui/icons-material/Menu';
import ROUTES from '@config/routes';
import { useHistory } from 'react-router-dom';

interface Props {
   children?: React.ReactNode;
}

const NavBar: React.FC<Props> = ({ children, ...props }) => {
   const classes = useStyles();
   const theme = useTheme();    
   const history = useHistory();

   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

   const menuItem = [
      {
         label: "Home",
         href: ROUTES.HOME
      },
      {
         label: "Serviços",
         href: ROUTES.SERVICES
      },
      {
         label: "Sobre Nós",
         href: ROUTES.ABOUT
      },
      {
         label: "SIMULE AGORA",
         href: ROUTES.CONTACT
      },
   ]

   const handleRedirectHome = () => {
      history.push(ROUTES.HOME);
  }

  const handleRedirectContact = () => {
   history.push(ROUTES.CONTACT);
}

   const handleRedirectService = () => {
      history.push(ROUTES.SERVICES);
   }

   const handleRedirectAbout = () => {
      history.push(ROUTES.ABOUT);
   }


   const NavBarDesktop: React.FC = () => {
      return(
      <List component={"nav"}
            sx={{
               display: "inline-flex", gap: 1.5, fontWeight:600, fontSize: "1rem", border: "0px solid red", padding:0,
            }}
      >
            <ListItemButton sx={{p:1}} onClick={handleRedirectHome}>Home</ListItemButton>
            <ListItemButton sx={{p:1}} onClick={handleRedirectService} >Serviços</ListItemButton>
            <ListItemButton sx={{p:1,mr:0.5}} onClick={handleRedirectAbout} >Sobre Nós</ListItemButton>
            <ListItemButton onClick={handleRedirectContact}
               sx={{
                  p:1, pl:3, paddingRight:3, 
                  border: "0px solid red", borderRadius: 10, 
                  backgroundColor: "#149dcc", color: "#fff", "&:hover": {backgroundColor: '#000', color: '#149dcc'}
               }} 
             >
               <TouchApp 
                  className={classes.touchApp}
                  sx={{ 
                        fontSize: 30, marginRight: 1, 
                  }} 
            />SIMULE AGORA
            </ListItemButton>
      
      </List>
      )
   }

   const NavBarMobile: React.FC = () => {
      const [open, setOpen] = React.useState(false);

      const handleToggle = () => {
        setOpen(!open);
      };

      return(
      <Box> 
         <MenuIcon onClick={handleToggle} sx={{fontSize: "2.5rem"}} />
         <Drawer anchor="top" open={open} onClose={handleToggle}>
           <List>
             {menuItem.map((item,index) => (
               <ListItem button onClick={handleToggle} component={Link} href={item.href} key={index}> 
                 {/* <ListItemIcon>{item.icon}</ListItemIcon> */}
                 <ListItemText primary={item.label} />
               </ListItem>
             ))}
           </List>
         </Drawer>
       </Box>
      )
   }

   return (
      <>
            { isMobile ? (<NavBarMobile></NavBarMobile>) : (<NavBarDesktop></NavBarDesktop>) }
      </>
   )
}

export default NavBar;

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