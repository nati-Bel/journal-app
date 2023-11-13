import { Google } from '@mui/icons-material';
import { Grid, TextField, Typography, Button, Link } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom';
import { AuthLayout } from '../layout/AuthLayout';

export const LoginPage = () => {
  return (
    <>
      <AuthLayout title="Login">
        <form>
          <Grid container>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Email"
                type="email"
                placeholder="email@email.com"
                fullWidth
              ></TextField>
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Password"
                type="password"
                placeholder="password"
                fullWidth
              ></TextField>

              <Grid container spacing={2} sx={{ mt: 1, mb: 2 }}>
                <Grid item xs={12} sm={6}>
                  <Button variant="contained" fullWidth>
                    LOGIN
                  </Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button variant="contained" fullWidth>
                    <Google />
                    <Typography sx={{ ml: 1 }}>Google</Typography>
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid container direction="row" justifyContent="end">
              <Link component={RouterLink} color="inherit" to="/auth/register">
                Create new account
              </Link>
            </Grid>
          </Grid>
        </form>
      </AuthLayout>
    </>
  );
}
