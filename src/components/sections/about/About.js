import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import Section from "../Section";


export default function About ({setActivecallback}) {

    return (

      <Section id="about" setActive={setActivecallback} color="#0B132B">
        <Box
          display="inline-block"
          margin="auto"
        >
        </Box>
        <Box
        display="inline-block"
        width="60vw"
        marginX="20vw"
        marginY="auto"
        textAlign="center"
        overflow="auto"
        >
          <Typography variant="h4" color="white" align="center">
            Hi, my name is Harrison and I'm a recent graduate in applied mathematics looking to enter the field
            of software engineering. I'm pursuing this area as it's great way for me to solve problems in a practical and
            meaningful way.
          </Typography>
        </Box>
      </Section>
    )
}

