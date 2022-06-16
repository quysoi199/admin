import React from "react";
import { defaultTheme, useTheme } from "react-admin";
import { Button } from "@mui/material";

const lightTheme = defaultTheme;
const darkTheme = {
  ...defaultTheme,
  palette: {
    mode: "light",
  },
};
function ThemeToggler() {
  const [theme, setTheme] = useTheme();

  return (
    <div>
      <Button
        onClick={() =>
          setTheme(theme.palette.mode === "light" ? lightTheme : darkTheme)
        }
      >
        {theme.palette.mode === "light"
          ? "Switch to dark theme"
          : "Switch to light theme"}
      </Button>
    </div>
  );
}

export default ThemeToggler;
