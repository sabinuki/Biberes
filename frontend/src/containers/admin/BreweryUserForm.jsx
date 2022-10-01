import React, { useState } from 'react';
import { useHistory } from 'react-router';
import Cookies from 'js-cookie';
import { signUp } from 'lib/api/auth';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import PersonIcon from '@mui/icons-material/Person';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

export const BreweryUserForm = () => {
  const history = useHistory();

  const [name, setName] = useState("")
  const [userId, setUserId] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirmation, setPasswordConfirmation] = useState("")
  const [errors, setErrors] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()

    const params = {
      name: name,
      userId: userId,
      email: email,
      password: password,
      passwordConfirmation: passwordConfirmation,
      roll: "brewery",
    }

    try {
      const res = await signUp(params)

      if (res.status === 200) {
        if (res.data.status === 'ERROR') {
          // TODO: サーバサイドのエラー時の見せ方を工夫する
          setErrors('登録処理エラーが発生しました。一時的にサービスが利用できません。')
          return
        }
        // TODO: ブルワリーユーザー登録完了メッセージを表示する
        history.push("/admin")
      } else {
        setErrors('サーバー通信エラーが発生しました。一時的にサービスが利用できません。')
      }
    } catch (err) {
      setErrors('エラーが発生しました。一時的にサービスが利用できません。')
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
            <PersonIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            ブルワリーユーザー登録
          </Typography>
          <Typography>
            {errors}
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
              登録
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
