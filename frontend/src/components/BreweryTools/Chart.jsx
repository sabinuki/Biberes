import React from 'react';
import { useTheme } from '@mui/material/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from 'components/layout/Title';

const today = new Date();

const date = (diff) => {
  let dateStr;

  today.setDate(today.getDate() - diff);
  dateStr =(today.getMonth() + 1) + '/' + today.getDate();
  today.setDate(today.getDate() + diff);

  return dateStr;
}

function createData(time, amount) {
  return { time, amount };
}

const data = [
  createData(date(6), 60),
  createData(date(5), 80),
  createData(date(4), 150),
  createData(date(3), 200),
  createData(date(2), 40),
  createData(date(1), 50),
  createData(date(0), 100),
];

export default function Chart() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Title>週間のいいね数</Title>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis
            dataKey="time"
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          />
          <YAxis
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          >
            <Label
              angle={270}
              position="left"
              style={{
                textAnchor: 'middle',
                fill: theme.palette.text.primary,
                ...theme.typography.body1,
              }}
            >
              いいね数
            </Label>
          </YAxis>
          <Line
            isAnimationActive={false}
            type="monotone"
            dataKey="amount"
            stroke={theme.palette.primary.main}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
