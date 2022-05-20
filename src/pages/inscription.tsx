import { useForm } from 'react-hook-form';
import { useRef } from "react";
import "../App.css";
import Form from 'react-bootstrap/Form'
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Alert from '@mui/material/Alert';
import { BrowserRouter as Router, useNavigate } from "react-router-dom";
import axios from 'axios';


export type UserSubmitForm = {

  firstname: string;
  lastname: string;
  email: string;
  password: string;
  confirmPassword: string;

};


const Inscription = () => {

  const navigate = useNavigate();


  const { register, handleSubmit, formState: { errors }, resetField, watch } = useForm<UserSubmitForm>();



  const password = useRef({});
  password.current = watch("password", "");



  const submitForm = (data: UserSubmitForm) => {

    resetField("firstname");
    resetField("lastname");
    resetField("email");
    resetField("password");
    resetField("confirmPassword");




    axios.post('http://localhost:4000/users', data)
      .then(response => {


        if (response.data.message == "Login") {

          console.log("Login ")
          navigate('/Profile')

        }
        else {

          alert(" Email déjà existant !!")
        }

      }).catch(error => {

        console.error('Something went wrong!', error);
      });
    console.log(data)

    // PostRegistration(data)
  }





  return (

    <div className='inscription-header'>

      <div className="shadow-box">
        <label>INSCRIPTION :</label>
        <br />
        <br />

        <Form onSubmit={handleSubmit(submitForm)}>

          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Nom..."
              {...register('firstname', {
                required: 'Entrez votre Nom !'
              })}
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
                { required: 'Entrez votre Prénom !' })}
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
              className="email"
              placeholder="Email..."
              {...register('email',
                {
                  required: 'Entrez votre email !',
                  validate: (value) =>
                    value.includes('@') || "Veuillez inclure '@'",
                })}
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
                {
                  required: 'Entrez votre Mot de passe !',
                  minLength: {
                    value: 8,
                    message: "Votre mot de passe doit contenir min 8 caractères ! "
                  }
                })} />

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
                {
                  required: 'Confirmez votre Mot de passe !',
                  validate: value =>
                    value === password.current || "Votre Mot de passe ne correspond pas !"
                })} />

            {errors.confirmPassword && (

              <div className="error">
                <Alert severity="error" variant="filled" >{errors.confirmPassword && errors.confirmPassword.message}</Alert>
              </div>

            )}
          </Form.Group>

          <br />

          <Button type="submit" variant="contained" className='button' startIcon={<SendIcon />}>

            Envoyer

          </Button>

          <br />

        </Form>



      </div>

    </div>

  );
}
export default Inscription;

