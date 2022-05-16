import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  List,
  ListItem,
  Box,
  ListItemIcon,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import DraftsIcon from "@mui/icons-material/Drafts"
import CircleIcon from '@mui/icons-material/Circle';
import { motion } from "framer-motion";
import NavDot from "./NavDot";


function Navbar({active, setActive}) {

  return (
    <Box
        sx={{
            width: "25vw",
            marginY: "20vh",
            marginX: "1vw",
            position: "fixed"
        }} 
    >
        <List>
            <NavDot section="#main" active={active}  setActive={setActive}/> 
            <NavDot section="#second" active={active} setActive={setActive}/>
            <NavDot section="#third" active={active} setActive={setActive}/>
        </List>
    </Box>
  );
}
export default Navbar;