import {useState,useEffect } from 'react'
import axios from 'axios';
import TablesSneakers from '../Table/tablesSneakers';

export interface Getting2 {
    rows:any
}


const GetSneakers = () => {

    const [data, setData] = useState<Getting2[]>([]);


    useEffect(() => {

        axios.get<Getting2>("http://localhost:4000/sneakers")
          .then(resp=>{
            setData(resp.data.rows)
            console.log("data fetched")
        })
        .catch(err => {console.log ("erreur:",err)})
},[]);

console.log("data:",data)


    return (
        
   <div>
        <TablesSneakers data={data} title={''} fields={{}}  />

   </div>
    )}

export default GetSneakers;