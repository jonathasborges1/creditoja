import React from 'react';
// import './App.css';

import { CssBaseline, IconButton } from '@mui/material';
import { ThemeProvider  } from '@mui/material/styles';
import { ThemeProvider as ThemeProviderLegacy } from "@mui/styles";
import { ProviderContext, SnackbarProvider } from "notistack";
import CloseIcon from '@mui/icons-material/Close';

import Routes from './components/routes';
import Theme from './theme';

const App: React.FC = () => {

  const notistackRef = React.useRef<ProviderContext>();
  const onClickDismiss = (key: string | number) => () => {
    notistackRef &&
      notistackRef.current &&
      notistackRef.current.closeSnackbar(key);
  };
  return(
    <ThemeProvider theme={Theme}>
      <ThemeProviderLegacy theme={Theme}>
        <SnackbarProvider
              autoHideDuration={5000}
              maxSnack={3}
              preventDuplicate
              //@ts-ignore
              ref={notistackRef}
              action={(key) => (
                <IconButton size="small" onClick={onClickDismiss(key)}>
                  <CloseIcon htmlColor="#fff" />
                </IconButton>
              )}
        >
        <CssBaseline/> 
          {/* App running... */}
        <Routes></Routes>
        </SnackbarProvider>
      </ThemeProviderLegacy>
    </ThemeProvider>
  )
}

export default App;




























// import logo from './logo.svg';
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }