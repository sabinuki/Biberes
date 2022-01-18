import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

export default function DiagnosesButton () {
  return (
    <Button variant="contained" color="inherit" component={Link} to="/style_chart">
      ビアスタイルを診断する
    </Button>
  )
}
