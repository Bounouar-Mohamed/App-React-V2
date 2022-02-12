import {useState,useEffect } from 'react'
import axios from 'axios';
import Tables from '../Table/table';

export interface Getting {
    rows:any
}


const GetUsers = () => {

    const [data, setData] = useState<Getting[]>([]);


    useEffect(() => {

        axios.get<Getting>("http://localhost:4000/users")
          .then(resp=>{
            setData(resp.data.rows)
        })
        .catch(err => {console.log ("erreur:",err)})
},[]);

console.log("data:",data)


    return (
        
   <div>
        <Tables data={data} title={''} fields={{}}  />

   </div>
    )}

export default GetUsers;