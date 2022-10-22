import styled from "@emotion/styled";
import { Mail, Notifications, Pets } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Input,
  InputBase,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";

const StyledToolBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const StyledSearchBar = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: "16px",
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "flex",
  padding: "0 10px",
  gap: "9px",
  alignItems: "center",
}));

const Navbar = () => {
  return (
    <AppBar position="sticky">
      <StyledToolBar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          LAMA DEV
        </Typography>
        <StyledSearchBar>
          <InputBase placeholder="Search..."></InputBase>
        </StyledSearchBar>
        <Pets sx={{ display: { xs: "block", sm: "none " } }} />
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail color="action" />
          </Badge>
          <Badge badgeContent={4} color="error" padding="10px">
            <Notifications color="action" />
          </Badge>
          <Avatar sx={{ width: 30, height: 30 }} />
        </Icons>
      </StyledToolBar>
    </AppBar>
  );
};

export default Navbar;
