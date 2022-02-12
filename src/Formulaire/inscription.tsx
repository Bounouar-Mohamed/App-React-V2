import React from "react";
import { useForm } from 'react-hook-form';
import { useRef } from "react";
import "../App.css";
import Form from 'react-bootstrap/Form'
import Posts from '../Server/Post';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';

type UserSubmitForm = {
  
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  confirmPassword: string;

};


const Inscription = () => {

 
  const { register,  handleSubmit, formState:{isSubmitting}, formState:{ errors }, resetField, watch } = useForm<UserSubmitForm>();


  const password = useRef({});
  password.current = watch("password", "");



  const submitForm = (data:UserSubmitForm) => {

    resetField("firstname");
    resetField("lastname");
    resetField("email");
    resetField("password");
    resetField("confirmPassword");
   
    Posts (data)

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
              <Form.Control
              type="text"
              placeholder="Prénom..."
              {...register('lastname',
               {required: 'Entrez votre Prénom !' })}               
              />
         
            {errors.lastname && errors.lastname.message}

            </Form.Group>


            <Form.Group className="mb-3" >
              <Form.Control 
              type="email"
              placeholder="Email..."
              {...register('email',
                {required: 'Entrez votre email !',
                 validate: (value) =>
                 value.includes('@') || "Veuillez inclure '@'",})}
              />
       
               {errors.email && errors.email.message}

            </Form.Group>


            <Form.Group className="mb-3">
              <Form.Control
              type="password"
              placeholder="Mot de passe..."
              {...register("password",
              {required: 'Entrez votre Mot de passe !',
                              minLength: {
                              value: 8,
                              message: "Votre mot de passe doit contenir min 8 caractères ! "
                              } })}/>

              {errors.password && errors.password.message}

            </Form.Group>


            <Form.Group className="mb-3">
              <Form.Control
              type="password"
              placeholder="Confirmez le Mot de passe..."
              {...register("confirmPassword",
              {required: 'Confirmez votre Mot de passe !',
              validate: value =>
              value === password.current || "Votre Mot de passe ne correspond pas !"
              })}/>

              {errors.confirmPassword && errors.confirmPassword.message}


            </Form.Group>
        </Form>
                
     
             <br/>
             
             <button  disabled={isSubmitting} >Envoyer</button>
            
          </div>
          </form>
          </header>
    
      );
}
export default Inscription;