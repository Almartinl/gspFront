import * as React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import PeopleIcon from "@mui/icons-material/People";
import ViewInArOutlinedIcon from "@mui/icons-material/ViewInArOutlined";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import CategoryIcon from "@mui/icons-material/Category";
import ConstructionIcon from "@mui/icons-material/Construction";
import TableViewIcon from "@mui/icons-material/TableView";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import { useState } from "react";
import { useEffect } from "react";

export default function DashboardInicio() {
  document.title = "Dashboard Inicio";

  const [countUser, setCountUser] = useState([]);
  const [countModels, setCountModels] = useState([]);
  const [countPresupuestos, setCountPresupuestos] = useState([]);
  const [countFormContact, setCountFormContact] = useState([]);
  const [countObras, setCountObras] = useState([]);
  const [countOffer, setCountOffer] = useState([]);

  useEffect(() => {
    async function fetchCount() {
      const response = await fetch(
        "https://globalsolutionsprefabriquees.com/api/user/count"
      );
      const data = await response.json();
      setCountUser(data);
      console.log(data);
    }
    fetchCount();
  }, []);

  useEffect(() => {
    async function fetchCount() {
      const response = await fetch(
        "https://globalsolutionsprefabriquees.com/api/config/"
      );
      const data = await response.json();
      setCountModels(data);
      console.log(data);
    }
    fetchCount();
  }, []);

  useEffect(() => {
    async function fetchCount() {
      const response = await fetch(
        "https://globalsolutionsprefabriquees.com/api/user/count/contact"
      );
      const data = await response.json();
      setCountFormContact(data);
      console.log(data);
    }
    fetchCount();
  }, []);

  useEffect(() => {
    async function fetchCount() {
      const response = await fetch(
        "https://globalsolutionsprefabriquees.com/api/bungalows/count/presupuestos"
      );
      const data = await response.json();
      setCountPresupuestos(data);
      console.log(data);
    }
    fetchCount();
  }, []);

  useEffect(() => {
    async function fetchCount() {
      const response = await fetch(
        "https://globalsolutionsprefabriquees.com/api/obras/count"
      );
      const data = await response.json();
      setCountObras(data);
    }
    fetchCount();
  }, []);

  useEffect(() => {
    async function fetchProyectos() {
      const response = await fetch(
        "https://globalsolutionsprefabriquees.com/api/product/offer"
      );
      const data = await response.json();
      setCountOffer(data);
    }
    fetchProyectos();
  }, []);

  return (
    <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: 240,
            }}
          >
            <Grid
              container
              textAlign="center"
              flexDirection="column"
              gap="56px"
            >
              <Typography variant="h4" color="#3b8f1e">
                Usuarios
              </Typography>

              <Typography
                variant="h4"
                color="text.secondary"
                gutterBottom
                fontWeight="bold"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "5%",
                }}
              >
                <PeopleIcon fontSize="large" />
                {countUser.length > 0 && countUser[0].usuarios}
              </Typography>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "row",
              height: 240,
            }}
          >
            <Grid
              container
              textAlign="center"
              flexDirection="column"
              gap="56px"
            >
              <Typography variant="h4" color="#3b8f1e">
                Modelos del Configurador
              </Typography>

              <Typography
                variant="h4"
                color="text.secondary"
                gutterBottom
                fontWeight="bold"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "5%",
                }}
              >
                <ViewInArOutlinedIcon fontSize="large" />
                {countModels.length > 0 && countModels[0].modelos}
              </Typography>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "row",
              height: 240,
            }}
          >
            <Grid
              container
              textAlign="center"
              flexDirection="column"
              gap="56px"
            >
              <Typography variant="h4" color="#3b8f1e">
                Presupuestos Pendientes
              </Typography>

              <Typography
                variant="h4"
                color="text.secondary"
                gutterBottom
                fontWeight="bold"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "5%",
                }}
              >
                <TableViewIcon fontSize="large" />
                {countPresupuestos.length > 0 &&
                  countPresupuestos[0].presupuesto}
              </Typography>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "row",
              height: 240,
            }}
          >
            <Grid
              container
              textAlign="center"
              flexDirection="column"
              gap="56px"
            >
              <Typography variant="h4" color="#3b8f1e">
                Formularios Pendientes
              </Typography>

              <Typography
                variant="h4"
                color="text.secondary"
                gutterBottom
                fontWeight="bold"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "5%",
                }}
              >
                <ReceiptLongIcon fontSize="large" />
                {countFormContact.length > 0 && countFormContact[0].contactos}
              </Typography>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "row",
              height: 240,
            }}
          >
            <Grid
              container
              textAlign="center"
              flexDirection="column"
              gap="56px"
            >
              <Typography variant="h4" color="#3b8f1e">
                Ofertas
              </Typography>

              <Typography
                variant="h4"
                color="text.secondary"
                gutterBottom
                fontWeight="bold"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "5%",
                }}
              >
                <LocalOfferIcon fontSize="large" />
                {countOffer.length >= 0 && countOffer.length}
              </Typography>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "row",
              height: 240,
            }}
          >
            <Grid
              container
              textAlign="center"
              flexDirection="column"
              gap="56px"
            >
              <Typography variant="h4" color="#3b8f1e">
                Nuestras Obras
              </Typography>

              <Typography
                variant="h4"
                color="text.secondary"
                gutterBottom
                fontWeight="bold"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "5%",
                }}
              >
                <ConstructionIcon fontSize="large" />
                {countObras.length > 0 && countObras[0].obras}
              </Typography>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
