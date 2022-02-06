import React from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useDispatch, useSelector } from 'react-redux';
import { userSlice, selectUser } from '../../features/userSlice';
import { signOut } from '../../lib/api/auth';
import Cookies from 'js-cookie';

export default function ButtonAppBar() {
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
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Biberes
          </Typography>
          <Button color="inherit" component={Link} to="/styles">スタイル一覧</Button>
          <Button color="inherit" component={Link} to="/breweries">ブルワリー一覧</Button>
          {accountButton}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
