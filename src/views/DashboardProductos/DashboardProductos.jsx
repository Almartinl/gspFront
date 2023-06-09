import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  Link,
  MenuItem,
  OutlinedInput,
  Paper,
  Select,
  Switch,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
  styled,
  tableCellClasses,
} from "@mui/material";
import { useState } from "react";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import "./DashboardProductos.css";
import Swal from "sweetalert2";

export default function DashboardProductos() {
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
  const [plano, setPlano] = useState(null);
  const [vistaPlano, setVistaPlano] = useState(false);
  const [categoria, setCategoria] = useState("");
  const [clima, setClima] = useState(false);
  const [superposable, setSuperposable] = useState(false);
  const [sanitario, setSanitario] = useState(false);
  const [nombre, setNombre] = useState("");
  const [ref, setRef] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [largo, setLargo] = useState("");
  const [ancho, setAncho] = useState("");
  const [alto, setAlto] = useState("");
  const [peso, setPeso] = useState("");
  const [estructura, setEstructura] = useState("");
  const [paneles, setPaneles] = useState("");
  const [cubierta, setCubierta] = useState("");
  const [suelo, setSuelo] = useState("");
  const [electricidad, setElectricidad] = useState("");
  const [puerta70, setPuerta70] = useState("");
  const [puerta85, setPuerta85] = useState("");
  const [puerta140, setPuerta140] = useState("");
  const [ventana100x100, setVentana100x100] = useState("");
  const [ventana40x40, setVentana40x40] = useState("");
  const [ventana100x80, setVentana100x80] = useState("");
  const [lavabo, setLavabo] = useState("");
  const [wc, setWc] = useState("");
  const [urinario, setUrinario] = useState("");
  const [duchas, setDuchas] = useState("");
  const [otros, setOtros] = useState("");

  function handlePortada(e) {
    setPortada(e.target.files[0]);
    setVistaPortada(true);
  }

  function handlePlano(e) {
    setPlano(e.target.files[0]);
    setVistaPlano(true);
  }
  function handleChangeCategoria(e) {
    setCategoria(e.target.value);
  }

  function handleClima(e) {
    setClima(e.target.checked);
  }
  function handleSuperposable(e) {
    setSuperposable(e.target.checked);
  }
  function handleSanitario(e) {
    setSanitario(e.target.checked);
  }
  function handleNombre(e) {
    setNombre(e.target.value);
  }
  function handleDescripcion(e) {
    setDescripcion(e.target.value);
  }
  function handleRef(e) {
    setRef(e.target.value);
  }
  function handleLargo(e) {
    setLargo(e.target.value);
  }
  function handleAncho(e) {
    setAncho(e.target.value);
  }
  function handleAlto(e) {
    setAlto(e.target.value);
  }
  function handlePeso(e) {
    setPeso(e.target.value);
  }
  function handlePaneles(e) {
    setPaneles(e.target.value);
  }
  function handleCubierta(e) {
    setCubierta(e.target.value);
  }
  function handleEstructura(e) {
    setEstructura(e.target.value);
  }
  function handleSuelo(e) {
    setSuelo(e.target.value);
  }

  function handleElectricidad(e) {
    setElectricidad(e.target.value);
  }

  function handlePuerta70(e) {
    setPuerta70(e.target.value);
  }

  function handlePuerta85(e) {
    setPuerta85(e.target.value);
  }

  function handlePuerta140(e) {
    setPuerta140(e.target.value);
  }

  function handleVentana100x100(e) {
    setVentana100x100(e.target.value);
  }

  function handleVentana40x40(e) {
    setVentana40x40(e.target.value);
  }

  function handleVentana100x80(e) {
    setVentana100x80(e.target.value);
  }

  function handleLavabo(e) {
    setLavabo(e.target.value);
  }

  function handleWc(e) {
    setWc(e.target.value);
  }

  function handleUrinario(e) {
    setUrinario(e.target.value);
  }

  function handleDuchas(e) {
    setDuchas(e.target.value);
  }

  function handleOtros(e) {
    setOtros(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("imagenPrincipal", portada);
    formData.append("plano", plano);
    formData.append("categoria", categoria);
    formData.append("clima", clima ? "Si" : "No");
    formData.append("apilable", superposable ? "Si" : "No");
    formData.append("nombre", nombre);
    formData.append("ref", ref);
    formData.append("descripcion", descripcion);
    formData.append("largo", largo);
    formData.append("ancho", ancho);
    formData.append("alto", alto);
    formData.append("peso", peso);
    formData.append("estructura", estructura);
    formData.append("paneles", paneles);
    formData.append("cubierta", cubierta);
    formData.append("suelo", suelo);
    formData.append("electricidad", electricidad);
    formData.append("puerta70", puerta70);
    formData.append("puerta85", puerta85);
    formData.append("puerta140", puerta140);
    formData.append("ventana100x100", ventana100x100);
    formData.append("ventana40x40", ventana40x40);
    formData.append("ventana100x80", ventana100x80);
    formData.append("lavabo", lavabo);
    formData.append("wc", wc);
    formData.append("urinario", urinario);
    formData.append("duchas", duchas);
    formData.append("otros", otros);
    async function fetchUpload() {
      const response = await fetch("http://127.0.0.1:3000/api/product/upload", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Producto creado correctamente",
        });
        setPortada(null);
        setVistaPortada(false);
        setPlano(null);
        setVistaPlano(false);
        setCategoria("");
        setClima(false);
        setSuperposable(false);
        setSanitario(false);
        setNombre("");
        setRef("");
        setDescripcion("");
        setLargo("");
        setAncho("");
        setAlto("");
        setPeso("");
        setEstructura("");
        setPaneles("");
        setCubierta("");
        setSuelo("");
        setElectricidad("");
        setPuerta70("");
        setPuerta85("");
        setPuerta140("");
        setVentana100x100("");
        setVentana40x40("");
        setVentana100x80("");
        setLavabo("");
        setWc("");
        setUrinario("");
        setDuchas("");
        setOtros("");
      } else {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Error al crear el Producto",
        });
      }
    }
    fetchUpload();
  }
  return (
    <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
      <Container maxWidth="md">
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            {/* grid de nombre */}
            <Grid item xs={12} sm={6}>
              <TextField
                size="small"
                autoComplete="given-name"
                name="nombre"
                required
                fullWidth
                id="firstName"
                label="Nombre del Producto"
                onChange={handleNombre}
                color="success"
              />
            </Grid>
            {/* grid de referencia */}
            <Grid item xs={12} sm={6}>
              <TextField
                size="small"
                required
                fullWidth
                id="ref"
                label="Referencia"
                name="ref"
                autoComplete="family-name"
                onChange={handleRef}
                color="success"
              />
            </Grid>
            {/* grid de categorias */}
            <Grid item xs={12} md={6}>
              <FormControl fullWidth size="small">
                <InputLabel id="categoriaDashboard" color="success">
                  Categoria
                </InputLabel>
                <Select
                  input={<OutlinedInput label="Categoria" />}
                  labelId="demo-simple-select-label"
                  id="textCategoriaDashboard"
                  value={categoria}
                  label="demo-simple-select-label"
                  onChange={handleChangeCategoria}
                  color="success"
                >
                  <MenuItem value={"obra"}>Bungalows de obras</MenuItem>
                  <MenuItem value={"estructuras"}>
                    Estructuras metalicas
                  </MenuItem>
                  <MenuItem value={"edificios"}>
                    Edificios prefabricados
                  </MenuItem>
                  <MenuItem value={"naves"}>
                    Naves industruliales y hangares
                  </MenuItem>
                  <MenuItem value={"maritimos"}>
                    Contenedores maritimos
                  </MenuItem>
                </Select>
              </FormControl>
            </Grid>
            {/* grid de descripcion */}
            <Grid item xs={12} sm={6}>
              <TextField
                size="small"
                autoComplete="descripcion"
                name="descripcion"
                required
                fullWidth
                id="descripcion"
                label="Descripcion del producto"
                onChange={handleDescripcion}
                color="success"
              />
            </Grid>
            {/* grid de medidas */}
            <Grid item xs={12} sm={6}>
              {/* grid de largo */}
              <Grid item xs={12} mb={2}>
                <TextField
                  size="small"
                  required
                  fullWidth
                  id="largo"
                  label="Largo del bungalow"
                  name="largo"
                  autoComplete="largo"
                  onChange={handleLargo}
                  color="success"
                />
              </Grid>
              {/* grid de ancho */}
              <Grid item xs={12} mb={2}>
                <TextField
                  size="small"
                  required
                  fullWidth
                  id="ancho"
                  label="Ancho"
                  name="ancho"
                  autoComplete="ancho"
                  onChange={handleAncho}
                  color="success"
                />
              </Grid>
              {/* grid de alto */}
              <Grid item xs={12} mb={2}>
                <TextField
                  size="small"
                  required
                  fullWidth
                  id="alto"
                  label="Alto"
                  name="alto"
                  autoComplete="alto"
                  onChange={handleAlto}
                  color="success"
                />
              </Grid>
              {/* grid de peso */}
              <Grid item xs={12} mb={2}>
                <TextField
                  size="small"
                  required
                  fullWidth
                  name="peso"
                  label="Peso"
                  id="peso"
                  autoComplete="peso"
                  onChange={handlePeso}
                  color="success"
                />
              </Grid>
            </Grid>
            {/* grid de fotos */}
            <Grid
              container
              item
              xs={12}
              md={6}
              alignContent="flex-start"
              gap={2}
            >
              <Grid
                container
                gap={{ sm: 2 }}
                flexDirection={{ xs: "column", sm: "row" }}
                alignItems={{ sm: "flex-start" }}
                justifyContent={{ sm: "flex-start" }}
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
                container
                gap={{ sm: 2 }}
                flexDirection={{ xs: "column", sm: "row" }}
                alignItems={{ sm: "flex-start" }}
                justifyContent={{ sm: "flex-start" }}
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
                  Planta
                  <input hidden multiple onChange={handlePlano} type="file" />
                </Button>
                {vistaPlano && plano ? (
                  <Typography variant="button">{plano.name}</Typography>
                ) : (
                  <Typography variant="button">
                    No hay foto seleccionada
                  </Typography>
                )}
              </Grid>
            </Grid>
            {/* grid de estructura */}
            <Grid item xs={12}>
              <TextField
                size="small"
                multiline
                rows={2}
                autoComplete="estructura"
                name="estructura"
                fullWidth
                id="estructura"
                label="Estructura"
                onChange={handleEstructura}
                color="success"
              />
            </Grid>
            {/* grid de paneles */}
            <Grid item xs={12}>
              <TextField
                size="small"
                multiline
                rows={2}
                autoComplete="paneles"
                name="paneles"
                fullWidth
                id="paneles"
                label="Paneles"
                onChange={handlePaneles}
                color="success"
              />
            </Grid>
            {/* grid de cubierta */}
            <Grid item xs={12}>
              <TextField
                size="small"
                multiline
                rows={2}
                autoComplete="cubierta"
                name="cubierta"
                fullWidth
                id="cubierta"
                label="Cubierta"
                onChange={handleCubierta}
                color="success"
              />
            </Grid>
            {/* grid de suelo */}
            <Grid item xs={12}>
              <TextField
                size="small"
                multiline
                rows={2}
                autoComplete="suelo"
                name="suelo"
                fullWidth
                id="suelo"
                label="Suelo"
                onChange={handleSuelo}
                color="success"
              />
            </Grid>
            {/* grid de electricidad */}
            <Grid item xs={12}>
              <TextField
                size="small"
                multiline
                rows={2}
                autoComplete="electricidad"
                name="electricidad"
                fullWidth
                id="electricidad"
                label="Instalacion electrica"
                onChange={handleElectricidad}
                color="success"
              />
            </Grid>
            {/* grid de puertas */}
            <Grid item xs={12}>
              <Typography variant="h5" fontWeight="bold" color="#07004e">
                Puertas
              </Typography>
              <Grid container item xs={12}>
                <Grid
                  container
                  item
                  alignItems="center"
                  justifyContent="center"
                  gap={1}
                  xs={4}
                >
                  <label htmlFor="puerta70">Puerta 70: </label>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      size="small"
                      type="number"
                      autoComplete="puerta70"
                      name="puerta70"
                      id="puerta70"
                      inputProps={{ min: 0, max: 10, defaultValue: 0 }}
                      onChange={handlePuerta70}
                      color="success"
                    />
                  </Grid>
                </Grid>
                <Grid
                  container
                  item
                  alignItems="center"
                  justifyContent="center"
                  gap={1}
                  xs={4}
                >
                  <label htmlFor="puerta 85">Puerta 85: </label>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      size="small"
                      type="number"
                      autoComplete="puerta 85"
                      name="puerta 85"
                      id="puerta 85"
                      inputProps={{ min: 0, max: 10, defaultValue: 0 }}
                      onChange={handlePuerta85}
                      color="success"
                    />
                  </Grid>
                </Grid>
                <Grid
                  container
                  item
                  alignItems="center"
                  justifyContent="center"
                  gap={1}
                  xs={4}
                >
                  <label htmlFor="puerta 140">Puerta 140: </label>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      size="small"
                      type="number"
                      autoComplete="puerta 140"
                      name="puerta 140"
                      id="puerta 140"
                      inputProps={{ min: 0, max: 10, defaultValue: 0 }}
                      onChange={handlePuerta140}
                      color="success"
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            {/* grid de ventanas */}
            <Grid item xs={12}>
              <Typography variant="h5" fontWeight="bold" color="#07004e">
                Ventanas
              </Typography>
              <Grid container item xs={12}>
                <Grid
                  container
                  item
                  alignItems="center"
                  justifyContent="center"
                  gap={1}
                  xs={4}
                >
                  <label htmlFor="ventana 100x100">Ventana 100x100: </label>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      size="small"
                      type="number"
                      autoComplete="ventana 100x100"
                      name="ventana 100x100"
                      id="ventana 100x100"
                      inputProps={{ min: 0, max: 10, defaultValue: 0 }}
                      onChange={handleVentana100x100}
                      color="success"
                    />
                  </Grid>
                </Grid>
                <Grid
                  container
                  item
                  alignItems="center"
                  justifyContent="center"
                  gap={1}
                  xs={4}
                >
                  <label htmlFor="ventana 40x40">Ventana 40x40: </label>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      size="small"
                      type="number"
                      autoComplete="ventana 40x40"
                      name="ventana 40x40"
                      id="ventana 40x40"
                      inputProps={{ min: 0, max: 10, defaultValue: 0 }}
                      onChange={handleVentana40x40}
                      color="success"
                    />
                  </Grid>
                </Grid>
                <Grid
                  container
                  item
                  alignItems="center"
                  justifyContent="center"
                  gap={1}
                  xs={4}
                >
                  <label htmlFor="ventana 100x80">Ventana 100x80: </label>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      size="small"
                      type="number"
                      autoComplete="ventana 100x80"
                      name="ventana 100x80"
                      id="ventana 100x80"
                      inputProps={{ min: 0, max: 10, defaultValue: 0 }}
                      onChange={handleVentana100x80}
                      color="success"
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            {/* grid de otras opciones */}
            <Grid item xs={12}>
              <Typography variant="h5" fontWeight="bold" color="#07004e">
                Otras opciones
              </Typography>
              <Grid container item xs={12} justifyContent="space-around">
                <FormControlLabel
                  value="start"
                  control={<Switch color="primary" onChange={handleClima} />}
                  label="Climatizacion"
                  labelPlacement="start"
                />
                <FormControlLabel
                  value="start"
                  control={
                    <Switch color="primary" onChange={handleSuperposable} />
                  }
                  label="Superposable"
                  labelPlacement="start"
                />
                <FormControlLabel
                  value="start"
                  control={
                    <Switch color="primary" onChange={handleSanitario} />
                  }
                  label="Equipo Sanitario"
                  labelPlacement="start"
                />
              </Grid>
            </Grid>
            {/* grid de equipamiento sanitario */}
            {sanitario && (
              <Grid item xs={12}>
                <Typography variant="h5" fontWeight="bold" color="#07004e">
                  Equipamiento Sanitario
                </Typography>
                <Grid container item xs={12} flexWrap="nowrap">
                  <Grid
                    container
                    item
                    alignItems="center"
                    justifyContent="center"
                    gap={1}
                    xs={3}
                  >
                    <label htmlFor="lavabo">Lavabo: </label>
                    <Grid item xs={12} sm={4}>
                      <TextField
                        size="small"
                        type="number"
                        autoComplete="lavabo"
                        name="lavabo"
                        id="lavabo"
                        inputProps={{ min: 0, max: 10, defaultValue: 0 }}
                        onChange={handleLavabo}
                        color="success"
                      />
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    item
                    alignItems="center"
                    justifyContent="center"
                    gap={1}
                    xs={3}
                  >
                    <label htmlFor="wc">Wc: </label>
                    <Grid item xs={12} sm={4}>
                      <TextField
                        size="small"
                        type="number"
                        autoComplete="wc"
                        name="wc"
                        id="wc"
                        inputProps={{ min: 0, max: 10, defaultValue: 0 }}
                        onChange={handleWc}
                        color="success"
                      />
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    item
                    alignItems="center"
                    justifyContent="center"
                    gap={1}
                    xs={3}
                  >
                    <label htmlFor="urinario">Urinario: </label>
                    <Grid item xs={12} sm={4}>
                      <TextField
                        size="small"
                        type="number"
                        autoComplete="urinario"
                        name="urinario"
                        id="urinario"
                        inputProps={{ min: 0, max: 10, defaultValue: 0 }}
                        onChange={handleUrinario}
                        color="success"
                      />
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    item
                    alignItems="center"
                    justifyContent="center"
                    gap={1}
                    xs={3}
                  >
                    <label htmlFor="duchas">Duchas: </label>
                    <Grid item xs={12} sm={4}>
                      <TextField
                        size="small"
                        type="number"
                        autoComplete="duchas"
                        name="duchas"
                        id="duchas"
                        inputProps={{ min: 0, max: 10, defaultValue: 0 }}
                        onChange={handleDuchas}
                        color="success"
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            )}

            {/* grid de otros componentes */}
            <Grid item xs={12}>
              <TextField
                size="small"
                multiline
                rows={2}
                autoComplete="otros"
                name="otros"
                fullWidth
                id="otros"
                label="Otros Componentes"
                onChange={handleOtros}
                color="success"
              />
            </Grid>
          </Grid>
          {/* boton de añadir producto */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              mb: 2,
              bgcolor: "#3b8f1e",
              ":hover": { bgcolor: "darkgreen", color: "white" },
            }}
          >
            Añadir Producto
          </Button>
        </Box>
      </Container>
      {/* tabla de productos */}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Nombre</StyledTableCell>
              <StyledTableCell align="left">Imagen Portada</StyledTableCell>
              <StyledTableCell align="left">
                Imagenes del Carousel
              </StyledTableCell>
              <StyledTableCell align="center">Acciones</StyledTableCell>
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>
    </Container>
  );
}
