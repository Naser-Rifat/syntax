import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useStateContext } from "../../Contexts/ContextProvider";
const AddServices = () => {
  const {
    firebaseContext: { user },
  } = useStateContext();
  console.log(user);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios.post("http://localhost:5000/services", data).then((res) => {
      
    
      if (res?.data?.insertedId) {
        alert("inserted");
      }
    });
  };

  return (
    <div>
      <Container style={{ marginTop: "50px", margin: " 0 auto" }}>
        <Typography style={{ marginTop: "50px" }} variant="h3">
          Add Services
        </Typography>
        <Grid container spacing={2}>
          <Grid
            style={{ marginTop: "50px", margin: "50px auto" }}
            item
            xs={12}
            md={8}
          >
            <form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                placeholder="Img-Url"
                type="url"
                variant="standard"
                sx={{ width: "80%", marginY: "10px" }}
                {...register("img")}
              />

              <TextField
                placeholder="Service label"
                type="text"
                variant="standard"
                sx={{ width: "80%", marginY: "10px" }}
                {...register("label")}
              />
              <textarea
                placeholder="Description"
                type="text"
                variant="standard"
                style={{
                  width: "80%",
                  height: "100px",
                  padding: "5px",
                  marginTop: "10px",
                  border: "1px solid #000",
                }}
                {...register("description", { required: true })}
              />

              <Button
                variant="contained"
                type="submit"
                sx={{
                  width: "80%",
                  background: "#7362F9",
                  margin: "0 auto",
                }}
              >
                Submit
              </Button>
            </form>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default AddServices;
