import React from 'react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';

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

const containerVarients = {
  hidden :  {
    opacity: 0.7
  },
  visible : {
    opacity: 1,
    transition : {
      delay: 1.5,
      duration: 1,
    }
  },
  exit : {
    x: "-100vw"
  }
}

const Home = () => {
  return (
    <div className="home container">
      <motion.h2
        variants={containerVarients}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        Welcome to Pizza Joint
      </motion.h2>
      <Link to="/base">
        <motion.button
          variants={buttonVariant}
          whileHover="hover"
        >
          Create Your Pizza
        </motion.button>
      </Link>
    </div>
  );
};

export default Home;
