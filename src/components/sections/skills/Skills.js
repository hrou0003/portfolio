import React from "react";
import { Box, List, ListItem, Typography, Grid } from "@mui/material";
import Section from "../Section";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used



export default function Skills({ setActivecallback }) {

  return (
    <Section id="skills" setActive={setActivecallback} color="#3A506B">
      <Box
        display="inline-block"
        width="60vw"
        marginX="20vw"
        marginTop="5vh"
        marginBottom="2vh"
        component={motion.div}
        initial={{ x: "-40vw" }}
        whileInView={{ x: 0 }}
        textAlign="center"
        overflow="auto"
      >
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h4">
              Skills
            </Typography>
          </Grid>
          <Grid item xs={12} display="flex" justifyContent="space-evenly">
            <FontAwesomeIcon icon={brands('js')} size="3x" color="white" />
            <FontAwesomeIcon icon={brands('react')} size="3x" color="white" />
            <FontAwesomeIcon icon={brands('node-js')} size="3x" color="white" />
          </Grid>
          <Grid item xs={12}>
            <Typography marginTop={3} color="white">
              I have 1+ years of development experience in JavaScript. I've developed frontend and backend applications using React and NodeJS.
            </Typography>
          </Grid>
          <Grid item xs={12} display="flex" justifyContent="space-evenly" columnGap={3}>
            <FontAwesomeIcon icon={brands('python')} size="3x" color="white" m={3} />
            <FontAwesomeIcon icon={brands('git-alt')} size="3x" color="white" />
          </Grid>
          <Grid item xs={12}>
            <Typography marginTop={3} color="white">
              I have 4+ years of experience with Python which much of it focused on working with data and web frameworks such as Pandas,
              Django, Flask and scikit-learn.
            </Typography>
          </Grid>
          <Grid item xs={12} display="flex" justifyContent="space-evenly">
            <FontAwesomeIcon icon={solid('square-root-variable')} size="3x" color="white" />
            <FontAwesomeIcon icon={solid('database')} size="3x" color="white" />
          </Grid>
          <Grid item xs={12}>
            <Typography marginTop={3} color="white">
              I also have a strong numerical and mathematical background with a focus on linear and non-linear optimisation. As well as
              being numerically literate, I have strong data skills and am comfortable tackling a wide varierty of data related problems.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Section>
  )
}


