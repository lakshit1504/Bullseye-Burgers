import {motion} from "framer-motion"
import React from 'react'
import burgerimg from "../../assets/burger-png-33942.png"

const Contact = () => {
  return (
    <section className="contact">

        <motion.form initial={{
            x:"-100%",
            opacity:0
        }}  animate={{
            x:0,
            opacity:1
        }}>
            <h2>Contact Us</h2>

            <input type="text" placeholder="name"/>
            <input type="email" placeholder="emal"/>

            <textarea placeholder="message" cols="30" rows="10"></textarea>

            <button type="submit">Submit</button>
        </motion.form>

        <motion.div transition={{delay:0.2}} className="formborder" initial={{
            x:"100%",
            opacity:0
        }}  animate={{
            x:0,
            opacity:1
        }}>
            <motion.div>
                <img src={burgerimg} alt="" />
            </motion.div>
        </motion.div>
        
    </section>
  )
}

export default Contact