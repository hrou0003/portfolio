import React from "react";
import { Box, Grid, Typography, List, ListItem } from "@mui/material";
import Section from "../Section";
import { motion } from "framer-motion";

export default function Experience ({setActivecallback}) {
    return (
      <Section id="experience" setActive={setActivecallback} color="#1C2541" >
        <Box
        display="inline-block"
        width="60vw"
        marginX="20vw"
        marginY="20vh"
        component={motion.div}
        initial={{x: "-40vw"}}
        whileInView={{x: 0}}
        >
          <Grid container spacing={6} alignItems="center" alignContent="center" textAlign="center">
            <Grid item xs={12} md={6} >
              <Typography color="white" variant="h4" >
                Education
              </Typography>
              <List>
                <ListItem>
                  <Typography>
                    Test
                  </Typography>
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography color="white" variant="h4" >
                Work Experience
              </Typography>
              <List>
                <ListItem>
                  <Typography>
                    Test
                  </Typography>
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Box>
      </Section>

    )
}
