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
        maxHeight="95vh"
        marginX="20vw"
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
            <FontAwesomeIcon icon={brands('js')} fontSize="3rem" color="white" />
            <FontAwesomeIcon icon={brands('react')} fontSize="3rem" color="white" />
            <FontAwesomeIcon icon={brands('node-js')} fontSize="3rem" color="white" />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="p" marginTop={3} color="white" size="0.75rem">
              I have 1+ years of development experience in JavaScript. I've developed frontend and backend applications using React and NodeJS.
            </Typography>
          </Grid>
          <Grid item xs={12} display="flex" justifyContent="space-evenly" columnGap={3}>
            <FontAwesomeIcon icon={brands('python')} fontSize="3rem" color="white" m={3} />
            <FontAwesomeIcon icon={brands('git-alt')} fontSize="3rem" color="white" />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="p" marginTop={3} color="white">
              I have 4+ years of experience with Python which much of it focused on working with data and web frameworks such as Pandas,
              Django, Flask and scikit-learn.
            </Typography>
          </Grid>
          <Grid item xs={12} display="flex" justifyContent="space-evenly">
            <FontAwesomeIcon icon={solid('square-root-variable')} fontSize="2.5rem" color="white" />
            <FontAwesomeIcon icon={solid('database')} fontSize="2.5rem" color="white" />
          </Grid>
          <Grid item xs={12}>
            <Typography marginTop={3} variant="p" color="white" fontSize="1rem">
              I also have a strong numerical and mathematical background with a focus on linear and non-linear optimisation. As well as
              being numerically literate, I have strong data skills and am comfortable tackling a wide varierty of data related problems.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Section>
  )
}


