import React from 'react'
import Menucard from './Menucard'
import burger1 from "../../assets/Burgir.jpg"
import burger2 from "../../assets/burgircheese.jpg"
import burger3 from "../../assets/Burgirandfri.jpeg"


const Menu = () => {

  const addToCartHandler=(itemNum)=>{

  }

  return (
    <section id="menu">
      <h1>MENU</h1>

      <div>
        <Menucard
          itemNum={1}
          burgerSrc={burger1}
          price={200}
          title="Cheese Burger"
          handler={addToCartHandler}
          delay={0.1}
        />
        <Menucard
          itemNum={2}
          burgerSrc={burger2}
          price={250}
          title="Veg Cheese Burger"
          delay={0.5}
          handler={addToCartHandler}
        />
        <Menucard
          itemNum={3}
          burgerSrc={burger3}
          price={280}
          title="Cheese Burger with French Fries"
          delay={0.8}
          handler={addToCartHandler}
        />
      </div>
    </section>
  )
}

export default Menu