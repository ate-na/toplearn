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
import { Link as MLink } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: "all" });

  const submitFormHandler = (data) => {
    console.log("data", data);
    props.loginHandler(data.email, data.password);
    reset();
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
          onSubmit={handleSubmit(submitFormHandler)}
        >
          <TextField
            required
            margin="normal"
            id="email"
            label="Email Address"
            name="email"
            error={errors.email ? true : false}
            helperText={errors?.email?.message || undefined}
            type="email"
            {...register("email", {
              required: {
                value: true,
                message: "Email is required",
              },
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: "Email is not valid.",
              },
            })}
          />
          <TextField
            margin="normal"
            id="password"
            type="password"
            label="password Address"
            name="password"
            error={errors.password ? true : false}
            helperText={errors?.password?.message || undefined}
            {...register("password", {
              required: {
                value: true,
                message: "password is required",
              },
              minLength: {
                value: 6,
                message: "password is not valid.",
              },
            })}
          />
          {console.log(errors)}
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
              <Link component={MLink} to="/sign-up" variant="body2">
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
