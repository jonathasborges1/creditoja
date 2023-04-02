import { StandardTextFieldProps, TextField, Theme, createStyles } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
// import { makeStyles } from '@mui/styles';
import { useFormikContext } from 'formik';
import React from 'react';

interface Props extends StandardTextFieldProps  {
   children?: React.ReactNode;
   type?: string;
   name: string;
   label: string;
   value: string;
   onChange: (e) => void;
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
         onChange={handlePhoneChange }
         // className={classes.root}
         inputProps={{
            maxLength: 19,
            classes: {
               notchedOutline: props.error ? `${classes.hasErrorFieldSet}` : ``,
             },
          }}
         variant={"outlined"}
         helperText={ props.value.length > 0 ? props.helperText: ""}
         
      />
   )
}

export default TextFieldPhone;


const useStyles = makeStyles((theme: Theme) => ({
   root: {
      "& input": {
        boxShadow: "0px 0px 0px 30px white inset",
      },
      "& label": {
        // Controle de estilo antes de digitar
        opacity: 0.6,
        fontSize: "1.4rem",
      },
      "& .MuiInputBase-root": {
        borderRadius: "1rem",
      },
      "& .MuiInputLabel-shrink": {
        // Controle de estilo da "label" apos campo digitado // -> Equivalencia ->  "& .Mui-focused"
        fontSize: "1.5rem",
        opacity: 1,
        color: theme.palette.text.primary,
        fontWeight: 700,
      },
      "& .MuiInputBase-input": {
        color: theme.palette.text.primary,
        fontWeight: 500,
      },
      "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
        border: `1px solid ${theme.palette.secondary.light}`, // Controla cor da borda durante Digitacao "#FFB800"
      },
      "& .MuiFormHelperText-root.Mui-error.Mui-focused": {
        // Esconde a mensagem de erro enquanto usuario estiver digitando
        // opacity: 0,
        display: "none",
      },
    },
   hasErrorFieldSet: {
      "& .MuiOutlinedInput-notchedOutline": {
        border: `1px solid ${theme.palette.error.main}`, // Sinalizacao de campo incorreto -> "#F97A91"
      },
      "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
        border: `1px solid ${theme.palette.secondary.light}`, // Controla cor da borda durante Digitacao "#FFB800"
      },
    },
 }));
