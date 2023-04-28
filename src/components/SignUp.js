import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  TextField,
  Typography,
  Link,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { Link as RLink } from "react-router-dom";

const SignUp = (props) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm({ mode: "all" });

  const submitFormHandler = (event) => {
    props.SignUpSubmitHandler(event.email, event.username, event.password);
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
          sign up
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
            label="email"
            name="email"
            autoComplete="email"
            type="email"
            error={errors.email ? true : false}
            helperText={errors.email ? errors.email.message : undefined}
            {...register("email", {
              required: {
                value: true,
                message: "Email is Required",
              },
            })}
          />
          <TextField
            required
            margin="normal"
            id="username"
            label="username"
            name="username"
            placeholder="username"
            error={errors.username ? true : false}
            helperText={errors.username ? errors.username.message : undefined}
            {...register("username", {
              required: { value: true, message: "Username is Required" },
            })}
          />

          <TextField
            required
            margin="normal"
            id="password"
            label="password"
            name="password"
            autoComplete="current-password"
            autoFocus
            error={errors.password ? true : false}
            helperText={errors.password ? errors.password.message : undefined}
            type="password"
            {...register("password", {
              required: {
                value: true,
                message: "Password is Required",
              },
              minLength: {
                value: 6,
                message: "Password is Requird",
              },
            })}
          />
          <FormControlLabel
            control={<Checkbox value="remember" />}
            label="remember me"
          />
          <Button variant="contained" type="submit">
            Sign Up
          </Button>
          <Link component={RLink} to="/sign-in" variant="body2">
            {"have an account? Sign In"}
          </Link>
        </Box>
      </Box>
    </Container>
  );
};
export default SignUp;
