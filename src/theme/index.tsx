import { TypeBackground } from "@mui/material";
import { TypeText, createTheme } from '@mui/material/styles';

export interface CustomTypeBackground extends TypeBackground {
  default: string;
  primary: string;
  secondary?: string;
  backgroundCustom?: string;
}

export interface customTypographyOptions extends Partial<TypeText> {
  default: string;
  selected?: string;
  primary?: string;
  secondary?: string;
}

declare module '@mui/material/styles' {
  interface Palette { // Serve para conseguirmos acessar o atributo personalizado - Ex: theme.palette.backgroundColor?.primary
    backgroundColor: CustomTypeBackground;
    textColor?: customTypographyOptions;
  }
  interface PaletteOptions { // Serve para a variavel Theme Suporte atributos personalizado no body
    backgroundColor?: CustomTypeBackground;
    textColor?: customTypographyOptions;
  }
}

const Theme = createTheme({
    spacing: 10,
    typography: {
      fontFamily: [ 'Poppins', 'Montserrat' ,'sans-serif'].join(','),
      fontSize: 10,
      subtitle1:{
        color: "#FFDB70",
      }
    },
    palette: {
      primary: {
        main: "#000", 
        contrastText: "#000",
        light: "#272B2D",
      },
      secondary: {
        main: "#03a9f4", 
        contrastText: "#fff",
        light: "#FFB800",
      },
      error: {
        main: "#F97A91",
      },
      success: {
        main: "#5AC45F",
      },
      text: {
        primary: "#000",
        secondary: 'rgba(132, 146, 166, 1)',
        disabled: 'rgba(60, 72, 88, 0.38)',
      },
      textColor: {
        default: "#e8e6e3",
        selected: "#FFDB70",
      },
      background: {
        default: "#fff",
        paper: "#fff",
      },
      backgroundColor: {
        default: "#0E0F0F",
        primary: "#17191A",
        secondary: "#26292B",
        backgroundCustom: '#000',
        paper: "#000",
      },
    },
  
  });

  export default Theme;