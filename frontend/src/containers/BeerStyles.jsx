import { Container, List, ListItem, ListItemText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { useEffect, useState } from 'react';
import { beerStyleIndex } from '../lib/api/beer_style';

const useStyles = makeStyles((theme) => ({
  styleList: {
    marginTop: theme.spacing(8),
  },
}));

export const BeerStyles = () => {
  const classes = useStyles();
  const [beerStyles, setBeerStyles] = useState([]);

  useEffect(() => {
    const getBeerStyles = async () => {
      const res = await beerStyleIndex();

      if (res.status === 200) {
        setBeerStyles(res.data.data);
      } else {
        // TODO: 別途UIを用意する
        console.log(res.status);
      }
    };

    getBeerStyles();
  }, []);

  return(
    <Container component="main" maxWidth="xs">
      <div className={classes.styleList}>
        <List>
          {beerStyles.map((style, i) => {
            return(
              <ListItem button key={i}>
                <ListItemText>{style}</ListItemText>
              </ListItem>
            );
          })}
        </List>
      </div>
    </Container>
  );
}
