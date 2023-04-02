import { StandardTextFieldProps, TextField } from '@mui/material';
import { useFormikContext } from 'formik';
import React from 'react';

interface Props extends StandardTextFieldProps{
   children?: React.ReactNode;
   type: string;
   name: string;
   label: string;
   value: string;
   helperText?: string;
   onChange?: (e) => void;
}

const TextFieldCurrency: React.FC<Props> = ({ children, ...props }) => {

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
      console.log("debug -> value",value);
      console.log("debug -> value formatted ",formatMoney(value));
      formik.setFieldValue(props.name, formatMoney(value));
    };

   return (
      <TextField
         type={props.type}
         name={props.name}
         label={props.label}
         value={props.value}
         onChange={handleMoneyChange}
         variant={"outlined"}
         helperText={ props.value.length > 0 ? props.helperText: ""}
      />
   )
}

export default TextFieldCurrency;