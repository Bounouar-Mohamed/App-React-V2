import Login from "./Login";
import { useContext, useEffect } from 'react';
import { PasswordContext } from '../../Contextes/PasswordContexte';
import PasswordProvider from '../../Contextes/PasswordContexte';
import { useTranslation } from "react-i18next";


export default function CheckList() {


    const { password } = useContext(PasswordContext);
    console.log(password)

    useEffect(() => {

        if (password !== undefined) {
            console.log(password)
        }
    }, [password])

    function containsNumber(str: any) {
        return /[0-9]/.test(str);
    }

    let specialChars = new RegExp(`\`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~`);

    let regExp = /[a-zA-Z]/

    
    const { t, i18n } = useTranslation();



    return (

        <div className='CheckList'>

            <span style={{ color: regExp.test(password) ? "#008000" : '' }} >  {t("CheckList.0")}  </span>
            <br />
            {/* <span style={{ color: password.length >= 6 ? "#008000" : '' }} >   {t("CheckList.1")}  </span> */}
            <br />
            {/* <span style={{ color: password.test(password) ? "#008000" : '' }}>  {t("CheckList.2")}  </span> */}
            <br />
            <span style={{ color: containsNumber(password) ? "#008000" : '' }} >   {t("CheckList.3")} </span>

        </div>
    )
}
