import React from "react";
import { Box, List, ListItem, Typography, Grid } from "@mui/material";
import Section from "../Section";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used



export default function Skills({setActivecallback}) {

    return (
      <Section id="skills" setActive={setActivecallback} color="#3A506B">
        <Box 
          display="inline-block"
          width="60vw"
          marginX="20vw"
          marginY="20vh"
          component={motion.div}
          initial={{x: "-40vw"}}
          whileInView={{x: 0}}
          textAlign="center"
        >
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h4">
                Skills
            </Typography>
          </Grid>
          <Grid item xs={12}>
                <FontAwesomeIcon icon={brands('js')} size="3x" color="white"/>
                <FontAwesomeIcon icon={brands('react')} size="3x" color="white"/>
                <FontAwesomeIcon icon={brands('node-js')} size="3x" color="white"/>
          </Grid>                         
          <Grid item xs={12}>
                <Typography margin={3}>
                    I have 1+ years development experience in JavaScript. I've developed frontend and backend applications using React, NodeJS.
                </Typography>
          </Grid>
          <Grid item xs={12}>
                <FontAwesomeIcon icon={brands('python')} size="3x" color="white"/>
                <FontAwesomeIcon icon={brands('git-alt')} size="3x" color="white"/>
          </Grid>
        </Grid>
        </Box>
      </Section>
    )
}


