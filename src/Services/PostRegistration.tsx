import axios from 'axios';
import { useState } from 'react';




const PostRegistration = (data: any) => {



  axios.post('http://localhost:4000/users', data)
    .then(response => {


      if (response.data.message == "Login") {

        console.log("Login ")
      }
      else {

        alert(" Email déjà existant !!")
      }

    }).catch(error => {

      console.error('Something went wrong!', error);
    });
  console.log(data)


}

export default PostRegistration;