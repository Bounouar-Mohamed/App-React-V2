import { useState, useContext } from 'react';
import Form from 'react-bootstrap/Form'
import { useForm } from 'react-hook-form';




export type UserConnectForm = {

    email: string;
    firstName: string;
    lastName: string;
    password: string;

};



export default function Registration() {


    const { register, handleSubmit, formState: { errors } } = useForm<UserConnectForm>();


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
                            placeholder="firstName..."
                            {...register('firstName')}
                        />
                    </Form.Group>


                    <Form.Group >

                        <input
                            className='input-lastName'
                            type="texte"
                            placeholder="Last Name..."
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
                            placeholder="Email..."
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
                            placeholder="password..."
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

                    Let's Go!

                </button>

                <button className='button-Google'>
                    Sign up with Google
                </button>

            </Form>

        </div>

    )
}

