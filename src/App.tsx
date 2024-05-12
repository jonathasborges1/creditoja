import React from "react";
import { ProviderContext, SnackbarProvider } from "notistack";

import { ThemeProvider as ThemeProviderLegacy } from "@mui/styles";
import { CssBaseline, IconButton } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";

import { UserSessionProvider } from "@context/UserSessionContext";
import Routes from "./components/routes";
import Theme from "./theme";

const App: React.FC = () => {
  const notistackRef = React.useRef<ProviderContext>();
  const onClickDismiss = (key: string | number) => () => {
    notistackRef &&
      notistackRef.current &&
      notistackRef.current.closeSnackbar(key);
  };

  return (
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
          <UserSessionProvider>
            <CssBaseline />
            <Routes />
          </UserSessionProvider>
        </SnackbarProvider>
      </ThemeProviderLegacy>
    </ThemeProvider>
  );
};

export default App;
