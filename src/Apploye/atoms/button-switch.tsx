import { useTranslation,initReactI18next } from "react-i18next";
import SwitchSelector from "react-switch-selector";



export interface toogle {

    handleChange: any
}


export default function ButtonSwitch(props: toogle) {

    const { t, i18n } = useTranslation();


    const options = [
        {
            label: <span> {t("SignIn.0")}</span>,
            value: {
                foo: false
            },
            selectedBackgroundColor: "#48C029",
            selectedColor: '#ffffff',
            Color:'#ffffff',
        

        },
        {
            label: <span> {t("SignUp.0")} </span> ,
            value: "bar",
            selectedBackgroundColor: "#48C029",
            selectedColor: '#ffffff'

        }
    ];

    

    

    return (

        <div className='title-twitter' style={{ width: 180, height: 40, position: 'absolute', marginTop: 70, marginLeft: 30, color: props.handleChange === false ? "#ffffff" :"#000000" }} >

            <SwitchSelector
                onChange={props.handleChange}
                options={options}
                backgroundColor={"#AEDFA1"}

            />

        </div>
    )
}