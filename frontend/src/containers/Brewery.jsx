import { Box, Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { getBrewery } from 'lib/api/breweries';
import beer0 from 'static/images/tmp/beer0.JPG';
import beer1 from 'static/images/tmp/beer1.JPG';
import beer2 from 'static/images/tmp/beer2.JPG';
import beer3 from 'static/images/tmp/beer3.JPG';

const cards = [beer0, beer1, beer2, beer3];

export const Brewery = ({ match }) => {
  const [brewery, setBrewery] = useState('');
  // TODO: ビールの登録機能を作成したらbeersをUI表示する
  const [beers, setBeers] = useState([]);
  const params = { id: match.params.id }

  const Beers = () => {
    return (
      <Grid container spacing={4}>
        {cards.map((card, i) => (
          <Grid item key={i} xs={12} sm={6} md={4}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia component="img" image={card} alt="beer" />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  Beer
                </Typography>
                <Typography>
                  Style: Wheat Ale
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    );
  }

  useEffect(() => {
    const reqGetBrewery = async () => {
      const res = await getBrewery(params);

      if (res.status === 200) {
        setBrewery(res.data.brewery);
        setBeers(res.data.beers);
      } else {
          // TODO: 別途UIを用意する
          console.log(res.status);
      }
    }

    reqGetBrewery();
  }, []);

  return (
    <Container maxWidth="md" sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography gutterBottom variant="h2">
        {brewery.name}
      </Typography>
      <Typography variant="h5" color="text.secondary">
        Beers
      </Typography>
      <Box sx={{ marginTop: 8 }}>
        <Beers />
      </Box>
    </Container>
  );
}
