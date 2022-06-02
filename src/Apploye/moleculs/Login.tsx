import { useState, useContext, useEffect } from 'react';
import Form from 'react-bootstrap/Form'
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { PasswordContext } from '../../Contextes/PasswordContexte';
import CheckList from './checkList';



export interface Password {

    tpassword: string,
    setTpassword: string

};

export type UserConnectForm = {

    email: string;
    password: string;

};


export default function Login(props: Password) {


    const { register, handleSubmit, formState: { errors }, resetField, watch } = useForm<UserConnectForm>();


    const [tpassword, setTpassword] = useState<Password>()
    const [temail, setTemail] = useState<Password>()


    console.log("useState psw:", tpassword)
    console.log("useState email:", temail)


    const {setPassword,setEmail} = useContext(PasswordContext);


    useEffect(() => {

        if (tpassword !== undefined) {

            console.log("not undefined")
            setPassword(tpassword)
            setEmail(temail)

        }

    },[tpassword]) // cest la ton pb


    const submitLogin = async (data: UserConnectForm) => {

        resetField("email");
        resetField("password");
    }

    const { t, i18n } = useTranslation();


    return (


        <Form onSubmit={handleSubmit(submitLogin)} className='formulaire' >
            <div className='two-inputs'>



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
                        onChange={(value: any) => setTemail(value.target.value)}
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
                {t('ButtonGoogle.0')}
                </button>
            </div>

        </Form>


    )
}