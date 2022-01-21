import React from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useDispatch, useSelector } from 'react-redux';
import { userSlice, selectUser } from '../../features/userSlice';
import { signOut } from '../../lib/api/auth';
import Cookies from 'js-cookie';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const user = useSelector(selectUser);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSignOut = async (e) => {
    e.preventDefault();

    try {
      const res = await signOut();

      if(res.status === 200) {
        const { signout } = userSlice.actions;

        dispatch(signout(null));

        Cookies.remove("_access_token");
        Cookies.remove("_client");
        Cookies.remove("_uid");

        history.push("/signin");
      } else {
        // TODO: ステータスコードが200以外の場合はアラートを表示する
      }
    } catch (err) {
      // TODO: システムエラー発生時のアラートを表示する
    }
  };

  let accountButton = user ? <Button color="inherit" onClick={handleSignOut}>SignOut</Button>
  : <Button color="inherit" component={Link} to="/signin">SignIn</Button>;

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Biberes
          </Typography>
          <Button color="inherit" component={Link} to="/styles">スタイル一覧</Button>
          {accountButton}
        </Toolbar>
      </AppBar>
    </div>
  );
}
