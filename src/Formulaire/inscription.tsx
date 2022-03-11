import { useForm } from 'react-hook-form';
import { useRef,useState } from "react";
import "../App.css";
import Form from 'react-bootstrap/Form'
import Posts from '../Server/Post';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Alert from '@mui/material/Alert';
import { BrowserRouter as Router, useNavigate } from "react-router-dom";




export type UserSubmitForm = {
  
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  confirmPassword: string;

};


const Inscription = () => {


  const navigate = useNavigate();

  const { register, handleSubmit, formState:{ errors }, resetField, watch } = useForm<UserSubmitForm>();
  const [loged,setLoged] = useState(false)

  const password = useRef({});
  password.current = watch("password", "");



  const submitForm = (data:UserSubmitForm) => {

    resetField("firstname");
    resetField("lastname");
    resetField("email");
    resetField("password");
    resetField("confirmPassword");
   

    Posts (data)
    navigate('/profile') 
    console.log(data)
    setLoged(true) 
    
}

  return (

    <div className='inscription-header'>
        <form onSubmit={handleSubmit(submitForm)}>
          <div className="shadow-box">
    <label>INSCRIPTION :</label>
    <br/>
    <br/>
          <Form >

            <Form.Group className="mb-3">
              <Form.Control
              type="text"
              placeholder="Nom..."
              {...register('firstname', {
                required: 'Entrez votre Nom !' })}
            />

    {errors.firstname && (

      <div className="error">
        <Alert severity="error" variant="filled" >{errors.firstname && errors.firstname.message}</Alert>
      </div>

    )}
            </Form.Group>


            <Form.Group className="mb-3">
              <Form.Control
              type="text"
              placeholder="Prénom..."
              {...register('lastname',
               {required: 'Entrez votre Prénom !' })}               
              />
        
    {errors.lastname && (

      <div className="error">
        <Alert severity="error" variant="filled" >{errors.lastname && errors.lastname.message}</Alert>
      </div>

    )}
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
       
    {errors.email && (

      <div className="error">
        <Alert severity="error" variant="filled" >{errors.email && errors.email.message}</Alert>
      </div>

    )}
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

    {errors.password && (

      <div className="error">
        <Alert severity="error" variant="filled" >{errors.password && errors.password.message}</Alert>
      </div>

    )}
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

    {errors.confirmPassword && (

      <div className="error">
        <Alert severity="error" variant="filled" >{errors.confirmPassword && errors.confirmPassword.message}</Alert>
      </div>

    )}
            </Form.Group>
        </Form>
                
     
             <br/>

<Button type="submit" variant="contained" startIcon={<SendIcon />}>

Envoyer

</Button>


        
      
          </div>
          </form>
          </div>
    
      );
}
export default Inscription;

