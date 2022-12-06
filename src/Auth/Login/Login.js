import { Alert, Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
// import login from "../../../Images/login.png";
import { useNavigate } from "react-router-dom";
import { useStateContext } from "../../Contexts/ContextProvider";

// import { useForm } from "react-hook-form";

const Login = () => {
  const {
    firebaseContext: { error, loginUser, isLoading },
  } = useStateContext();
  const [logininfo, setLoginInfo] = useState({});
  const location = useLocation();
  const navigate = useNavigate();

  // const { register, handleSubmit } = useForm();
  // const onSubmit = data => console.log(data);

  const handleOnchange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newinfo = { ...logininfo };
    newinfo[field] = value;
    setLoginInfo(newinfo);
  };

  const handleLoginSubmit = (e) => {
    loginUser(logininfo.email, logininfo.password, location, navigate);
    e.preventDefault();
  };
  // const handleGoogleSignIn = () => {
  //     GoogleSignIn(location, history)
  // }

  return (
    <div>
      <Box className="h-screen justify-center items-center block mt-20">
        <Typography
          variant="h4"
          justifyContent={"center"}
          gutterBottom
          component="div"
          style={{ textAlign: "center" }}
        >
          Login
        </Typography>

        <Box className=" text-center py-2 ">
          <form onSubmit={handleLoginSubmit} style={{ margin: "50px" }}>
            <TextField
              sx={{ width: "60%", m: 2 }}
              type="email"
              label="Email"
              name="email"
              onBlur={handleOnchange}
              variant="standard"
            />
            <TextField
              sx={{ width: "60%", m: 2 }}
              type="password"
              label="password"
              name="password"
              onBlur={handleOnchange}
              variant="standard"
            />
            <Button
              type="submit"
              variant="contained"
              sx={{ width: "60%", background: "#7362F9" }}
            >
              Login
            </Button>
          </form>

          {error && (
            <Alert className="mx-auto" sx={{ width: "60%" }} severity="error">
              {" "}
              {error}
            </Alert>
          )}
          <Link to="/register">
            {" "}
            <Button sx={{ width: "60%", my: 5 }}>Create Account ?</Button>
          </Link>
        </Box>
      </Box>
    </div>
  );
};

export default Login;
