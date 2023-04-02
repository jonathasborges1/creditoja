import React from 'react';
import { Form, Formik } from "formik";
import { Button, TextField } from '@mui/material';
import TextFieldPhone from '@components/textFieldPhone';
import * as yup from "yup";
import TextFieldCurrency from '@components/textFieldCurrency';

interface Props {
   children?: React.ReactNode;
}

interface InitialValuesFormik {
   name: string;
   email: string;
   phone: string;
   valued: string; // Valor Estimado
}

const FormikSendEmail: React.FC<Props> = ({ children, ...props }) => {

   const initialValues: InitialValuesFormik = {
      name: '',
      email: '',
      phone: '',
      valued: '',
   }

   const validationSchema = yup.object().shape({
      email: yup
        .string()
        .email("Insira um e-mail válido")
        .required("Este campo é obrigatório"),
      name: yup
        .string()
        .min(2, "Nome muito curto!")
        .max(50, "Nome muito longo!")
        .required("Este campo é obrigatório"),
      phone: yup.string().matches(/\(\d{2}\) \d{4,5}\-\d{4}|^\d{10,11}/g,"Insira um telefone válido").required("Este campo é obrigatório"),
    });

   return (
      <Formik
         initialValues={initialValues}
         validationSchema={validationSchema}
         onSubmit={(values,actions) => {
            const payload = {
               name: values.name,
               email: values.email,
               phone: values.phone,
               valued: values.valued
            }
            
            console.log("debug -> ", payload);
         }}
      >
         {(formikprops) => {
            return(
               <Form style={{border: "0px solid red", display: "flex", flexDirection: "column", gap: 20  }}>
                  <TextField
                     type={"text"}
                     name={"name"}
                     label={"Nome Completo"}
                     value={formikprops.values.name}
                     onChange={formikprops.handleChange}
                     helperText={"Exemplo: Joao Luiz"}
                     error={
                        formikprops.touched.name &&
                        Boolean(formikprops.errors.name)
                      }
                     variant={"outlined"}
                     required
                  />
                  <TextField
                     type={"emai"}
                     name={"email"}
                     label={"Email"}
                     value={formikprops.values.email}
                     onChange={formikprops.handleChange}
                     helperText={"Exemplo: joao@gmail.com"}
                     error={
                        formikprops.touched.email &&
                        Boolean(formikprops.errors.email)
                      }
                     variant={"outlined"}
                     required
                  />
                  <TextFieldPhone
                     type={"text"}
                     name={"phone"}
                     label={"Telefone"}
                     value={formikprops.values.phone}
                     onChange={formikprops.handleChange}
                     // helperText={"Exemplo: +55 (92) 9 8829-0290"}
                     helperText={ formikprops.touched.phone && formikprops.errors.phone}
                     error={
                        formikprops.touched.phone &&
                        Boolean(formikprops.errors.phone)
                      }
                     required
                  />
                  <TextFieldCurrency
                     type={"text"}
                     name={"valued"}
                     label={"Valor Pretendido"}
                     value={formikprops.values.valued}
                     required
                  />
                  <Button
                     type={"submit"}
                     variant={"contained"}
                     sx={{background: "#149dcc",padding: 1.4, width: "20%", fontSize: "1rem"}}
                  >
                     Enviar
                  </Button>
               </Form>
            )
            
         }}
      </Formik>
   )
}

export default FormikSendEmail;