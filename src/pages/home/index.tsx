import React from 'react';
import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';
import { Grid } from '@mui/material';

interface Props {
    children?: React.ReactNode;
}

const Home: React.FC<Props> = ({ children, ...props }) => {
     const classes = useStyles();
    return (
        <Grid container sx={{border: "1px solid blue"}}>
            {/*  Menu */}
            <Grid item xs={12} lg={4} sx={{border: "2px solid red"}} >
                <h1 className={classes.container}>Este bloco representa o componente <b style={{color:"#00f"}} >home</b> </h1>
                {children}
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
  }));
