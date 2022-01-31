import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import React from 'react';
import BeerImg from 'static/images/cards/drink_beer.jpg';

export default function BeerStyleCard (props) {
  const { name } = props;

  return(
    <Card variant="outlined">
      <CardMedia
        component="img"
        image={BeerImg}
        alt="style"
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
      </CardContent>
    </Card>
  );
}
