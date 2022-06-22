import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import HomeIcon from "@mui/icons-material/Home";
import CircleIcon from "@mui/icons-material/Circle";

import { DashboardMenuItem, MenuItemLink, useSidebarState } from "react-admin";

import SubMenu from "./SubMenu";

export const Menus = ({ dense = false }) => {
  const [state, setState] = useState({
    menuCatalog: true,
    menuSales: true,
    menuCustomers: true,
  });
  const [open] = useSidebarState();

  const handleToggle = (menu) => {
    setState((state) => ({ ...state, [menu]: !state[menu] }));
  };

  return (
    <Box
      sx={{
        width: open ? 200 : 50,
        marginTop: 1,
        marginBottom: 1,
        transition: (theme) =>
          theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
      }}
    >
      <DashboardMenuItem />
      <SubMenu
        handleToggle={() => handleToggle("manager")}
        name="Quản lý tích điểm"
        isOpen={state.manager}
        icon={<HomeIcon />}
        dense={dense}
      >
        <MenuItemLink
          to="/albums"
          primaryText="Rules"
          leftIcon={<CircleIcon sx={{ width: 12 }} />}
        />
        <MenuItemLink
          to="/posts"
          primaryText="Posts"
          leftIcon={<CircleIcon sx={{ width: 12 }} />}
        />
        <MenuItemLink
          to="/todos"
          primaryText="Todo"
          leftIcon={<CircleIcon sx={{ width: 12 }} />}
        />
        <MenuItemLink
          to="/users"
          primaryText="Users"
          leftIcon={<CircleIcon sx={{ width: 12 }} />}
        />
      </SubMenu>
    </Box>
  );
};

export default Menus;
