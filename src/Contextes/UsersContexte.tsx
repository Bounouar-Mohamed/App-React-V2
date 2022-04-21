import React, { useState, useEffect, createContext, FC } from 'react'
import axios from "axios";



type Text = {

  name: any;
  setName: any;
  lastName: any;
  setLastName: any;
  email: any;
  setEmail: any;

}


export const UserContext =
  React.createContext<Text | null>(null);


const UserProvider: React.FC = ({ children }) => {



  const [name, setName] = useState();
  const [lastName, setLastName] = useState<Text>();
  const [email, setEmail] = useState<Text>();


  useEffect(() => {

    axios.get("http://localhost:4000/profile")
      .then(resp => {

        setName(resp.data.rows[0].nom)
        setLastName(resp.data.rows[0].prenom)
        setEmail(resp.data.rows[0].email)

      })
      .catch(err => { console.log("erreur:", err) })
  }, []);



  return (


    <UserContext.Provider value={{
      name, setName,
      lastName, setLastName,
      email, setEmail
    }}>

      {children}

    </UserContext.Provider>

  )


}

export default UserProvider;

