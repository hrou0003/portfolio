import React from "react";
import { Box, Grid, Typography, List, ListItem, Paper } from "@mui/material";
import Section from "../Section";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

export default function Experience({ setActivecallback }) {
  return (
    <Section id="experience" setActive={setActivecallback} color="#1C2541" >
      <Box
        display="inline-block"
        width="60vw"
        marginX="20vw"
        marginY="auto"
        component={motion.div}
        initial={{ x: "-40vw" }}
        whileInView={{ x: 0 }}
        overflow="auto"
        alignItems="center"
      >
        <Paper sx={{ bgcolor: "gray", padding: "1vw" }}>
          <Grid container spacing={6} alignItems="baseline" justifyItems="center" textAlign="center">
            <Grid item xs={12} md={6} justifyItems="center">
              <Typography color="white" variant="h3" >
                Education
              </Typography>
              <List textAlign="center" justifyContent="center">
                <ListItem>
                  <ExperienceCard title="Bachelor of Science" subtitle="Applied Mathematics and Computer Science" time="2018-2021" image="https://ahes.org.au/wp-content/uploads/job-manager-uploads/company_logo/2022/04/monash-university-logo-small.png" />
                </ListItem>
                <ListItem>
                  <ExperienceCard title="Bachelor of Science" subtitle="Financial Mathematics" time="2022- (Deferred)" image="https://ahes.org.au/wp-content/uploads/job-manager-uploads/company_logo/2022/04/monash-university-logo-small.png" />
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography color="white" variant="h3" >
                Work Experience
              </Typography>
              <List justifyItems="center">
                <ListItem>
                  <ExperienceCard title="Portfolio Analyst" time="March 2022" image="https://imageio.forbes.com/i-forbesimg/media/lists/companies/bank-of-queensland_416x416.jpg?format=jpg&height=416&width=416&fit=bounds" />
                </ListItem>
                <ListItem>
                  <ExperienceCard title="Patient Services" time="2015-2018" image="https://hopeforhearts.com.au/wp-content/uploads/2019/02/melbourne-private-hospital.jpg" />
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Section>

  )
}
