import PostItems from '../organisms/postItems'


export default function TemplateAcceuil() {



    return (

        <div className='acceuil' >


            <label className='label-acceuil'>

                Les meilleures ventes en Informatique :

            </label>



            <div className='article-acceuil' >

                <PostItems />

            </div>

        </div>
    )
}