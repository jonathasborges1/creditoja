import React from 'react';
import { useFormikContext } from 'formik';

import { StandardTextFieldProps, TextField, Theme } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';

interface Props extends StandardTextFieldProps  {
   children?: React.ReactNode;
   type?: string;
   name: string;
   label: string;
   value: string;
   onChange: (e) => void;
   onBlur: (e) => void;
}

const TextFieldPhone: React.FC<Props> = ({ children, ...props }) => {
   const classes = useStyles(props);
   const formik = useFormikContext();

   const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      const valueClean = value.replaceAll(/[\s()a-z+-]|(55)/g,'');
      formik.setFieldValue(props.name,valueClean);
   }

   const formatPhone = (phone: string): string => {
      const phones: number = phone.length; 
      switch (true) {
         case phones === 0: {
            return '';
         }
         case phones >= 1 && phones <= 2: { // +55 (92
            return `+${55} (${phone.slice(0,2)}`; 
         }
         case phones >= 3 && phones <= 7: { // +55 (92) 9 8841
            return `+${55} (${phone.slice(0,2)}) ${phone.slice(2,7)}`; 
         }
         case phones >= 8 && phones <= 13: { // +55 (92) 98841-0440
            return `+${55} (${phone.slice(0,2)}) ${phone.slice(2,7)}-${phone.slice(7)}`; 
         }
         default:
            return '';
      }
    }

   return (
      <TextField
         type={props.type}
         name={props.name}
         label={props.label}
         value={formatPhone(props.value)}
         onChange={handlePhoneChange}
         onBlur={props.onBlur}
         error={props.error} // define a propriedade error como true quando ocorrer um erro
         helperText={ props.value.length > 0 ? props.helperText: ""}
         inputProps={{
            maxLength: 19, // Delimita a quantidade maxima de caracteres no campo
         }}
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

export default TextFieldPhone;


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
