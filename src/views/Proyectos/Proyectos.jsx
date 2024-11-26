import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import CarouselProyectos from "../../components/CarouselProyectos/CarouselProyectos";
import ScrollToTopButton from "../../components/ScrollToTopButton/ScrollToTopButton";
import { useTranslation } from "react-i18next";

export default function Proyectos() {
  const { t } = useTranslation();

  document.title = t("buttonProy");

  const [obras, setObras] = useState([]);
  const [arrayCarousel, setArrayCarousel] = useState([]);
  const [nombreObra, setNombreObra] = useState("");
  const [openCarousel, setOpenCarousel] = useState(false);

  function handleCloseCarousel() {
    setOpenCarousel(false);
    setArrayCarousel([]);
    setNombreObra("");
  }
  function handleOpenCarousel(nombre, imagenes) {
    setOpenCarousel(true);
    setArrayCarousel(imagenes);
    setNombreObra(nombre);
    console.log(imagenes);
  }
  useEffect(() => {
    async function fetchObras() {
      const response = await fetch(
        `https://globalsolutionsprefabriquees.com/api/obras`
      );
      const data = await response.json();
      setObras(data);
    }
    fetchObras();
  }, []);
  return (
    <Grid marginY={10}>
      <Container maxWidth="xl">
        <Grid item xs={12} my={5} p={2}>
          <Typography variant="h2" fontWeight="bold" color="#3b8f1e">
            {t("tittleTextProjects")}
          </Typography>
        </Grid>
        {obras.length > 0 && (
          <Grid container spacing={2}>
            {obras
              .sort((a, b) => a.position - b.position)
              .map((obra) => (
                <Grid key={obra.id} item xs={12} md={4}>
                  <Card sx={{ maxWidth: 500 }}>
                    <CardActionArea
                      onClick={() =>
                        handleOpenCarousel(obra.nombre, obra.imagenes)
                      }
                    >
                      <CardMedia
                        component="img"
                        height="400"
                        image={`https://globalsolutionsprefabriquees.com/api/${obra.imagen}`}
                        alt="img"
                      />
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="body"
                          sx={{ fontWeight: "bold" }}
                          component="div"
                        >
                          {obra.nombre}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              ))}
            {arrayCarousel.length > 0 && (
              <Dialog
                fullWidth
                maxWidth="lg"
                open={openCarousel}
                onClose={handleCloseCarousel}
              >
                <DialogTitle sx={{ fontWeight: "bold" }}>
                  {nombreObra}
                </DialogTitle>
                <DialogContent>
                  <Grid
                    item
                    xs={12}
                    width="100%"
                    height="100%"
                    marginTop="24px"
                    sx={{ backgroundColor: "#0000007d" }}
                  >
                    <CarouselProyectos fotos={arrayCarousel} />
                  </Grid>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleCloseCarousel} variant="contained">
                    {t("buttonCerrar")}
                  </Button>
                </DialogActions>
              </Dialog>
            )}
          </Grid>
        )}
      </Container>
      <ScrollToTopButton />
    </Grid>
  );
}
