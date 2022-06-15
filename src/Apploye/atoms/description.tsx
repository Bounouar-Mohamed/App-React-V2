import React from 'react';
import { useTranslation } from "react-i18next";




export default function Desciption() {

    const { t, i18n } = useTranslation();

    return (
        
        <div>
            <h1 className='describe-text' > {t('header.0')}</h1>
        </div>


    )
}
