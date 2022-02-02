import React, { useState } from 'react';
import { useHistory } from 'react-router';
import Cookies from 'js-cookie';
import { signUp } from '../lib/api/auth';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

export const SignUp = () => {
  const history = useHistory();

  const [name, setName] = useState("")
  const [userId, setUserId] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirmation, setPasswordConfirmation] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()

    const params = {
      name: name,
      userId: userId,
      email: email,
      password: password,
      passwordConfirmation: passwordConfirmation
    }

    try {
      const res = await signUp(params)

      if (res.status === 200) {
        // ひとまずアカウント作成と同時にログインさせてしまう
        // TODO: メール確認などを挟む対応は別途対応する
        Cookies.set("_access_token", res.headers["access-token"])
        Cookies.set("_client", res.headers["client"])
        Cookies.set("_uid", res.headers["uid"])

        history.push("/")
      } else {
        // TODO: ステータスコードが200以外の場合はアラートを表示する
      }
    } catch (err) {
      // TODO: システムエラー発生時のアラートを表示する
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
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
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
              <Grid item xs={12}>
                <TextField
                  autoComplete="off"
                  id="user-id"
                  label="User ID"
                  name="user-id"
                  variant="outlined"
                  fullWidth
                  required
                  onChange={event => setUserId(event.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="off"
                  id="email"
                  label="Email Address"
                  name="email"
                  variant="outlined"
                  fullWidth
                  required
                  onChange={event => setEmail(event.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="off"
                  id="password"
                  label="Password"
                  name="password"
                  type="password"
                  variant="outlined"
                  fullWidth
                  required
                  onChange={event => setPassword(event.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="off"
                  id="password-confirmation"
                  label="Password Confirmation"
                  name="password-confirmation"
                  type="password"
                  variant="outlined"
                  fullWidth
                  required
                  onChange={event => setPasswordConfirmation(event.target.value)}
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
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/signin" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
