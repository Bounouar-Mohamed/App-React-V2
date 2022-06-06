import { useState, useEffect } from "react";
import SwitchSelector from "react-switch-selector";
import { useTranslation } from 'react-i18next';



export default function TranslationButton() {


    const translate = (lang: any) => {
        i18n.changeLanguage(lang)

    }


    const { i18n } = useTranslation();

    return (

        <div className='Translation-button' style={{ backgroundColor: '#AEDFA1', width: 160, height: 30, position: 'absolute', marginTop: -700, marginLeft: 1100, borderTopLeftRadius: 10, borderBottomLeftRadius: 10, borderTopRightRadius: 10, borderBottomRightRadius: 10 }} >

            <button className="button-fr" onClick={() => { translate("fr") }} > FR</button>
            <button className="button-en" onClick={() => { translate("en") }} > EN </button>

        </div>
    )
}