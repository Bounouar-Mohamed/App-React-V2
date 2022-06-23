import FormsPage from "../organisms/forms-page"
import Description from "../atoms/description"
import Apploye from '../../Assets/image_2022-05-29_013223347 (1).jpg'
import Logo from '../../Assets/logo-Apploye.svg'
import TranslationButton from '../../Translation/Translation-Button';
import ButtonSwitch from 'npm-test-button-switch'

export default function Desktop() {


    console.log('npm-test-button-switch')
    return (


        <div className='body-desktop' >

            <Description />

            <img className='Apploye-image' src={Apploye} />
            <img className='Apploye-logo' src={Logo} />

            <FormsPage />

            <TranslationButton />

            <ButtonSwitch />




        </div>

    )
}