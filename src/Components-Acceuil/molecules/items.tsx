import { useState } from 'react'
import Cartouche from '../molecules/Cartouche.jpg'
import Text from '../atoms/description';


export interface Click {

    onClick: any

}


export default function Items (props: Click) {

    const [toHighlight, setToHighlight] = useState(0)

    const onClick = props.onClick


    return (
        <div className='acceuil' >

            <div className='article-acceuil' >


                <div className='article-1'>

                    <img src={Cartouche}
                        className="Article1"
                        width="200" height="200"
                        onClick={onClick}
                        onMouseOver={() => setToHighlight(1)}
                        style={{ border: toHighlight == 1 ? "10px dotted" : "" }}
                    />
                    <Text />

                </div>


                <div className='article-1'>

                    <img src={Cartouche}
                        className="Article2"
                        width="200" height="200"
                        onClick={onClick}
                        onMouseOver={() => setToHighlight(2)}
                        style={{ border: toHighlight == 2 ? "10px dotted" : "" }}
                    />
                    <Text />
                </div>


                <div className='article-1'>

                    <img src={Cartouche}
                        className="Article3"
                        width="200" height="200"
                        onClick={onClick}
                        onMouseOver={() => setToHighlight(3)}
                        style={{ border: toHighlight == 3 ? "10px dotted" : "" }}
                    />
                    <Text />
                </div>


                <div className='article-1'>

                    <img src={Cartouche}
                        className="Article4"
                        width="200" height="200"
                        onClick={onClick}
                        onMouseOver={() => setToHighlight(4)}
                        style={{ border: toHighlight == 4 ? "10px dotted" : "" }}
                    />
                    <Text />
                </div>


            </div>
        </div>
    )
}