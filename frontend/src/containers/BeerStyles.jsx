import { Container, List, ListItem, ListItemText } from '@mui/material';
import Box from '@mui/material/Box';
import React, { useEffect, useState } from 'react';
import { getBeerStyles } from '../lib/api/beer_styles';

export const BeerStyles = () => {
  const [beerStyles, setBeerStyles] = useState([]);

  useEffect(() => {
    const reqGetBeerStyles = async () => {
      const res = await getBeerStyles();

      if (res.status === 200) {
        setBeerStyles(res.data.data);
      } else {
        // TODO: 別途UIを用意する
        console.log(res.status);
      }
    };

    reqGetBeerStyles();
  }, []);

  return(
    <Container component="main" maxWidth="xs">
      <Box sx={{ marginTop: 8 }}>
        <List>
          {beerStyles.map((style, i) => {
            return(
              <ListItem button key={i} component="a" href={`/styles/${i + 1}`}>
                <ListItemText>{style}</ListItemText>
              </ListItem>
            );
          })}
        </List>
      </Box>
    </Container>
  );
}
