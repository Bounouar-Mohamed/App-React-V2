import {useState,useEffect } from 'react'
import axios from "axios";
import PersonPinIcon from '@mui/icons-material/PersonPin';


const Profile = () => {

    const [name, setName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();


    useEffect(() => {

        axios.get("http://localhost:4000/profile")
          .then(resp=>{

            setName(resp.data.rows[0].nom)
            setLastName(resp.data.rows[0].prenom)
            setEmail(resp.data.rows[0].email)
            
            console.log("data fetched")

        })
        .catch(err => {console.log ("erreur:",err)})


},[]);

console.log(name,lastName, email)


    return(
        <div className='profile-page'>  
        <br/>
        <div className='profile-shadow' >

<p className='profile-title' > PROFILE</p>

<header className='profile-header'> <PersonPinIcon style={{ fontSize: 100 }} />  </header>


            <div className='profile-content'>



            
            Nom:  {name}      <br/>
            Prénom:  {lastName}   <br/>
            Email:  {email}      



            </div>

        </div>
        </div>
    )
}

export default Profile;