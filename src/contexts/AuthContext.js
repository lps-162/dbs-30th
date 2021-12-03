import { createContext } from "react";


export const AuthContext = createContext()

function AuthContextProvider(props) {
    const login = () => {
    }

    const logout = () => {
        
    }

    let authContextValue = {
        isLoggedIn: true,
        username: "shivan",
        login,
        logout
    }
    return (
        <AuthContext.Provider value={authContextValue}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider