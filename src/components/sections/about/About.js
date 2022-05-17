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
        >
          <Typography variant="h4" color="white" align="center">
            About me section!
          </Typography>
        </Box>
      </Section>
    )
}

