import logo from './logo.svg';
import './App.css';
import { Grid, Box, Typography, List, ListItem, createTheme } from '@mui/material';
import { ThemeProvider } from "@mui/material/styles";
import Navbar from './components/navigation/Navigation';
import { BrowserRouter } from 'react-router-dom';
import { motion } from 'framer-motion';
import Section from './components/sections/Section';
import { useState } from "react"
import About from './components/sections/about/About';
import Experience from './components/sections/experience/Experience';
import Skills from './components/sections/skills/Skills';

function App() {

  
  const [active, setActive] = useState("main")

  const setActivecallback = (state) => {
    setActive(state)
  }

  let theme = createTheme()

  theme.typography.h4 = {
    color: "white",
    fontWeight: "normal",
    [theme.breakpoints.up('xs')]: {
      fontSize: 30
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 30
    },
    [theme.breakpoints.up('md')]: {
      fontSize: 37,
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: 40
    }
  }
  
  theme.typography.h3 = {
    color: "white",
    fontWeight: "normal",
    [theme.breakpoints.up('xs')]: {
      fontSize: 30
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 30
    },
    [theme.breakpoints.up('md')]: {
      fontSize: 50,
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: 30
    }
  }
  theme.typography.h6 = {
    fontWeight: "normal",
    [theme.breakpoints.up('xs')]: {
      fontSize: 12
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 14
    },
    [theme.breakpoints.up('md')]: {
      fontSize: 16,
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: 18
    }
  }
  
  theme.typography.subtitle1 = {
    fontWeight: "gray",
    [theme.breakpoints.up('xs')]: {
      fontSize: 10
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 10
    },
    [theme.breakpoints.up('md')]: {
      fontSize: 14,
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: 18
    }
  }

  theme.typography.subtitle2 = {
    fontWeight: "gray",
    [theme.breakpoints.up('xs')]: {
      fontSize: 10
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 10
    },
    [theme.breakpoints.up('md')]: {
      fontSize: 14,
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: 18
    }
  }
  return (
    <BrowserRouter>
    <ThemeProvider theme={theme}>

      <Navbar active={active} setActive={setActivecallback}/>
      <About setActivecallback={setActivecallback}/>
      <Experience setActivecallback={setActivecallback}/>
      <Skills setActivecallback={setActivecallback}/>


        


  </ThemeProvider>
  </BrowserRouter>
  );
}

export default App;
