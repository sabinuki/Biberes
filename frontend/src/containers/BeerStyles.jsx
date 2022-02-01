import { Container, List, ListItem, ListItemText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { useEffect, useState } from 'react';
import { getBeerStyles } from '../lib/api/beer_styles';

const useStyles = makeStyles((theme) => ({
  styleList: {
    marginTop: theme.spacing(8),
  },
}));

export const BeerStyles = () => {
  const classes = useStyles();
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
      <div className={classes.styleList}>
        <List>
          {beerStyles.map((style, i) => {
            return(
              <ListItem button key={i} component="a" href={`/styles/${i + 1}`}>
                <ListItemText>{style}</ListItemText>
              </ListItem>
            );
          })}
        </List>
      </div>
    </Container>
  );
}
