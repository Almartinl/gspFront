import * as React from "react";
import Grid from "@mui/material/Grid";
import AppBarMenu from "./AppBarMenu/AppBarMenu";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <Grid container justifyContent="center">
        <Grid
          sx={{
            display: { xs: "none", md: "flex" },
            position: { xs: "absolute", md: "relative" },
          }}
        >
          <Link to="/">
            <img src="../../globallogo.png" alt="foto" width="400px" />
          </Link>
        </Grid>
        <Grid
          sx={{
            display: { md: "none" },
            position: { xs: "absolute", md: "relative" },
          }}
        >
          <Link to="/">
            <img src="../../globallogo.png" width="200px" alt="foto" />
          </Link>
        </Grid>
      </Grid>
      <AppBarMenu />
    </>
  );
}
