import React, { useEffect } from "react"
import { Box } from "@mui/material"
import { useInView } from "react-intersection-observer"

export default function Section({id, setActive, color}) {

    const [ref, inView] = useInView({
        threshold: [0.6, 0.7 ,1],
        delay: 150,
        trackVisibility: true,
        onChange: (inView) => {
            setActive(id)
        }})

    useEffect(() => {
        setActive(id)
    }, [inView])

    return(
      <Box
       ref={ref}
       id={id}
       sx={{
         width: "100vw",
         height: "100vh",
         backgroundColor: color
       }} 
      >
      </Box>
    )
};