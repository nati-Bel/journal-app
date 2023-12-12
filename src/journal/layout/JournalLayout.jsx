import { Toolbar, Box } from "@mui/material"
import { SideBar, NavBar } from "../components";



const drawerWidth = 240;
export const JournalLayout = ({ children }) => {
  return (
    <Box
      sx={{ display: "flex" }}
      className="animate__animated animate__fadeIn animate__faster"
    >
      <NavBar drawerWidth={drawerWidth}></NavBar>
      <SideBar drawerWidth={drawerWidth}></SideBar>

      <Box component="main" sx={{ flexGrow: 1, p: 3, ml: "240px" }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}
