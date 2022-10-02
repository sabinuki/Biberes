import React from 'react';
import Title from 'components/layout/Title';
import { Typography } from '@mui/material';

export default function AccessNum() {
  return (
    <React.Fragment>
      <Title>本日のいいね</Title>
      <Typography component="p" variant="h4">
        100回
      </Typography>
    </React.Fragment>
  );
}
