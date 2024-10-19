import { createContext, useContext, useState } from "react";

const stateContext = createContext({
    user:null,
    setUser:()=>{},
    setToken:()=>{}
});

const ContextProvider = ({ children }) => {
    const [user, setUser] = useState({
        name:"Emon"
    });
    //const [token, _setToken] = useState(123);
    const [token, _setToken] = useState(localStorage.getItem("ACCESS_TOKEN"));

    const setToken = (token) => {
        _setToken(token);
        if (token) {
            localStorage.setItem("ACCESS_TOKEN", token);
        } else {
            localStorage.removeItem("ACCESS_TOKEN");
        }
    };

    return (
        <stateContext.Provider value={{ user, token, setUser, setToken }}>
            {children}
        </stateContext.Provider>
    );
};

export const useStateContext = () => {
    const context = useContext(stateContext);
    if (!context) {
        throw new Error(
            "useStateContext must be used within a ContextProvider"
        );
    }
    return context;
};

export default ContextProvider;
