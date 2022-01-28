import React from "react";
import { useForm } from 'react-hook-form';
import axios from 'axios';
import "../App.css";
import Password from '../password';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


type UserSubmitForm = {
  firstname: string;
  lastname: string;
  email: string;


};


const Inscription: React.FC = () => {

 
  const { register,  handleSubmit, formState:{isSubmitting}, formState:{ errors }, resetField } = useForm<UserSubmitForm>();


  const submitForm = (data: UserSubmitForm) => {

    resetField("firstname");
    resetField("lastname");
    resetField("email");
   


    axios.post('http://localhost:4000/users', data)
    .then(response => {
      console.log("Status: ", response.status);
      console.log("Data: ", response.data);
    }).catch(error => {
      console.error('Something went wrong!', error);
    });

  };

  return (

    <header className='App-header'>
        <form onSubmit={handleSubmit(submitForm)}>
    
          <div className="inputs">
    

          <Form>

            <Form.Group className="mb-3">

              <Form.Control
              type="text"
              placeholder="Nom..."
              {...register('firstname', {
                required: 'Entrez votre Nom !' })}
            />
       
            {errors.firstname && errors.firstname.message}

            </Form.Group>


            <Form.Group className="mb-3">

              <Form.Control type="text"
              placeholder="Prénom..."
              {...register('lastname',
               {required: 'Entrez votre Prénom !' })}               
              />
         
            {errors.lastname && errors.lastname.message}

            </Form.Group>


            <Form.Group className="mb-3">

              <Form.Control type="email"
              placeholder="Email..."
              {...register('email',
                {required: 'Entrez votre email !',
                 validate: (value) =>
                 value.includes('@') || "Veuillez inclure '@'",})}
              />
       
               {errors.email && errors.email.message}

            </Form.Group>
            <Password/>
        </Form>
                
    
             <br/>
             <button disabled={isSubmitting} >  <Button variant="primary">Envoyer  </Button> </button> 

           


          </div>
          </form>
          </header>
    
      );
}

export default Inscription;