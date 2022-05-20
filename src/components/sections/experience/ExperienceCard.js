import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { useMediaQuery } from '@mui/material';


export default function ExperienceCard({ title, subtitle, time, about, image }) {
    const theme = useTheme();

    const matches = useMediaQuery(theme.breakpoints.up("sm"))

    return (
        <Card sx={{ display: 'flex', width: "20rem" }}>
            <Grid container spacing={3}>
                <Grid item xs={8}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h6">
                            {title}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            {subtitle}
                        </Typography>
                        <Typography variant="subtitle2">
                            {time}
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item xs={4}>
                    <CardMedia
                        component="img"
                        image={image}
                    />
                </Grid>
            </Grid>
        </Card >
    );
}