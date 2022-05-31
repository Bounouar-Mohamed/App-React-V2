import React, { useState, useEffect, createContext, FC } from 'react'


type Password = {

    password: any;
    setPassword: any;

}


export const PasswordContext =
    React.createContext<any | null>(null);


const PasswordProvider: React.FC = ({ children }) => {



    const [password, setPassword] = useState<Password>();

    console.log(password)

    return (


        <PasswordContext.Provider value={{
            password, setPassword
        }}>

            {children}

        </PasswordContext.Provider>

    )


}

export default PasswordProvider;

