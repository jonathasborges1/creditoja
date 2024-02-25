import { createContext, useContext, useState } from "react";
import Cookies from 'js-cookie';

interface IUserSessionContext {
   serasa: boolean;
   handleSerasa: (flag:boolean) => void;
}

const UserSessionContext = createContext<IUserSessionContext | undefined>(undefined);

const UserSessionProvider = ({children}) => {

   const initialSerasaValue = JSON.parse(Cookies.get('serasa') || 'false');
   const [serasa, setSerasa] = useState<boolean>(initialSerasaValue ?? false);
   console.log("serasa- ",serasa);

   const handleSerasa = (flag:boolean) => {
      // const expires = 1 / 48; // 1 dia dividido por 48 (30 minutos)
      // Cookies.set('serasa', JSON.stringify(flag), {expires} );
      Cookies.set('serasa', JSON.stringify(flag));
      setSerasa(flag);
   }

   return (
      <UserSessionContext.Provider 
         value={{
            serasa,
            handleSerasa
         }}
      >
         {children}
      </UserSessionContext.Provider>
   )
}

const useUserSession = () => {
   const context = useContext(UserSessionContext);
   if (!context) {
      throw new Error('useUserSession must be used within a UserSessionProvider');
   }
   return context;
}

export {UserSessionProvider,useUserSession}