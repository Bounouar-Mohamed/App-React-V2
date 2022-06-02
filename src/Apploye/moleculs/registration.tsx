import { useState, useContext } from 'react';
import Form from 'react-bootstrap/Form'
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import Footer from '../atoms/footer';



export type UserConnectForm = {

    email: string;
    firstName: string;
    lastName: string;
    password: string;

};



export default function Registration() {


    const { register, handleSubmit, formState: { errors } } = useForm<UserConnectForm>();

    const { t, i18n } = useTranslation();


    const submitLogin = async (data: UserConnectForm) => {

        console.log(data)

    }

    return (

        <div className='' >

            <Form onSubmit={handleSubmit(submitLogin)} className='formulaire' >
                <div className='two-inputs'>

                    <Form.Group className="" >

                        <input
                            className='input-firstname'
                            type="texte"
                            placeholder={t('FirstName.0')}
                            {...register('firstName')}
                        />
                    </Form.Group>


                    <Form.Group >

                        <input
                            className='input-lastName'
                            type="texte"
                            placeholder={t('LastName.0')}
                            {...register('lastName',
                                {
                                    required: 'Enter your lastName !',
                                    validate: (value) =>
                                        value.includes('@') || "Veuillez inclure '@'",
                                })}
                        />

                        {errors.lastName && (

                            <div className="error">
                                <p className='error-lastName' >{errors.lastName && errors.lastName.message}</p>
                            </div>

                        )}
                    </Form.Group>

                </div>

                <div className='inputs-align'>
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

                    <Form.Group >
                        <input
                            className='input-password'
                            type="password"
                            placeholder={t('Password.0')}
                            {...register('password',
                                {
                                    required: 'Enter your passsword !',

                                })}
                        />

                        {errors.password && (

                            <div className="error">
                                <p className='error-password' >{errors.password && errors.password.message}</p>
                            </div>

                        )}
                    </Form.Group>
                </div>

                <br />


                <button className='button' style={{ width: 350, marginLeft: -375, marginTop: 50 }} type="submit">

                    {t("Button.0")}

                </button>

                <button className='button-Google'>

                    {t("ButtonGoogle.0")}

                </button>

            </Form>
            <Footer />
        </div>

    )
}

