// import {
//    Avatar,
//    Button,
//    Collapse,
//    createStyles,
//    Divider,
//    FormHelperText,
//    makeStyles,
//    Typography,
//  } from "@material-ui/core";


 import clsx from "clsx";
 import React, { useState } from "react";

 import { ReactComponent as FolderIcon } from "../../assets/folder.svg";
 import notFileImg from "../../assets/nao-compativel.png";

import { Avatar, Button, Collapse, Divider, FormHelperText, Theme, Typography } from "@mui/material";

import { makeStyles, createStyles } from '@mui/styles';

 import FileCopyIcon from '@mui/icons-material/FileCopy';
 import BackupIcon from '@mui/icons-material/Backup';

 const useStyles = makeStyles((theme: Theme) =>
   createStyles({
     boxUpload: {
       paddingTop: "2.4rem",
       paddingBottom: "3.2rem",
 
       border: "0.2rem dashed rgba(0,0,0,0.12)",
       borderRadius: theme.shape.borderRadius,
 
       "& svg": {
         fontSize: "4rem",
       },
     },
     boxUploadInvalidFile: {
       border: "0.2rem dashed rgba(0,0,0,0.12)",
       borderColor: theme.palette.primary.main,
     },
     bounceUpload: {
       animationName: "$bounce",
       animationDuration: "1s",
       animationIterationCount: "infinite",
       animationDirection: "alternate",
     },
     bounceInDragging: {
       animationName: "$bounceIn",
       animationDuration: "1s",
       animationIterationCount: "infinite",
       animationDirection: "alternate",
     },
     centerBox: {
       display: "flex",
       flexDirection: "column",
       alignItems: "center",
     },
     "@keyframes bounce": {
       from: {
         transform: "translateY(0px)",
       },
       to: {
         transform: "translateY(-15px)",
       },
     },
     "@keyframes bounceIn": {
       "0%, 20%, 40%, 60%, 80%, 100%": {
         transitionTimingFunction: "cubic-bezier(0.215, 0.610, 0.355, 1.000)",
       },
       "0%": {
         opacity: 0,
         transform: "scale3d(.3, .3, .3)",
       },
       "20%": {
         transform: "scale3d(1.1, 1.1, 1.1)",
       },
       "40%": {
         transform: "scale3d(.9, .9, .9)",
       },
       "60%": {
         transform: "scale3d(1.03, 1.03, 1.03)",
       },
       "80%": {
         transform: "scale3d(.97, .97, .97)",
       },
       "100%": {
         transform: "scale3d(1, 1, 1)",
       },
     },
     input: {
       display: "none",
     },
     notFile: {
       width: "6rem",
       height: "6rem",
       backgroundColor: "#E0E0E0",
       "& svg": {
         width: "3rem",
         height: "3rem",
         fill: theme.palette.text.primary,
       },
     },
     divider: {
       width: "25%",
       margin: "2rem",
     },
   })
 );
 
 interface Props {
   onChange(file: File): void;
   onTouch(): void;
   touched: boolean;
   error: boolean;
   helperText: string;
   value: File | null;
 }
 
 const DragInDropBox: React.FC<Props> = ({
   onChange,
   error,
   helperText,
   onTouch,
   value,
 }) => {
   const classes = useStyles()
 
   const [isDragging, setIsDragging] = useState(false);
 
   const handleDragIn = (e: React.DragEvent) => {
     e.preventDefault();
     e.stopPropagation();
     if (e.dataTransfer && e.dataTransfer.items.length > 0) {
       setIsDragging(true);
     }
   };
 
   const handleDragOut = (e: React.DragEvent) => {
     e.preventDefault();
     e.stopPropagation();
     setIsDragging(false);
   };
 
   return (
     <>
       <div
         onDragOver={(e) => {
           handleDragIn(e);
         }}
         onDragLeave={handleDragOut}
         onDrop={(e) => {
           e.preventDefault();
           onChange(e.dataTransfer.files[0]);
           setIsDragging(false);
         }}
         className={clsx(classes.boxUpload, {
           [classes.boxUploadInvalidFile]: error,
         })}
       >
         <input
           className={classes.input}
           id="file"
           name="file"
           type="file"
           onChange={(e) => {
             if (e.target.files?.length) {
               onChange(e.target.files[0]);
             }
             setTimeout(() => {
               onTouch();
             }, 1);
           }}
         />
         <Collapse in={!isDragging}>
           <div className={classes.centerBox}>
             {value && (
               <>
                 {error && (
                   <Avatar src={notFileImg} className={classes.notFile} />
                 )}
                 {!error && (
                   <Avatar className={classes.notFile}>
                     <FolderIcon />
                   </Avatar>
                 )}
                 <Typography>{value && value.name}</Typography>
                 <Divider className={classes.divider} />
               </>
             )}
             {!value && <BackupIcon className={classes.bounceUpload} />}
             <Typography>Arraste e solte seu arquivo aqui</Typography>
             <Typography>ou</Typography>
 
             <label htmlFor="file">
               <Button component="span" color="primary">
                 Anexe do computador
               </Button>
             </label>
           </div>
         </Collapse>
         <Collapse in={isDragging}>
           <div className={classes.centerBox}>
             <FileCopyIcon className={classes.bounceInDragging} />
             <Typography>Solte o seu arquivo para enviar</Typography>
           </div>
         </Collapse>
       </div>
       <FormHelperText error={error}>{helperText}</FormHelperText>
     </>
   );
 };
 
 export default DragInDropBox;
 