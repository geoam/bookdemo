import { createContext, useContext } from  "react";
import { useState } from "react";


const AppContext = createContext(null);

export const useAppContext = () => {

    const context = useContext(AppContext);

    if(context === undefined){
        throw new Error("Appcontext must be within appContextProvider!");
    }

    return context;
}


const AppContextProvider = ({ children }) => {

    const [login, setLogin] = useState([]);

    const register = (user) => {
        const users = [...login];

        const newUser = users.concat(user);

        setLogin(newUser);
    };

    const account = (id) => {
        const users = [...login];
        const newUser = users.filter((user)=> user.id !== id);

        setLogin(newUser);
    };

    return(
        <AppContext.Provider value={ {login, register, account}}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;