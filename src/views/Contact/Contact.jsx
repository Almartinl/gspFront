import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControlLabel,
  Grid,
  IconButton,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import ScrollToTopButton from "../../components/ScrollToTopButton/ScrollToTopButton";
import { useTranslation } from "react-i18next";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";

const initialContactState = {
  nombre: "",
  apellidos: "",
  email: "",
  // pais: "",
  // direccion: "",
  // ciudad: "",
  telefono: "",
  descripcion: "",
};

export default function Contact() {
  document.title = "Contacto";

  const { t } = useTranslation();

  const [newContact, setNewContact] = useState(initialContactState);
  const [photo, setPhoto] = useState("");

  function handlePhoto(e) {
    setPhoto(e.target.files[0]);
  }

  function handleInput(e) {
    const newRegistro = {
      ...newContact,
      [e.target.name]: e.target.value,
    };
    setNewContact(newRegistro);
  }

  useEffect(() => {
    const scrollToTop = () => {
      window.scroll(0, 0);
    };
    scrollToTop();
  }, []);

  function registrar(e) {
    e.preventDefault();
    const formData = new FormData();
    if (photo) {
      formData.append("foto", photo);
    }
    formData.append("nombre", newContact.nombre);
    formData.append("email", newContact.email);
    formData.append("descripcion", newContact.descripcion);
    formData.append("apellidos", newContact.apellidos);
    formData.append("telefono", newContact.telefono);
    fetch("https://almartindev.online/api/user/contact", {
      method: "POST",
      body: formData,
    }).then((response) => {
      console.log(response.status);
      if (response.status === 400) {
        Swal.fire({
          position: "center",
          icon: "error",
          title: t("textAlertError1Contact"),
        });
      } else if (response.status === 200) {
        Swal.fire(
          t("tittleTextAlertOkContact"),
          t("textAlertOkContact"),
          "success"
        );
        setNewContact(initialContactState);
        setPhoto("");
      } else if (response.status === 409) {
        Swal.fire({
          position: "center",
          icon: "error",
          title: t("textAlertError2Contact"),
        });
      }
    });
  }

  return (
    <Container maxWidth="xl">
      <Grid
        container
        sx={{
          flexDirection: { xs: "column", md: "row" },
          justifyContent: { xs: "center" },

          marginTop: "24px",
        }}
      >
        <Grid
          container
          spacing={1}
          item
          md={4}
          height="100vh"
          sx={{ py: { xs: 1, md: 10 }, paddingLeft: { xs: 1, md: 10 } }}
        >
          <Grid container item xs={12} bgcolor="#3b8f1e" boxShadow="10px">
            <Grid container flexDirection="column" gap={10}>
              <Typography
                variant="h4"
                fontWeight="800"
                color="white"
                px={6}
                paddingTop={5}
              >
                {t("tittleTextDatosContacto")}
              </Typography>
              <Grid
                container
                flexDirection="column"
                alignItems="center"
                gap={1}
              >
                <Grid
                  container
                  flexDirection="column"
                  alignItems="center"
                  gap={2}
                >
                  <PhoneIcon fontSize="large" sx={{ color: "white" }} />
                  <Grid>
                    <Typography variant="h5" textAlign="center" color="white">
                      {t("textMovil")}: +225 07 79 10 88 02
                    </Typography>
                    <Typography variant="h5" textAlign="center" color="white">
                      {t("textFijo")}: +225 27 21 38 19 58
                    </Typography>
                    <Typography variant="h5" textAlign="center" color="white">
                      WhatsApp: +221 77 226 05 77
                    </Typography>
                  </Grid>
                </Grid>
                <Grid
                  container
                  flexDirection="column"
                  alignItems="center"
                  gap={2}
                  marginTop={4}
                >
                  <EmailIcon fontSize="large" sx={{ color: "white" }} />
                  <Typography
                    display={{ lg: "none" }}
                    variant="body1"
                    textAlign="center"
                    color="white"
                  >
                    globalsolutionsprefabriquees@gmail.com
                  </Typography>
                  <Typography
                    display={{ xs: "none", lg: "block" }}
                    variant="h6"
                    textAlign="center"
                    color="white"
                  >
                    globalsolutionsprefabriquees@gmail.com
                  </Typography>
                </Grid>
              </Grid>
              <Grid container flexDirection="column" gap={4}>
                <Typography variant="h4" fontWeight="800" color="white" px={6}>
                  {t("textContactRedes")}
                </Typography>
                <Grid container flexDirection="row" justifyContent="center">
                  <IconButton
                    target="_blank"
                    href="https://www.linkedin.com/company/global-solutions-pr%C3%A9fabriqu%C3%A9es/"
                  >
                    <LinkedInIcon fontSize="large" sx={{ color: "white" }} />
                  </IconButton>
                  <IconButton
                    target="_blank"
                    href="https://www.facebook.com/Global-Solutions-Pr%C3%A9fabriqu%C3%A9es-115355516956606"
                  >
                    <FacebookOutlinedIcon
                      fontSize="large"
                      sx={{ color: "white" }}
                    />
                  </IconButton>
                  <IconButton
                    target="_blank"
                    href="https://api.whatsapp.com/send?phone=221772260577&text=Bonjour%20GLOBAL%20SOLUTIONS%20PREFABRIQUEES.%20Je%20suis%20un/une%20interess%C3%A9(e)."
                  >
                    <WhatsAppIcon fontSize="large" sx={{ color: "white" }} />
                  </IconButton>
                  <a href=""></a>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={1}
          item
          md={8}
          height="100vh"
          sx={{
            py: { xs: 1, md: 10 },
            paddingRight: { xs: 0, md: 10 },
            paddingLeft: { xs: 1 },
          }}
        >
          <Grid item xs={12} py={5} border="4px solid #3b8f1e ">
            <Typography
              variant="h4"
              fontWeight="800"
              px={6}
              paddingTop={5}
              dangerouslySetInnerHTML={{ __html: t("tittleTextFormContact") }}
            ></Typography>
            <Box
              component="form"
              noValidate
              onSubmit={registrar}
              sx={{ mt: 3 }}
              px={6}
              paddingTop={5}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="nombre"
                    required
                    fullWidth
                    id="firstName"
                    label={t("textContactNombre")}
                    value={newContact.nombre}
                    onChange={handleInput}
                    color="success"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label={t("textContactApellido")}
                    name="apellidos"
                    autoComplete="family-name"
                    value={newContact.apellidos}
                    onChange={handleInput}
                    color="success"
                  />
                </Grid>
                {/* <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="direccion"
                    label="Direccion"
                    name="direccion"
                    autoComplete="direccion"
                    value={newContact.direccion}
                    onChange={handleInput}
                    color="success"
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <TextField
                    required
                    fullWidth
                    id="pais"
                    label="Pais"
                    name="pais"
                    autoComplete="new-pais"
                    value={newContact.pais}
                    onChange={handleInput}
                    color="success"
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <TextField
                    required
                    fullWidth
                    id="ciudad"
                    label="Ciudad"
                    name="ciudad"
                    autoComplete="new-ciudad"
                    value={newContact.ciudad}
                    onChange={handleInput}
                    color="success"
                  />
                </Grid> */}
                <Grid item xs={12} sm={8}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label={t("textContactEmail")}
                    name="email"
                    autoComplete="email"
                    value={newContact.email}
                    onChange={handleInput}
                    color="success"
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    required
                    fullWidth
                    id="telefono"
                    label={t("textContactTelefono")}
                    name="telefono"
                    autoComplete="telefono"
                    value={newContact.telefono}
                    onChange={handleInput}
                    color="success"
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="descripcion"
                    label={t("textContactMensaje")}
                    type="descripcion"
                    id="descripcion"
                    autoComplete="new-descripcion"
                    multiline
                    rows={4}
                    value={newContact.descripcion}
                    onChange={handleInput}
                    color="success"
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  display="flex"
                  flexDirection={{ xs: "column", sm: "row" }}
                  alignItems={{ sm: "center" }}
                  justifyContent={{ sm: "flex-start" }}
                  gap={{ sm: 2 }}
                >
                  {/* <FormControlLabel
                    control={
                      <Checkbox value="allowExtraEmails" color="primary" />
                    }
                    label={t("textContactPolicity")}
                  /> */}
                  <Button
                    variant="contained"
                    component="label"
                    sx={{
                      gap: 0.5,
                      bgcolor: "#3b8f1e",
                      ":hover": { bgcolor: "darkgreen", color: "white" },
                    }}
                  >
                    <AddAPhotoIcon />
                    Photo
                    <input hidden multiple onChange={handlePhoto} type="file" />
                  </Button>
                  {photo ? (
                    <Typography variant="button">{photo.name}</Typography>
                  ) : (
                    <Typography variant="button">
                      {t("textContactFoto")}
                    </Typography>
                  )}
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="success"
                sx={{ mt: 3, mb: 2, backgroundColor: "#3b8f1e" }}
              >
                {t("textContactEnviar")}
              </Button>
              <Grid container justifyContent="flex-end"></Grid>
            </Box>
          </Grid>
        </Grid>
        <Grid
          container
          justifyContent="center"
          sx={{ marginTop: { xs: 25, md: 10 } }}
          gap={4}
        >
          <Typography variant="h4" fontWeight="800" color="#3b8f1e">
            {t("textLocalization")}
          </Typography>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3972.2402432196845!2d-3.9340390000000003!3d5.380298!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc1ed12e1c981bb%3A0x58f4717241c5dfd4!2sGlobal%20Solutions%20Pr%C3%A9fabriqu%C3%A9es%20(GSP)!5e0!3m2!1sen!2sus!4v1677359850171!5m2!1sen!2sus"
            width="90%"
            height="400"
            loading="lazy"
          ></iframe>
        </Grid>
      </Grid>
      <ScrollToTopButton />
    </Container>
  );
}
