import FormsPage from '../organisms/forms-page';
import TranslationButton from '../../Translation/Translation-Button';
import { positions } from '@mui/system';


export default function Phone() {

    return (

        <div className='Dashboard-Phone' style={{ marginLeft: -250, marginTop: 140 }}>

            <FormsPage />

            <div className='Button-Phone' style={{position:'relative', marginTop:150,marginLeft:-300 }}>
                <TranslationButton />
            </div>

        </div>
    )
}