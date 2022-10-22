import Sidebar from "./components/Sidebar";
import Rightbar from "./components/Rightbar";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import { Box } from "@mui/material";
import { Stack } from "@mui/system";

function App() {

  return (
    <Box>
      <Navbar/>
      <Stack direction="row" spacing={13} justifyContent="center">
      <Sidebar/>
      <Feed/>
      <Rightbar/>
      </Stack>
    </Box>
  );
}

export default App;
