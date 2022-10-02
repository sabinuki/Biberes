import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Container, Grid, Paper } from '@mui/material';
import Chart from 'components/BreweryTools/Chart';
import LikeNum from 'components/BreweryTools/LikeNum';
import QRCode from 'components/Elements/QRCode';

const theme = createTheme();

export const MyPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4} lg={3}>
            <Paper
              sx={{
                p:2,
                display: 'flex',
                flexDirection: 'column',
                height: 240,
              }}
            >
              <LikeNum />
            </Paper>
          </Grid>
          <Grid item xs={12} md={8} lg={9}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 240,
              }}
            >
              <Chart />
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <QRCode />
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}
