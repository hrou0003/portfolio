import logo from './logo.svg';
import './App.css';
import { Box, Typography } from '@mui/material';
import Navbar from './components/navigation/Navigation';
import { BrowserRouter } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from './components/Title';
import { Scrollspy } from '@makotot/ghostui';
import Section from './components/sections/Section';
import { useInView } from "react-intersection-observer"
import { useState } from "react"

function App() {
  
  const [active, setActive] = useState("main")

  const setActivecallback = (state) => {
    setActive(state)
  }

  return (
    <BrowserRouter>
      <Navbar active={active} setActive={setActivecallback}/>
      <Box sx={{position: "fixed"}}>
      <Typography variant="h1" component="h1">
        {active}
      </Typography>

      </Box>
      <Section id="main" setActive={setActivecallback} color="white"/>
        
      <Section id="second" setActive={setActivecallback} color="blue" />
      <Section id="third" setActive={setActivecallback} color="gray">

      </Section>

  </BrowserRouter>
  );
}

export default App;
