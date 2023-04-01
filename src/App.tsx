import React from 'react';
// import './App.css';

import { CssBaseline } from '@mui/material';
import { ThemeProvider  } from '@mui/material/styles';
import { ThemeProvider as ThemeProviderLegacy } from "@mui/styles";

import Routes from './components/routes';
import Theme from './theme';

const App: React.FC = () => {
  return(
    <ThemeProvider theme={Theme}>
      <ThemeProviderLegacy theme={Theme}>
        <CssBaseline/> 
          App running...
        <Routes></Routes>
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