import { useState, useContext, useEffect } from 'react';
import Form from 'react-bootstrap/Form'
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';



export type UserConnectForm = {

    email: string;
    password: string;

};


export default function Login() {


    const { register, handleSubmit, formState: { errors }, resetField, watch } = useForm<UserConnectForm>();


    const submitLogin = async (data: UserConnectForm) => {

        resetField("email");
        resetField("password");
    }

    const { t, i18n } = useTranslation();


    return (

        <div className='login'>

            <Form onSubmit={handleSubmit(submitLogin)}  >


                <Form.Group  >
                    <input
                        className='input-email'
                        type="email"
                        placeholder="E-mail..."
                        {...register('email',
                            {
                                required: 'Enter your email !',
                                validate: (value) =>
                                    value.includes('@') || "Veuillez inclure '@'",
                            })}
                    />

                    {errors.email && (

                        <div className="error">
                            <p className='error-email' >{errors.email && errors.email.message}</p>
                        </div>

                    )}
                </Form.Group>

                <Form.Group>

                    <input
                        className='input-password'
                        type="password"
                        placeholder={t('Password.0')}
                        {...register('password')}
                    />

                    <div className="invalid-feedback">{errors.password?.message}</div>

                </Form.Group>


                <br />

                <button className='button-submit' style={{ width: 300, marginLeft: -165, marginTop: 50 }} type="submit">

                    {t('Button.0')}

                </button>

                <button className='button-Google'  >

                    {t('ButtonGoogle.1')}

                </button>


            </Form>
        </div>


    )
}