import { useState } from 'react';
import { useSpring, animated, config } from 'react-spring'
import "../App.css";



    function Acceuil(){
  

        const [flip, set] = useState(false)
        const props = useSpring({
          to: { opacity: 1 },
          from: { opacity: 0 },
          reset: true,
          reverse: flip,
          delay: 200,
          config: config.molasses,
          onRest: () => set(!flip),
        })
        return (
            

    <div  className='acceuil' >
        <header className='hello-acceuil'>

            <animated.h1 style={props}> Bienvenue </animated.h1>

        </header>

        <div>
            
        </div>
    </div>



)}





      
export default Acceuil;