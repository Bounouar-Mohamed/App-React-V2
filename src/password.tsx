import React, { useRef } from "react";
import { useForm } from 'react-hook-form';
import Form from 'react-bootstrap/Form'

type UserSubmitForm = {
 
    password: string;
    confirmPassword: string;
  
  };


export default function Password() {

    const { register, watch, handleSubmit, resetField, formState:{ errors } } = useForm<UserSubmitForm>();

    const password = useRef({});
    password.current = watch("password", "");

    const submitForm = (data: UserSubmitForm) => {

    resetField("password");
    resetField("confirmPassword");
    
}
    return(


<form onSubmit={handleSubmit(submitForm)}>   
    <div>
        <Form>



                <Form.Group className="mb-3">

                <Form.Control
                type="text"
                placeholder="Nom..."
                {...register("password", {required: 'Entrez votre Mot de passe !',
                                minLength: {
                                value: 8,
                                message: "Votre mot de passe doit contenir min 8 caractères ! "
                                } })}
                />

                {errors.password && errors.password.message}

                </Form.Group>



                <Form.Group className="mb-3">

                <Form.Control type="text"
                placeholder="Prénom..."
                {...register("confirmPassword", {required: 'Confirmez votre Mot de passe !',
                validate: value =>
                value === password.current || "Votre Mot de passe ne correspond pas !"
                })}                 
                />

                {errors.confirmPassword && errors.confirmPassword.message}

                </Form.Group>


         </Form>
    </div>
</form>

)}