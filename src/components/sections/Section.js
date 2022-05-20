import React, { useEffect } from "react"
import { Box } from "@mui/material"
import { useInView } from "react-intersection-observer"

export default function Section({id, setActive, color, children}) {

    const [ref, inView] = useInView({
        threshold: [0.6, 0.7 ,1],
        delay: 50,
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
         alignContent: "center"
       }} 
      >
          {children}
      </Box>
    )
};