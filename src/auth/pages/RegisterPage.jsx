
import { Grid, TextField, Typography, Button, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";

const formData = {
  email: "nati@nati.com",
  password: "12345",
  displayName: "Nati Bel"
};

const formValidations = {
  email: [(value) => value.includes("@"), "An email must contain a @"],
  password: [
    (value) => value.length >= 6,
    "A password must have at least 6 characters",
  ],
  displayName: [
    (value) => value.length >= 1,
    "A name is required",
  ],
};

export const RegisterPage = () => {
const { displayName, email, password, onInputChange, formState, isFormValid, displayNameValid, emailValid, passwordValid } = useForm(formData, formValidations);

const onSubmit = ( event) => {
  event.preventDefault();
  console.log(formState)
}

  return (
    <>
      <AuthLayout title="Create account">
        <form onSubmit={onSubmit}>
          <Grid container>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Full Name"
                type="text"
                placeholder="Your full name"
                fullWidth
                name="displayName"
                value={displayName}
                onChange={onInputChange}
                error={!displayNameValid}
                helperText={displayNameValid}
              ></TextField>
            </Grid>
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

              <Grid container spacing={2} sx={{ mt: 1, mb: 2 }}>
                <Grid item xs={12}>
                  <Button 
                  type="submit"
                  variant="contained" 
                  fullWidth>
                    Create account
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid container direction="row" justifyContent="end">
              <Typography sx={{ mr: 1 }}>Already have an account?</Typography>
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
