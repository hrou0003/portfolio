import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { ListItemIcon, ListItem, IconButton } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import {Link, Typography } from "@mui/material"

/**
 * This is an example of scale correction in Framer Motion 2.
 *
 * Usually, when using scale to animate between two layouts of
 * different sizes, visual distortion will be incurred on child
 * elements and styles like borderRadius and boxShadow.
 *
 * Framer Motion 2 corrects for this. To see the distortion you'd
 * see using traditional FLIP techniques:
 *   - Remove `layout` from the child component
 *   - Remove borderRadius: 50 from the parent component and add
 *      border-radius: 50px; to the .parent definition in styles.css
 */


export default function NavDot({section, active, setActive}) {

  const open = section.slice(1,) === active ? {
      scale: 1.2,
      color: "white",
      x: 10
  } : {}

  return (
    <ListItem
      component={motion.li}
      layout
    >
        <Link href={section} sx={{ textDecoration: "none"}}>
            <Typography 
                variant="h4"
                component={motion.h5}
                initial={{ color: "gray", scale: 0.8 }}
                animate={open}
                onClick={setActive(section.slice(1,))}
                underline={false}
                sx={{ display: {xs: 'none', sm: 'none', md: 'block'}}}
            >
              {section.slice(1,)}
            </Typography>
            <IconButton
                component={motion.span}
                initial={{ color: "gray", scale: 0.8 }}
                animate={open}
                onClick={setActive(section.slice(1,))}
                sx={{ display: {md: 'none'}}}
            >
                <CircleIcon />
            </IconButton>
        </Link>
    </ListItem>
  );
}
