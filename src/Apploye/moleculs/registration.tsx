import { useState, useContext, useEffect } from 'react';
import Form from 'react-bootstrap/Form'
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import Footer from '../atoms/footer';
import CheckList from './checkList';
import { PasswordContext } from '../../Contextes/PasswordContexte';

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



export default function Registration(props: Password) {


    const { register, handleSubmit, formState: { errors } } = useForm<UserConnectForm>();

    const { setPassword, setEmail } = useContext(PasswordContext);


    const [tpassword, setTpassword] = useState<Password>()
    const [temail, setTemail] = useState<Password>()


    const { t, i18n } = useTranslation();


    useEffect(() => {

        if (tpassword !== undefined) {

            console.log("not undefined")
            setPassword(tpassword)
            setEmail(temail)

        }
    }, [tpassword])


    const submitLogin = async (data: UserConnectForm) => {

        console.log(data)

    }

    return (

        <div className='registration' >

            <Form onSubmit={handleSubmit(submitLogin)} >



                <Form.Group style={{ marginLeft: -199, justifyContent: "space-between" }}>

                    <input
                        className='input-firstname'
                        type="texte"
                        placeholder={t('FirstName.0')}
                        {...register('firstName')}
                    />

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

                <Form.Group >
                    <input
                        className='input-password'
                        type="password"
                        placeholder={t('Password.0')}
                        {...register('password',
                            {
                                required: 'Enter your passsword !',

                            })}
                        onChange={(value: any) => setTpassword(value.target.value)}

                    />

                    {errors.password && (

                        <div className="error">
                            <p className='error-password' >{errors.password && errors.password.message}</p>
                        </div>

                    )}
                </Form.Group>
                <CheckList />

                <br />


                <button className='button-submit' style={{ marginLeft: -165, width: 300, marginTop: -4 }} type="submit">

                    {t("Button.0")}

                </button>

                <button className='button-Google'  >

                    {t("ButtonGoogle.0")}

                </button>

            </Form>
            <Footer />
        </div>

    )
}

