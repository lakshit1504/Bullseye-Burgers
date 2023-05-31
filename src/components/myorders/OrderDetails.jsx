import React from 'react'

const OrderDetails = () => {
  return (
    <section className="orderDetails">
        <main>
            <h1>Order Details</h1>

            <div>
                <h1>Shipping</h1>
                <p><b>Address</b>{"12412bjbivdi 1eh12 ejj"}</p>
            </div>

            <div>
                <h1>Conact</h1>
                <p><b>name</b>{"lakshit"}</p>
                <p><b>phone</b>{"235235112"}</p>
            </div>

            <div>
                <h1>Status</h1>
                <p><b>Order Status</b>{"preparing"}</p>
                <p><b>Placed At</b>{"23:00"}</p>
                <p><b>Delivery Estimated </b>{"23:35"}</p>
            </div>

            <div>
                <h1>Payment</h1>
                <p><b>Payment Method</b>{"Online"}</p>
                <p><b>Refrence No.</b>{"315312624"}</p>
                <p><b>Paid At</b>{"23:00"}</p>
            </div>

            <div>
                <h1>Amount</h1>
                <p><b>Items Amount</b>₹{"4800"}</p>
                <p><b>Shipping</b>₹{"400"}</p>
                <p><b>Taxes</b>₹{"10"}</p>
                <p><b>Total</b>₹{"5210"}</p>
            </div>

            <article>
                <h1>
                    Ordered Items
                </h1>
                <div>
                    <h4>Cheese Burger</h4>
                    <div>
                        <span>{12}</span> x <span>{200}</span>
                    </div>
                </div>
                <div>
                    <h4> Veg Cheese Burger</h4>
                    <div>
                        <span>{8}</span>X<span>{220}</span>
                    </div>
                </div>

                <div>
                   <h4 style={{fontWeight:"800"}} >Subtotal</h4>
                   <div  style={{fontWeight:"800"}}>₹{5210}</div>   
                </div>

            </article>


        </main>
        
    </section>
  )
}

export default OrderDetails