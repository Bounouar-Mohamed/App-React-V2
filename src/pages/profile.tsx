import React, { useContext, useEffect } from 'react'
import PersonPinIcon from '@mui/icons-material/PersonPin';
import { UserContext } from '../Contextes/UsersContexte';



const Profile: React.FC = () => {


    const InfoUser = useContext(UserContext);

    //console.log(Names?.name)


    if (InfoUser?.lastName === undefined) {
        console.log('...Wait')
    }
    
    


    return (

            <div className='profile-shadow'>

                <p className='profile-title' > PROFILE</p>

                <header className='profile-header'>
                    <PersonPinIcon style={{ fontSize: 100 }} />
                </header>


                <p>Name: {InfoUser?.name}</p>
                <p>Lastname: {InfoUser?.lastName}</p>
                <p>Email: {InfoUser?.email}</p>

                {/* <button onClick={() => strinf?.name}> change Names!! </button> */}



            </div>

    )
}

export default Profile;





