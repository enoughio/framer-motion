import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const containerVarients = {
  hidden: {
    x: "100vw",
    opacity: 0,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      mass: 1,
      damping: 9,
      when: "beforeChildren",
      staggerChildren: .5
    }
  }
}

const chiledVarient = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  }
}

const Order = ({ pizza }) => {

  return (
    <motion.div className="container order"
      variants={containerVarients}
      initial="hidden"
      animate="visible"
    >
      <motion.h2>Thank you for your order :)</motion.h2>

      <motion.p
        variants={chiledVarient}
      >You ordered a {pizza.base} pizza with:</motion.p>
      <motion.div
        variants={chiledVarient}
      >
        {pizza.toppings.map(topping => <div key={topping}>{topping}</div>)}
      </motion.div>
    </motion.div>
  )
}

export default Order;