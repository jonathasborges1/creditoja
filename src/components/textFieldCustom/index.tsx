import { StandardTextFieldProps, TextField, Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';

interface Props extends StandardTextFieldProps {
   children?: React.ReactNode;
   type?: string;
   name: string;
   label: string;
   value: string;
   onChange: (e) => void;
   onBlur: (e) => void;
}

const TextFieldCustom: React.FC<Props> = ({ children, ...props }) => {
   const classes = useStyles(props);
   return (
      <TextField
      type={props.type}
      name={props.name}
      label={props.label}
      value={props.value}
      onChange={props.onChange}
      onBlur={props.onBlur}
      error={props.error} // define a propriedade error como true quando ocorrer um erro
      helperText={ props.value.length > 0 ? props.helperText: ""}
      InputLabelProps={{
         classes: {
            root: classes.InputLabelRoot,
         }
      }}
      InputProps={{
         classes: {
            root: classes.InputRoot,
            notchedOutline: props.error ? `${classes.hasErrorFieldSet}` : ``,
          },
      }}
      FormHelperTextProps={{
         className: classes.helperText,
      }}
      variant={"outlined"}
      required={props.required}
   />
   )
}

export default TextFieldCustom;

const useStyles = makeStyles((theme: Theme) => ({
   InputLabelRoot : {
      "&.MuiInputLabel-root.Mui-focused" : { //  Controla cor da label no momento da digitacao
         fontWeight: 700,
         color: "#000",
      },
   },
   InputRoot: {
      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
           border: `1px solid ${theme.palette.secondary.light} !important`, // Controla cor da borda durante Digitacao "#FFB800"
      },
   },
   hasErrorFieldSet: {
      "& .MuiOutlinedInput-notchedOutline": {
        border: `1px solid ${theme.palette.error.main}`, // Sinalizacao de campo incorreto -> "#F97A91"
      },
    },
    helperText: {
      "&.MuiFormHelperText-root" : {
         color: "red", // altere para do texto de apoio
      }
    },
 }));