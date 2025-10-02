import {createContext, useContext, useState, useEffect, Children} from 'react'

const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    cosnt [user, setUser] = useState("");

    // se ja tiver no localstorage, mantem login
    
    useEffect(() => {
        const savedEmail = localStorage.getItem("email")
        if(savedEmail){
            setUser({email: savedEmail})
        }
    }, [])

    const login = (email) => {
        localStorage.setItem("email", email)
        setUser({email})
    }
    
    const logout = () => {
        localStorage.removeItem("email")
        setUser("")
    }

    return(
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export default useAuth = () => useContext(AuthContext)