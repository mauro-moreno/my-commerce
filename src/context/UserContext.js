import {createContext, useContext, useEffect, useState} from "react";
import getUser from "../services/getUser";

const UserContext = createContext([]);

export const useUserContext = () => useContext(UserContext);

const {Provider} = UserContext;

const UserContextProvider = ({children}) => {
    const [user, setUser] = useState({});

    useEffect(() => {
        getUser().then(data => {
            setUser(data);
        });
    });

    const context = {
        user
    };

    return (
        <Provider value={context}>
            {children}
        </Provider>
    );
};

export {UserContextProvider};
