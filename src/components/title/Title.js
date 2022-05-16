import React from 'react';
import { motion } from 'framer-motion';
import { Lastname } from "./Lastname"
import { Firstname } from "./Firstname"

const transition = { duration: 4, yoyo: Infinity, ease: "easeInOut" };


const Header = () => {
  return (
    <div className="container">
      <svg xmlns="http://www.w3.org/2000/svg" width="451" height="437">
        <motion.path
          d={Lastname}
          fill="transparent"
          strokeWidth="3"
          stroke="#fff"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={transition}
        />
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" width="451" height="437">
        <motion.path
          d={Firstname}
          fill="transparent"
          strokeWidth="3"
          stroke="#fff"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={transition}
        />
      </svg>

    </div>
  )
}

export default Header;