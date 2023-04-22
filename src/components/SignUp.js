import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";
import { useRef } from "react";
import { Link } from "react-router-dom";

const SignUp = (props) => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const usernameRef = useRef(null);

  const submitFormHandler = (event) => {
    event.preventDefault();
    console.log(emailRef.current.value);
    props.SignUpSubmitHandler(
      emailRef.current.value,
      usernameRef.current.value,
      passwordRef.current.value
    );

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
          sign up
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
            label="email"
            name="email"
            autoComplete="email"
            autoFocus
            inputRef={emailRef}
          />
          <TextField
            required
            margin="normal"
            id="username"
            label="username"
            name="username"
            autoComplete="username"
            autoFocus
            inputRef={usernameRef}
          />

          <TextField
            required
            margin="normal"
            id="password"
            label="password"
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
            Sign Up
          </Button>
          <Link href="/sign-in" variant="body2">
            {"have an account? Sign In"}
          </Link>
        </Box>
      </Box>
    </Container>
  );
};
export default SignUp;
