import { Container } from "@mui/material";
import React from "react";
import Header from "../components/Header/Header";

const MainLayout = ({ children }) => {
  return (
    <Container>
      <Header />
      <main>{children}</main>
    </Container>
  );
};

export default MainLayout;
