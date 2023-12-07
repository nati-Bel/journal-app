import { Google } from '@mui/icons-material';
import { Grid, TextField, Typography, Button, Link, Alert } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';
import { useDispatch, useSelector } from 'react-redux';
import { startGoogleSignIn, startLoginWithEmailPassword } from '../../store/auth';
import { useMemo } from 'react';

export const LoginPage = () => {

  const { status, errorMessage } = useSelector(state => state.auth)

  const dispatch = useDispatch();

  const {email, password, onInputChange} = useForm({
    email: 'nati@nati.com',
    password: '12345'
  });

  const isAuthenticating = useMemo( () => status ==='checking', [status])

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch( startLoginWithEmailPassword( {email, password})) ;

  }

  const onGoogleSignIn = () => {
    console.log('onGoogleSignIn');
    dispatch(startGoogleSignIn())
  }

  
  


  return (
    <>
      <AuthLayout title="Login">
        <form onSubmit={onSubmit}>
          <Grid container>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Email"
                type="email"
                placeholder="email@email.com"
                fullWidth
                name="email"
                value={email}
                onChange={onInputChange}
              ></TextField>
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Password"
                type="password"
                placeholder="password"
                fullWidth
                name="password"
                value={password}
                onChange={onInputChange}
              ></TextField>

              <Grid
                container
                display={!!errorMessage ? "" : "none"}
                sx={{ mt: 1 }}
              >
                <Grid item xs={12}>
                  <Alert severity="error">{errorMessage}</Alert>
                </Grid>
              </Grid>
              <Grid container spacing={2} sx={{ mt: 1, mb: 2 }}>
                <Grid item xs={12} sm={6}>
                  <Button
                    disabled={isAuthenticating}
                    type="submit"
                    variant="contained"
                    fullWidth
                  >
                    LOGIN
                  </Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button
                    disabled={isAuthenticating}
                    variant="contained"
                    fullWidth
                    onClick={onGoogleSignIn}
                  >
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
