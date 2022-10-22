import { Box } from "@mui/material";
import React from "react";

const Rightbar = () => {
  return (
    <Box
      backgroundColor="grey"
      flex={3}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      Rightbar
    </Box>
  );
};

export default Rightbar;
