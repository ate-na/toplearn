import MainLayout from "./layout/MainLayout";
import { ThemeContextProvider } from "./context/theme-context";
import Login from "./components/Login";
import { Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp";
import { useState } from "react";
import Preferences from "./components/Preferences";
function App() {
  const [token, setToken] = useState("");

  const signUpHandler = async (email, username, password) => {
    console.log("data", email, password, username);
    try {
      const data = await fetch("http://localhost:3001/api/v1/auth/signup", {
        method: "POST",
        headers: {
          "access-control-allow-origin": "*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, username, password }),
      });
      console.log("data", data);
    } catch (error) {
      console.log("error", error);
    }
  };

  const loginHandler = async (email, password) => {
    console.log("data", email, password);
    let response;
    try {
      response = await fetch("http://localhost:3001/api/v1/auth/signin", {
        body: JSON.stringify({ email, password }),
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("response", response);
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <>
      <ThemeContextProvider>
        <MainLayout>
          <Routes>
            {!token && (
              <Route
                path="/sign-in"
                element={<Login loginHandler={loginHandler} />}
              />
            )}
            {!token && (
              <Route
                path="/sign-up"
                element={<SignUp SignUpSubmitHandler={signUpHandler} />}
              />
            )}
            <Route path="/dashbord" element={<Preferences />} />
          </Routes>
        </MainLayout>
      </ThemeContextProvider>
    </>
  );
}
export default App;
