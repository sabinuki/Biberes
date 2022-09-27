import { Container, List, ListItem, ListItemText } from '@mui/material';
import Box from '@mui/material/Box';
import React, { useEffect, useState } from 'react';
import { getBreweries } from '../lib/api/breweries';

export const Breweries = () => {
  const [breweries, setBreweries] = useState([]);

  useEffect(() => {
    const reqGetBreweries = async () => {
      const res = await getBreweries();

      if (res.status === 200) {
        setBreweries(res.data.breweries);
      } else {
        // TODO: 別途UIを用意する
        console.log(res.status);
      }
    };

    reqGetBreweries();
  }, []);

  return (
    <Container component="main" maxWidth="xs">
      <Box sx={{ marginTop: 8 }}>
        <List>
          {breweries.map((brewery, i) => {
            return (
              <ListItem button key={i} component="a" href={`/breweries/${brewery['id']}`}>
                <ListItemText>{brewery['name']}</ListItemText>
              </ListItem>
            );
          })}
        </List>
      </Box>
    </Container>
  );
}
