import axios from 'axios';


const PostSneakers = (data: any) => {




    const submitForm = () => {

        axios.post('http://localhost:4000/sneakers', data)
            .then(response => {


                if (response.data.message == "Login") {

                    console.log("Login ")
                }
                else {

                    alert(" Email déjà existant !!")
                }

            }).catch(error => {

                console.error('Something went wrong!', error);
            });
        console.log(data)

    }



    return (
        <div>


            <button type='submit' onClick={() => { submitForm() }} > Add Sneakers </button>


        </div>
    )
}

export default PostSneakers;