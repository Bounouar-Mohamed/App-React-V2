import LoginPage from "../organisms/loginPage"
import Description from "../atoms/description"
import Apploye from '../../Assets/image_2022-05-29_013223347 (1).jpg'
import Logo from '../../Assets/logo-Apploye.svg'

export default function Finish() {

    return (



        <div className='body-twitter' >

            <Description />


            <img className='Apploye-image' src={Apploye} />
            <img className='Apploye-logo' src={Logo} />

            <LoginPage />

        </div>

    )
}