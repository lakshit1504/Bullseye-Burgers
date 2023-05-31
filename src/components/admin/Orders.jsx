import React from 'react'
import { GiArmoredBoomerang } from 'react-icons/gi'
import { Link } from 'react-router-dom'
import {AiOutlineEye} from "react-icons/ai"

const Orders = () => {

    const arr=[1,2,3,4]
  return (
    <section className="tableClass">
        <main>
            <table>
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Status</th>
                        <th>Item Qty</th>
                        <th>Amount</th>
                        <th>Payment Method</th>
                        <th>User</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        arr.map(i=>(
                            <tr key={i}>
                        
                            <td>#927496247</td>
                            <td>Processing</td>
                            <td>23</td>
                            <td>₹{3252}</td>
                            <td>COD</td>
                            <td>Lakshit</td>
                            <td><Link to="/order/927496247"><AiOutlineEye/></Link>
                            <button> <GiArmoredBoomerang/> </button>
                            </td>
                        </tr>
                        ))
                    }
                </tbody>
            </table>
        </main>
    </section>
  )
}

export default Orders