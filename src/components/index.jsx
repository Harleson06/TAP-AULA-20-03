import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {CardActionArea } from '@mui/material';
import { Box, CardActionArea } from "@mui/material";

export default function PokemonCard({name}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography gutterBottom variant="caption" component="div">
              {typeHandler()}
            </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
