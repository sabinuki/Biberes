import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

export default function StyleChartCard (text) {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="body1">
          {text}
        </Typography>
       </CardContent>
    </Card>
  );
}
