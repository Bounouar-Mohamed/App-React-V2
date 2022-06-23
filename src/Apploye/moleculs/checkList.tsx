import { useContext, useEffect, useState } from 'react';
import { PasswordContext } from '../../Contextes/PasswordContexte';
import { useTranslation } from "react-i18next";


export default function CheckList() {


    const { password } = useContext(PasswordContext);

    const [lenght, setLenght] = useState<string | number>("")



    useEffect(() => {

        if (password !== undefined) {
            setLenght(password.length);

    }
    }, [password])


    function containsNumber(str: any) {
        return /[0-9]/.test(str);
    }


    let regExp = /[a-zA-Z]/
    let specialChars = /[`\`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~`]/


    const { t, i18n } = useTranslation();


    return (

        <div className='CheckList'>

            <span style={{ color: regExp.test(password) ? "#008000" : '' }} >  {t("CheckList.0")}  </span>
            <br />
            <span style={{ color: lenght >= 6 ? "#008000" : '' }} >   {t("CheckList.1")}  </span>
            <br />
            <span style={{ color: specialChars.test(password) ? "#008000" : '' }}>  {t("CheckList.2")}  </span>
            <br />
            <span style={{ color: containsNumber(password) ? "#008000" : '' }} >   {t("CheckList.3")} </span>

        </div>
    )
}
