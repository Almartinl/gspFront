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
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

export default function DashboardProductos() {
  const [categoria, setCategoria] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  function handleFileInputChange(event) {
    setSelectedFile(event.target.files[0].name);
  }
  function handleChangeCategoria(e) {
    setCategoria(e.target.value);
  }
  console.log(selectedFile);
  return (
    <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
      <Box component="form" noValidate /*onSubmit={""}*/ sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              autoComplete="given-name"
              name="nombre"
              required
              fullWidth
              id="firstName"
              label="Nombre del Producto"
              autoFocus
              //   value={newUsuario.nombre}
              //   onChange={handleInput}
              color="success"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              id="ref"
              label="Referencia"
              name="ref"
              autoComplete="family-name"
              //   value={newUsuario.apellidos}
              //   onChange={handleInput}
              color="success"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
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
                <MenuItem value={"estructuras"}>Estructuras metalicas</MenuItem>
                <MenuItem value={"edificios"}>Edificios prefabricados</MenuItem>
                <MenuItem value={"naves"}>
                  Naves industruliales y hangares
                </MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <input type="file" onChange={handleFileInputChange} />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="largo"
              label="Largo del bungalow"
              name="largo"
              autoComplete="largo"
              //   value={newUsuario.direccion}
              //   onChange={handleInput}
              color="success"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="telefono"
              label="Telefono"
              name="telefono"
              autoComplete="telefono"
              //   value={newUsuario.telefono}
              //   onChange={handleInput}
              color="success"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              //   value={newUsuario.email}
              //   onChange={handleInput}
              color="success"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="new-password"
              //   value={newUsuario.password}
              //   onChange={handleInput}
              color="success"
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2, backgroundColor: "darkgreen" }}
        >
          Añadir Producto
        </Button>
      </Box>
    </Container>
  );
}