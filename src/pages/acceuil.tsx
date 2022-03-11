import { useState,useEffect, SetStateAction } from 'react';
import "../App.css";
import { Image } from 'semantic-ui-react'
import img from '../articles/Cartouche.jpg'
import { Popover } from 'antd';
import "antd/dist/antd.css";
import axios from 'axios';



    function Acceuil(){



      const [Hovering, setHovering] = useState (" ")
      const [toHighlight, setToHighlight] = useState (0)


      useEffect(() => { 

        if (toHighlight == 3 ){
          console.log("3 taped")
        }

      },[toHighlight])  
  

  


     const HandleClick = ( e: { target: { name: any; }; }) => {



      const data = {
        articles : e.target.name
      }
       console.log(data)

          axios.post('http://localhost:4000/articles',data)
          .then(response => {
            console.log("Status: ", response.status);
            console.log("Data: ", response.data);
          }).catch(error => {
            console.error('Something went wrong!', error);
          });

         
    }
  
   
    const content = (
      <div>
        <p>    
            HP 305 Pack de 2 Cartouches d'Encre Noire et Trois Couleurs Authentiques (6ZD17AE)
        </p>
        <p>
            23,95 €   
        </p>
      </div>
    );

        return (
            

 <div  className='acceuil' >
    

    <label className='label-acceuil'>

          
        Les meilleures ventes en Informatique :

    </label>       

    <div className='article-acceuil' >

      
     <Popover content={content} title="Amazon" >
       <div className='article-1'>

          <Image src={img}
          name="Article1"
          target='_blank'
          width="200" height="200"
          onClick={HandleClick}
          onMouseOver={()=>setToHighlight(1)}
          style={{border : toHighlight == 1 ? "10px dotted" : "" }}

          />

          <a href='https://www.amazon.fr/HP-Cartouches-Couleurs-Authentiques-6ZD17AE/dp/B08T1HR5CS/ref=zg-bs_computers_2/259-8610103-1920254?pd_rd_w=iH7mW&pf_rd_p=f492caf8-8007-48d2-883a-38800a772222&pf_rd_r=4VE7TFD6WWMNQ3VCYTJA&pd_rd_r=af764986-a928-4e4a-be83-c0f2f5c83cb5&pd_rd_wg=kyL5B&pd_rd_i=B08T1HR5CS&psc=1'>
            HP 305 Pack de 2 Cartouches d'Encre Noire et Trois Couleurs Authentiques (6ZD17AE)
            <br/>
            23,95 €   
          </a>
       </div>
       </Popover>



     <Popover content={content} title="Amazon" >
       <div className='article-1'>

          <Image src={img}
          name="Article2"
          target='_blank'
          width="200" height="200"
          onClick={HandleClick}
          onMouseOver={()=>setToHighlight(2)}
          style={{border : toHighlight == 2 ? "10px dotted" : "" }}


        //  onMouseLeave={mouseLeave}
          />

          <a href='https://www.amazon.fr/HP-Cartouches-Couleurs-Authentiques-6ZD17AE/dp/B08T1HR5CS/ref=zg-bs_computers_2/259-8610103-1920254?pd_rd_w=iH7mW&pf_rd_p=f492caf8-8007-48d2-883a-38800a772222&pf_rd_r=4VE7TFD6WWMNQ3VCYTJA&pd_rd_r=af764986-a928-4e4a-be83-c0f2f5c83cb5&pd_rd_wg=kyL5B&pd_rd_i=B08T1HR5CS&psc=1'>
            HP 305 Pack de 2 Cartouches d'Encre Noire et Trois Couleurs Authentiques (6ZD17AE)
            <br/>
            23,95 €   
          </a>
       </div>
       </Popover>



     <Popover content={content} title="Amazon" >
       <div className='article-1'>

          <Image src={img}
          name="Article3"
          target='_blank'
          width="200" height="200"
          onClick={HandleClick}
          onMouseOver={()=>setToHighlight(3)}
          style={{border : toHighlight == 3 ? "10px dotted" : "" }}


       //   onMouseLeave={mouseLeave} 
          />

          <a href='https://www.amazon.fr/HP-Cartouches-Couleurs-Authentiques-6ZD17AE/dp/B08T1HR5CS/ref=zg-bs_computers_2/259-8610103-1920254?pd_rd_w=iH7mW&pf_rd_p=f492caf8-8007-48d2-883a-38800a772222&pf_rd_r=4VE7TFD6WWMNQ3VCYTJA&pd_rd_r=af764986-a928-4e4a-be83-c0f2f5c83cb5&pd_rd_wg=kyL5B&pd_rd_i=B08T1HR5CS&psc=1'>
            HP 305 Pack de 2 Cartouches d'Encre Noire et Trois Couleurs Authentiques (6ZD17AE)
            <br/>
            23,95 €   
          </a>
       </div>
       </Popover>



     <Popover content={content} title="Amazon" >
       <div className='article-1'>

          <Image src={img}
          name="Article4"
          target='_blank'
          width="200" height="200"
          onClick={HandleClick}
          onMouseOver={()=>setToHighlight(4)}
          style={{border : toHighlight == 4 ? "10px dotted" : "" }}


        //  onMouseLeave={mouseLeave}
          />

          <a href='https://www.amazon.fr/HP-Cartouches-Couleurs-Authentiques-6ZD17AE/dp/B08T1HR5CS/ref=zg-bs_computers_2/259-8610103-1920254?pd_rd_w=iH7mW&pf_rd_p=f492caf8-8007-48d2-883a-38800a772222&pf_rd_r=4VE7TFD6WWMNQ3VCYTJA&pd_rd_r=af764986-a928-4e4a-be83-c0f2f5c83cb5&pd_rd_wg=kyL5B&pd_rd_i=B08T1HR5CS&psc=1'>
            HP 305 Pack de 2 Cartouches d'Encre Noire et Trois Couleurs Authentiques (6ZD17AE)
            <br/>
            23,95 €   
          </a>
       </div>
       </Popover>



    </div>

</div>

)}



      
export default Acceuil;
