import React from 'react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';

const containerVarients = {
  hidden: {
    x: "100vw",
    opacity: 0,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: .5,
      type: "spring"
    }
  }
}



const buttonVariant = {
  hover: {
    scale: [1.1, 1, 1.1, 1, 1.1, 1],
    boxShadow: "0px 0px 8px rgb(255 255 255)",
    textShadow: "0px 0px 8px rgb(255 255 255)",
    transition: {
      duration: .2,
      yoyo: 10,
      type: "spring",
      stiffness: 500,
    }
  },
}



const Toppings = ({ addTopping, pizza }) => {
  let toppings = ['mushrooms', 'peppers', 'onions', 'olives', 'extra cheese', 'tomatoes'];

  return (
    <motion.div className="toppings container"
      variants={containerVarients}
      initial="hidden"
      animate="visible"
    >

      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map(topping => {
          let spanClass = pizza.toppings.includes(topping) ? 'active' : '';
          return (
            <motion.li key={topping} onClick={() => addTopping(topping)}
              variants={buttonVariant}
              whileHover="hover"
            >
              <span className={spanClass}>{topping}</span>
            </motion.li>
          )
        })}
      </ul>

      <Link to="/order">
        <motion.button
          variants={buttonVariant}
          whileHover="hover"
        >
          Order
        </motion.button>
      </Link>

    </motion.div>
  )
}

export default Toppings;