import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import { Box, Grid, IconButton, SvgIcon } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Footer() {
  const { t } = useTranslation();

  const pages = [
    { nombre: t("buttonIni"), ruta: "/" },
    { nombre: t("buttonProduct"), ruta: "/produits" },
    { nombre: t("buttonConf"), ruta: "/configurateur" },
    { nombre: t("buttonProy"), ruta: "/projets" },
    { nombre: t("buttonAbout"), ruta: "/nous" },
    { nombre: t("buttonContact"), ruta: "/contact" },
    { nombre: t("textTittlePolicity"), ruta: "/policity" },
  ];

  function Copyright(props) {
    return (
      <Typography variant="body2" color="white" align="left" {...props}>
        {"Copyright © "}
        Global Solutions Prefabriquees {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  }

  return (
    <Grid bgcolor="#3b8f1e">
      <Container
        maxWidth="lg"
        component="footer"
        sx={{
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          mt: 10,
          py: 2,
        }}
      >
        <Grid container my={2} justifyContent="center">
          <Grid item xs={12} md={4}>
            <Typography variant="h5" fontWeight="bold" color="white" mb={2}>
              {t("textTittleMenuFooter")}
            </Typography>
            {pages.map((page, index) => (
              <Link
                key={index}
                to={page.ruta}
                style={{ textDecoration: "none" }}
              >
                <Typography
                  color="white"
                  variant="body2"
                  sx={{ ":hover": { color: "blue" } }}
                >
                  {page.nombre}
                </Typography>
              </Link>
            ))}
          </Grid>
          <Grid item xs={12} md={5}>
            <Typography
              variant="h5"
              fontWeight="bold"
              color="white"
              textAlign="left"
              mb={2}
              mt={{ xs: 2, md: 0 }}
            >
              {t("tittleTextDatosContacto")}
            </Typography>
            <Grid
              container
              flexDirection="column"
              alignItems={{ xs: "left", md: "center" }}
            >
              <Grid container flexDirection="column" alignItems="left">
                {/* <PhoneIcon fontSize="large" sx={{ color: "white" }} /> */}
                <Typography variant="body2" textAlign="left" color="white">
                  {/* {t("textMovil")} */}
                  <SmartphoneIcon />: +225 07 79 10 88 02
                </Typography>
                <Typography variant="body2" textAlign="left" color="white">
                  {/* {t("textFijo")} */}
                  <PhoneIcon />: +225 27 21 38 19 58
                </Typography>
                <Typography variant="body2" textAlign="left" color="white">
                  {/* WhatsApp */}
                  <WhatsAppIcon />: +221 77 226 05 77
                </Typography>
              </Grid>
              <Grid
                container
                flexDirection="column"
                alignItems="left"
                gap={2}
                marginTop={2}
              >
                <Typography
                  display={{ lg: "none" }}
                  variant="body2"
                  textAlign="left"
                  color="white"
                >
                  <EmailIcon />: globalsolutionsprefabriquees@gmail.com
                </Typography>
                <Typography
                  display={{ xs: "none", lg: "inline" }}
                  variant="body2"
                  textAlign="left"
                  color="white"
                >
                  <EmailIcon />: globalsolutionsprefabriquees@gmail.com
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography
              variant="h5"
              fontWeight="bold"
              color="white"
              mb={2}
              mt={{ xs: 2, md: 0 }}
            >
              {t("textContactRedes")}
            </Typography>
            <Grid>
              <IconButton
                target="_blank"
                href="https://www.facebook.com/people/Global-Solutions-Pr%C3%A9fabriqu%C3%A9es-SARL/61561089293853/"
              >
                <FacebookOutlinedIcon
                  fontSize="large"
                  sx={{ color: "white" }}
                />
              </IconButton>
              <IconButton
                target="_blank"
                href="https://www.linkedin.com/company/global-solutions-pr%C3%A9fabriqu%C3%A9es-sarl/"
              >
                <LinkedInIcon fontSize="large" sx={{ color: "white" }} />
              </IconButton>
              <IconButton
                target="_blank"
                href="https://api.whatsapp.com/send?phone=221772260577&text=Bonjour%20GLOBAL%20SOLUTIONS%20PREFABRIQUEES.%20Je%20suis%20un/une%20interess%C3%A9(e)."
              >
                <WhatsAppIcon fontSize="large" sx={{ color: "white" }} />
              </IconButton>
              <Grid
                container
                justifyContent="center"
                alignItems="center"
                mt={2}
              >
                <Copyright />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
}
