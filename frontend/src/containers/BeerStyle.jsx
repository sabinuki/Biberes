import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import BeerImg from 'static/images/cards/drink_beer.jpg';
import { getBeerStyle } from 'lib/api/beer_styles';

const StyleImage = styled.img`
  height: 600px;
`;

  const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }
  }));

export const BeerStyle = ({ match }) => {
  const classes = useStyles();
  const [styleName, setStyleName] = useState('');
  const params = { id: match.params.id }

  useEffect(() => {
    const reqGetBeerStyle = async () => {
      const res = await getBeerStyle(params);

      if (res.status === 200) {
        setStyleName(res.data.data.name);
      } else {
        // TODO: 別途UIを用意する
        console.log(res.status);
      }
    }

    reqGetBeerStyle();
  }, []);

  return(
    <Container maxWidth="md" className={classes.paper}>
      <Typography variant="h2">
        {styleName}
      </Typography>
      <Typography variant="body1">
        ここに各スタイルの説明を表示します。
      </Typography>
      <StyleImage src={BeerImg} alt="beer" />
    </Container>
  );
}
