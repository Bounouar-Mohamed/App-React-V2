import { useTranslation } from "react-i18next";




export default function Footer() {

    const { t, i18n } = useTranslation();


    return (
        <div>
            <footer className='footer'>

                {t("footer.0")}

            </footer>
        </div>

    )
}