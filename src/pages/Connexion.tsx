import { useForm } from 'react-hook-form';
import { useRef, useContext, useState, useEffect } from "react";
import Form from 'react-bootstrap/Form'
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import { BrowserRouter as Router, useNavigate } from "react-router-dom";
import SendIcon from '@mui/icons-material/Send';
import PostLogin from '../Services/postLogin';
import { UserContext } from '../Contextes/UsersContexte';
import { useCookies } from "react-cookie";



export type UserConnectForm = {

  email: string;
  password: string;

};

type User = {

  nom: string;
  prenom: string;
  email: string;
}


const Connexion = (props: UserConnectForm) => {


  const InfoUser = useContext(UserContext);

  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors }, resetField, watch } = useForm<UserConnectForm>();

  const [user, setUser] = useState<User>()
  const [cookies, setCookie] = useCookies();


  const password = useRef({});
  password.current = watch("password", "");


  const submitLogin = async (data: UserConnectForm) => {

    resetField("email");
    resetField("password");


    PostLogin(data).then(response => {

      setCookie(response.data.user[0].nom, {
        path: "/",
        // expires: tomorrow
      });

      setUser(response.data.user[0])

      if (response.data.message == "Login") {
        console.log(response)
        console.log("login")
        navigate('/Profile')
      }
      else {
        let error = "Email ou Mot de passe incorrect !!"
        console.log(response)
        alert(error)
      }

    }).catch(error => {
      console.error('Something went wrong!', error);

    })
  }

  if (user !== undefined) {

    console.log("user", user)
    InfoUser?.setName(user!.nom)
    InfoUser?.setLastName(user!.prenom)
    InfoUser?.setEmail(user!.email)
  }


  return (

    <div> 

      <Form onSubmit={handleSubmit(submitLogin)} >

        <Form.Group className="mb-3" >
          <Form.Control
            type="email"
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
              })
            } />

          {errors.password && (

            <div className="error">
              <Alert severity="error" variant="filled" >{errors.password && errors.password.message}</Alert>
            </div>

          )}
        </Form.Group>

        <br />

        <Button type="submit" variant="contained" startIcon={<SendIcon />}>

          Envoyer

        </Button>
        <br />

        <a onClick={() => navigate('/inscription')} >

          Inscription

        </a>

      </Form>

    </div>
  )

}

export default Connexion;

