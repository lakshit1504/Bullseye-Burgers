import {AiFillInstagram,AiFillGithub,AiFillLinkedin} from "react-icons/ai"
import React from 'react'

const Footer = () => {
  return (
    <footer>
        <div>
            <h2>Bullseye Burgers</h2>
            <p>Order the best experience</p>
            <br/>

            <em>
                We give attention to genuine feedback.
            </em>

            <strong>All rights reserved @BullsEYEburgers</strong>

        </div>
            <aside>
                <h4>Follow Us</h4>
                <a href="https://www.instagram.com/not.so_lucky/"><AiFillInstagram/></a>
                <a href="https://www.linkedin.com/in/lakshit-juneja"><AiFillLinkedin/></a>
                <a href="https://github.com/lakshit1504"><AiFillGithub/></a>
            </aside>
        
    </footer>
  )
}

export default Footer