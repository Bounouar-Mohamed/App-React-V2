import { useState, useEffect } from "react";
import SwitchSelector from "react-switch-selector";
import { useTranslation } from 'react-i18next';



export default function TranslationButton() {

    const [toggle, setToggle] = useState<boolean>()


    const toggler = () => {
        toggle ? setToggle(false) : setToggle(true)
    }


    useEffect(() => {


        if (toggle === true) {
            i18n.changeLanguage("fr");
        }
        else {
            i18n.changeLanguage("en");

        }

    }, [toggle])


    const { t, i18n } = useTranslation();


    const options = [
        {
            label: <span>EN</span>,
            value: {
                foo: false
            },
            selectedBackgroundColor: "#48C029",
            selectedColor: '#ffffff'

        },
        {
            label: "FR",
            value: "bar",
            selectedBackgroundColor: "#48C029",
            selectedColor: '#ffffff'

        }
    ];


    return (

        <div className='Translation-button' style={{ width: 100, height: 40, position: 'absolute', marginTop: -760, marginLeft: 1200, color: toggle === false ? "#ffffff" : "#000000" }} >

            <SwitchSelector
                onChange={toggler}
                options={options}
                backgroundColor={"#AEDFA1"}

            />

        </div>
    )
}