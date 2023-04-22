import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";

const Login = () => {
  const submitFormHandler = (data) => {
    data.prevantDefault();
    console.log("data", data);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5" align="center">
          sign in
        </Typography>
        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
          onSubmit={submitFormHandler}
        >
          <TextField
            required
            margin="normal"
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            required
            margin="normal"
            id="password"
            label="password Address"
            name="password"
            autoComplete="current-password"
            autoFocus
          />
          <FormControlLabel
            control={<Checkbox value="remember" />}
            label="remember me"
          />
          <Button variant="contained" type="submit">
            Sign In
          </Button>
          <Grid container>
            <Grid item>
              <Link variant="body2">Forgot Password?</Link>
            </Grid>
            <Grid item>
              <Link href="/sign-up" variant="body2">
                {" "}
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
