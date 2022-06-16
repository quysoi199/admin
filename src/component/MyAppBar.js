import * as React from "react";
import { AppBar } from "react-admin";
import Typography from "@mui/material/Typography";

const MyAppBar = (props) => (
  <AppBar
    sx={{
      "& .RaAppBar-title": {
        flex: 1,
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        overflow: "hidden",
      },
    }}
    {...props}
  >
    <Typography
      variant="h6"
      color="inherit"
      className="classes.title"
      id="react-admin-title"
    />

    <span className="classes.spacer" />
  </AppBar>
);

export default MyAppBar;
