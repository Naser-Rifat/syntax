import { Box } from "@mui/material";
import React from "react";
import Services from "../../components/services/services";
import MainLayout from "../../layouts/MainLayout";

export const LandingPage = () => {
  return (
    <div>
      <MainLayout>
        <Box className="h-screen justify-center items-center">
          <Services />
        </Box>
      </MainLayout>
    </div>
  );
};
