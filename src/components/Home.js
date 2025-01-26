import React from 'react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="home container">
      <motion.h2

        initial={{
          opacity: 0.7
        }}
        animate={{
          opacity: 1,
        }}
        
      >
        Welcome to Pizza Joint
      </motion.h2>
      <Link to="/base">
        <motion.button

          whileHover={{
            scale: 1.1,
            boxShadow: "0px 0px 8px rgb(255 255 255)", 
            textShadow: "0px 0px 8px rgb(255 255 255)" 
          }}


        >
          Create Your Pizza
        </motion.button>
      </Link>
    </div>
  )
}

export default Home;