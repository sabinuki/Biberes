import React, { useState } from 'react';
import { useHistory } from 'react-router';
import Cookies from 'js-cookie';
import { signUp } from '../lib/api/auth';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export const SignUp = () => {
  const classes = useStyles();
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
      console.log(res)

      if (res.status === 200) {
        // ひとまずアカウント作成と同時にログインさせてしまう
        // TODO: メール確認などを挟む対応は別途対応する
        Cookies.set("_access_token", res.headers["access-token"])
        Cookies.set("_client", res.headers["client"])
        Cookies.set("_uid", res.headers["uid"])

        history.push("/")

        console.log("Signed in successfully!")
      } else {
        // TODO: ステータスコードが200以外の場合はアラートを表示する
      }
    } catch (err) {
      console.log(err)
      // TODO: システムエラー発生時のアラートを表示する
    }
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
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
            className={classes.submit}
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
        </form>
      </div>
    </Container>
  );
}
