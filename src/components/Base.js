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

const nextVarient = {
  hidden : {
     x: "-100vw"
  },
  visible : {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 120
    }
  }
}




const buttonVariant = {
  hover: {
    scale: 1.1,
    boxShadow: "0px 0px 8px rgb(255 255 255)",
    textShadow: "0px 0px 8px rgb(255 255 255)",
    transition: { // Moved transition inside the hover variant
      duration: 0.2,
      yoyo: 10 // Enables animation to repeat back and forth
    }
  }
};


const Base = ({ addBase, pizza }) => {
  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];

  return (
    <motion.div className="base container"
      variants={containerVarients}
      initial="hidden"        // these two props will be passed to childen elements
      animate="visible"
    >
      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map(base => {
          let spanClass = pizza.base === base ? 'active' : '';
          return (
            <motion.li key={base} onClick={() => addBase(base)}
              whileHover={{
                scale: 1.2,
                originX: 0,
                textShadow: "0px 0px 8px rgb(255 255 255)",
                color: "yellow"
              }}
              transition={{
                type: "spring",
                stiffness: 500
              }}
            >
              <span className={spanClass}>{base}</span>
            </motion.li>
          )
        })}
      </ul>

      {pizza.base && (
        <motion.div className="next"
          variants={nextVarient}
          
          /* these props will automaitcly inharited form parents
          initial="hidden"
          animate="visible"
          */
        >
          <Link to="/toppings">
            <motion.button
              variants={buttonVariant}
              whileHover='hover'
            >
              Next</motion.button>
          </Link>
        </motion.div>
      )}

    </motion.div>
  )
}

export default Base;