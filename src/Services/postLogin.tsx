import axios from 'axios';



const PostLogin = (data: any) => {


    return axios.post('http://localhost:4000/login', data)
    
}

export default PostLogin;


