import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../../contexts/AuthContext";
import { Grid } from "@mui/material";
import { useState } from "react";
import "./AppBarMenu.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useTranslation } from "react-i18next";

export default function AppBarMenu() {
  const { authorization, dataToken, logout } = useAuthContext();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const { t, i18n } = useTranslation();

  const pages = [
    { nombre: t("buttonIni"), ruta: "/" },
    { nombre: t("buttonProduct"), ruta: "/productos" },
    { nombre: t("buttonConf"), ruta: "/configurador" },
    { nombre: t("buttonProy"), ruta: "/proyectos" },
    { nombre: t("buttonAbout"), ruta: "/nosotros" },
    { nombre: t("buttonContact"), ruta: "/contacto" },
  ];
  const settings = [{ nombre: t("buttonProfile"), ruta: "/account" }];
  const settingsAdmin = [{ nombre: "Dashboard", ruta: "/dashboard" }];

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  function handleLogout() {
    logout();
    setAnchorElUser(null);
  }

  function changeLanguageFr() {
    i18n.changeLanguage("fr");
  }

  function changeLanguageEs() {
    i18n.changeLanguage("es");
  }

  function changeLanguageEn() {
    i18n.changeLanguage("en");
  }

  return (
    <AppBar position="static" sx={{ background: "none", boxShadow: "none" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
            justifyContent="space-between"
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="default"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page, index) => (
                <Link
                  key={index}
                  to={page.ruta}
                  style={{ textDecoration: "none", color: "#3b8f1e" }}
                >
                  <MenuItem
                    key={index}
                    onClick={handleCloseNavMenu}
                    color="#3b8f1e"
                    sx={{ ":hover": { bgcolor: "#3b8f1e", color: "white" } }}
                  >
                    <Typography textAlign="center">{page.nombre}</Typography>
                  </MenuItem>
                </Link>
              ))}

              {!authorization && (
                <Link to="/login" style={{ textDecoration: "none" }}>
                  <MenuItem key={8} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center" color="green">
                      Login / Register
                    </Typography>
                  </MenuItem>
                </Link>
              )}
              <Grid
                sx={{
                  display: {
                    xs: "flex",
                    md: "none",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 10,
                  },
                  ml: 2,
                }}
              >
                <Grid>
                  <IconButton
                    key={9}
                    size="large"
                    className="button fr is-large"
                    onClick={changeLanguageFr}
                  ></IconButton>
                </Grid>
                <Grid>
                  <IconButton
                    size="large"
                    key={10}
                    className="button es is-large"
                    onClick={changeLanguageEs}
                  ></IconButton>
                </Grid>
                <Grid>
                  <IconButton
                    size="large"
                    key={10}
                    className="button en is-large"
                    onClick={changeLanguageEn}
                  ></IconButton>
                </Grid>
              </Grid>
            </Menu>
            {authorization ? (
              <Box sx={{ flexGrow: 0, mt: 1 }}>
                <Tooltip title="Abrir Opciones">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      alt={dataToken.email.toUpperCase()}
                      src={"/"}
                      sx={{ bgcolor: "#d3b72a" }}
                    />
                  </IconButton>
                </Tooltip>
                {dataToken.role == 1 ? (
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                    sx={{ mt: "45px" }}
                  >
                    {settingsAdmin.map((page, index) => (
                      <Link
                        key={index}
                        to={page.ruta}
                        style={{ textDecoration: "none" }}
                      >
                        <MenuItem key={index} onClick={handleCloseUserMenu}>
                          <Typography textAlign="center" color="text.primary">
                            {page.nombre}
                          </Typography>
                        </MenuItem>
                      </Link>
                    ))}
                    <MenuItem key="Logout" onClick={handleLogout}>
                      <Typography textAlign="center">Logout</Typography>
                    </MenuItem>
                  </Menu>
                ) : (
                  <Menu
                    sx={{ mt: "45px" }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    {settings.map((page, index) => (
                      <Link
                        key={index}
                        to={page.ruta}
                        style={{ textDecoration: "none" }}
                      >
                        <MenuItem key={index} onClick={handleCloseUserMenu}>
                          <Typography textAlign="center" color="text.primary">
                            {page.nombre}
                          </Typography>
                        </MenuItem>
                      </Link>
                    ))}
                    <MenuItem key="Logout" onClick={handleLogout}>
                      <Typography textAlign="center">Logout</Typography>
                    </MenuItem>
                  </Menu>
                )}
              </Box>
            ) : (
              <Grid sx={{ display: { xs: "none", md: "inline" } }}>
                <Link to="/login" style={{ textDecoration: "none" }}>
                  <Button
                    key={8}
                    onClick={handleCloseNavMenu}
                    sx={{
                      my: 2,
                      display: "block",
                      color: "#3b8f1e",
                      ":hover": { bgcolor: "#3b8f1e", color: "white" },
                    }}
                  >
                    <Typography fontWeight="bold"> Login / Register</Typography>
                  </Button>
                </Link>
              </Grid>
            )}
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              gap: 4,
            }}
          >
            <Grid display="flex">
              {pages.map((page, index) => (
                <Link
                  key={index}
                  to={page.ruta}
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    key={index}
                    onClick={handleCloseNavMenu}
                    sx={{
                      my: 2,
                      color: "#3b8f1e",
                      display: "block",
                      ":hover": { bgcolor: "#3b8f1e", color: "white" },
                    }}
                  >
                    <Typography fontWeight="bold">{page.nombre}</Typography>
                  </Button>
                </Link>
              ))}
            </Grid>

            {authorization ? (
              <Box sx={{ flexGrow: 0, display: "flex", alignItems: "center" }}>
                <Tooltip title="Abrir Opciones">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      alt={dataToken.email.toUpperCase()}
                      src={"/"}
                      sx={{ bgcolor: "#d3b72a" }}
                    >
                      <AccountCircleIcon />
                    </Avatar>
                  </IconButton>
                </Tooltip>
                {dataToken.role == 1 ? (
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                    sx={{ mt: "45px" }}
                  >
                    {settingsAdmin.map((page, index) => (
                      <Link
                        key={index}
                        to={page.ruta}
                        style={{ textDecoration: "none" }}
                      >
                        <MenuItem key={index} onClick={handleCloseUserMenu}>
                          <Typography textAlign="center" color="text.primary">
                            {page.nombre}
                          </Typography>
                        </MenuItem>
                      </Link>
                    ))}
                    <MenuItem key="Logout" onClick={handleLogout}>
                      <Typography textAlign="center">Logout</Typography>
                    </MenuItem>
                  </Menu>
                ) : (
                  <Menu
                    sx={{ mt: "45px" }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    {settings.map((page, index) => (
                      <Link
                        key={index}
                        to={page.ruta}
                        style={{ textDecoration: "none" }}
                      >
                        <MenuItem key={index} onClick={handleCloseUserMenu}>
                          <Typography textAlign="center" color="text.primary">
                            {page.nombre}
                          </Typography>
                        </MenuItem>
                      </Link>
                    ))}
                    <MenuItem key="Logout" onClick={handleLogout}>
                      <Typography textAlign="center">Logout</Typography>
                    </MenuItem>
                  </Menu>
                )}
              </Box>
            ) : (
              <Grid sx={{ display: { xs: "none", md: "inline" } }}>
                <Link to="/login" style={{ textDecoration: "none" }}>
                  <Button
                    key={8}
                    onClick={handleCloseNavMenu}
                    sx={{
                      my: 2,
                      display: "block",
                      color: "#3b8f1e",
                      ":hover": { bgcolor: "#3b8f1e", color: "white" },
                    }}
                  >
                    <Typography fontWeight="bold"> Login / Register</Typography>
                  </Button>
                </Link>
              </Grid>
            )}
            <Grid
              sx={{
                display: {
                  xs: "none",
                  md: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 10,
                },
                ml: 1,
              }}
            >
              <Grid>
                <IconButton
                  key={9}
                  size="large"
                  className="button fr is-large"
                  onClick={changeLanguageFr}
                ></IconButton>
              </Grid>
              <Grid>
                <IconButton
                  size="large"
                  key={10}
                  className="button es is-large"
                  onClick={changeLanguageEs}
                ></IconButton>
              </Grid>
              <Grid>
                <IconButton
                  size="large"
                  key={10}
                  className="button en is-large"
                  onClick={changeLanguageEn}
                ></IconButton>
              </Grid>
            </Grid>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
