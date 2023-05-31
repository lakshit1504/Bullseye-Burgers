import React from 'react'
// import {Link} from "react-router-dom"
// import { AiOutlineEye } from 'react-icons/ai'
import me from "../../assets/lakshit.jpeg"

const Users = () => {
    const arr=[1,2,3,4]
  return (
    <section className="tableClass">
        <main>
            <table>
                <thead>
                    <tr>
                        <th>User ID</th>
                        <th>Name</th>
                        <th>Photo Qty</th>
                        <th>Role</th>
                        <th>Since</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        arr.map(i=>(
                            <tr key={i}>
                        
                            <td>#927496247</td>
                            <td>Lakshit</td>
                            <td>
                                <img src={me} alt="" />
                            </td>
                            <td>Admin</td>
                            <td>{"24/04"}</td>
                        
                    </tr>
                        ))
                    }
                </tbody>
            </table>
        </main>

    </section>
  )
}

export default Users