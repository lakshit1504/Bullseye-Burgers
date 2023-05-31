import {motion} from "framer-motion"
import React from 'react'
import {FcGoogle} from "react-icons/fc"

const Login = () => {
  return (
    <section className="login">
            <main>

            </main>

            <motion.button>
                Login with Google
                <FcGoogle/>
            </motion.button>
    </section>
  )
}

export default Login