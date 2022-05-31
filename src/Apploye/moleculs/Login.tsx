import { useState, useContext } from 'react';
import Form from 'react-bootstrap/Form'
import { useForm } from 'react-hook-form';
import { PasswordContext } from '../atoms/PasswordContexte';
import CheckList from './checkList';



export interface Password {

    tpassword: string,
    setTpassword: string

};

export type UserConnectForm = {

    email: string;
    firstName: string;
    lastName: string;
    password: string;

};


export default function Login(props: Password) {


    const { register, handleSubmit, formState: { errors }, resetField, watch } = useForm<UserConnectForm>();

    const [tpassword, setTpassword] = useState<Password>()

    
    const Password = useContext(PasswordContext);


    if (tpassword !== undefined) {

        Password?.setPassword(tpassword)

    }   

    const submitLogin = async (data: UserConnectForm) => {

        resetField("firstName");
        resetField("password");


    }

    return (




        <Form onSubmit={handleSubmit(submitLogin)} className='formulaire' >
            <div className='two-inputs'>



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

                <Form.Group>

                    <input
                        className='input-password'
                        type="password"
                        placeholder="password..."
                        {...register('password')}
                        onChange={(value: any) => setTpassword(value.target.value)}
                    />

                    <div className="invalid-feedback">{errors.password?.message}</div>

                </Form.Group>

                <CheckList />
                
                <br />
                
                <button className='button' style={{ width: 350, marginLeft: -120, marginTop: 10 }} type="submit">

                    Let's Go!

                </button>

                <button className='button-Google' style={{ marginTop: 70 }} >
                    Sign in with Google
                </button>
            </div>

        </Form>


    )
}