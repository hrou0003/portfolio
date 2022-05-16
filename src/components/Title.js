import React from 'react';
import { motion } from 'framer-motion';

const svgVariants = {
  hidden: { rotate: 0 },
  visible: { 
    rotate: 0,
    transition: { duration : 1 }
  },
}

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: { 
      duration: 2,
      ease: "easeInOut",
    }
  }
};


const Header = () => {
  return (
      <motion.div className="logo">
        <motion.svg 
            width="20rem" 
            height="20rem" 
            fill="none" 
            xmlns='http://www.w3.org/2000/svg' 
            variants={svgVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.path 
                d="
                M 213.1,6.7
                c -32.4-14.4-73.7,0-88.1,30.6
                C 110.6,4.9,67.5-9.5,36.9,6.7
                C 2.8,22.9-13.4,62.4,13.5,110.9
                C 33.3,145.1,67.5,170.3,125,217
                c 59.3-46.7,93.5-71.9,111.5-106.1
                C 263.4,64.2,247.2,22.9,213.1,6.7
                z"
                stroke="white"
                strokeWidth="20"
                variants={pathVariants}
            />
        </motion.svg>

      </motion.div>
  )
}

export default Header;