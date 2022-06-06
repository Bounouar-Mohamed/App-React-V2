import { useTranslation } from 'react-i18next';



export default function TranslationButton() {


    const translate = (lang: any) => {
        i18n.changeLanguage(lang)

    }


    const { i18n } = useTranslation();

    return (

        <div className='Translation-button' style={{ position:'absolute', backgroundColor: "#AEDFA1", borderTopLeftRadius: 10,  borderBottomLeftRadius: 10, borderTopRightRadius: 10,borderBottomRightRadius: 10}} >

            <button className="button-fr" onClick={() => { translate("fr") }} > FR</button>
            <button className="button-en" onClick={() => { translate("en") }} > EN </button>

        </div>
    )
}