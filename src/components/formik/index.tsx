import * as yup from "yup";
import axios from 'axios';
import { Form, Formik } from "formik";
import React, { useState } from 'react';
import { useSnackbar } from "notistack";

import { Box, Button, List, ListItem, ListItemText, Typography } from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

import TextFieldPhone from '@components/textFieldPhone';
import TextFieldCurrency from '@components/textFieldCurrency';
import TextFieldCustom from '@components/textFieldCustom';

import { phoneNumberMask } from '@utils/index';
import appConfig from '@config/appConfig';

import CircularStatic from "@components/circularProgressWithLabel";
import DragInDropBox from "@components/dragInDropBox";

interface Props {
   children?: React.ReactNode;
}

interface InitialValuesFormik {
   name: string;
   email: string;
   phone: string;
   valued: string; // Valor Estimado
   cep: string;
   propertyPaid: string // Imovel esta quitado ?
   propertyValue: string; // Valor do Imovel
   loanAmount: string; // Valor do emprestimo
   tag: string;
   file: File | null; // Arquivo enviado
}

const FormikSendEmail: React.FC<Props> = ({ children, ...props }) => {
   const { enqueueSnackbar } = useSnackbar();

   const initialValues: InitialValuesFormik = {
      name: '',
      email: '',
      phone: '',
      valued: '',
      cep: '',
      propertyPaid: '',
      propertyValue: '',
      loanAmount: '',
      tag: "#finanzero",
      file: null,
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
      file: yup.mixed().required('Por favor, selecione um arquivo .zip'), 
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
                  <li>CEP: ${valuesFormik?.cep}</li>
                  <li>Imovel esta quitado: ${valuesFormik?.propertyPaid}</li>
                  <li>Valor do Imovel: ${valuesFormik?.propertyValue}</li>
                  <li>Valor do emprestimo: ${valuesFormik?.loanAmount}</li>
                  <li>Tag: ${valuesFormik?.tag}</li>
               </ul>
               <p>Arquivo anexado: ${valuesFormik?.file?.name || 'Nenhum arquivo enviado'}</p>
            </body>
         </html>
      `;
    }
    
    const [fileData, setFileData] = useState<string | null | ArrayBuffer >(null);
    const [loading, setLoading] = useState<boolean>(false);

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
               cep: values.cep,
               propertyPaid: values.propertyPaid,
               propertyValue: values.propertyValue,
               loanAmount: values.loanAmount,
               tag: values.tag,
               file: values.file,
            }
            setLoading(true);
            
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
                  attachment: [
                     {
                        content: fileData || '', // Tipo do arquivo
                        name: payloadValuesFormik.file?.name || '', // Nome do arquivo
                     }
                  ],
               }

               const header = {
                  headers : {
                     "api-key": appConfig.api.key,
                     'Content-Type': 'application/json',
                     'Accept': 'application/json',
                  }
               }

               const response = await axios.post(appConfig.api.url,params,header);
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
            }finally{
               setLoading(false);
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
                     // required
                  />
                  <TextFieldCustom
                     type={"email"}
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
                     // required
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
                     // required
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
                     // required
                  />
                  <TextFieldCustom
                     type={"text"}
                     name={"cep"}
                     label={"Cep"}
                     value={formikprops.values.cep}
                     onChange={formikprops.handleChange}
                     onBlur={formikprops.handleBlur}
                     helperText={ formikprops.touched.cep && formikprops.errors.cep}
                     error={
                        formikprops.touched.cep &&
                        Boolean(formikprops.errors.cep)
                      }
                     // required
                  />
                  <TextFieldCustom
                     type={"text"}
                     name={"propertyPaid"}
                     label={"Imovel esta quitado ? "}
                     value={formikprops.values.propertyPaid}
                     onChange={formikprops.handleChange}
                     onBlur={formikprops.handleBlur}
                     helperText={ formikprops.touched.propertyPaid && formikprops.errors.propertyPaid}
                     error={
                        formikprops.touched.propertyPaid &&
                        Boolean(formikprops.errors.propertyPaid)
                      }
                     // required
                  />
                  <TextFieldCurrency
                     type={"text"}
                     name={"propertyValue"}
                     label={"Valor do Imovel"}
                     value={formikprops.values.propertyValue}
                     onChange={formikprops.handleChange}
                     onBlur={formikprops.handleBlur}
                     helperText={ formikprops.touched.propertyValue && formikprops.errors.propertyValue}
                     error={
                        formikprops.touched.propertyValue &&
                        Boolean(formikprops.errors.propertyValue)
                      }
                     // required
                  />
                  <TextFieldCurrency
                     type={"text"}
                     name={"loanAmount"}
                     label={"Valor do emprestimo"}
                     value={formikprops.values.loanAmount}
                     onChange={formikprops.handleChange}
                     onBlur={formikprops.handleBlur}
                     helperText={ formikprops.touched.loanAmount && formikprops.errors.loanAmount}
                     error={
                        formikprops.touched.loanAmount &&
                        Boolean(formikprops.errors.loanAmount)
                      }
                     // required
                  />
                  <Box>
                     <Typography>Por favor, separe os documentos abaixo solicitados em um .zip e submeta os arquivos no <b style={{color:"red"}}>formato .zip</b> </Typography>
                        <List>
                           <ListItem>
                           <ArrowRightIcon />
                              <ListItemText primary="Documento de Identidade: RG e CPF, ou CNH" />
                           </ListItem>
                           <ListItem>
                              <ArrowRightIcon />
                              <ListItemText primary="Comprovante de estado civil" />
                           </ListItem>
                           <ListItem>
                              <ArrowRightIcon />
                              <ListItemText primary="Comprovante de endereço" />
                           </ListItem>
                           <ListItem>
                              <ArrowRightIcon />
                              <ListItemText primary="Matrícula do imóvel" />
                           </ListItem>
                           <ListItem>
                              <ArrowRightIcon />
                              <ListItemText primary="IPTU" />
                           </ListItem>
                           <ListItem>
                              <ArrowRightIcon />
                              <ListItemText primary="Fotos do imóvel" />
                           </ListItem>
                        </List>
                        <Typography sx={{opacity:0.7, fontSize: "0.6rem"}}> <b style={{color:"red"}}>Aviso:</b> O seu arquivo .zip nao pode passar de 10mb </Typography>
                     </Box>
                     
                     <DragInDropBox
                        error={  Boolean(formikprops.touched.file) && Boolean(formikprops.errors.file) }
                        touched={Boolean(formikprops.touched.file)}
                        helperText={
                           formikprops.touched.file && formikprops.errors.file ? String(formikprops.errors.file): ""
                        }
                        onTouch={() => {
                          console.log("touch");
                          formikprops.setFieldTouched("file", true);
                        }}
                        onChange={(file: File) => {
                           // const file = (event.target as HTMLInputElement).files?.[0]; // Obter o primeiro arquivo selecionado
                           // Verificar o tamanho do arquivo
                           const maxSizeInBytes = 10 * 1024 * 1024; // 10 MB (altere conforme necessário)
                           if (file && file.size > maxSizeInBytes) {
                              formikprops.setFieldError("file", "O tamanho do arquivo excede o limite 10mb permitido.");
                           } else {
                              formikprops.setFieldValue("file", file);
                           }
                           
                           if (file) {
                              const reader = new FileReader();
                              reader.readAsDataURL(file);
   
                              reader.onload  = () => {
                              const result = reader.result;
                              if (typeof result === 'string') {
                                 const base64Data = result.split(',')[1];
                                 setFileData(base64Data);
                               }
                              };
                            
                              reader.readAsDataURL(file);
                            } else {
                              setFileData(null);
                            }
   
                        }}
                        value={formikprops.values.file}
                      />

                  <Box sx={{border: "0px solid purple", display: "flex", justifyContent:"left"}}>
                     {loading ? 
                        <CircularStatic  />: 
                        <Button
                        type={"submit"}
                        variant={"contained"}
                        sx={{
                           border: "0px solid black",
                           background: "#149dcc", color: "#fff", padding: 1, pl: 4, pr: 4, fontSize: "1rem", 
                           "&:hover": {backgroundColor: '#90ee90', color: '#000'}
                        }}
                     >
                        Enviar
                     </Button>
                     }

                  </Box>

               </Form>
            )
            
         }}
      </Formik>
   )
}

export default FormikSendEmail;