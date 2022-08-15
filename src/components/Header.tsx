import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { getRoutePathFromKey } from "routes";

const Header = () => {
  const navigate = useNavigate();

  const handleRedirect = (event: any) => {
    const routeKey = event.target.value;

    if (routeKey === "about") {
      const redirectTo = getRoutePathFromKey(routeKey)!;
      navigate(redirectTo);
    }

    if (routeKey === "contact") {
      const redirectTo = getRoutePathFromKey(routeKey)!;
      navigate(redirectTo);
    }

    if (routeKey === "signOut") {
      const redirectTo = getRoutePathFromKey("login")!;
      navigate(redirectTo);
    }
  };

  return (
    <AppBar component="nav">
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, display: "block" }}
        >
          App
        </Typography>
        <Box sx={{ display: "block" }}>
          <Button sx={{ color: "#fff" }} onClick={handleRedirect} value="about">
            About
          </Button>
          <Button
            sx={{ color: "#fff" }}
            onClick={handleRedirect}
            value="contact"
          >
            Contact
          </Button>
          <Button
            sx={{ color: "#fff" }}
            onClick={handleRedirect}
            value="signOut"
          >
            Sign Out
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
