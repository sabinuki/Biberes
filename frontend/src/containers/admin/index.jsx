import React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { Container, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LinkButton from 'components/Buttons/LinkButton';

const theme = createTheme();

export const Index = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="false">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h3">
            Biberes管理者ページ
          </Typography>
          <Typography component="h1" variant="subtitle" sx={{marginTop: 4, marginBottom: 2}}>
            管理者機能
          </Typography>
          <LinkButton link="/admin/brewery-user-form" text="ブルワリーユーザー登録" />
        </Box>
      </Container>
    </ThemeProvider>
  );
}
