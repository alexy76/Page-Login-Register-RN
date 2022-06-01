import React from "react"

export default React.createContext({
    email : "",
    password : "",
    confirmPassword : "",
    firstname : "",
    lastname : "",
    screen : 0,
    setContext : () => setContext,
    setShowNextRegister : () => setShowNextRegister,
    setShowButtonNextRegister : () => setShowButtonNextRegister,
    setShowButtonSaveRegister : () => setShowButtonSaveRegister,
})