import { StandardTextFieldProps, TextField, Theme } from '@mui/material';
import { useFormikContext } from 'formik';
import React from 'react';
import makeStyles from '@mui/styles/makeStyles';

interface Props extends StandardTextFieldProps{
   children?: React.ReactNode;
   type: string;
   name: string;
   label: string;
   value: string;
   onChange?: (e) => void;
   onBlur: (e) => void;
}

const TextFieldCurrency: React.FC<Props> = ({ children, ...props }) => {
   const classes = useStyles(props);
   const formik = useFormikContext();

   const formatMoney = (value: string) => {
      const numberValue = Number(value.replace(/[^\d]/g, "")) / 100;
      return new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(numberValue);
    };
  
    const handleMoneyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      formik.setFieldValue(props.name, formatMoney(value));
    };

   return (
      <TextField
         type={props.type}
         name={props.name}
         label={props.label}
         value={props.value}
         onChange={handleMoneyChange}
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

export default TextFieldCurrency;

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