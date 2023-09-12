import React from 'react'
import {motion} from "framer-motion"
import me from "../../assets/lakshit.jpeg"


const Founder = () => {
    const options={
        initial:{
            x:"-100%",
            opacity:0
        },
        whileInView:{
            x:0,
            opacity:1
        }
    }
  return (
    <section className="founder">
        <motion.div {...options}>
            
            <img  src={me} alt="founder" height={200} />

            <h3  >Lakshit juneja</h3>
            <p >Hey everyone, I'm the fouder of B-Tech Burger Wala <br/>
            our aim is to create most tasty burger on planet
            </p>
        </motion.div>
    </section>
  )
}

export default Founder