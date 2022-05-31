import { useState } from "react";
import SwitchSelector from "react-switch-selector";



export interface toogle {

    handleChange:any
}


export default function Switch(props:toogle) {

    const [toggle, setToggle] = useState<toogle|boolean>()


    const toggler = () => {
        toggle ? setToggle(false) : setToggle(true)
    }
    
    
    const options = [
        {
            label: <span>Sign in</span>,
            value: {
                foo: true
            },
            selectedBackgroundColor: "#48C029",
        },
        {
            label: "Sign up",
            value: "bar",
            selectedBackgroundColor: "#48C029"
        }
    ];


    return (

        <div className='title-twitter' style={{ width: 200, height: 40, position: 'absolute', marginTop: 80, marginLeft: 20 }} >

            <SwitchSelector
                onChange={props.handleChange}
                options={options}
                backgroundColor={"#AEDFA1"}

            />
        </div>
    )
}