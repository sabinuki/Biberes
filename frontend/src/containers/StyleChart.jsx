import { Button, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';
import StyleChartCard from '../components/StyleChart/Cards/StyleChartCard';
import ChartData from '../data/StyleChart.json';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
  },
  chartArea: {
    marginTop: theme.spacing(0),
  },
  answerArea: {
    marginTop: theme.spacing(4),
    display: 'flex',
    justifyContent: 'space-evenly',
  }
}));

export const StyleChart = () => {
  const classes = useStyles();
  const [cards, setCards] = useState([StyleChartCard(ChartData['init']['text'])]);
  const [yesNextId, setYesNextId] = useState(ChartData['init']['answers']['yes']['nextId']);
  const [noNextId, setNoNextId] = useState(ChartData['init']['answers']['no']['nextId']);
  const [isBeer, setIsBeer] = useState(false);

  const selectYes = () => {
    const text = ChartData[yesNextId]['text'];

    if (typeof(ChartData[yesNextId]['answers']) != 'undefined') {
      setYesNextId(ChartData[yesNextId]['answers']['yes']['nextId']);
      setNoNextId(ChartData[yesNextId]['answers']['no']['nextId']);
     }
    setCards([...cards, StyleChartCard(text)]);

    if (ChartData[yesNextId]['isBeer']) {
      setIsBeer(true);
    }
  };

  const selectNo = () => {
    const text = ChartData[noNextId]['text'];

    if (typeof(ChartData[noNextId]['answers']) != 'undefined') {
      setYesNextId(ChartData[noNextId]['answers']['yes']['nextId']);
      setNoNextId(ChartData[noNextId]['answers']['no']['nextId']);
    }
    setCards([...cards, StyleChartCard(text)]);

    if (ChartData[noNextId]['isBeer']) {
      setIsBeer(true);
    }
  };

  return(
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <div className={classes.chartArea}>
          {cards.map((card,i) => <div key={i}>{card}</div>)}
        </div>
        <div className={classes.answerArea}>
          <Button variant="outlined" className="answer-button" style={{display: isBeer ? 'none' : 'inline-flex'}} onClick={selectYes}>はい</Button>
          <Button variant="outlined" className="answer-button" style={{display: isBeer ? 'none' : 'inline-flex'}} onClick={selectNo}>いいえ</Button>
        </div>
      </div>
    </Container>
  );
}
