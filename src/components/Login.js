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
import { useRef } from "react";

const Login = (props) => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const submitFormHandler = (data) => {
    data.preventDefault();
    console.log("data", data);
    props.loginHandler(emailRef.current.value,passwordRef.current.value)
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
            type="email"
            inputRef={emailRef}
          />
          <TextField
            required
            margin="normal"
            id="password"
            type="password"
            label="password Address"
            name="password"
            autoComplete="current-password"
            autoFocus
            inputRef={passwordRef}
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
