import axios from 'axios';



const Posts = (data:any) => {



    axios.post('http://localhost:4000/users', data)
    .then(response => {
      console.log("Status: ", response.status);
      console.log("Data: ", response.data);
    }).catch(error => {
      console.error('Something went wrong!', error);
    });

    console.log(data)

}

export default Posts;


