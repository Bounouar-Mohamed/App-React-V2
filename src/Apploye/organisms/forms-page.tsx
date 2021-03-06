import { useState } from "react"
import ButtonSwitch from "../atoms/button-switch"
import Login from "../moleculs/Login"
import Registration from "../moleculs/registration"



export default function FormsPage() {

    const [toggle, setToggle] = useState(false)

    const toggler = () => {
        toggle ? setToggle(false) : setToggle(true)
    }
    
    console.log(toggle)


    return (

        <div className='desktop'>


            <ButtonSwitch  handleChange={toggler}  />

            {toggle ? <span>

                <Registration tpassword={""} setTpassword={""} />


            </span> : <span>

                <Login />

            </span>}

        </div>


    )
}