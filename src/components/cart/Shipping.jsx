import React from 'react'
import {Country,State} from "country-state-city"
import {Link} from "react-router-dom"

const Shipping = () => {
  return (
    <section className="shipping">
        <main>
            <h1>Shipping Details</h1>
            <form >
                <div>
                    <label >House No.</label>
                    <input type="text" placeholder="enter house no." />
                </div>
                <div>
                    <label >Address</label>
                    <input type="text" placeholder="enter address" />
                </div>
                <div>
                    <label >City</label>
                    <input type="text" placeholder="enter city" />
                </div>

                <div>
                    <label >Country</label>
                    <select>
                        <option value="">Country</option>
                        {
                            Country && Country.getAllCountries().map(i=>(
                                <option value={i.isoCode} key={i.isoCode}>{i.name}</option>
                            ))
                        }
                    </select>
                </div>

                <div>
                    <label >State</label>
                    <select>
                        <option value="">State</option>
                        {
                            State && State.getStatesOfCountry("IN").map(i=>(
                                <option value={i.isoCode} key={i.isoCode}>{i.name}</option>
                            ))
                        }
                    </select>
                </div>

                <div>
                    <label >Pin Code</label>
                    <input type="text" placeholder="enter pin code" />
                </div>
                <div>
                    <label >Phone Number</label>
                    <input type="text" placeholder="enter mobile" />
                </div>
                <Link to="/confirmorder">Confirm Order</Link>
            </form>
        </main>
    </section>
  )
}

export default Shipping