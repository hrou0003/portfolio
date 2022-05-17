import logo from './logo.svg';
import './App.css';
import { Grid, Box, Typography, List, ListItem, } from '@mui/material';
import { createTheme, responsiveFontSizes, ThemeProvider } from "@mui/material/styles";
import Navbar from './components/navigation/Navigation';
import { BrowserRouter } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from './components/title/Title';
import Section from './components/sections/Section';
import { useInView } from "react-intersection-observer"
import { useState } from "react"

function App() {

  
  const [active, setActive] = useState("main")

  const setActivecallback = (state) => {
    setActive(state)
  }

  let theme = createTheme();

  let responsiveText = {
    lg: 30,
    md: 20,
    sm: 15,
    xs: 10
  }


  return (
    <BrowserRouter>
    <ThemeProvider theme={theme}>

      <Navbar active={active} setActive={setActivecallback}/>
      <Box sx={{position: "fixed"}}>
      </Box>
      <Section id="main" setActive={setActivecallback} color="#0B132B">
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
        >
          <Typography variant="h4" color="white" align="center" sx={{
            fontSize: responsiveText
          }}>
            Hi, my name is Harrison and I've recently graduated with a degree in applied mathematics.
            At the moment I'm working as a Portfolio Analyst in Credit Risk @BOQ, however, I'm currently on the hunt for opportunities in the world of software development.
            If you're interested in what I'm offering then please reach out below!
          </Typography>
        </Box>
      </Section>
        
      <Section id="second" setActive={setActivecallback} color="#1C2541" >
        <Box
        display="inline-block"
        width="60vw"
        marginX="20vw"
        marginY="auto"
        component={motion.div}
        initial={{x: "-40vw"}}
        whileInView={{x: 0}}
        >
          <Grid container spacing={6}>
            <Grid item xs={6}>
              <Typography color="white" variant="h3" align='center' sx={{fontSize: responsiveText}}>
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
            <Grid item xs={6}>
              <Typography color="white" variant="h3" align='center' sx={{fontSize: responsiveText}}>
                Work Experience
              </Typography>
            </Grid>
          </Grid>

        </Box>
      </Section>
      <Section id="third" setActive={setActivecallback} color="#3A506B">

      </Section>
  </ThemeProvider>
  </BrowserRouter>
  );
}

export default App;
