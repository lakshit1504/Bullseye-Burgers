import {motion} from "framer-motion"
import React from 'react'
import me from "../../assets/lakshit.jpeg"
import { MdDashboard} from "react-icons/md"
import { Link } from "react-router-dom"

const Profile = () => {
    const options={
        initial:{
            y:"-100%",
            opacity:0
        },
        animate:{
            y:0,
            opacity:1
        }
    }
  return (
    <section className="profile">
        <main>


            <motion.img src={me} alt="User"  {...options}/>
            <motion.h5
                {...options}
                transition={{delay:0.3}}>
                Lakshit juneja
            </motion.h5  >

            <motion.div   {...options}
                transition={{delay:0.3}}>
                    <Link to="/admin/dashboard" style={{borderRadius:0,backgroundColor:"rgb(40,40,40)"}}><MdDashboard/> Dashboard</Link>

            </motion.div>

            <motion.div   {...options}
                transition={{delay:0.3}}>
                    <Link to="/myorders">My Orders</Link>

            </motion.div>

            <motion.button  {...options}
                transition={{delay:0.3}}>  
                Logout
            </motion.button>
        </main>        
    </section>
  )
}

export default Profile