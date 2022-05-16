import React, { useEffect } from "react"
import { Box } from "@mui/material"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"

export default function Section({id, setActive, color}) {

    const [ref, inView] = useInView({
        threshold: [0.6, 0.7 ,1],
        delay: 150,
        trackVisibility: true,
        onChange: (inView) => {
            if (inView) {
                setActive(id)
            }
        }})

    useEffect(() => {
        if (inView) {
            setActive(id)
        }
    }, [inView])

    return(
      <Box
       ref={ref}
       id={id}
       sx={{
         width: "100vw",
         height: "100vh",
         backgroundColor: color,
         display: "flex",
         justifyContent: "center",
       }} 
      >
          <Box
            component={motion.div} 
            sx={{
                display: "inline-block",
                width: "50vw",
                height: "15vh",
                backgroundColor: "white",
                marginY: "5vh",
                marginX: "auto",
                borderRadius: "25px"
            }}
            whileInView={{
                x: 0,
            }}
            initial={{
                x: "-10vw"
            }}
          >

          </Box>
      </Box>
    )
};