import Post from "./Post";
import { Box } from "@mui/material";
import React from "react";

const Feed = () => {
  return (
    <Box flex={4} p={5} >
      <Post />
      <Post />
      <Post />
      <Post />
    </Box>
  );
};

export default Feed;
