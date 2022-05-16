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


      </Box>
      <Section id="main" setActive={setActivecallback} color="#0B132B"/>
        
      <Section id="second" setActive={setActivecallback} color="#1C2541" />
      <Section id="third" setActive={setActivecallback} color="#3A506B">

      </Section>

  </BrowserRouter>
  );
}

export default App;
