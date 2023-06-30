import {
  Box,
  Button,
  Container,
  Grid,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Tooltip,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export default function DashboardOfertas() {
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

  const [portada, setPortada] = useState(null);
  const [vistaPortada, setVistaPortada] = useState(false);
  const [stateOferta, setStateOferta] = useState(false);
  const [ofertas, setOfertas] = useState([]);
  const [text, setText] = useState("");

  function handlePortada(e) {
    setPortada(e.target.files[0]);
    setVistaPortada(true);
  }

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append("imagenPrincipal", portada);
    formData.append("nombre", text);

    async function fetchUpload() {
      const response = await fetch(
        "https://almartindev.online/api/product/add_offer",
        {
          method: "POST",
          body: formData,
        }
      );
      if (response.ok) {
        alert("Oferta subida");
        setPortada(null);
        setVistaPortada(false);
        setText("");
        setStateOferta(!stateOferta);
      } else {
        alert("Error al enviar el formulario");
      }
    }
    fetchUpload();
  }

  useEffect(() => {
    async function fetchProyectos() {
      const response = await fetch(
        "https://almartindev.online/api/product/offer"
      );
      const data = await response.json();
      setOfertas(data);
      console.log(data);
    }
    fetchProyectos();
  }, [stateOferta]);

  function activeOffer(e, idOffer, active) {
    e.preventDefault();

    fetch(`https://almartindev.online/api/product/offer/${idOffer}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        activo: active,
      }),
    }).then((response) => {
      if (response.status == 400) {
        alert("error al recibir el body");
      } else if (response.status == 200 && active == 1) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Oferta Activada Correctamente",
        });
        setStateOferta(!stateOferta);
      } else if (response.status == 200 && active == 0) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Oferta Desactivada Correctamente",
        });
        setStateOferta(!stateOferta);
      } else if (response.status == 409) {
        alert("usuario ya registrado");
      }
    });
  }

  console.log(portada);
  console.log(vistaPortada);
  console.log(text);
  return (
    <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
      <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h4" fontWeight="bold" color="#07004e">
          Formulario de Subida de Ofertas o Publicidad
        </Typography>
        <Box component="form" noValidate /*onSubmit={""}*/ sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={5}>
              <TextField
                autoComplete="given-name"
                name="nombre"
                required
                fullWidth
                id="nombre"
                label="Nombre de la Oferta"
                autoFocus
                size="small"
                onChange={handleTextChange}
                color="success"
                inputProps={{ maxlength: "28" }}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={7}
              display="flex"
              flexDirection={{ xs: "column", sm: "row" }}
              alignItems={{ sm: "center" }}
              justifyContent={{ sm: "flex-start" }}
              gap={{ sm: 2 }}
            >
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
                Portada
                <input hidden multiple onChange={handlePortada} type="file" />
              </Button>

              {vistaPortada && portada ? (
                <Typography variant="button">{portada.name}</Typography>
              ) : (
                <Typography variant="button">
                  No hay foto seleccionada
                </Typography>
              )}
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              display="flex"
              flexDirection="column"
              justifyContent="center"
            >
              {portada && text ? (
                <Button
                  variant="contained"
                  component="label"
                  sx={{
                    bgcolor: "#3b8f1e",
                    ":hover": { bgcolor: "darkgreen", color: "white" },
                  }}
                  onClick={handleSubmit}
                >
                  Subir Oferta
                </Button>
              ) : (
                <Button
                  variant="contained"
                  component="label"
                  disabled
                  sx={{
                    bgcolor: "#3b8f1e",
                    ":hover": { bgcolor: "darkgreen", color: "white" },
                  }}
                >
                  Subir Oferta
                </Button>
              )}
            </Grid>
          </Grid>
        </Box>
      </Container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Nombre</StyledTableCell>
              <StyledTableCell align="center">Imagen Portada</StyledTableCell>
              <StyledTableCell align="center">Activo</StyledTableCell>
              <StyledTableCell align="center">Acciones</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {ofertas.map((row) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell component="th" scope="row">
                  <Typography fontWeight="bold">{row.nombre}</Typography>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <Link
                    target="_blank"
                    to={"https://almartindev.online/api" + row.path}
                  >
                    <ListItemText primary={row.path.split("/").pop()} />
                  </Link>
                </StyledTableCell>
                <StyledTableCell align="center">{row.activo}</StyledTableCell>
                <StyledTableCell align="center">
                  {row.activo == 0 ? (
                    <Grid container wrap="nowrap" justifyContent="center">
                      <IconButton color="error" disabled>
                        <HighlightOffIcon />
                      </IconButton>
                      <Tooltip title="Activar Oferta">
                        <IconButton
                          onClick={(e) => activeOffer(e, row.id, 1)}
                          color="success"
                        >
                          <CheckCircleIcon />
                        </IconButton>
                      </Tooltip>
                    </Grid>
                  ) : (
                    <Grid container wrap="nowrap" justifyContent="center">
                      <Tooltip title="Desactivar Oferta">
                        <IconButton
                          onClick={(e) => activeOffer(e, row.id, 0)}
                          color="error"
                        >
                          <HighlightOffIcon />
                        </IconButton>
                      </Tooltip>
                      <IconButton disabled>
                        <CheckCircleIcon />
                      </IconButton>
                    </Grid>
                  )}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
