"use client";
import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Link from "next/link";
import ProfileIcon from "./ProfileIcon";
import { usePathname } from "next/navigation";
import { NavLinks } from "./NavData/navigationLinks";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function SideMenu({children}) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [expend, setExpend] = React.useState(false);

  const DrawerHeaderOpenClose = ()=>{
    setExpend(!expend);

  }


  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const pathname = usePathname();

  // React.useEffect(() => {
  //   if (NavLinks?.map((text, index) => pathname.includes(text.value) === true)) {
  //     setExpend(true);
  //   }
  // }, []);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>

          {/* Nav */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            className="flex items-center justify-between fixed left-10 right-0 px-12 h-14 text-white"
          >
            <Link className="font-bold items-center" href={"/"}>
              CoDe:
            </Link>
            <ProfileIcon />
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
 
        <List>
          {NavLinks?.map((text, index) => {
              const defaultExpanded = text.subChild.some((value) =>
              pathname.includes(value.path)
            );

            const isExpanded = expend[index] !== undefined ? expend[index] : defaultExpanded;
        return    (<ListItem key={index}>
              <ListItemButton>
                <Accordion expanded={expend} key={index} >
                  <AccordionSummary
                    className={
                      pathname.includes(text.value) === true ? "active" : ""
                    }
                    onClick ={DrawerHeaderOpenClose}
                    style={{ fontSize: " 25px" }}
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    {text.title}
                  </AccordionSummary>
                  {text.subChild.map((value) => (
                    <Link href={value.path}>
                      <AccordionDetails
                        value={value.id}
                        className={
                          pathname.includes(value.value) === true
                            ? "active"
                            : ""
                        }
                      >
                        {value.name}
                      </AccordionDetails>
                    </Link>
                  ))}
                </Accordion>
              </ListItemButton>
            </ListItem>)
})}
        </List>

        <Divider />
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        {children}
      </Main>
    </Box>
  );
}
