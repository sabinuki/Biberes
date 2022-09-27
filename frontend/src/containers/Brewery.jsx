import { Box, Container, List, ListItem, ListItemText, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { getBrewery } from 'lib/api/breweries';
import BreweryQRCode from 'components/Elements/QRCode.jsx';

export const Brewery = ({ match }) => {
  const [brewery, setBrewery] = useState('');
  const [beers, setBeers] = useState([]);
  const params = { id: match.params.id }

  const Beers = () => {
    return (
      <List>
        {beers.map((beer, i) => {
          return (
            <ListItem key={i}>
              <ListItemText>{beer.name}</ListItemText>
            </ListItem>
          );
        })}
      </List>
    );
  }

  const GettingReady = () => {
    return (
      <Container component="main" maxWidth="xs">
        <Typography>
          ビール情報準備中です
        </Typography>
        <BreweryQRCode />
      </Container>
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
      <Typography variant="h2">
        {brewery.name}
      </Typography>
      <Box sx={{ marginTop: 8 }}>
        {beers.length > 0 ? <Beers /> : <GettingReady />}
      </Box>
    </Container>
  );
}
