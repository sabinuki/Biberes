import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

export default function LinkButton (props) {
  return (
    <Button variant="contained" component={Link} to={props.link}>
      {props.text}
    </Button>
  )
}
