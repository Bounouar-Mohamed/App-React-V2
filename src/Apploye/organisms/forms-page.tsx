import { useState } from "react"
import Switch from "../atoms/button-switch"
import Login from "../moleculs/Login"
import Registration from "../moleculs/registration"



export default function FormsPage() {

    const [toggle, setToggle] = useState(false)

    const toggler = () => {
        toggle ? setToggle(false) : setToggle(true)
    }
    
    console.log(toggle)


    return (

        <div className='destock'>


            <Switch  handleChange={toggler}  />

            {toggle ? <span>

                <Login tpassword={""} setTpassword={""} />

            </span> : <span>

                <Registration />

            </span>}

        </div>


    )
}