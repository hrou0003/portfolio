import React from "react";
import { Box, Grid, List, ListItem, Typography, Link } from "@mui/material";
import Section from "../Section";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import PDF from "../../../static/resume.pdf"


export default function About({ setActivecallback }) {

  return (

    <Section id="contact" setActive={setActivecallback} color="#545F66">
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

        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h4">
              Links
            </Typography>
          </Grid>
          <Grid item xs={12} display="flex" justifyContent="space-evenly">
            <Link href="mailto:harrisonrouillard@gmail.com">
              <FontAwesomeIcon icon={solid('envelope')} fontSize="3rem" color="white" />
            </Link>
            <Link href="https://github.com/hrou0003" target="_blank">
              <FontAwesomeIcon icon={brands('github')} fontSize="3rem" color="white" />
            </Link>
            <Link href="https://www.linkedin.com/in/harrison-rouillard-295260209/">
              <FontAwesomeIcon icon={brands('linkedin')} fontSize="3rem" color="white" />
            </Link>
            <Link href={PDF} target="_blank">
              <FontAwesomeIcon icon={solid('file')} fontSize="3rem" color="white" />
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Section>
  )
}

