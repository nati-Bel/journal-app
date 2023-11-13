
import { Grid, TextField, Typography, Button, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";

export const RegisterPage = () => {
  return (
    <>
      <AuthLayout title="Create account">
        <form>
          <Grid container>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Full Name"
                type="text"
                placeholder="Your full name"
                fullWidth
              ></TextField>
            </Grid>
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
                <Grid item xs={12}>
                  <Button variant="contained" fullWidth>
                    Create account
                  </Button>
                </Grid>
                
              </Grid>
            </Grid>
            <Grid container direction="row" justifyContent="end">
              <Typography sx={{mr:1}}>Already have an account?</Typography>
              <Link component={RouterLink} color="inherit" to="auth/login">
                Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </AuthLayout>
    </>
  );
};
