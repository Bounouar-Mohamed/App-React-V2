import Login from "./Login";
import { useContext } from 'react';
import { PasswordContext } from '../atoms/PasswordContexte';
import PasswordProvider from "../atoms/PasswordContexte";


export default function CheckList() {


    const Password = useContext(PasswordContext);

    console.log(Password?.password)


    function containsNumber(str: any) {
        return /[0-9]/.test(str);
    }

    let specialChars = `\`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~`;



    let regExp = /[a-zA-Z]/






    return (
        <PasswordProvider>
            <div className='CheckList'>

                <span style={{ color: regExp.test(Password?.password) ? "#008000" : '' }} >  ○ Contenir au moins une lettre  </span>
                <br />
                <span style={{ color: Password?.password.length >= 6 ? "#008000" : '' }} >   ○ Fair au moins 6 caractères  </span>
                <br />
                <span style={{ color: specialChars.indexOf(Password?.password) ? "#008000" : '' }}>   ○ Contenir au moins un caractère 				      												spécial  </span>
                <br />
                <span style={{ color: containsNumber(Password?.password) ? "#008000" : '' }} >   ○ Contenir au moins un chiffre </span>

            </div>
        </PasswordProvider>
    )
}
