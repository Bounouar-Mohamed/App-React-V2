import FormsPage from '../organisms/forms-page';
import TranslationButton from '../../Translation/Translation-Button';
import { relative } from 'path';


export default function Phone() {

    return (

        <div className='body-phone' >

            <FormsPage />

            <div className='$' style={{marginLeft:-1030, marginTop:300, position:'fixed'}}>
                <TranslationButton />
            </div>

        </div>
    )
}