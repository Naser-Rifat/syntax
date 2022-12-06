import { Alert, Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useStateContext } from "../../Contexts/ContextProvider";

const Register = () => {
  const {
    firebaseContext: { error, registerUser, setError, success },
  } = useStateContext();
  const [registerInfo, setRegisterInfo] = useState({});
  const navigate = useNavigate();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newinfo = { ...registerInfo };
    newinfo[field] = value;
    setRegisterInfo(newinfo);
  };

  const handleRegisterSubmit = (e) => {
    if (registerInfo.password !== registerInfo.password2) {
      setError("password didn't matched");
      return;
    }
    registerUser(
      registerInfo.email,
      registerInfo.password,
      registerInfo.name,
      navigate
    );
    e.preventDefault();
  };
  return (
    <div className="h-screen justify-center items-center block mt-20">
      <Box>
        <Typography
          variant="h4"
          justifyContent={"center"}
          gutterBottom
          component="div"
          style={{ textAlign: "center" }}
        >
          Register
        </Typography>
        <Box className=" text-center py-2 ">
          <form onSubmit={handleRegisterSubmit} style={{ margin: "50px" }}>
            <TextField
              required
              sx={{ width: "60%", m: 2 }}
              type="text"
              name="name"
              onBlur={handleOnBlur}
              label="Name"
              variant="standard"
            />

            <TextField
              required
              sx={{ width: "60%", m: 2 }}
              type="email"
              name="email"
              onBlur={handleOnBlur}
              label="Email"
              variant="standard"
            />
            <TextField
              required
              sx={{ width: "60%", m: 2 }}
              type="password"
              name="password"
              onBlur={handleOnBlur}
              label="password"
              variant="standard"
            />

            <TextField
              required
              sx={{ width: "60%", m: 2 }}
              type="password"
              name="password2"
              onBlur={handleOnBlur}
              label="Re-Type-Password"
              variant="standard"
            />

            <Button
              type="submit"
              variant="contained"
              sx={{ width: "60%", background: "#7362F9" }}
            >
              Submit
            </Button>

            {success && (
              <Alert sx={{ width: "60%" }} severity="success">
                Sucessfully Registered
              </Alert>
            )}
            {error && (
              <Alert sx={{ width: "60%" }} severity="error">
                {" "}
                {error}
              </Alert>
            )}
          </form>
          <Link to="/login">
            {" "}
            <Button sx={{ width: "60%", mt: 5 }}>Sign In ?</Button>
          </Link>
        </Box>
      </Box>
    </div>
  );
};

export default Register;
