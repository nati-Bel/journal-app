import { TurnedInNot } from "@mui/icons-material";
import {
  Box,
  Drawer,
  Toolbar,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemButton,
  ListItemText,
  Grid
} from "@mui/material";


export const SideBar = ({drawerWidth=240}) => {
  return (
    <Box
      component="nav"
      sx={{ width: { sm: { drawerWidth } }, flexShrink: { sm:0 } }}
    >
      <Drawer
        variant="permanent"
        open
        sx={{
          display: { xs: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Natalia Belzarova
          </Typography>
        </Toolbar>
        <Divider />
        <List>
          {["January", "February", "March", "April", "May", "June"].map(
            (text) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <TurnedInNot />
                  </ListItemIcon>
                  <Grid container>
                    <ListItemText primary={text} />
                    <ListItemText secondary={"Lorem ipsum blablabla"} />
                  </Grid>
                </ListItemButton>
              </ListItem>
            )
          )}
        </List>
      </Drawer>
    </Box>
  );
}
