import React from 'react';
import * as yup from "yup";
import axios from 'axios';
import { Form, Formik } from "formik";
import { useSnackbar } from "notistack";

import { Button } from '@mui/material';

import TextFieldPhone from '@components/textFieldPhone';
import TextFieldCurrency from '@components/textFieldCurrency';
import TextFieldCustom from '@components/textFieldCustom';

import { phoneNumberMask } from '@utils/index';
import appConfig from '@config/appConfig';


interface Props {
   children?: React.ReactNode;
}

interface InitialValuesFormik {
   name: string;
   email: string;
   phone: string;
   valued: string; // Valor Estimado
   tag: string;
}

const FormikSendEmail: React.FC<Props> = ({ children, ...props }) => {
   const { enqueueSnackbar } = useSnackbar();

   const initialValues: InitialValuesFormik = {
      name: '',
      email: '',
      phone: '',
      valued: '',
      tag: "#finanzero",
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
      phone: yup.string().matches(/\(\d{2}\) \d{4,5}\-\d{4}|^\d{10,11}/g,"Insira um telefone válido! - Exemplo: +55 (92) 9 8829-0290").required("Este campo é obrigatório"),
    });

    const emailBody = (valuesFormik: InitialValuesFormik | undefined): string => {
      return `
         <html>
            <head></head>
            <body>
               <h1>Novo Cadastro Realizado pelo Site</h1>
               <p>Informacoes de contato: </p>
               <ul>
                  <li>Nome: ${valuesFormik?.name}</li>
                  <li>Email: ${valuesFormik?.email}</li>
                  <li>Telefone: ${phoneNumberMask(valuesFormik?.phone)}</li>
                  <li>Valor Estimado: ${valuesFormik?.valued}</li>
                  <li>Tag: ${valuesFormik?.tag}</li>
               </ul>
            </body>
         </html>
      `;
    }

   return (
      <Formik
         initialValues={initialValues}
         validationSchema={validationSchema}
         onSubmit={async(values,actions) => {
            const payloadValuesFormik = {
               name: values.name,
               email: values.email,
               phone: values.phone,
               valued: values.valued,
               tag: values.tag,
            }

            try {
               const params = {
                  sender: {
                     name: appConfig.user.name,
                     email: appConfig.user.email, 
                  },
                  to: [{
                     name: appConfig.user.name,
                     email: appConfig.user.email, 
                  }],
                  cc: [{
                     email: appConfig.admin.email,
                  }],
                  subject: "Sistema de Notificação de Email CreditoJa - Lead Indicado pela Finanzero",
                  htmlContent: emailBody(payloadValuesFormik),
               }

               const header = {
                  headers : {
                     "api-key": appConfig.api.key,
                     'Content-Type': 'application/json',
                     Accept: 'application/json',
                  }
               }

               const response = await axios.post(`https://api.sendinblue.com/v3/smtp/email`,params,header);
               console.log("[INFO]: ", response.data);

               enqueueSnackbar("Dados Enviados com sucesso!", {
                 variant: "success",
               });

               setTimeout( () => {
                  window.location.href = "https://creditoja.net/";
               },15000);

            } catch (error) {
               console.log("[DEBUG]: Erro ao enviar formulario -> ", error)
               enqueueSnackbar("Ocorreu um erro ao Enviar Seus Dados", {
                  variant: "error",
                });
            }
            
            actions.resetForm(); // Limpa campos do formulario
            
         }}
      >
         {(formikprops) => {
            return(
               <Form style={{border: "0px solid red", display: "flex", flexDirection: "column", gap: 20  }}>
                  <TextFieldCustom
                     type={"text"}
                     name={"name"}
                     label={"Nome Completo"}
                     value={formikprops.values.name}
                     onChange={formikprops.handleChange}
                     onBlur={formikprops.handleBlur}
                     helperText={ formikprops.touched.name && formikprops.errors.name}
                     error={
                        formikprops.touched.name &&
                        Boolean(formikprops.errors.name)
                      }
                     required
                  />
                  <TextFieldCustom
                     type={"emai"}
                     name={"email"}
                     label={"Email"}
                     value={formikprops.values.email}
                     onChange={formikprops.handleChange}
                     onBlur={formikprops.handleBlur}
                     helperText={ formikprops.touched.email && formikprops.errors.email}
                     error={
                        formikprops.touched.email &&
                        Boolean(formikprops.errors.email)
                      }
                     required
                  />
                  <TextFieldPhone
                     type={"text"}
                     name={"phone"}
                     label={"Telefone"}
                     value={formikprops.values.phone}
                     onChange={formikprops.handleChange}
                     onBlur={formikprops.handleBlur}
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
                     onBlur={formikprops.handleBlur}
                     helperText={ formikprops.touched.valued && formikprops.errors.valued}
                     error={
                        formikprops.touched.valued &&
                        Boolean(formikprops.errors.valued)
                      }
                     required
                  />
                  <Button
                     type={"submit"}
                     variant={"contained"}
                     sx={{
                        background: "#149dcc", color: "#fff" ,padding: 1.4, width: "20%", fontSize: "1rem", 
                        "&:hover": {backgroundColor: '#90ee90', color: '#000'}
                     }}
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