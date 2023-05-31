import React from 'react'
import { Link } from 'react-router-dom'

const Paymentsuccess = () => {
  return (
    <section className="paymentsuccess">

        <main>
            <h1>Order Confirmed</h1>
            <p>Order placed successfully, you can check status below</p>
            <Link to="myorders">Check Status</Link>
        </main>
        
    </section>
  )
}

export default Paymentsuccess