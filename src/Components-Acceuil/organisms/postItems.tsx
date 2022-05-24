import Items from "../molecules/items";
import axios from "axios";


export default function PostItems() {


    const HandleClick = (e: { target: { name: any; }; }) => {


        const data = {
            articles: e.target.name
        }

        console.log(data)

        axios.post('http://localhost:4000/articles', data)
            .then(response => {
                console.log("Status: ", response.status);
                console.log("Data: ", response.data);
            }).catch(error => {
                console.error('Something went wrong!', error);
            });


    }

    return (

        <Items onClick={HandleClick} />

    )
}