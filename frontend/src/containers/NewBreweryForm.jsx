import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { createBrewery } from 'lib/api/breweries';
import Avatar from '@mui/material/Avatar';
import BusinessIcon from '@mui/icons-material/Business';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

export const NewBreweryForm = () => {
  const history = useHistory();

  const [name, setName] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()

    const params = {
      name: name
    }

    try {
      const res = await createBrewery(params)
      console.log(res.data.brewery.id)
      if (res.status === 200) {
        // TODO: ブルワリー管理者ページに遷移させる
        history.push(`/breweries/${res.data.brewery.id}`)
      } else {
        // TODO: エラー表示
      }
    } catch (err) {
      // TODO: エラー表示
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <BusinessIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            ブルワリー登録
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="off"
                  id="name"
                  label="Name"
                  name="name"
                  variant="outlined"
                  autoFocus
                  fullWidth
                  required
                  onChange={event => setName(event.target.value)}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSubmit}
            >
              登録
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
