import React from 'react'
import {RiFindReplaceLine} from "react-icons/ri"
import {Link} from "react-router-dom"
import Founder from '../Home/Founder'

const About = () => {
  return (
    <section className="about">
        <main>
            <h1>About Us</h1>
            <article>
                <h4>BullsEYE Burgers</h4>

                <p>The place of perfection to order excellence</p>
                <p>Explore the various types of tasty food and burgers. click below and go! </p>

                <Link to="/menu" ><RiFindReplaceLine/></Link>

            </article>
        <Founder/>
        </main>
    </section>
  )
}

export default About