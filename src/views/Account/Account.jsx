import {
  Container,
  Grid,
  Typography,
  Paper,
  Divider,
  Button,
  TextField,
  Box,
  IconButton,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  tableCellClasses,
  Link,
  Tooltip,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Chip,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import BadgeIcon from "@mui/icons-material/Badge";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import PasswordIcon from "@mui/icons-material/Password";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import DeleteIcon from "@mui/icons-material/Delete";
import DownloadIcon from "@mui/icons-material/Download";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { useAuthContext } from "../../contexts/AuthContext";
import { useEffect } from "react";
import { useState } from "react";
import Swal from "sweetalert2";
import ScrollToTopButton from "../../components/ScrollToTopButton/ScrollToTopButton";
import { useTranslation } from "react-i18next";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function Account() {
  document.title = "Perfil";

  const { t } = useTranslation();

  const { dataToken, logout } = useAuthContext();

  const [user, setUser] = useState([]);
  const [stateChange, setStateChange] = useState(false);
  const [editNombre, setEditNombre] = useState(false);
  const [editApellido, setEditApellido] = useState(false);
  const [editEmail, setEditEmail] = useState(false);
  const [editPassword, setEditPassword] = useState(false);
  const [editDireccion, setEditDireccion] = useState(false);
  const [editTelefono, setEditTelefono] = useState(false);
  const [bungalow, setBungalow] = useState([]);
  const [listaPresupuesto, setListaPresupuesto] = useState([]);
  const presupuesto = {
    usuario: dataToken.id,
    email: dataToken.email,
    descripcion: listaPresupuesto,
  };
  const [disableButton, setDisableButton] = useState([]);
  const [counters, setCounters] = useState({});
  function updateCounter(index, value) {
    setCounters((prevCounters) => ({
      ...prevCounters,
      [index]: value,
    }));
  }

  function Counter({ index, value, updateCounter }) {
    function incrementCounter() {
      updateCounter(index, value + 1);
    }

    function decrementCounter() {
      updateCounter(index, value - 1);
    }

    return (
      <Grid container justifyContent="center" alignItems="center">
        <Button onClick={decrementCounter} color="success">
          -
        </Button>
        <Typography>{`${value}`}</Typography>
        <Button onClick={incrementCounter} color="success">
          +
        </Button>
      </Grid>
    );
  }

  const [newName, setNewName] = useState({ nombre: "" });
  function handleInputName(e) {
    const newRegistro = {
      ...newName,
      [e.target.name]: e.target.value,
    };
    setNewName(newRegistro);
  }
  const [newApellido, setNewApellido] = useState({ apellidos: "" });
  function handleInputApellido(e) {
    const newRegistro = {
      ...newApellido,
      [e.target.name]: e.target.value,
    };
    setNewApellido(newRegistro);
  }
  const [newEmail, setNewEmail] = useState({ email: "" });
  function handleInputEmail(e) {
    const newRegistro = {
      ...newEmail,
      [e.target.name]: e.target.value,
    };
    setNewEmail(newRegistro);
  }
  const [newPassword, setNewPassword] = useState({ password: "" });
  function handleInputPassword(e) {
    const newRegistro = {
      ...newPassword,
      [e.target.name]: e.target.value,
    };
    setNewPassword(newRegistro);
  }
  const [newDireccion, setNewDireccion] = useState({ direccion: "" });
  function handleInputDireccion(e) {
    const newRegistro = {
      ...newDireccion,
      [e.target.name]: e.target.value,
    };
    setNewDireccion(newRegistro);
  }
  const [newTelefono, setNewTelefono] = useState({ telefono: "" });
  function handleInputTelefono(e) {
    const newRegistro = {
      ...newTelefono,
      [e.target.name]: e.target.value,
    };
    setNewTelefono(newRegistro);
  }
  function registrarName(e) {
    e.preventDefault();
    setStateChange(!stateChange);

    fetch(`https://almartindev.online/api/user/${dataToken.id}`, {
      method: "PATCH",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(newName),
    }).then((response) => {
      console.log(response.status);
      if (response.status == 400) {
        alert("error al recibir el body");
      } else if (response.status == 200) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: t(`textAlertCambioNombreCuenta`),
        });
        setNewName({ nombre: "" });
      } else if (response.status == 409) {
        alert("usuario ya registrado");
      }
    });
  }
  function registrarApellido(e) {
    e.preventDefault();
    setStateChange(!stateChange);
    fetch(`https://almartindev.online/api/user/${dataToken.id}`, {
      method: "PATCH",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(newApellido),
    }).then((response) => {
      console.log(response.status);
      if (response.status == 400) {
        alert("error al recibir el body");
      } else if (response.status == 200) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: t("textAlertCambioApellidosCuenta"),
        });
        setNewApellido({ apellidos: "" });
      } else if (response.status == 409) {
        alert("usuario ya registrado");
      }
    });
  }
  function registrarEmail(e) {
    e.preventDefault();
    setStateChange(!stateChange);
    fetch(`https://almartindev.online/api/user/${dataToken.id}`, {
      method: "PATCH",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(newEmail),
    }).then((response) => {
      console.log(response.status);
      if (response.status == 400) {
        alert("error al recibir el body");
      } else if (response.status == 200) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: t("textAlertCambioEmailCuenta"),
        });
        setNewApellido({ apellido: "" });
      } else if (response.status == 409) {
        alert("usuario ya registrado");
      }
    });
  }
  function registrarPassword(e) {
    e.preventDefault();
    setStateChange(!stateChange);
    fetch(`https://almartindev.online/api/user/${dataToken.id}`, {
      method: "PATCH",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(newPassword),
    }).then((response) => {
      console.log(response.status);
      if (response.status == 400) {
        alert("error al recibir el body");
      } else if (response.status == 200) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: t("textAlertCambioPassCuenta"),
        });
        setNewPassword({ password: "" });
      } else if (response.status == 409) {
        alert("usuario ya registrado");
      }
    });
  }
  function registrarDireccion(e) {
    e.preventDefault();
    setStateChange(!stateChange);
    fetch(`https://almartindev.online/api/user/${dataToken.id}`, {
      method: "PATCH",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(newDireccion),
    }).then((response) => {
      console.log(response.status);
      if (response.status == 400) {
        alert("error al recibir el body");
      } else if (response.status == 200) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: t("textAlertCambioDirCuenta"),
        });
        setNewDireccion({ direccion: "" });
      } else if (response.status == 409) {
        alert("usuario ya registrado");
      }
    });
  }
  function registrarTelefono(e) {
    e.preventDefault();
    setStateChange(!stateChange);
    fetch(`https://almartindev.online/api/user/${dataToken.id}`, {
      method: "PATCH",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(newTelefono),
    }).then((response) => {
      console.log(response.status);
      if (response.status == 400) {
        alert("error al recibir el body");
      } else if (response.status == 200) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: t("textAlertCambioTelCuenta"),
        });
        setNewTelefono({ telefono: "" });
      } else if (response.status == 409) {
        alert("usuario ya registrado");
      }
    });
  }
  function handleEditNombre() {
    setEditNombre(!editNombre);
  }
  function handleEditApellido() {
    setEditApellido(!editApellido);
  }
  function handleEditEmail() {
    setEditEmail(!editEmail);
  }
  function handleEditPassword() {
    setEditPassword(!editPassword);
  }
  function handleEditDireccion() {
    setEditDireccion(!editDireccion);
  }
  function handleEditTelefono() {
    setEditTelefono(!editTelefono);
  }

  function handleDeleteBungalow(e, id) {
    e.preventDefault();
    setStateChange(!stateChange);
    fetch(`https://almartindev.online/api/bungalows/delete`, {
      method: "DELETE",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify({ id: id }),
    }).then((response) => {
      console.log(response.status);
      if (response.status == 400) {
        alert("error al recibir el body");
      } else if (response.status == 200) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: t("textAlertModeloBorrarCuenta"),
        });
      }
    });
  }

  function addPresupuesto(e, nombre, nombreModelo, id) {
    e.preventDefault();
    setListaPresupuesto([
      ...listaPresupuesto,
      { nombre: nombre, modelo: nombreModelo, id: id },
    ]);
    setDisableButton([...disableButton, id]);
  }

  function deleteListPresupuesto(e, indexList) {
    e.preventDefault();
    const newList = listaPresupuesto.filter(
      (item, index) => item.id !== indexList
    );
    setListaPresupuesto(newList);
    setDisableButton(disableButton.filter((number) => number != indexList));
  }

  useEffect(() => {
    async function fetchCount() {
      const response = await fetch(
        "https://almartindev.online/api/user/email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: dataToken.email,
          }),
        }
      );
      const data = await response.json();
      setUser(data);
    }
    fetchCount();
  }, [stateChange]);

  useEffect(() => {
    async function fetchCount() {
      const response = await fetch("https://almartindev.online/api/bungalows", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          usuario: dataToken.id,
        }),
      });
      const data = await response.json();
      setBungalow(data);
      console.log(data);
    }
    fetchCount();
  }, [stateChange]);

  function downloadImg(e, url, nombre) {
    e.preventDefault();

    fetch(`https://almartindev.online/api/${url}`)
      .then((respuesta) => respuesta.blob())
      .then((blob) => {
        const imagenUrl = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = imagenUrl;
        link.download = nombre;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
  }

  function sendPresupuesto(e) {
    e.preventDefault();
    presupuesto.descripcion = JSON.stringify(
      listaPresupuesto.map((item, index) =>
        item.modelo.concat(
          " ",
          "x",
          counters[index] == undefined ? 1 : counters[index]
        )
      )
    );
    if (listaPresupuesto.length < 1) {
      return;
    }
    fetch(`https://almartindev.online/api/bungalows/addpresupuesto`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(presupuesto),
    }).then((response) => {
      console.log(response.status);
      if (response.status == 400) {
        alert("error al recibir el body");
      } else if (response.status == 200) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: t("textAlertPresupuestoCuenta"),
        });
        setListaPresupuesto([]);
      }
    });
    setDisableButton([]);
  }

  function deleteAccount() {
    Swal.fire({
      title: t("textAlertTittleBorrarCuenta"),
      text: t("textAlertSubtittleBorrarCuenta"),
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: t("textAlertButtonYesBorrarCuenta"),
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://almartindev.online/api/user/delete/${dataToken.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
        }).then((response) => {
          if (response.status == 400) {
            alert("error al recibir el body");
          } else if (response.status == 200) {
            Swal.fire(
              t("textAlertConfirmYesBorrarCuenta"),
              t("textAlertConfirmYesSubtittleBorrarCuenta"),
              "success"
            );
            logout();
          } else if (response.status == 409) {
            alert("usuario ya registrado");
          }
        });
      }
    });
  }

  console.log(listaPresupuesto);
  console.log(presupuesto);
  console.log(bungalow);
  return (
    <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h2" fontWeight="bold" component="h1" gutterBottom>
        {t("tittleTextAccount")}
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper
            sx={{
              p: 2,
              my: 4,
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#fafafa",
            }}
          >
            {user.length > 0 && (
              <Grid container spacing={2}>
                <Grid item xs={12} md={2}>
                  <Typography variant="h5">
                    {t("tittleTextDetallesCuenta")}
                  </Typography>
                </Grid>
                <Grid item xs={12} md={10}>
                  <Grid container spacing={2}>
                    <Grid
                      item
                      xs={12}
                      sx={{
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <BadgeIcon />
                      <Typography variant="h6">
                        {t("textDetallesNombreCuenta")} {user[0].nombre}
                      </Typography>
                      <Button onClick={handleEditNombre}>
                        <EditIcon />
                      </Button>
                    </Grid>
                  </Grid>
                  {editNombre && (
                    <Box
                      component="form"
                      onSubmit={registrarName}
                      sx={{
                        "& > :not(style)": { m: 1 },
                      }}
                      noValidate
                    >
                      <TextField
                        id="outlined-basic"
                        label={t("textDetallesNombreCuenta")}
                        name="nombre"
                        variant="outlined"
                        value={newName.nombre}
                        onChange={handleInputName}
                        color="success"
                      />
                      <Tooltip title={t("buttonGuardar")}>
                        <IconButton color="success" type="submit">
                          <SaveIcon />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title={t("buttonBorrarCampo")}>
                        <IconButton
                          color="error"
                          onClick={() => setNewName({ nombre: "" })}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </Tooltip>
                    </Box>
                  )}
                  <Grid container spacing={2}>
                    <Grid
                      item
                      xs={12}
                      sx={{
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <BadgeIcon />
                      <Typography variant="h6">
                        {t("textDetallesApellidosCuenta")} {user[0].apellidos}
                      </Typography>
                      <Button onClick={handleEditApellido}>
                        <EditIcon />
                      </Button>
                    </Grid>
                  </Grid>
                  {editApellido && (
                    <Box
                      component="form"
                      onSubmit={registrarApellido}
                      sx={{
                        "& > :not(style)": { m: 1 },
                      }}
                      noValidate
                    >
                      <TextField
                        id="outlined-basic"
                        label={t("textDetallesApellidosCuenta")}
                        name="apellidos"
                        variant="outlined"
                        value={newApellido.apellidos}
                        onChange={handleInputApellido}
                        color="success"
                      />
                      <Tooltip title={t("buttonGuardar")}>
                        <IconButton color="success" type="submit">
                          <SaveIcon />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title={t("buttonBorrarCampo")}>
                        <IconButton
                          color="error"
                          onClick={() => setNewApellido({ apellido: "" })}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </Tooltip>
                    </Box>
                  )}
                  <Grid container spacing={2}>
                    <Grid
                      item
                      xs={12}
                      sx={{
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <ContactMailIcon />
                      <Typography variant="h6">
                        Email: {user[0].email}
                      </Typography>
                      <Button onClick={handleEditEmail}>
                        <EditIcon />
                      </Button>
                    </Grid>
                  </Grid>
                  {editEmail && (
                    <Box
                      component="form"
                      onSubmit={registrarEmail}
                      sx={{
                        "& > :not(style)": { m: 1 },
                      }}
                      noValidate
                    >
                      <TextField
                        id="outlined-basic"
                        label="Email"
                        name="email"
                        variant="outlined"
                        value={newEmail.email}
                        onChange={handleInputEmail}
                        color="success"
                      />
                      <Tooltip title={t("buttonGuardar")}>
                        <IconButton color="success" type="submit">
                          <SaveIcon />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title={t("buttonBorrarCampo")}>
                        <IconButton
                          color="error"
                          onClick={() => setNewEmail({ email: "" })}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </Tooltip>
                    </Box>
                  )}
                  <Grid container spacing={2}>
                    <Grid
                      item
                      xs={12}
                      sx={{
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <LocalPhoneIcon />
                      <Typography variant="h6">
                        {t("textDetallesTelCuenta")} {user[0].telefono}
                      </Typography>
                      <Button onClick={handleEditTelefono}>
                        <EditIcon />
                      </Button>
                    </Grid>
                  </Grid>
                  {editTelefono && (
                    <Box
                      component="form"
                      onSubmit={registrarTelefono}
                      sx={{
                        "& > :not(style)": { m: 1 },
                      }}
                      noValidate
                    >
                      <TextField
                        id="outlined-basic"
                        label={t("textDetallesTelCuenta")}
                        name="telefono"
                        variant="outlined"
                        value={newTelefono.telefono}
                        onChange={handleInputTelefono}
                        color="success"
                      />
                      <Tooltip title={t("buttonGuardar")}>
                        <IconButton color="success" type="submit">
                          <SaveIcon />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title={t("buttonBorrarCampo")}>
                        <IconButton
                          color="error"
                          onClick={() => setNewTelefono({ telefono: "" })}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </Tooltip>
                    </Box>
                  )}
                  <Grid container spacing={2}>
                    <Grid
                      item
                      xs={12}
                      sx={{
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <LocationOnIcon />
                      <Typography variant="h6">
                        {t("textDetallesDireccionCuenta")} {user[0].direccion}
                      </Typography>
                      <Button onClick={handleEditDireccion}>
                        <EditIcon />
                      </Button>
                    </Grid>
                  </Grid>
                  {editDireccion && (
                    <Box
                      component="form"
                      onSubmit={registrarDireccion}
                      sx={{
                        "& > :not(style)": { m: 1 },
                      }}
                      noValidate
                    >
                      <TextField
                        id="outlined-basic"
                        label={t("textDetallesDireccionCuenta")}
                        name="direccion"
                        variant="outlined"
                        value={newDireccion.direccion}
                        onChange={handleInputDireccion}
                        color="success"
                      />
                      <Tooltip title={t("buttonGuardar")}>
                        <IconButton color="success" type="submit">
                          <SaveIcon />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title={t("buttonBorrarCampo")}>
                        <IconButton
                          color="error"
                          onClick={() => setNewDireccion({ direccion: "" })}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </Tooltip>
                    </Box>
                  )}
                  <Grid container spacing={2}>
                    <Grid
                      item
                      xs={12}
                      sx={{
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <PasswordIcon />
                      <Typography variant="h6">
                        {t("textDetallesPassCuenta")} ***********
                      </Typography>
                      <Button onClick={handleEditPassword}>
                        <EditIcon />
                      </Button>
                    </Grid>
                  </Grid>
                  {editPassword && (
                    <Box
                      component="form"
                      onSubmit={registrarPassword}
                      sx={{
                        "& > :not(style)": { m: 1 },
                      }}
                      noValidate
                    >
                      <TextField
                        id="outlined-basic"
                        label={t("textDetallesPassCuenta")}
                        name="password"
                        variant="outlined"
                        value={newPassword.password}
                        onChange={handleInputPassword}
                        color="success"
                      />
                      <Tooltip title={t("buttonGuardar")}>
                        <IconButton color="success" type="submit">
                          <SaveIcon />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title={t("buttonBorrarCampo")}>
                        <IconButton
                          color="error"
                          onClick={() => setNewPassword({ password: "" })}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </Tooltip>
                    </Box>
                  )}
                </Grid>
              </Grid>
            )}
          </Paper>
          <Paper
            sx={{
              p: 2,
              my: 4,
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#fafafa",
            }}
          >
            {user.length > 0 && (
              <Grid container spacing={2}>
                <Grid item xs={12} md={2}>
                  <Typography variant="h5">
                    {t("tittleTextModeloCuenta")}
                  </Typography>
                </Grid>
                <Grid item xs={12} md={8}>
                  <Grid container spacing={2}>
                    <Grid
                      item
                      xs={12}
                      sx={{
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      {bungalow.length > 0 ? (
                        <TableContainer component={Paper}>
                          <Table
                            sx={{ minWidth: 200 }}
                            aria-label="customized table"
                          >
                            <TableHead>
                              <TableRow>
                                <StyledTableCell>
                                  {t("textModeloNombreCuenta")}
                                </StyledTableCell>
                                {/* <StyledTableCell align="left">
                                  Nombre del Bungalow
                                </StyledTableCell> */}
                                <StyledTableCell align="left">
                                  {t("textModeloAccionesCuenta")}
                                </StyledTableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {bungalow.map((row, index) => (
                                <StyledTableRow key={row.id}>
                                  <StyledTableCell component="th" scope="row">
                                    {row.nombre}
                                  </StyledTableCell>
                                  {/* <StyledTableCell align="left">
                                    {row.nombrebungalow}
                                  </StyledTableCell> */}
                                  <StyledTableCell align="left">
                                    <Grid container wrap="nowrap">
                                      <Tooltip
                                        title={t(
                                          "textModeloButtonDescargarCuenta"
                                        )}
                                      >
                                        <IconButton
                                          onClick={(e) =>
                                            downloadImg(
                                              e,
                                              row.planta,
                                              row.nombre
                                            )
                                          }
                                          color="primary"
                                        >
                                          <DownloadIcon />
                                        </IconButton>
                                      </Tooltip>
                                      <Tooltip
                                        title={t(
                                          "textModeloButtonBorrarCuenta"
                                        )}
                                      >
                                        <IconButton
                                          onClick={(e) =>
                                            handleDeleteBungalow(e, row.id)
                                          }
                                          color="error"
                                        >
                                          <DeleteIcon />
                                        </IconButton>
                                      </Tooltip>
                                      <Tooltip
                                        title={t(
                                          "textModeloButtonAñadirCuenta"
                                        )}
                                      >
                                        <IconButton
                                          onClick={(e) =>
                                            addPresupuesto(
                                              e,
                                              row.nombre,
                                              row.nombrebungalow,
                                              row.id
                                            )
                                          }
                                          color="success"
                                          disabled={disableButton.includes(
                                            row.id
                                          )}
                                        >
                                          <AddCircleIcon />
                                        </IconButton>
                                      </Tooltip>
                                    </Grid>
                                  </StyledTableCell>
                                </StyledTableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </TableContainer>
                      ) : (
                        <Grid item xs={12} md={10}>
                          <Typography variant="h5">
                            {t("textNoModeloCuenta")}
                          </Typography>
                        </Grid>
                      )}
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            )}
          </Paper>
          <Paper
            sx={{
              p: 2,
              my: 4,
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#fafafa",
            }}
          >
            {user.length > 0 && (
              <Grid container spacing={2}>
                <Grid item xs={12} md={2}>
                  <Typography variant="h5">
                    {t("tittleTextPresupuestoCuenta")}
                  </Typography>
                </Grid>
                <Grid item xs={12} md={10}>
                  <Grid container spacing={2}>
                    <Grid
                      item
                      xs={12}
                      sx={{
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <Box
                        component="form"
                        noValidate
                        onSubmit={sendPresupuesto}
                        sx={{ mt: 3 }}
                      >
                        <Grid container spacing={2}>
                          <Grid item xs={12}>
                            <Box sx={{ mt: 1 }}>
                              {listaPresupuesto.length > 0 ? (
                                <List>
                                  {listaPresupuesto.map((row, index) => (
                                    <Grid key={index}>
                                      <ListItem sx={{ width: "100%" }}>
                                        <ListItemText primary={row.nombre} />
                                        <Counter
                                          index={index}
                                          value={counters[index] || 1}
                                          updateCounter={updateCounter}
                                        />
                                        <IconButton
                                          color="error"
                                          onClick={(e) =>
                                            deleteListPresupuesto(e, row.id)
                                          }
                                        >
                                          <DeleteIcon />
                                        </IconButton>
                                      </ListItem>
                                    </Grid>
                                  ))}
                                </List>
                              ) : (
                                <Typography variant="h5">
                                  {t("textPresupuestoCuenta")}
                                </Typography>
                              )}
                            </Box>
                          </Grid>
                        </Grid>
                        {listaPresupuesto.length > 0 ? (
                          <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                          >
                            {t("textPresupuestoButtonMandarCuenta")}
                          </Button>
                        ) : (
                          <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            disabled
                          >
                            {t("textPresupuestoButtonMandarCuenta")}
                          </Button>
                        )}
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            )}
          </Paper>
          <Paper
            sx={{
              p: 2,
              my: 4,
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#fafafa",
            }}
          >
            {user.length > 0 && (
              <Grid container spacing={2}>
                <Grid item xs={12} md={2}>
                  <Typography variant="h5">
                    {t("tittleTextBorrarCuenta")}
                  </Typography>
                </Grid>
                <Grid item xs={12} md={10}>
                  <Grid container spacing={2}>
                    <Grid
                      item
                      xs={12}
                      sx={{
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <Button
                        variant="contained"
                        color="error"
                        onClick={deleteAccount}
                      >
                        <HighlightOffIcon />
                        <Typography variant="h5">
                          {t("tittleTextBorrarCuenta")}
                        </Typography>
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            )}
          </Paper>
        </Grid>
      </Grid>
      <ScrollToTopButton />
    </Container>
  );
}
