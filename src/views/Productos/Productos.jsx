import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
  Grid,
  Typography,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  IconButton,
  Button,
  TableContainer,
  Table,
  TableBody,
  Paper,
  TableRow,
  TableCell,
  TableFooter,
  Divider,
} from "@mui/material";
import { useEffect, useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";
import CarouselProductos from "../../components/CarouselProductos/CarouselProductos";
import ScrollToTopButton from "../../components/ScrollToTopButton/ScrollToTopButton";
import { alignProperty } from "@mui/material/styles/cssUtils";
import { useTranslation } from "react-i18next";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Productos() {
  document.title = "Productos";

  const { t } = useTranslation();

  const [expandedCard, setExpandedCard] = useState(false);
  const [vistaInicio, setVistaInicio] = useState(true);
  const [vistaBungalowsObras, setVistaBungalowsObras] = useState(false);
  const [vistaBungalowAlmacen, setVistaBungalowAlmacen] = useState(false);
  const [vistaBungalowCaseta, setVistaBungalowCaseta] = useState(false);
  const [buttonCaseta, setButtonCaseta] = useState(false);
  const [vistaGarita1, setVistaGarita1] = useState(false);
  const [vistaGarita2, setVistaGarita2] = useState(false);
  const [vistaBungalowDiafano, setVistaBungalowDiafano] = useState(false);
  const [buttonDiafano, setButtonDiafano] = useState(false);
  const [vistaDiafano1, setVistaDiafano1] = useState(false);
  const [vistaDiafano2, setVistaDiafano2] = useState(false);
  const [vistaDiafano3, setVistaDiafano3] = useState(false);
  const [vistaBungalowWc, setVistaBungalowWc] = useState(false);
  const [buttonWc, setButtonWc] = useState(false);
  const [vistaWc1, setVistaWc1] = useState(false);
  const [vistaWc2, setVistaWc2] = useState(false);
  const [vistaWc3, setVistaWc3] = useState(false);
  const [vistaWc4, setVistaWc4] = useState(false);
  const [vistaWc5, setVistaWc5] = useState(false);
  const [vistaWcDoble, setVistaWcDoble] = useState(false);
  const [vistaBungalowVestuario, setVistaBungalowVestuario] = useState(false);
  const [vistaEstructuras, setVistaEstructuras] = useState(false);
  const [vistaEdificios, setVistaEdificios] = useState(false);
  const [vistaNaves, setVistaNaves] = useState(false);
  const [vistaMaritimos, setVistaMaritimos] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [clickBungalowsObras, setClickBungalowsObras] = useState(false);
  const [bungalowObras, setBungalowObras] = useState([]);
  const [fotoSeleccionada, setFotoSeleccionada] = useState("");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleExpandClick = () => {
    setExpandedCard(!expandedCard);
  };

  function bungalowObraClick(e) {
    e.preventDefault();
    async function fetchProducto() {
      const response = await fetch(
        "https://almartindev.online/api/product/category",
        {
          method: "POST",
          headers: { "content-Type": "application/json" },
          body: JSON.stringify({
            categoria: "bungalowObras",
          }),
        }
      );
      const data = await response.json();
      setBungalowObras(data);
    }
    fetchProducto();

    setClickBungalowsObras(true);
    setVistaBungalowsObras(true);
    setVistaInicio(false);
    setVistaBungalowAlmacen(false);
    setVistaBungalowCaseta(false);
    setVistaBungalowDiafano(false);
    setVistaBungalowVestuario(false);
    setVistaBungalowWc(false);
    setVistaEstructuras(false);
    setVistaEdificios(false);
    setVistaNaves(false);
    setVistaMaritimos(false);
    setButtonCaseta(false);
    setVistaGarita1(false);
    setVistaGarita2(false);
    setButtonDiafano(false);
    setVistaDiafano1(false);
    setVistaDiafano2(false);
    setVistaDiafano3(false);
    setButtonWc(false);
    setVistaWcDoble(false);
    setVistaWc1(false);
    setVistaWc2(false);
    setVistaWc3(false);
    setVistaWc4(false);
    setVistaWc5(false);
    setFotoSeleccionada("");
  }

  function bungalowAlmacenClick(e) {
    e.preventDefault();
    setVistaInicio(false);
    setClickBungalowsObras(false);
    setVistaBungalowsObras(false);
    setVistaBungalowAlmacen(true);
    setVistaBungalowCaseta(false);
    setVistaBungalowDiafano(false);
    setVistaBungalowVestuario(false);
    setVistaBungalowWc(false);
    setButtonCaseta(false);
    setVistaGarita1(false);
    setVistaGarita2(false);
    setButtonDiafano(false);
    setVistaDiafano1(false);
    setVistaDiafano2(false);
    setVistaDiafano3(false);
    setButtonWc(false);
    setVistaWcDoble(false);
    setVistaWc1(false);
    setVistaWc2(false);
    setVistaWc3(false);
    setVistaWc4(false);
    setVistaWc5(false);
    setFotoSeleccionada("");
  }

  function bungalowCasetaClick(e) {
    e.preventDefault();
    setVistaInicio(false);
    setClickBungalowsObras(false);
    setVistaBungalowsObras(false);
    setVistaBungalowAlmacen(false);
    setVistaBungalowCaseta(true);
    setVistaBungalowDiafano(false);
    setVistaBungalowVestuario(false);
    setVistaBungalowWc(false);
    setButtonCaseta(true);
    setVistaGarita1(false);
    setVistaGarita2(false);
    setButtonDiafano(false);
    setVistaDiafano1(false);
    setVistaDiafano2(false);
    setVistaDiafano3(false);
    setButtonWc(false);
    setVistaWcDoble(false);
    setVistaWc1(false);
    setVistaWc2(false);
    setVistaWc3(false);
    setVistaWc4(false);
    setVistaWc5(false);
    setFotoSeleccionada("");
  }

  function garita1Click(e) {
    e.preventDefault();
    setVistaInicio(false);
    setClickBungalowsObras(false);
    setVistaBungalowsObras(false);
    setVistaBungalowAlmacen(false);
    setVistaBungalowCaseta(true);
    setVistaBungalowDiafano(false);
    setVistaBungalowVestuario(false);
    setVistaBungalowWc(false);
    setButtonCaseta(false);
    setVistaGarita1(true);
    setVistaGarita2(false);
    setButtonDiafano(false);
    setVistaDiafano1(false);
    setVistaDiafano2(false);
    setVistaDiafano3(false);
    setButtonWc(false);
    setVistaWcDoble(false);
    setVistaWc1(false);
    setVistaWc2(false);
    setVistaWc3(false);
    setVistaWc4(false);
    setVistaWc5(false);
    setFotoSeleccionada("");
  }

  function garita2Click(e) {
    e.preventDefault();
    setVistaInicio(false);
    setClickBungalowsObras(false);
    setVistaBungalowsObras(false);
    setVistaBungalowAlmacen(false);
    setVistaBungalowCaseta(true);
    setVistaBungalowDiafano(false);
    setVistaBungalowVestuario(false);
    setVistaBungalowWc(false);
    setButtonCaseta(false);
    setVistaGarita1(false);
    setVistaGarita2(true);
    setButtonDiafano(false);
    setVistaDiafano1(false);
    setVistaDiafano2(false);
    setVistaDiafano3(false);
    setButtonWc(false);
    setVistaWcDoble(false);
    setVistaWc1(false);
    setVistaWc2(false);
    setVistaWc3(false);
    setVistaWc4(false);
    setVistaWc5(false);
    setFotoSeleccionada("");
  }

  function bungalowOficinaClick(e) {
    e.preventDefault();
    setVistaInicio(false);
    setClickBungalowsObras(false);
    setVistaBungalowsObras(false);
    setVistaBungalowAlmacen(false);
    setVistaBungalowCaseta(false);
    setVistaBungalowDiafano(true);
    setVistaBungalowVestuario(false);
    setVistaBungalowWc(false);
    setButtonCaseta(false);
    setVistaGarita1(false);
    setVistaGarita2(false);
    setButtonDiafano(true);
    setVistaDiafano1(false);
    setVistaDiafano2(false);
    setVistaDiafano3(false);
    setButtonWc(false);
    setVistaWcDoble(false);
    setVistaWc1(false);
    setVistaWc2(false);
    setVistaWc3(false);
    setVistaWc4(false);
    setVistaWc5(false);
    setFotoSeleccionada("");
  }

  function Oficina1Click(e) {
    e.preventDefault();
    setVistaInicio(false);
    setClickBungalowsObras(false);
    setVistaBungalowsObras(false);
    setVistaBungalowAlmacen(false);
    setVistaBungalowCaseta(false);
    setVistaBungalowDiafano(true);
    setVistaBungalowVestuario(false);
    setVistaBungalowWc(false);
    setButtonCaseta(false);
    setVistaGarita1(false);
    setVistaGarita2(false);
    setButtonDiafano(false);
    setVistaDiafano1(true);
    setVistaDiafano2(false);
    setVistaDiafano3(false);
    setButtonWc(false);
    setVistaWcDoble(false);
    setVistaWc1(false);
    setVistaWc2(false);
    setVistaWc3(false);
    setVistaWc4(false);
    setVistaWc5(false);
    setFotoSeleccionada("");
  }

  function Oficina2Click(e) {
    e.preventDefault();
    setVistaInicio(false);
    setClickBungalowsObras(false);
    setVistaBungalowsObras(false);
    setVistaBungalowAlmacen(false);
    setVistaBungalowCaseta(false);
    setVistaBungalowDiafano(true);
    setVistaBungalowVestuario(false);
    setVistaBungalowWc(false);
    setButtonCaseta(false);
    setVistaGarita1(false);
    setVistaGarita2(false);
    setButtonDiafano(false);
    setVistaDiafano1(false);
    setVistaDiafano2(true);
    setVistaDiafano3(false);
    setButtonWc(false);
    setVistaWcDoble(false);
    setVistaWc1(false);
    setVistaWc2(false);
    setVistaWc3(false);
    setVistaWc4(false);
    setVistaWc5(false);
    setFotoSeleccionada("");
  }

  function Oficina3Click(e) {
    e.preventDefault();
    setVistaInicio(false);
    setClickBungalowsObras(false);
    setVistaBungalowsObras(false);
    setVistaBungalowAlmacen(false);
    setVistaBungalowCaseta(false);
    setVistaBungalowDiafano(true);
    setVistaBungalowVestuario(false);
    setVistaBungalowWc(false);
    setButtonCaseta(false);
    setVistaGarita1(false);
    setVistaGarita2(false);
    setButtonDiafano(false);
    setVistaDiafano1(false);
    setVistaDiafano2(false);
    setVistaDiafano3(true);
    setButtonWc(false);
    setVistaWcDoble(false);
    setVistaWc1(false);
    setVistaWc2(false);
    setVistaWc3(false);
    setVistaWc4(false);
    setVistaWc5(false);
    setFotoSeleccionada("");
  }

  function bungalowWcClick(e) {
    e.preventDefault();
    setVistaInicio(false);
    setClickBungalowsObras(false);
    setVistaBungalowsObras(false);
    setVistaBungalowAlmacen(false);
    setVistaBungalowCaseta(false);
    setVistaBungalowDiafano(false);
    setVistaBungalowVestuario(false);
    setVistaBungalowWc(true);
    setButtonCaseta(false);
    setVistaGarita1(false);
    setVistaGarita2(false);
    setButtonDiafano(false);
    setVistaDiafano1(false);
    setVistaDiafano2(false);
    setVistaDiafano3(false);
    setButtonWc(true);
    setVistaWcDoble(false);
    setVistaWc1(false);
    setVistaWc2(false);
    setVistaWc3(false);
    setVistaWc4(false);
    setVistaWc5(false);
    setFotoSeleccionada("");
  }

  function wcDobleClick(e) {
    e.preventDefault();
    setVistaInicio(false);
    setClickBungalowsObras(false);
    setVistaBungalowsObras(false);
    setVistaBungalowAlmacen(false);
    setVistaBungalowCaseta(false);
    setVistaBungalowDiafano(false);
    setVistaBungalowVestuario(false);
    setVistaBungalowWc(true);
    setButtonCaseta(false);
    setVistaGarita1(false);
    setVistaGarita2(false);
    setButtonDiafano(false);
    setVistaDiafano1(false);
    setVistaDiafano2(false);
    setVistaDiafano3(false);
    setButtonWc(false);
    setVistaWcDoble(true);
    setVistaWc1(false);
    setVistaWc2(false);
    setVistaWc3(false);
    setVistaWc4(false);
    setVistaWc5(false);
    setFotoSeleccionada("");
  }

  function wc1Click(e) {
    e.preventDefault();
    setVistaInicio(false);
    setClickBungalowsObras(false);
    setVistaBungalowsObras(false);
    setVistaBungalowAlmacen(false);
    setVistaBungalowCaseta(false);
    setVistaBungalowDiafano(false);
    setVistaBungalowVestuario(false);
    setVistaBungalowWc(true);
    setButtonCaseta(false);
    setVistaGarita1(false);
    setVistaGarita2(false);
    setButtonDiafano(false);
    setVistaDiafano1(false);
    setVistaDiafano2(false);
    setVistaDiafano3(false);
    setButtonWc(false);
    setVistaWcDoble(false);
    setVistaWc1(true);
    setVistaWc2(false);
    setVistaWc3(false);
    setVistaWc4(false);
    setVistaWc5(false);
    setFotoSeleccionada("");
  }

  function wc2Click(e) {
    e.preventDefault();
    setVistaInicio(false);
    setClickBungalowsObras(false);
    setVistaBungalowsObras(false);
    setVistaBungalowAlmacen(false);
    setVistaBungalowCaseta(false);
    setVistaBungalowDiafano(false);
    setVistaBungalowVestuario(false);
    setVistaBungalowWc(true);
    setButtonCaseta(false);
    setVistaGarita1(false);
    setVistaGarita2(false);
    setButtonDiafano(false);
    setVistaDiafano1(false);
    setVistaDiafano2(false);
    setVistaDiafano3(false);
    setButtonWc(false);
    setVistaWcDoble(false);
    setVistaWc1(false);
    setVistaWc2(true);
    setVistaWc3(false);
    setVistaWc4(false);
    setVistaWc5(false);
    setFotoSeleccionada("");
  }

  function wc3Click(e) {
    e.preventDefault();
    setVistaInicio(false);
    setClickBungalowsObras(false);
    setVistaBungalowsObras(false);
    setVistaBungalowAlmacen(false);
    setVistaBungalowCaseta(false);
    setVistaBungalowDiafano(false);
    setVistaBungalowVestuario(false);
    setVistaBungalowWc(true);
    setButtonCaseta(false);
    setVistaGarita1(false);
    setVistaGarita2(false);
    setButtonDiafano(false);
    setVistaDiafano1(false);
    setVistaDiafano2(false);
    setVistaDiafano3(false);
    setButtonWc(false);
    setVistaWcDoble(false);
    setVistaWc1(false);
    setVistaWc2(false);
    setVistaWc3(true);
    setVistaWc4(false);
    setVistaWc5(false);
    setFotoSeleccionada("");
  }

  function wc4Click(e) {
    e.preventDefault();
    setVistaInicio(false);
    setClickBungalowsObras(false);
    setVistaBungalowsObras(false);
    setVistaBungalowAlmacen(false);
    setVistaBungalowCaseta(false);
    setVistaBungalowDiafano(false);
    setVistaBungalowVestuario(false);
    setVistaBungalowWc(true);
    setButtonCaseta(false);
    setVistaGarita1(false);
    setVistaGarita2(false);
    setButtonDiafano(false);
    setVistaDiafano1(false);
    setVistaDiafano2(false);
    setVistaDiafano3(false);
    setButtonWc(false);
    setVistaWcDoble(false);
    setVistaWc1(false);
    setVistaWc2(false);
    setVistaWc3(false);
    setVistaWc4(true);
    setVistaWc5(false);
    setFotoSeleccionada("");
  }

  function wc5Click(e) {
    e.preventDefault();
    setVistaInicio(false);
    setClickBungalowsObras(false);
    setVistaBungalowsObras(false);
    setVistaBungalowAlmacen(false);
    setVistaBungalowCaseta(false);
    setVistaBungalowDiafano(false);
    setVistaBungalowVestuario(false);
    setVistaBungalowWc(true);
    setButtonCaseta(false);
    setVistaGarita1(false);
    setVistaGarita2(false);
    setButtonDiafano(false);
    setVistaDiafano1(false);
    setVistaDiafano2(false);
    setVistaDiafano3(false);
    setButtonWc(false);
    setVistaWcDoble(false);
    setVistaWc1(false);
    setVistaWc2(false);
    setVistaWc3(false);
    setVistaWc4(false);
    setVistaWc5(true);
    setFotoSeleccionada("");
  }

  function bungalowVestuarioClick(e) {
    e.preventDefault();
    setVistaInicio(false);
    setClickBungalowsObras(false);
    setVistaBungalowsObras(false);
    setVistaBungalowAlmacen(false);
    setVistaBungalowCaseta(false);
    setVistaBungalowDiafano(false);
    setVistaBungalowVestuario(true);
    setVistaBungalowWc(false);
    setButtonCaseta(false);
    setVistaGarita1(false);
    setVistaGarita2(false);
    setButtonDiafano(false);
    setVistaDiafano1(false);
    setVistaDiafano2(false);
    setVistaDiafano3(false);
    setButtonWc(false);
    setVistaWcDoble(false);
    setVistaWc1(false);
    setVistaWc2(false);
    setVistaWc3(false);
    setVistaWc4(false);
    setVistaWc5(false);
    setFotoSeleccionada("");
  }

  function volverInicioClick(e) {
    e.preventDefault();
    setVistaInicio(true);
    setClickBungalowsObras(false);
    setVistaBungalowsObras(false);
    setVistaBungalowAlmacen(false);
    setVistaBungalowCaseta(false);
    setVistaBungalowDiafano(false);
    setVistaBungalowVestuario(false);
    setVistaBungalowWc(false);
    setButtonCaseta(false);
    setVistaGarita1(false);
    setVistaGarita2(false);
    setButtonDiafano(false);
    setVistaDiafano1(false);
    setVistaDiafano2(false);
    setVistaDiafano3(false);
    setButtonWc(false);
    setVistaWcDoble(false);
    setVistaWc1(false);
    setVistaWc2(false);
    setVistaWc3(false);
    setVistaWc4(false);
    setVistaWc5(false);
    setFotoSeleccionada("");
  }

  function estructuraClick(e) {
    e.preventDefault();
    setVistaInicio(false);
    setClickBungalowsObras(false);
    setVistaBungalowsObras(false);
    setVistaBungalowAlmacen(false);
    setVistaBungalowCaseta(false);
    setVistaBungalowDiafano(false);
    setVistaBungalowVestuario(false);
    setVistaBungalowWc(false);
    setVistaEstructuras(true);
    setVistaEdificios(false);
    setVistaNaves(false);
    setVistaMaritimos(false);
    setButtonCaseta(false);
    setVistaGarita1(false);
    setVistaGarita2(false);
    setButtonDiafano(false);
    setVistaDiafano1(false);
    setVistaDiafano2(false);
    setVistaDiafano3(false);
    setButtonWc(false);
    setVistaWcDoble(false);
    setVistaWc1(false);
    setVistaWc2(false);
    setVistaWc3(false);
    setVistaWc4(false);
    setVistaWc5(false);
    setFotoSeleccionada("");
  }

  function edificioClick(e) {
    e.preventDefault();
    setVistaInicio(false);
    setClickBungalowsObras(false);
    setVistaBungalowsObras(false);
    setVistaBungalowAlmacen(false);
    setVistaBungalowCaseta(false);
    setVistaBungalowDiafano(false);
    setVistaBungalowVestuario(false);
    setVistaBungalowWc(false);
    setVistaEstructuras(false);
    setVistaEdificios(true);
    setVistaNaves(false);
    setVistaMaritimos(false);
    setButtonCaseta(false);
    setVistaGarita1(false);
    setVistaGarita2(false);
    setButtonDiafano(false);
    setVistaDiafano1(false);
    setVistaDiafano2(false);
    setVistaDiafano3(false);
    setButtonWc(false);
    setVistaWcDoble(false);
    setVistaWc1(false);
    setVistaWc2(false);
    setVistaWc3(false);
    setVistaWc4(false);
    setVistaWc5(false);
    setFotoSeleccionada("");
  }

  function naveClick(e) {
    e.preventDefault();
    setVistaInicio(false);
    setClickBungalowsObras(false);
    setVistaBungalowsObras(false);
    setVistaBungalowAlmacen(false);
    setVistaBungalowCaseta(false);
    setVistaBungalowDiafano(false);
    setVistaBungalowVestuario(false);
    setVistaBungalowWc(false);
    setVistaEstructuras(false);
    setVistaEdificios(false);
    setVistaNaves(true);
    setVistaMaritimos(false);
    setButtonCaseta(false);
    setVistaGarita1(false);
    setVistaGarita2(false);
    setButtonDiafano(false);
    setVistaDiafano1(false);
    setVistaDiafano2(false);
    setVistaDiafano3(false);
    setButtonWc(false);
    setVistaWcDoble(false);
    setVistaWc1(false);
    setVistaWc2(false);
    setVistaWc3(false);
    setVistaWc4(false);
    setVistaWc5(false);
    setFotoSeleccionada("");
  }

  function maritimoClick(e) {
    e.preventDefault();
    setVistaInicio(false);
    setClickBungalowsObras(false);
    setVistaBungalowsObras(false);
    setVistaBungalowAlmacen(false);
    setVistaBungalowCaseta(false);
    setVistaBungalowDiafano(false);
    setVistaBungalowVestuario(false);
    setVistaBungalowWc(false);
    setVistaEstructuras(false);
    setVistaEdificios(false);
    setVistaNaves(false);
    setVistaMaritimos(true);
    setButtonCaseta(false);
    setVistaGarita1(false);
    setVistaGarita2(false);
    setButtonDiafano(false);
    setVistaDiafano1(false);
    setVistaDiafano2(false);
    setVistaDiafano3(false);
    setButtonWc(false);
    setVistaWcDoble(false);
    setVistaWc1(false);
    setVistaWc2(false);
    setVistaWc3(false);
    setVistaWc4(false);
    setVistaWc5(false);
    setFotoSeleccionada("");
  }

  useEffect(() => {
    setExpanded(false);
    setExpandedCard(false);
  }, [
    vistaInicio,
    vistaBungalowsObras,
    vistaBungalowAlmacen,
    vistaBungalowCaseta,
    vistaBungalowDiafano,
    vistaBungalowVestuario,
    vistaBungalowWc,
    vistaEdificios,
    vistaEstructuras,
    vistaNaves,
    vistaGarita1,
    vistaGarita2,
  ]);

  return (
    <Container maxWidth="xl" sx={{ my: 4 }}>
      <Grid container>
        {clickBungalowsObras ||
        vistaBungalowAlmacen ||
        vistaBungalowCaseta ||
        vistaBungalowDiafano ||
        vistaBungalowWc ||
        vistaBungalowVestuario ? (
          // Grid de tipos de bungalows de obras
          <Grid
            container
            item
            xs={12}
            sm={3}
            gap={10}
            bgcolor="#d3b72a"
            p={5}
            alignContent="flex-start"
          >
            <Typography variant="h4" fontWeight="800" color="#3b8f1e">
              {t("textTittleTipos")}
            </Typography>
            <Grid container gap={2}>
              {/* Boton de Almacen */}
              <Button
                variant={vistaBungalowAlmacen ? "contained" : "outlined"}
                fullWidth
                color="success"
                sx={
                  vistaBungalowAlmacen
                    ? {
                        color: "white",
                        fontWeight: "bold",
                        backgroundColor: "#3b8f1e",
                      }
                    : {
                        color: "#3b8f1e",
                        borderColor: "#3b8f1e",
                        fontWeight: "bold",
                      }
                }
                onClick={bungalowAlmacenClick}
              >
                {t("textButtonAlmacen")}
              </Button>
              {/* Boton desplegado de Caseta */}
              {vistaBungalowCaseta ? (
                <Accordion
                  expanded
                  sx={
                    vistaBungalowCaseta && {
                      color: "#3b8f1e",
                      borderColor: "#3b8f1e",
                      fontWeight: "bold",
                      backgroundColor: "#d3b72a",
                      border: 1,
                    }
                  }
                >
                  <AccordionSummary
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      color: "white",
                      fontWeight: "bold",
                      backgroundColor: "#3b8f1e",
                    }}
                  >
                    <Typography textTransform="uppercase" fontWeight="bold">
                      {t("textButtonCaseta")}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ textAlign: "center" }}>
                    <Button
                      variant={vistaGarita1 ? "contained" : "outlined"}
                      fullWidth
                      color="success"
                      sx={
                        vistaGarita1
                          ? {
                              color: "white",
                              fontWeight: "bold",
                              backgroundColor: "#3b8f1e",
                              textTransform: "none",
                            }
                          : {
                              color: "#3b8f1e",
                              borderColor: "#3b8f1e",
                              fontWeight: "bold",
                              textTransform: "none",
                            }
                      }
                      onClick={garita1Click}
                    >
                      {t("textButtonGarita1")}
                    </Button>
                    <Button
                      variant={vistaGarita2 ? "contained" : "outlined"}
                      fullWidth
                      color="success"
                      sx={
                        vistaGarita2
                          ? {
                              color: "white",
                              fontWeight: "bold",
                              backgroundColor: "#3b8f1e",
                              textTransform: "none",
                            }
                          : {
                              color: "#3b8f1e",
                              borderColor: "#3b8f1e",
                              fontWeight: "bold",
                              textTransform: "none",
                            }
                      }
                      onClick={garita2Click}
                    >
                      {t("textButtonGarita2")}
                    </Button>
                  </AccordionDetails>
                </Accordion>
              ) : (
                //Boton sin desplegar de Caseta
                <Button
                  variant={vistaBungalowCaseta ? "contained" : "outlined"}
                  fullWidth
                  color="success"
                  endIcon={<ExpandMoreIcon />}
                  sx={
                    vistaBungalowCaseta
                      ? {
                          color: "white",
                          fontWeight: "bold",
                          backgroundColor: "#3b8f1e",
                        }
                      : {
                          color: "#3b8f1e",
                          borderColor: "#3b8f1e",
                          fontWeight: "bold",
                        }
                  }
                  onClick={bungalowCasetaClick}
                >
                  {t("textButtonCaseta")}
                </Button>
              )}

              {/* Boton desplegado de Oficinas */}

              {vistaBungalowDiafano ? (
                <Accordion
                  expanded
                  sx={
                    vistaBungalowDiafano && {
                      color: "#3b8f1e",
                      borderColor: "#3b8f1e",
                      fontWeight: "bold",
                      backgroundColor: "#d3b72a",
                      border: 1,
                    }
                  }
                >
                  <AccordionSummary
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      color: "white",
                      fontWeight: "bold",
                      backgroundColor: "#3b8f1e",
                    }}
                  >
                    <Typography textTransform="uppercase" fontWeight="bold">
                      {t("textButtonOficina")}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ textAlign: "center" }}>
                    <Button
                      variant={vistaDiafano1 ? "contained" : "outlined"}
                      fullWidth
                      color="success"
                      sx={
                        vistaDiafano1
                          ? {
                              color: "white",
                              fontWeight: "bold",
                              backgroundColor: "#3b8f1e",
                              textTransform: "none",
                            }
                          : {
                              color: "#3b8f1e",
                              borderColor: "#3b8f1e",
                              fontWeight: "bold",
                              textTransform: "none",
                            }
                      }
                      onClick={Oficina1Click}
                    >
                      {t("textButtonOficina1")}
                    </Button>
                    <Button
                      variant={vistaDiafano2 ? "contained" : "outlined"}
                      fullWidth
                      color="success"
                      sx={
                        vistaDiafano2
                          ? {
                              color: "white",
                              fontWeight: "bold",
                              backgroundColor: "#3b8f1e",
                              textTransform: "none",
                            }
                          : {
                              color: "#3b8f1e",
                              borderColor: "#3b8f1e",
                              fontWeight: "bold",
                              textTransform: "none",
                            }
                      }
                      onClick={Oficina2Click}
                    >
                      {t("textButtonOficina2")}
                    </Button>
                    <Button
                      variant={vistaDiafano3 ? "contained" : "outlined"}
                      fullWidth
                      color="success"
                      sx={
                        vistaDiafano3
                          ? {
                              color: "white",
                              fontWeight: "bold",
                              backgroundColor: "#3b8f1e",
                              textTransform: "none",
                            }
                          : {
                              color: "#3b8f1e",
                              borderColor: "#3b8f1e",
                              fontWeight: "bold",
                              textTransform: "none",
                            }
                      }
                      onClick={Oficina3Click}
                    >
                      {t("textButtonOficina3")}
                    </Button>
                  </AccordionDetails>
                </Accordion>
              ) : (
                // Boton sin desplegar Oficina
                <Button
                  variant={vistaBungalowDiafano ? "contained" : "outlined"}
                  fullWidth
                  color="success"
                  endIcon={<ExpandMoreIcon />}
                  sx={
                    vistaBungalowDiafano
                      ? {
                          color: "white",
                          fontWeight: "bold",
                          backgroundColor: "#3b8f1e",
                        }
                      : {
                          color: "#3b8f1e",
                          borderColor: "#3b8f1e",
                          fontWeight: "bold",
                        }
                  }
                  onClick={bungalowOficinaClick}
                >
                  {t("textButtonOficina")}
                </Button>
              )}
              {/* Boton desplegado de Sanitarios */}
              {vistaBungalowWc ? (
                <Accordion
                  expanded
                  sx={
                    vistaBungalowWc && {
                      color: "#3b8f1e",
                      borderColor: "#3b8f1e",
                      fontWeight: "bold",
                      backgroundColor: "#d3b72a",
                      border: 1,
                    }
                  }
                >
                  <AccordionSummary
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      color: "white",
                      fontWeight: "bold",
                      backgroundColor: "#3b8f1e",
                    }}
                  >
                    <Typography textTransform="uppercase" fontWeight="bold">
                      {t("textButtonSanitario")}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ textAlign: "center" }}>
                    <Button
                      variant={vistaWcDoble ? "contained" : "outlined"}
                      fullWidth
                      color="success"
                      sx={
                        vistaWcDoble
                          ? {
                              color: "white",
                              fontWeight: "bold",
                              backgroundColor: "#3b8f1e",
                              textTransform: "none",
                            }
                          : {
                              color: "#3b8f1e",
                              borderColor: "#3b8f1e",
                              fontWeight: "bold",
                              textTransform: "none",
                            }
                      }
                      onClick={wcDobleClick}
                    >
                      {t("textButtonSanitarioDoble")}
                    </Button>
                    <Button
                      variant={vistaWc1 ? "contained" : "outlined"}
                      fullWidth
                      color="success"
                      sx={
                        vistaWc1
                          ? {
                              color: "white",
                              fontWeight: "bold",
                              backgroundColor: "#3b8f1e",
                              textTransform: "none",
                            }
                          : {
                              color: "#3b8f1e",
                              borderColor: "#3b8f1e",
                              fontWeight: "bold",
                              textTransform: "none",
                            }
                      }
                      onClick={wc1Click}
                    >
                      {t("textButtonSanitario1")}
                    </Button>
                    <Button
                      variant={vistaWc2 ? "contained" : "outlined"}
                      fullWidth
                      color="success"
                      sx={
                        vistaWc2
                          ? {
                              color: "white",
                              fontWeight: "bold",
                              backgroundColor: "#3b8f1e",
                              textTransform: "none",
                            }
                          : {
                              color: "#3b8f1e",
                              borderColor: "#3b8f1e",
                              fontWeight: "bold",
                              textTransform: "none",
                            }
                      }
                      onClick={wc2Click}
                    >
                      {t("textButtonSanitario2")}
                    </Button>
                    <Button
                      variant={vistaWc3 ? "contained" : "outlined"}
                      fullWidth
                      color="success"
                      sx={
                        vistaWc3
                          ? {
                              color: "white",
                              fontWeight: "bold",
                              backgroundColor: "#3b8f1e",
                              textTransform: "none",
                            }
                          : {
                              color: "#3b8f1e",
                              borderColor: "#3b8f1e",
                              fontWeight: "bold",
                              textTransform: "none",
                            }
                      }
                      onClick={wc3Click}
                    >
                      {t("textButtonSanitario3")}
                    </Button>
                    <Button
                      variant={vistaWc4 ? "contained" : "outlined"}
                      fullWidth
                      color="success"
                      sx={
                        vistaWc4
                          ? {
                              color: "white",
                              fontWeight: "bold",
                              backgroundColor: "#3b8f1e",
                              textTransform: "none",
                            }
                          : {
                              color: "#3b8f1e",
                              borderColor: "#3b8f1e",
                              fontWeight: "bold",
                              textTransform: "none",
                            }
                      }
                      onClick={wc4Click}
                    >
                      {t("textButtonSanitario4")}
                    </Button>
                    <Button
                      variant={vistaWc5 ? "contained" : "outlined"}
                      fullWidth
                      color="success"
                      sx={
                        vistaWc5
                          ? {
                              color: "white",
                              fontWeight: "bold",
                              backgroundColor: "#3b8f1e",
                              textTransform: "none",
                            }
                          : {
                              color: "#3b8f1e",
                              borderColor: "#3b8f1e",
                              fontWeight: "bold",
                              textTransform: "none",
                            }
                      }
                      onClick={wc5Click}
                      disabled
                    >
                      {t("textButtonSanitario5")}
                    </Button>
                  </AccordionDetails>
                </Accordion>
              ) : (
                // Boton sin desplegar Sanitario
                <Button
                  variant={vistaBungalowWc ? "contained" : "outlined"}
                  fullWidth
                  color="success"
                  endIcon={<ExpandMoreIcon />}
                  sx={
                    vistaBungalowWc
                      ? {
                          color: "white",
                          fontWeight: "bold",
                          backgroundColor: "#3b8f1e",
                        }
                      : {
                          color: "#3b8f1e",
                          borderColor: "#3b8f1e",
                          fontWeight: "bold",
                        }
                  }
                  onClick={bungalowWcClick}
                >
                  {t("textButtonSanitario")}
                </Button>
              )}
              {/* Boton Vestuarios */}
              <Button
                variant={vistaBungalowVestuario ? "contained" : "outlined"}
                fullWidth
                color="success"
                sx={
                  vistaBungalowVestuario
                    ? {
                        color: "white",
                        fontWeight: "bold",
                        backgroundColor: "#3b8f1e",
                      }
                    : {
                        color: "#3b8f1e",
                        borderColor: "#3b8f1e",
                        fontWeight: "bold",
                      }
                }
                onClick={bungalowVestuarioClick}
              >
                {t("textButtonVestuarios")}
              </Button>
              {/* Boton Volver */}
              <Button
                variant="outlined"
                fullWidth
                color="error"
                sx={{
                  fontWeight: "bold",
                }}
                onClick={volverInicioClick}
              >
                {t("textButtonVolverCat")}
              </Button>
            </Grid>
          </Grid>
        ) : (
          // Grid de categoria de productos
          <Grid
            container
            item
            xs={12}
            sm={3}
            gap={10}
            bgcolor="#d3b72a"
            p={5}
            alignContent="flex-start"
          >
            <Typography variant="h4" fontWeight="800" color="#3b8f1e">
              {t("textTittleProductos")}
            </Typography>
            <Grid container gap={2}>
              <Button
                variant={vistaBungalowsObras ? "contained" : "outlined"}
                fullWidth
                color="success"
                sx={
                  vistaBungalowsObras
                    ? {
                        color: "white",
                        fontWeight: "bold",
                        backgroundColor: "#3b8f1e",
                      }
                    : {
                        color: "#3b8f1e",
                        borderColor: "#3b8f1e",
                        fontWeight: "bold",
                      }
                }
                onClick={bungalowObraClick}
              >
                {t("textCarouselObras")}
              </Button>
              <Button
                variant={vistaEstructuras ? "contained" : "outlined"}
                fullWidth
                color="success"
                sx={
                  vistaEstructuras
                    ? {
                        color: "white",
                        fontWeight: "bold",
                        backgroundColor: "#3b8f1e",
                      }
                    : {
                        color: "#3b8f1e",
                        borderColor: "#3b8f1e",
                        fontWeight: "bold",
                      }
                }
                onClick={estructuraClick}
              >
                {t("textCarouselEstructura")}
              </Button>
              <Button
                variant={vistaEdificios ? "contained" : "outlined"}
                fullWidth
                color="success"
                sx={
                  vistaEdificios
                    ? {
                        color: "white",
                        fontWeight: "bold",
                        backgroundColor: "#3b8f1e",
                      }
                    : {
                        color: "#3b8f1e",
                        borderColor: "#3b8f1e",
                        fontWeight: "bold",
                      }
                }
                onClick={edificioClick}
              >
                {t("textCarouselEdificios")}
              </Button>
              <Button
                variant={vistaNaves ? "contained" : "outlined"}
                fullWidth
                color="success"
                sx={
                  vistaNaves
                    ? {
                        color: "white",
                        fontWeight: "bold",
                        backgroundColor: "#3b8f1e",
                      }
                    : {
                        color: "#3b8f1e",
                        borderColor: "#3b8f1e",
                        fontWeight: "bold",
                      }
                }
                onClick={naveClick}
              >
                {" "}
                {t("textCarouselNaves")}
              </Button>
              <Button
                variant={vistaMaritimos ? "contained" : "outlined"}
                fullWidth
                color="success"
                sx={
                  vistaMaritimos
                    ? {
                        color: "white",
                        fontWeight: "bold",
                        backgroundColor: "#3b8f1e",
                      }
                    : {
                        color: "#3b8f1e",
                        borderColor: "#3b8f1e",
                        fontWeight: "bold",
                      }
                }
                onClick={maritimoClick}
              >
                {" "}
                {t("textCarouselContenedores")}
              </Button>
            </Grid>
          </Grid>
        )}
        {/* Grid de las vistas de los productos */}
        <Grid
          container
          item
          xs={12}
          sm={9}
          gap={5}
          bgcolor="#d7d7d7"
          flexDirection="column"
        >
          {vistaInicio && <CarouselProductos />}

          {vistaBungalowsObras && (
            <Grid container item xs={12} spacing={2} p={3}>
              <Grid item sm={12}>
                <Card>
                  {bungalowObras.length > 0 && (
                    <>
                      <CardHeader
                        // action={
                        //   <Typography
                        //     color="#3b8f1e"
                        //     fontWeight="bold"
                        //     variant="h6"
                        //   >
                        //     Ref: 123
                        //   </Typography>
                        // }
                        title={t(
                          `textContentProductObras.${bungalowObras[0].nombre}`
                        )}
                        titleTypographyProps={{
                          color: "#3b8f1e",
                          align: "left",
                          fontWeight: "bold",
                        }}
                      />
                      <CardMedia
                        component="img"
                        height="500"
                        image={`https://almartindev.online/api${bungalowObras[0].foto}`}
                        alt="img"
                      />
                      <CardContent>
                        <Typography
                          variant="body2"
                          color="#3b8f1e"
                          fontWeight="bold"
                        >
                          {t(
                            `textContentProductObrasDesc.${bungalowObras[0].descripcioncorta}`
                          )}
                        </Typography>
                      </CardContent>
                    </>
                  )}
                </Card>
              </Grid>
            </Grid>
          )}

          {vistaBungalowAlmacen && (
            <Grid container item xs={12} spacing={2} p={3}>
              <Grid item xs={12}>
                <Card>
                  <CardHeader
                    title={t("textButtonAlmacen")}
                    titleTypographyProps={{
                      color: "#3b8f1e",
                      align: "left",
                      fontWeight: "bold",
                    }}
                  />
                  <CardMedia
                    component="img"
                    height="500"
                    image="../../bungalowsalmacen.jpeg"
                    alt="img"
                  />
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="#3b8f1e"
                      fontWeight="bold"
                    >
                      {t("textAlmacenDescripcionCorta")}
                    </Typography>
                  </CardContent>
                  <CardContent
                    sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                  >
                    <Typography
                      variant="h4"
                      bgcolor="#3b8f1e"
                      color="white"
                      p={1}
                    >
                      {t("textTittleDescripcion")}
                    </Typography>
                    <Grid container>
                      <Grid item xs={12}>
                        <Typography variant="body1" p={1}>
                          {t("textAlmacenDescripcion1")}
                        </Typography>
                        <Typography variant="body1" p={1}>
                          {t("textAlmacenDescripcion2")}
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Accordion
                          expanded={expanded === "panel1"}
                          onChange={handleChange("panel1")}
                        >
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                          >
                            <Typography
                              variant="h5"
                              sx={{ textDecoration: "underline" }}
                            >
                              {t("textTittleCaracteristicas")}
                            </Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <TableContainer component={Paper}>
                              <Table
                                sx={{ minWidth: 500 }}
                                aria-label="custom pagination table"
                              >
                                <TableBody>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      longitud exterior
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      6036 mm - disponible en 4835 mm
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      ancho exterior
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      2435mm
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      Altura del techo
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      2500mm
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      altura total
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      2935mm
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      revestimiento
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      Paneles sándwich de espuma de poliuretano
                                      de 40 mm
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      Piso
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      Suelo de aglomerado hidrófugo de 22 mm
                                      (CTBH)
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      Calefacción
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      1 convector de 2000 W
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      electricidad
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      2x2 fluorescentes 36W - 2 uds 16A
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      Carpintería
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      Ventana de PVC - doble acristalamiento
                                      4-15-4 con persiana enrollable
                                    </TableCell>
                                  </TableRow>
                                </TableBody>
                                <TableFooter></TableFooter>
                              </Table>
                            </TableContainer>
                          </AccordionDetails>
                        </Accordion>
                        <Accordion
                          expanded={expanded === "panel2"}
                          onChange={handleChange("panel2")}
                        >
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2bh-content"
                            id="panel2bh-header"
                          >
                            <Typography
                              variant="h5"
                              sx={{ textDecoration: "underline" }}
                            >
                              {t("textTittleDimensiones")}
                            </Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <img src="../../PLANTA.jpg" width="100%"></img>
                          </AccordionDetails>
                        </Accordion>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          )}

          {vistaBungalowCaseta && buttonCaseta && (
            <Grid container item xs={12} spacing={2} p={3}>
              <Grid item xs={12}>
                <Card>
                  <CardHeader
                    title={t("textButtonCaseta")}
                    titleTypographyProps={{
                      color: "#3b8f1e",
                      align: "left",
                      fontWeight: "bold",
                    }}
                  />
                  <CardMedia
                    component="img"
                    height="500"
                    image="../../caseta.jpg"
                    alt="img"
                  />
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="#3b8f1e"
                      fontWeight="bold"
                    >
                      {t("textCasetaDescripcionCorta")}
                    </Typography>
                  </CardContent>
                  <CardContent
                    sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                  ></CardContent>
                </Card>
              </Grid>
            </Grid>
          )}

          {vistaGarita1 && (
            <Grid container item xs={12} spacing={2} p={3}>
              <Grid item xs={12}>
                <Card>
                  <CardHeader
                    title={t("textButtonGarita1")}
                    titleTypographyProps={{
                      color: "#3b8f1e",
                      align: "left",
                      fontWeight: "bold",
                    }}
                  />
                  <CardMedia
                    component="img"
                    height="500"
                    image={
                      fotoSeleccionada ? fotoSeleccionada : "../../garita1.png"
                    }
                    alt="img"
                    sx={{ objectFit: "contain" }}
                  />
                  <Container xs={12}>
                    <Divider
                      sx={{
                        border: 1,
                        borderColor: "#3b8f1e",
                        my: 3,
                        opacity: "initial",
                      }}
                    />
                  </Container>

                  <CardContent
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      gap: 1,
                      flexWrap: "wrap",
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="100"
                      image="../../garita1.png"
                      onClick={(e) => {
                        e.preventDefault();
                        setFotoSeleccionada("../../garita1.png");
                      }}
                      alt="img"
                      sx={{
                        objectFit: "contain",
                        maxWidth: "100px",
                        cursor: "pointer",
                        border: 1,
                        borderColor: "#3b8f1e",
                      }}
                    />
                    <CardMedia
                      component="img"
                      height="100"
                      image="../../garita3.jpg"
                      onClick={(e) => {
                        e.preventDefault();
                        setFotoSeleccionada("../../garita3.jpg");
                      }}
                      alt="img"
                      sx={{
                        objectFit: "contain",
                        maxWidth: "100px",
                        cursor: "pointer",
                        border: 1,
                        borderColor: "#3b8f1e",
                      }}
                    />
                  </CardContent>
                  <CardContent
                    sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                  >
                    <Typography
                      variant="h4"
                      bgcolor="#3b8f1e"
                      color="white"
                      p={1}
                    >
                      {t("textTittleDescripcion")}
                    </Typography>
                    <Grid container>
                      {/* <Grid item xs={12}>
                        <Typography variant="body1" p={1}>
                          Nuestros bungalows de sitio para uso como Almacenes
                          están perfectamente adaptados para servir como Almacen
                          en su campamento base, proyectos militares o civiles
                          con el fin de poner a sus equipos técnicos en
                          condiciones óptimas de comodidad y trabajo, para una
                          mejor tasa de productividad y desempeño diario.
                        </Typography>
                        <Typography variant="body1" p={1}>
                          Están diseñadas con unas dimensiones estándar de 6,00
                          X 2,40 m con una altura exterior de 2,60 m, o 12 X
                          2,40 m entre las muchas ventajas que tienen tienes: el
                          hecho de que se pueden personalizar según los colores
                          y las necesidades del cliente en cuanto a de
                          dimensiones y tabiques interiores.
                        </Typography>
                      </Grid> */}
                      <Grid item xs={12}>
                        <Accordion
                          expanded={expanded === "panel1"}
                          onChange={handleChange("panel1")}
                        >
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                          >
                            <Typography
                              variant="h5"
                              sx={{ textDecoration: "underline" }}
                            >
                              {t("textTittleCaracteristicas")}
                            </Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <TableContainer component={Paper}>
                              <Table
                                sx={{ minWidth: 500 }}
                                aria-label="custom pagination table"
                              >
                                <TableBody>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textLongitud")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      150.0 cm
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textAncho")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      120.0 cm
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textAlturaTotal")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      280.0 cm
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textAltura")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      250.0 cm
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textPeso")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      120 kg
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textEstructura")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      {t("textEstructuraGeneral")}
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textPaneles")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      {t("textPanelesGeneral")}
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textSuelo")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      {t("textSuelosGeneral")}
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textPuertas")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      {t("textPuertasGarita1")}
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textVentanas")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      {t("textVentanasGarita1")}
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textElectricidad")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      {t("textElectricidadGeneral")}
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textOtros")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      {t("textOtrosGeneral")}
                                    </TableCell>
                                  </TableRow>
                                </TableBody>
                                <TableFooter></TableFooter>
                              </Table>
                            </TableContainer>
                          </AccordionDetails>
                        </Accordion>
                        <Accordion
                          expanded={expanded === "panel2"}
                          onChange={handleChange("panel2")}
                        >
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2bh-content"
                            id="panel2bh-header"
                          >
                            <Typography
                              variant="h5"
                              sx={{ textDecoration: "underline" }}
                            >
                              {t("textTittleDimensiones")}
                            </Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <CardMedia
                              component="img"
                              height="500"
                              image="../../plano-garita1.png"
                              alt="img"
                              sx={{ objectFit: "contain" }}
                            />
                          </AccordionDetails>
                        </Accordion>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          )}

          {vistaGarita2 && (
            <Grid container item xs={12} spacing={2} p={3}>
              <Grid item xs={12}>
                <Card>
                  <CardHeader
                    title={t("textButtonGarita2")}
                    titleTypographyProps={{
                      color: "#3b8f1e",
                      align: "left",
                      fontWeight: "bold",
                    }}
                  />
                  <CardMedia
                    component="img"
                    height="500"
                    image={
                      fotoSeleccionada ? fotoSeleccionada : "../../caseta1.jpeg"
                    }
                    alt="img"
                    sx={{ objectFit: "contain" }}
                  />
                  <Container xs={12}>
                    <Divider
                      sx={{
                        border: 1,
                        borderColor: "#3b8f1e",
                        my: 3,
                        opacity: "initial",
                      }}
                    />
                  </Container>

                  <CardContent
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      gap: 1,
                      flexWrap: "wrap",
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="100"
                      image="../../caseta1.jpeg"
                      onClick={(e) => {
                        e.preventDefault();
                        setFotoSeleccionada("../../caseta1.jpeg");
                      }}
                      alt="img"
                      sx={{
                        objectFit: "contain",
                        maxWidth: "100px",
                        cursor: "pointer",
                        border: 1,
                        borderColor: "#3b8f1e",
                      }}
                    />
                    <CardMedia
                      component="img"
                      height="100"
                      image="../../garita2.jpeg"
                      onClick={(e) => {
                        e.preventDefault();
                        setFotoSeleccionada("../../garita2.jpeg");
                      }}
                      alt="img"
                      sx={{
                        objectFit: "contain",
                        maxWidth: "100px",
                        cursor: "pointer",
                        border: 1,
                        borderColor: "#3b8f1e",
                      }}
                    />
                  </CardContent>
                  <CardContent
                    sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                  >
                    <Typography
                      variant="h4"
                      bgcolor="#3b8f1e"
                      color="white"
                      p={1}
                    >
                      {t("textTittleDescripcion")}
                    </Typography>
                    <Grid container>
                      {/* <Grid item xs={12}>
                        <Typography variant="body1" p={1}>
                          Nuestros bungalows de sitio para uso como Almacenes
                          están perfectamente adaptados para servir como Almacen
                          en su campamento base, proyectos militares o civiles
                          con el fin de poner a sus equipos técnicos en
                          condiciones óptimas de comodidad y trabajo, para una
                          mejor tasa de productividad y desempeño diario.
                        </Typography>
                        <Typography variant="body1" p={1}>
                          Están diseñadas con unas dimensiones estándar de 6,00
                          X 2,40 m con una altura exterior de 2,60 m, o 12 X
                          2,40 m entre las muchas ventajas que tienen tienes: el
                          hecho de que se pueden personalizar según los colores
                          y las necesidades del cliente en cuanto a de
                          dimensiones y tabiques interiores.
                        </Typography>
                      </Grid> */}
                      <Grid item xs={12}>
                        <Accordion
                          expanded={expanded === "panel1"}
                          onChange={handleChange("panel1")}
                        >
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                          >
                            <Typography
                              variant="h5"
                              sx={{ textDecoration: "underline" }}
                            >
                              {t("textTittleCaracteristicas")}
                            </Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <TableContainer component={Paper}>
                              <Table
                                sx={{ minWidth: 500 }}
                                aria-label="custom pagination table"
                              >
                                <TableBody>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textLongitud")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      220.0 cm
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textAncho")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      250.0 cm
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textAlturaTotal")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      280.0 cm
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textAltura")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      250.0 cm
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textPeso")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      800 kg
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textEstructura")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      {t("textEstructuraGeneral")}
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textPaneles")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      {t("textPanelesGeneral")}
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textSuelo")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      {t("textSuelosGeneral")}
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textPuertas")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      {t("textPuertasGarita1")}
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textVentanas")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      {t("textVentanasGarita2")}
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textAire")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      {t("textAireGeneral1")}
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textElectricidad")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      {t("textElectricidadGeneral")}
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textOtros")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      {t("textOtrosGeneral")}
                                    </TableCell>
                                  </TableRow>
                                </TableBody>
                                <TableFooter></TableFooter>
                              </Table>
                            </TableContainer>
                          </AccordionDetails>
                        </Accordion>
                        <Accordion
                          expanded={expanded === "panel2"}
                          onChange={handleChange("panel2")}
                        >
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2bh-content"
                            id="panel2bh-header"
                          >
                            <Typography
                              variant="h5"
                              sx={{ textDecoration: "underline" }}
                            >
                              {t("textTittleDimensiones")}
                            </Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <CardMedia
                              component="img"
                              height="500"
                              image="../../plano-garita2.png"
                              alt="img"
                              sx={{ objectFit: "contain" }}
                            />
                          </AccordionDetails>
                        </Accordion>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          )}

          {vistaBungalowDiafano && buttonDiafano && (
            <Grid container item xs={12} spacing={2} p={3}>
              <Grid item xs={12}>
                <Card>
                  <CardHeader
                    title={t("textButtonOficina")}
                    titleTypographyProps={{
                      color: "#3b8f1e",
                      align: "left",
                      fontWeight: "bold",
                    }}
                  />
                  <CardMedia
                    component="img"
                    height="500"
                    image="../../oficina.jpeg"
                    alt="img"
                  />
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="#3b8f1e"
                      fontWeight="bold"
                    >
                      {t("textOficinaDescripcionCorta")}
                    </Typography>
                  </CardContent>
                  <CardContent
                    sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                  ></CardContent>
                </Card>
              </Grid>
            </Grid>
          )}

          {vistaDiafano1 && (
            <Grid container item xs={12} spacing={2} p={3}>
              <Grid item xs={12}>
                <Card>
                  <CardHeader
                    title={t("textButtonOficina1")}
                    titleTypographyProps={{
                      color: "#3b8f1e",
                      align: "left",
                      fontWeight: "bold",
                    }}
                  />
                  <CardMedia
                    component="img"
                    height="500"
                    image={
                      fotoSeleccionada
                        ? fotoSeleccionada
                        : "../../bungalow-polivalente.png"
                    }
                    alt="img"
                    sx={{ objectFit: "contain" }}
                  />
                  <Container xs={12}>
                    <Divider
                      sx={{
                        border: 1,
                        borderColor: "#3b8f1e",
                        my: 3,
                        opacity: "initial",
                      }}
                    />
                  </Container>

                  <CardContent
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      gap: 1,
                      flexWrap: "wrap",
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="100"
                      image="../../bungalow-polivalente.png"
                      onClick={(e) => {
                        e.preventDefault();
                        setFotoSeleccionada("../../bungalow-polivalente.png");
                      }}
                      alt="img"
                      sx={{
                        objectFit: "contain",
                        maxWidth: "100px",
                        cursor: "pointer",
                        border: 1,
                        borderColor: "#3b8f1e",
                      }}
                    />
                    <CardMedia
                      component="img"
                      height="100"
                      image="../../bungalow-polivalente1.jpeg"
                      onClick={(e) => {
                        e.preventDefault();
                        setFotoSeleccionada("../../bungalow-polivalente1.jpeg");
                      }}
                      alt="img"
                      sx={{
                        objectFit: "contain",
                        maxWidth: "100px",
                        cursor: "pointer",
                        border: 1,
                        borderColor: "#3b8f1e",
                      }}
                    />
                  </CardContent>
                  <CardContent
                    sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                  >
                    <Typography
                      variant="h4"
                      bgcolor="#3b8f1e"
                      color="white"
                      p={1}
                    >
                      {t("textTittleDescripcion")}
                    </Typography>
                    <Grid container>
                      {/* <Grid item xs={12}>
                        <Typography variant="body1" p={1}>
                          Nuestros bungalows de sitio para uso como Almacenes
                          están perfectamente adaptados para servir como Almacen
                          en su campamento base, proyectos militares o civiles
                          con el fin de poner a sus equipos técnicos en
                          condiciones óptimas de comodidad y trabajo, para una
                          mejor tasa de productividad y desempeño diario.
                        </Typography>
                        <Typography variant="body1" p={1}>
                          Están diseñadas con unas dimensiones estándar de 6,00
                          X 2,40 m con una altura exterior de 2,60 m, o 12 X
                          2,40 m entre las muchas ventajas que tienen tienes: el
                          hecho de que se pueden personalizar según los colores
                          y las necesidades del cliente en cuanto a de
                          dimensiones y tabiques interiores.
                        </Typography>
                      </Grid> */}
                      <Grid item xs={12}>
                        <Accordion
                          expanded={expanded === "panel1"}
                          onChange={handleChange("panel1")}
                        >
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                          >
                            <Typography
                              variant="h5"
                              sx={{ textDecoration: "underline" }}
                            >
                              {t("textTittleCaracteristicas")}
                            </Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <TableContainer component={Paper}>
                              <Table
                                sx={{ minWidth: 500 }}
                                aria-label="custom pagination table"
                              >
                                <TableBody>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textLongitud")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      594.0 cm
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textAncho")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      240.0 cm
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textAlturaTotal")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      280.0 cm
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textAltura")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      250.0 cm
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textPeso")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      1300 kg
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textEstructura")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      {t("textEstructuraGeneral")}
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textPaneles")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      {t("textPanelesGeneral")}
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textSuelo")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      {t("textSuelosGeneral")}
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textPuertas")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      {t("textPuertasOficina1")}
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textVentanas")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      {t("textVentanasGarita1")}
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textAire")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      {t("textAireGeneral1")}
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textElectricidad")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      {t("textElectricidadGeneral")}
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textOtros")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      {t("textOtrosOficina1")}
                                    </TableCell>
                                  </TableRow>
                                </TableBody>
                                <TableFooter></TableFooter>
                              </Table>
                            </TableContainer>
                          </AccordionDetails>
                        </Accordion>
                        <Accordion
                          expanded={expanded === "panel2"}
                          onChange={handleChange("panel2")}
                        >
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2bh-content"
                            id="panel2bh-header"
                          >
                            <Typography
                              variant="h5"
                              sx={{ textDecoration: "underline" }}
                            >
                              {t("textTittleDimensiones")}
                            </Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <CardMedia
                              component="img"
                              height="500"
                              image="../../plano-polivalente.png"
                              alt="img"
                              sx={{ objectFit: "contain" }}
                            />
                          </AccordionDetails>
                        </Accordion>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          )}

          {vistaDiafano2 && (
            <Grid container item xs={12} spacing={2} p={3}>
              <Grid item xs={12}>
                <Card>
                  <CardHeader
                    title={t("textButtonOficina2")}
                    titleTypographyProps={{
                      color: "#3b8f1e",
                      align: "left",
                      fontWeight: "bold",
                    }}
                  />
                  <CardMedia
                    component="img"
                    height="500"
                    image={
                      fotoSeleccionada
                        ? fotoSeleccionada
                        : "../../sala-doble1.png"
                    }
                    alt="img"
                    sx={{ objectFit: "contain" }}
                  />
                  <Container xs={12}>
                    <Divider
                      sx={{
                        border: 1,
                        borderColor: "#3b8f1e",
                        my: 3,
                        opacity: "initial",
                      }}
                    />
                  </Container>

                  <CardContent
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      gap: 1,
                      flexWrap: "wrap",
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="100"
                      image="../../sala-doble1.png"
                      onClick={(e) => {
                        e.preventDefault();
                        setFotoSeleccionada("../../sala-doble1.png");
                      }}
                      alt="img"
                      sx={{
                        objectFit: "contain",
                        maxWidth: "100px",
                        cursor: "pointer",
                        border: 1,
                        borderColor: "#3b8f1e",
                      }}
                    />
                    <CardMedia
                      component="img"
                      height="100"
                      image="../../sala-doble2.png"
                      onClick={(e) => {
                        e.preventDefault();
                        setFotoSeleccionada("../../sala-doble2.png");
                      }}
                      alt="img"
                      sx={{
                        objectFit: "contain",
                        maxWidth: "100px",
                        cursor: "pointer",
                        border: 1,
                        borderColor: "#3b8f1e",
                      }}
                    />
                  </CardContent>
                  <CardContent
                    sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                  >
                    <Typography
                      variant="h4"
                      bgcolor="#3b8f1e"
                      color="white"
                      p={1}
                    >
                      {t("textTittleDescripcion")}
                    </Typography>
                    <Grid container>
                      {/* <Grid item xs={12}>
                        <Typography variant="body1" p={1}>
                          Nuestros bungalows de sitio para uso como Almacenes
                          están perfectamente adaptados para servir como Almacen
                          en su campamento base, proyectos militares o civiles
                          con el fin de poner a sus equipos técnicos en
                          condiciones óptimas de comodidad y trabajo, para una
                          mejor tasa de productividad y desempeño diario.
                        </Typography>
                        <Typography variant="body1" p={1}>
                          Están diseñadas con unas dimensiones estándar de 6,00
                          X 2,40 m con una altura exterior de 2,60 m, o 12 X
                          2,40 m entre las muchas ventajas que tienen tienes: el
                          hecho de que se pueden personalizar según los colores
                          y las necesidades del cliente en cuanto a de
                          dimensiones y tabiques interiores.
                        </Typography>
                      </Grid> */}
                      <Grid item xs={12}>
                        <Accordion
                          expanded={expanded === "panel1"}
                          onChange={handleChange("panel1")}
                        >
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                          >
                            <Typography
                              variant="h5"
                              sx={{ textDecoration: "underline" }}
                            >
                              {t("textTittleCaracteristicas")}
                            </Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <TableContainer component={Paper}>
                              <Table
                                sx={{ minWidth: 500 }}
                                aria-label="custom pagination table"
                              >
                                <TableBody>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textLongitud")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      590.0 cm
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textAncho")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      480.0 cm
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textAlturaTotal")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      280.0 cm
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textAltura")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      250.0 cm
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textPeso")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      1200 kg
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textEstructura")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      {t("textEstructuraGeneral")}
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textPaneles")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      {t("textPanelesGeneral")}
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textSuelo")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      {t("textSuelosGeneral")}
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textPuertas")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      {t("textPuertasOficina2")}
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textVentanas")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      {t("textVentanasOficina2")}
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textAire")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      {t("textAireGeneral1")}
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textElectricidad")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      {t("textElectricidadGeneral")}
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textOtros")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      {t("textOtrosOficina2")}
                                    </TableCell>
                                  </TableRow>
                                </TableBody>
                                <TableFooter></TableFooter>
                              </Table>
                            </TableContainer>
                          </AccordionDetails>
                        </Accordion>
                        <Accordion
                          expanded={expanded === "panel2"}
                          onChange={handleChange("panel2")}
                        >
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2bh-content"
                            id="panel2bh-header"
                          >
                            <Typography
                              variant="h5"
                              sx={{ textDecoration: "underline" }}
                            >
                              {t("textTittleDimensiones")}
                            </Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <CardMedia
                              component="img"
                              height="500"
                              image="../../plano-sala-doble.png"
                              alt="img"
                              sx={{ objectFit: "contain" }}
                            />
                          </AccordionDetails>
                        </Accordion>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          )}

          {vistaDiafano3 && (
            <Grid container item xs={12} spacing={2} p={3}>
              <Grid item xs={12}>
                <Card>
                  <CardHeader
                    title={t("textButtonOficina3")}
                    titleTypographyProps={{
                      color: "#3b8f1e",
                      align: "left",
                      fontWeight: "bold",
                    }}
                  />
                  <CardMedia
                    component="img"
                    height="500"
                    image={
                      fotoSeleccionada
                        ? fotoSeleccionada
                        : "../../triple-diafano.png"
                    }
                    alt="img"
                    sx={{ objectFit: "contain" }}
                  />
                  <Container xs={12}>
                    <Divider
                      sx={{
                        border: 1,
                        borderColor: "#3b8f1e",
                        my: 3,
                        opacity: "initial",
                      }}
                    />
                  </Container>

                  <CardContent
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      gap: 1,
                      flexWrap: "wrap",
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="100"
                      image="../../triple-diafano.png"
                      onClick={(e) => {
                        e.preventDefault();
                        setFotoSeleccionada("../../triple-diafano.png");
                      }}
                      alt="img"
                      sx={{
                        objectFit: "contain",
                        maxWidth: "100px",
                        cursor: "pointer",
                        border: 1,
                        borderColor: "#3b8f1e",
                      }}
                    />
                    <CardMedia
                      component="img"
                      height="100"
                      image="../../triple-diafano2.png"
                      onClick={(e) => {
                        e.preventDefault();
                        setFotoSeleccionada("../../triple-diafano2.png");
                      }}
                      alt="img"
                      sx={{
                        objectFit: "contain",
                        maxWidth: "100px",
                        cursor: "pointer",
                        border: 1,
                        borderColor: "#3b8f1e",
                      }}
                    />
                  </CardContent>
                  <CardContent
                    sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                  >
                    <Typography
                      variant="h4"
                      bgcolor="#3b8f1e"
                      color="white"
                      p={1}
                    >
                      {t("textTittleDescripcion")}
                    </Typography>
                    <Grid container>
                      {/* <Grid item xs={12}>
                        <Typography variant="body1" p={1}>
                          Nuestros bungalows de sitio para uso como Almacenes
                          están perfectamente adaptados para servir como Almacen
                          en su campamento base, proyectos militares o civiles
                          con el fin de poner a sus equipos técnicos en
                          condiciones óptimas de comodidad y trabajo, para una
                          mejor tasa de productividad y desempeño diario.
                        </Typography>
                        <Typography variant="body1" p={1}>
                          Están diseñadas con unas dimensiones estándar de 6,00
                          X 2,40 m con una altura exterior de 2,60 m, o 12 X
                          2,40 m entre las muchas ventajas que tienen tienes: el
                          hecho de que se pueden personalizar según los colores
                          y las necesidades del cliente en cuanto a de
                          dimensiones y tabiques interiores.
                        </Typography>
                      </Grid> */}
                      <Grid item xs={12}>
                        <Accordion
                          expanded={expanded === "panel1"}
                          onChange={handleChange("panel1")}
                        >
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                          >
                            <Typography
                              variant="h5"
                              sx={{ textDecoration: "underline" }}
                            >
                              {t("textTittleCaracteristicas")}
                            </Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <TableContainer component={Paper}>
                              <Table
                                sx={{ minWidth: 500 }}
                                aria-label="custom pagination table"
                              >
                                <TableBody>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textLongitud")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      590.0 cm
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textAncho")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      720.0 cm
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textAlturaTotal")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      280.0 cm
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textAltura")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      250.0 cm
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textPeso")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      1800 kg
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textEstructura")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      {t("textEstructuraGeneral")}
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textPaneles")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      {t("textPanelesGeneral")}
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textSuelo")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      {t("textSuelosGeneral")}
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textPuertas")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      {t("textPuertasOficina2")}
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textVentanas")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      {t("textVentanasOficina3")}
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textAire")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      {t("textAireGeneral1")}
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textElectricidad")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      {t("textElectricidadGeneral")}
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textOtros")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      {t("textOtrosOficina2")}
                                    </TableCell>
                                  </TableRow>
                                </TableBody>
                                <TableFooter></TableFooter>
                              </Table>
                            </TableContainer>
                          </AccordionDetails>
                        </Accordion>
                        <Accordion
                          expanded={expanded === "panel2"}
                          onChange={handleChange("panel2")}
                        >
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2bh-content"
                            id="panel2bh-header"
                          >
                            <Typography
                              variant="h5"
                              sx={{ textDecoration: "underline" }}
                            >
                              {t("textTittleDimensiones")}
                            </Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <CardMedia
                              component="img"
                              height="500"
                              image="../../plano-sala-triple.png"
                              alt="img"
                              sx={{ objectFit: "contain" }}
                            />
                          </AccordionDetails>
                        </Accordion>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          )}

          {vistaBungalowWc && buttonWc && (
            <Grid container item xs={12} spacing={2} p={3}>
              <Grid item xs={12}>
                <Card>
                  <CardHeader
                    title={t("textButtonSanitario")}
                    titleTypographyProps={{
                      color: "#3b8f1e",
                      align: "left",
                      fontWeight: "bold",
                    }}
                  />
                  <CardMedia
                    component="img"
                    height="500"
                    image="../../wc.jpeg"
                    alt="img"
                  />
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="#3b8f1e"
                      fontWeight="bold"
                    >
                      {t("textWcDescripcionCorta")}
                    </Typography>
                  </CardContent>
                  <CardContent
                    sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                  ></CardContent>
                </Card>
              </Grid>
            </Grid>
          )}

          {vistaWcDoble && (
            <Grid container item xs={12} spacing={2} p={3}>
              <Grid item xs={12}>
                <Card>
                  <CardHeader
                    // action={
                    //   <Typography
                    //     color="#3b8f1e"
                    //     fontWeight="bold"
                    //     variant="h6"
                    //   >
                    //     Ref: GSPSANXX
                    //   </Typography>
                    // }
                    title={t("textButtonSanitarioDoble")}
                    titleTypographyProps={{
                      color: "#3b8f1e",
                      align: "left",
                      fontWeight: "bold",
                    }}
                  />
                  <CardMedia
                    component="img"
                    height="500"
                    image={
                      fotoSeleccionada
                        ? fotoSeleccionada
                        : "../../bungalow-sanitario-doble.png"
                    }
                    alt="img"
                    sx={{ objectFit: "contain" }}
                  />
                  <Container xs={12}>
                    <Divider
                      sx={{
                        border: 1,
                        borderColor: "#3b8f1e",
                        my: 3,
                        opacity: "initial",
                      }}
                    />
                  </Container>

                  <CardContent
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      gap: 1,
                      flexWrap: "wrap",
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="100"
                      image="../../bungalow-sanitario-doble.png"
                      onClick={(e) => {
                        e.preventDefault();
                        setFotoSeleccionada(
                          "../../bungalow-sanitario-doble.png"
                        );
                      }}
                      alt="img"
                      sx={{
                        objectFit: "contain",
                        maxWidth: "100px",
                        cursor: "pointer",
                        border: 1,
                        borderColor: "#3b8f1e",
                      }}
                    />
                    <CardMedia
                      component="img"
                      height="100"
                      image="../../wc-doble2.jpeg"
                      onClick={(e) => {
                        e.preventDefault();
                        setFotoSeleccionada("../../wc-doble2.jpeg");
                      }}
                      alt="img"
                      sx={{
                        objectFit: "contain",
                        maxWidth: "100px",
                        cursor: "pointer",
                        border: 1,
                        borderColor: "#3b8f1e",
                      }}
                    />
                    <CardMedia
                      component="img"
                      height="100"
                      image="../../wc-doble1.jpeg"
                      onClick={(e) => {
                        e.preventDefault();
                        setFotoSeleccionada("../../wc-doble1.jpeg");
                      }}
                      alt="img"
                      sx={{
                        objectFit: "contain",
                        maxWidth: "100px",
                        cursor: "pointer",
                        border: 1,
                        borderColor: "#3b8f1e",
                      }}
                    />
                  </CardContent>
                  <CardContent
                    sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                  >
                    <Typography
                      variant="h4"
                      bgcolor="#3b8f1e"
                      color="white"
                      p={1}
                    >
                      {t("textTittleDescripcion")}
                    </Typography>
                    <Grid container>
                      {/* <Grid item xs={12}>
                        <Typography variant="body1" p={1}>
                          Nuestros bungalows de sitio para uso como Almacenes
                          están perfectamente adaptados para servir como Almacen
                          en su campamento base, proyectos militares o civiles
                          con el fin de poner a sus equipos técnicos en
                          condiciones óptimas de comodidad y trabajo, para una
                          mejor tasa de productividad y desempeño diario.
                        </Typography>
                        <Typography variant="body1" p={1}>
                          Están diseñadas con unas dimensiones estándar de 6,00
                          X 2,40 m con una altura exterior de 2,60 m, o 12 X
                          2,40 m entre las muchas ventajas que tienen tienes: el
                          hecho de que se pueden personalizar según los colores
                          y las necesidades del cliente en cuanto a de
                          dimensiones y tabiques interiores.
                        </Typography>
                      </Grid> */}
                      <Grid item xs={12}>
                        <Accordion
                          expanded={expanded === "panel1"}
                          onChange={handleChange("panel1")}
                        >
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                          >
                            <Typography
                              variant="h5"
                              sx={{ textDecoration: "underline" }}
                            >
                              {t("textTittleCaracteristicas")}
                            </Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <TableContainer component={Paper}>
                              <Table
                                sx={{ minWidth: 500 }}
                                aria-label="custom pagination table"
                              >
                                <TableBody>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textLongitud")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      216.5 cm
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textAncho")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      116.5 cm
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textAlturaTotal")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      280.0 cm
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textAltura")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      250.0 cm
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textPeso")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      600 kg
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textEstructura")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      {t("textEstructuraGeneral")}
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textPaneles")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      {t("textPanelesGeneral")}
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textSuelo")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      {t("textSuelosGeneral")}
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textPuertas")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      {t("textPuertasWcDoble")}
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textVentanas")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      {t("textVentanasWcDoble")}
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textEqSanitario")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      {t("textEqSanitarioWcDoble")}
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textAire")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      {t("textAireGeneral2")}
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textElectricidad")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      {t("textElectricidadGeneral")}
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textOtros")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      {t("textOtrosGeneral")}
                                    </TableCell>
                                  </TableRow>
                                </TableBody>
                                <TableFooter></TableFooter>
                              </Table>
                            </TableContainer>
                          </AccordionDetails>
                        </Accordion>
                        <Accordion
                          expanded={expanded === "panel2"}
                          onChange={handleChange("panel2")}
                        >
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2bh-content"
                            id="panel2bh-header"
                          >
                            <Typography
                              variant="h5"
                              sx={{ textDecoration: "underline" }}
                            >
                              {t("textTittleDimensiones")}
                            </Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <CardMedia
                              component="img"
                              height="500"
                              image="../../plano-wc-doble.png"
                              alt="img"
                              sx={{ objectFit: "contain" }}
                            />
                          </AccordionDetails>
                        </Accordion>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          )}

          {vistaWc1 && (
            <Grid container item xs={12} spacing={2} p={3}>
              <Grid item xs={12}>
                <Card>
                  <CardHeader
                    action={
                      <Typography
                        color="#3b8f1e"
                        fontWeight="bold"
                        variant="h6"
                      >
                        Ref: GSPSAN01
                      </Typography>
                    }
                    title={t("textButtonSanitario1")}
                    titleTypographyProps={{
                      color: "#3b8f1e",
                      align: "left",
                      fontWeight: "bold",
                    }}
                  />
                  <CardMedia
                    component="img"
                    height="500"
                    image={
                      fotoSeleccionada ? fotoSeleccionada : "../../wc-tipo1.png"
                    }
                    alt="img"
                    sx={{ objectFit: "contain" }}
                  />
                  <Container xs={12}>
                    <Divider
                      sx={{
                        border: 1,
                        borderColor: "#3b8f1e",
                        my: 3,
                        opacity: "initial",
                      }}
                    />
                  </Container>

                  <CardContent
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      gap: 1,
                      flexWrap: "wrap",
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="100"
                      image="../../wc-tipo1.png"
                      onClick={(e) => {
                        e.preventDefault();
                        setFotoSeleccionada("../../wc-tipo1.png");
                      }}
                      alt="img"
                      sx={{
                        objectFit: "contain",
                        maxWidth: "100px",
                        cursor: "pointer",
                        border: 1,
                        borderColor: "#3b8f1e",
                      }}
                    />
                    <CardMedia
                      component="img"
                      height="100"
                      image="../../wc1-tipo1.jpg"
                      onClick={(e) => {
                        e.preventDefault();
                        setFotoSeleccionada("../../wc1-tipo1.jpg");
                      }}
                      alt="img"
                      sx={{
                        objectFit: "contain",
                        maxWidth: "100px",
                        cursor: "pointer",
                        border: 1,
                        borderColor: "#3b8f1e",
                      }}
                    />
                    <CardMedia
                      component="img"
                      height="100"
                      image="../../wc2-tipo1.jpeg"
                      onClick={(e) => {
                        e.preventDefault();
                        setFotoSeleccionada("../../wc2-tipo1.jpeg");
                      }}
                      alt="img"
                      sx={{
                        objectFit: "contain",
                        maxWidth: "100px",
                        cursor: "pointer",
                        border: 1,
                        borderColor: "#3b8f1e",
                      }}
                    />
                  </CardContent>
                  <CardContent
                    sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                  >
                    <Typography
                      variant="h4"
                      bgcolor="#3b8f1e"
                      color="white"
                      p={1}
                    >
                      {t("textTittleDescripcion")}
                    </Typography>
                    <Grid container>
                      {/* <Grid item xs={12}>
                        <Typography variant="body1" p={1}>
                          Nuestros bungalows de sitio para uso como Almacenes
                          están perfectamente adaptados para servir como Almacen
                          en su campamento base, proyectos militares o civiles
                          con el fin de poner a sus equipos técnicos en
                          condiciones óptimas de comodidad y trabajo, para una
                          mejor tasa de productividad y desempeño diario.
                        </Typography>
                        <Typography variant="body1" p={1}>
                          Están diseñadas con unas dimensiones estándar de 6,00
                          X 2,40 m con una altura exterior de 2,60 m, o 12 X
                          2,40 m entre las muchas ventajas que tienen tienes: el
                          hecho de que se pueden personalizar según los colores
                          y las necesidades del cliente en cuanto a de
                          dimensiones y tabiques interiores.
                        </Typography>
                      </Grid> */}
                      <Grid item xs={12}>
                        <Accordion
                          expanded={expanded === "panel1"}
                          onChange={handleChange("panel1")}
                        >
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                          >
                            <Typography
                              variant="h5"
                              sx={{ textDecoration: "underline" }}
                            >
                              {t("textTittleCaracteristicas")}
                            </Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <TableContainer component={Paper}>
                              <Table
                                sx={{ minWidth: 500 }}
                                aria-label="custom pagination table"
                              >
                                <TableBody>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textLongitud")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      594.0 cm
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textAncho")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      240.0 cm
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textAlturaTotal")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      280.0 cm
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textAltura")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      250.0 cm
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textPeso")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      1600 kg
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textEstructura")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      {t("textEstructuraGeneral")}
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textPaneles")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      {t("textPanelesGeneral")}
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textSuelo")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      {t("textSuelosGeneral")}
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textPuertas")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      {t("textPuertasWc1")}
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textVentanas")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      {t("textVentanasWc1")}
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textEqSanitario")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      {t("textEqSanitarioWc1")}
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textAire")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      {t("textAireGeneral2")}
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textElectricidad")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      {t("textElectricidadGeneral")}
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textOtros")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      {t("textOtrosGeneral")}
                                    </TableCell>
                                  </TableRow>
                                </TableBody>
                                <TableFooter></TableFooter>
                              </Table>
                            </TableContainer>
                          </AccordionDetails>
                        </Accordion>
                        <Accordion
                          expanded={expanded === "panel2"}
                          onChange={handleChange("panel2")}
                        >
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2bh-content"
                            id="panel2bh-header"
                          >
                            <Typography
                              variant="h5"
                              sx={{ textDecoration: "underline" }}
                            >
                              {t("textTittleDimensiones")}
                            </Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <CardMedia
                              component="img"
                              height="500"
                              image="../../plano-wc-tipo1.png"
                              alt="img"
                              sx={{ objectFit: "contain" }}
                            />
                          </AccordionDetails>
                        </Accordion>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          )}

          {vistaWc2 && (
            <Grid container item xs={12} spacing={2} p={3}>
              <Grid item xs={12}>
                <Card>
                  <CardHeader
                    action={
                      <Typography
                        color="#3b8f1e"
                        fontWeight="bold"
                        variant="h6"
                      >
                        Ref: GSPSAN02
                      </Typography>
                    }
                    title={t("textButtonSanitario2")}
                    titleTypographyProps={{
                      color: "#3b8f1e",
                      align: "left",
                      fontWeight: "bold",
                    }}
                  />
                  <CardMedia
                    component="img"
                    height="500"
                    image={
                      fotoSeleccionada ? fotoSeleccionada : "../../wc-tipo2.png"
                    }
                    alt="img"
                    sx={{ objectFit: "contain" }}
                  />
                  <Container xs={12}>
                    <Divider
                      sx={{
                        border: 1,
                        borderColor: "#3b8f1e",
                        my: 3,
                        opacity: "initial",
                      }}
                    />
                  </Container>

                  <CardContent
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      gap: 1,
                      flexWrap: "wrap",
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="100"
                      image="../../wc-tipo2.png"
                      onClick={(e) => {
                        e.preventDefault();
                        setFotoSeleccionada("../../wc-tipo2.png");
                      }}
                      alt="img"
                      sx={{
                        objectFit: "contain",
                        maxWidth: "100px",
                        cursor: "pointer",
                        border: 1,
                        borderColor: "#3b8f1e",
                      }}
                    />
                    <CardMedia
                      component="img"
                      height="100"
                      image="../../caseta.jpg"
                      onClick={(e) => {
                        e.preventDefault();
                        setFotoSeleccionada("../../caseta.jpg");
                      }}
                      alt="img"
                      sx={{
                        objectFit: "contain",
                        maxWidth: "100px",
                        cursor: "pointer",
                        border: 1,
                        borderColor: "#3b8f1e",
                      }}
                    />
                    <CardMedia
                      component="img"
                      height="100"
                      image="../../wc2-tipo2.jpeg"
                      onClick={(e) => {
                        e.preventDefault();
                        setFotoSeleccionada("../../wc2-tipo2.jpeg");
                      }}
                      alt="img"
                      sx={{
                        objectFit: "contain",
                        maxWidth: "100px",
                        cursor: "pointer",
                        border: 1,
                        borderColor: "#3b8f1e",
                      }}
                    />
                    <CardMedia
                      component="img"
                      height="100"
                      image="../../wc1-tipo2.jpeg"
                      onClick={(e) => {
                        e.preventDefault();
                        setFotoSeleccionada("../../wc1-tipo2.jpeg");
                      }}
                      alt="img"
                      sx={{
                        objectFit: "contain",
                        maxWidth: "100px",
                        cursor: "pointer",
                        border: 1,
                        borderColor: "#3b8f1e",
                      }}
                    />
                  </CardContent>
                  <CardContent
                    sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                  >
                    <Typography
                      variant="h4"
                      bgcolor="#3b8f1e"
                      color="white"
                      p={1}
                    >
                      {t("textTittleDescripcion")}
                    </Typography>
                    <Grid container>
                      {/* <Grid item xs={12}>
                        <Typography variant="body1" p={1}>
                          Nuestros bungalows de sitio para uso como Almacenes
                          están perfectamente adaptados para servir como Almacen
                          en su campamento base, proyectos militares o civiles
                          con el fin de poner a sus equipos técnicos en
                          condiciones óptimas de comodidad y trabajo, para una
                          mejor tasa de productividad y desempeño diario.
                        </Typography>
                        <Typography variant="body1" p={1}>
                          Están diseñadas con unas dimensiones estándar de 6,00
                          X 2,40 m con una altura exterior de 2,60 m, o 12 X
                          2,40 m entre las muchas ventajas que tienen tienes: el
                          hecho de que se pueden personalizar según los colores
                          y las necesidades del cliente en cuanto a de
                          dimensiones y tabiques interiores.
                        </Typography>
                      </Grid> */}
                      <Grid item xs={12}>
                        <Accordion
                          expanded={expanded === "panel1"}
                          onChange={handleChange("panel1")}
                        >
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                          >
                            <Typography
                              variant="h5"
                              sx={{ textDecoration: "underline" }}
                            >
                              {t("textTittleCaracteristicas")}
                            </Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <TableContainer component={Paper}>
                              <Table
                                sx={{ minWidth: 500 }}
                                aria-label="custom pagination table"
                              >
                                <TableBody>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textLongitud")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      300.0 cm
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textAncho")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      240.0 cm
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textAlturaTotal")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      280.0 cm
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textAltura")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      250.0 cm
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textPeso")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      1300 kg
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textEstructura")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      {t("textEstructuraGeneral")}
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textPaneles")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      {t("textPanelesGeneral")}
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textSuelo")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      {t("textSuelosGeneral")}
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textPuertas")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      {t("textPuertasWc2")}
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textVentanas")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      {t("textVentanasWc2")}
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textEqSanitario")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      {t("textEqSanitarioWc2")}
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textAire")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      {t("textAireGeneral2")}
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textElectricidad")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      {t("textElectricidadGeneral")}
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textOtros")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      {t("textOtrosGeneral")}
                                    </TableCell>
                                  </TableRow>
                                </TableBody>
                                <TableFooter></TableFooter>
                              </Table>
                            </TableContainer>
                          </AccordionDetails>
                        </Accordion>
                        <Accordion
                          expanded={expanded === "panel2"}
                          onChange={handleChange("panel2")}
                        >
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2bh-content"
                            id="panel2bh-header"
                          >
                            <Typography
                              variant="h5"
                              sx={{ textDecoration: "underline" }}
                            >
                              {t("textTittleDimensiones")}
                            </Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <CardMedia
                              component="img"
                              height="500"
                              image="../../plano-wc-tipo1.png"
                              alt="img"
                              sx={{ objectFit: "contain" }}
                            />
                          </AccordionDetails>
                        </Accordion>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          )}

          {vistaWc3 && (
            <Grid container item xs={12} spacing={2} p={3}>
              <Grid item xs={12}>
                <Card>
                  <CardHeader
                    action={
                      <Typography
                        color="#3b8f1e"
                        fontWeight="bold"
                        variant="h6"
                      >
                        Ref: GSPSAN03
                      </Typography>
                    }
                    title={t("textButtonSanitario3")}
                    titleTypographyProps={{
                      color: "#3b8f1e",
                      align: "left",
                      fontWeight: "bold",
                    }}
                  />
                  <CardMedia
                    component="img"
                    height="500"
                    image={
                      fotoSeleccionada ? fotoSeleccionada : "../../wc-tipo3.png"
                    }
                    alt="img"
                    sx={{ objectFit: "contain" }}
                  />
                  <Container xs={12}>
                    <Divider
                      sx={{
                        border: 1,
                        borderColor: "#3b8f1e",
                        my: 3,
                        opacity: "initial",
                      }}
                    />
                  </Container>

                  <CardContent
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      gap: 1,
                      flexWrap: "wrap",
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="100"
                      image="../../wc-tipo3.png"
                      onClick={(e) => {
                        e.preventDefault();
                        setFotoSeleccionada("../../wc-tipo3.png");
                      }}
                      alt="img"
                      sx={{
                        objectFit: "contain",
                        maxWidth: "100px",
                        cursor: "pointer",
                        border: 1,
                        borderColor: "#3b8f1e",
                      }}
                    />
                    <CardMedia
                      component="img"
                      height="100"
                      image="../../wc1-tipo3.jpg"
                      onClick={(e) => {
                        e.preventDefault();
                        setFotoSeleccionada("../../wc1-tipo3.jpg");
                      }}
                      alt="img"
                      sx={{
                        objectFit: "contain",
                        maxWidth: "100px",
                        cursor: "pointer",
                        border: 1,
                        borderColor: "#3b8f1e",
                      }}
                    />
                    <CardMedia
                      component="img"
                      height="100"
                      image="../../wc2-tipo2.jpeg"
                      onClick={(e) => {
                        e.preventDefault();
                        setFotoSeleccionada("../../wc2-tipo2.jpeg");
                      }}
                      alt="img"
                      sx={{
                        objectFit: "contain",
                        maxWidth: "100px",
                        cursor: "pointer",
                        border: 1,
                        borderColor: "#3b8f1e",
                      }}
                    />
                    <CardMedia
                      component="img"
                      height="100"
                      image="../../wc2-tipo3.jpeg"
                      onClick={(e) => {
                        e.preventDefault();
                        setFotoSeleccionada("../../wc2-tipo3.jpeg");
                      }}
                      alt="img"
                      sx={{
                        objectFit: "contain",
                        maxWidth: "100px",
                        cursor: "pointer",
                        border: 1,
                        borderColor: "#3b8f1e",
                      }}
                    />
                    <CardMedia
                      component="img"
                      height="100"
                      image="../../wc2-tipo1.jpeg"
                      onClick={(e) => {
                        e.preventDefault();
                        setFotoSeleccionada("../../wc2-tipo1.jpeg");
                      }}
                      alt="img"
                      sx={{
                        objectFit: "contain",
                        maxWidth: "100px",
                        cursor: "pointer",
                        border: 1,
                        borderColor: "#3b8f1e",
                      }}
                    />
                  </CardContent>
                  <CardContent
                    sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                  >
                    <Typography
                      variant="h4"
                      bgcolor="#3b8f1e"
                      color="white"
                      p={1}
                    >
                      {t("textTittleDescripcion")}
                    </Typography>
                    <Grid container>
                      {/* <Grid item xs={12}>
                        <Typography variant="body1" p={1}>
                          Nuestros bungalows de sitio para uso como Almacenes
                          están perfectamente adaptados para servir como Almacen
                          en su campamento base, proyectos militares o civiles
                          con el fin de poner a sus equipos técnicos en
                          condiciones óptimas de comodidad y trabajo, para una
                          mejor tasa de productividad y desempeño diario.
                        </Typography>
                        <Typography variant="body1" p={1}>
                          Están diseñadas con unas dimensiones estándar de 6,00
                          X 2,40 m con una altura exterior de 2,60 m, o 12 X
                          2,40 m entre las muchas ventajas que tienen tienes: el
                          hecho de que se pueden personalizar según los colores
                          y las necesidades del cliente en cuanto a de
                          dimensiones y tabiques interiores.
                        </Typography>
                      </Grid> */}
                      <Grid item xs={12}>
                        <Accordion
                          expanded={expanded === "panel1"}
                          onChange={handleChange("panel1")}
                        >
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                          >
                            <Typography
                              variant="h5"
                              sx={{ textDecoration: "underline" }}
                            >
                              {t("textTittleCaracteristicas")}
                            </Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <TableContainer component={Paper}>
                              <Table
                                sx={{ minWidth: 500 }}
                                aria-label="custom pagination table"
                              >
                                <TableBody>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textLongitud")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      594.0 cm
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textAncho")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      240.0 cm
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textAlturaTotal")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      280.0 cm
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textAltura")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      250.0 cm
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textPeso")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      1600 kg
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textEstructura")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      {t("textEstructuraGeneral")}
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textPaneles")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      {t("textPanelesGeneral")}
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textSuelo")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      {t("textSuelosGeneral")}
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textPuertas")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      {t("textPuertasWc1")}
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textVentanas")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      {t("textVentanasWc1")}
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textEqSanitario")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      {t("textEqSanitarioWc3")}
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textAire")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      {t("textAireGeneral2")}
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textElectricidad")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      {t("textElectricidadGeneral")}
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textOtros")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      {t("textOtrosGeneral")}
                                    </TableCell>
                                  </TableRow>
                                </TableBody>
                                <TableFooter></TableFooter>
                              </Table>
                            </TableContainer>
                          </AccordionDetails>
                        </Accordion>
                        <Accordion
                          expanded={expanded === "panel2"}
                          onChange={handleChange("panel2")}
                        >
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2bh-content"
                            id="panel2bh-header"
                          >
                            <Typography
                              variant="h5"
                              sx={{ textDecoration: "underline" }}
                            >
                              {t("textTittleDimensiones")}
                            </Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <CardMedia
                              component="img"
                              height="500"
                              image="../../plano-wc-tipo3.png"
                              alt="img"
                              sx={{ objectFit: "contain" }}
                            />
                          </AccordionDetails>
                        </Accordion>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          )}

          {vistaWc4 && (
            <Grid container item xs={12} spacing={2} p={3}>
              <Grid item xs={12}>
                <Card>
                  <CardHeader
                    action={
                      <Typography
                        color="#3b8f1e"
                        fontWeight="bold"
                        variant="h6"
                      >
                        Ref: GSPSAN04
                      </Typography>
                    }
                    title={t("textButtonSanitario4")}
                    titleTypographyProps={{
                      color: "#3b8f1e",
                      align: "left",
                      fontWeight: "bold",
                    }}
                  />
                  <CardMedia
                    component="img"
                    height="500"
                    image={
                      fotoSeleccionada ? fotoSeleccionada : "../../wc-tipo4.png"
                    }
                    alt="img"
                    sx={{ objectFit: "contain" }}
                  />
                  <Container xs={12}>
                    <Divider
                      sx={{
                        border: 1,
                        borderColor: "#3b8f1e",
                        my: 3,
                        opacity: "initial",
                      }}
                    />
                  </Container>

                  <CardContent
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      gap: 1,
                      flexWrap: "wrap",
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="100"
                      image="../../wc-tipo4.png"
                      onClick={(e) => {
                        e.preventDefault();
                        setFotoSeleccionada("../../wc-tipo4.png");
                      }}
                      alt="img"
                      sx={{
                        objectFit: "contain",
                        maxWidth: "100px",
                        cursor: "pointer",
                        border: 1,
                        borderColor: "#3b8f1e",
                      }}
                    />
                    <CardMedia
                      component="img"
                      height="100"
                      image="../../wc1-tipo4.jpeg"
                      onClick={(e) => {
                        e.preventDefault();
                        setFotoSeleccionada("../../wc1-tipo4.jpeg");
                      }}
                      alt="img"
                      sx={{
                        objectFit: "contain",
                        maxWidth: "100px",
                        cursor: "pointer",
                        border: 1,
                        borderColor: "#3b8f1e",
                      }}
                    />
                    <CardMedia
                      component="img"
                      height="100"
                      image="../../wc2-tipo2.jpeg"
                      onClick={(e) => {
                        e.preventDefault();
                        setFotoSeleccionada("../../wc2-tipo2.jpeg");
                      }}
                      alt="img"
                      sx={{
                        objectFit: "contain",
                        maxWidth: "100px",
                        cursor: "pointer",
                        border: 1,
                        borderColor: "#3b8f1e",
                      }}
                    />
                    <CardMedia
                      component="img"
                      height="100"
                      image="../../wc1-tipo2.jpeg"
                      onClick={(e) => {
                        e.preventDefault();
                        setFotoSeleccionada("../../wc1-tipo2.jpeg");
                      }}
                      alt="img"
                      sx={{
                        objectFit: "contain",
                        maxWidth: "100px",
                        cursor: "pointer",
                        border: 1,
                        borderColor: "#3b8f1e",
                      }}
                    />
                  </CardContent>
                  <CardContent
                    sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                  >
                    <Typography
                      variant="h4"
                      bgcolor="#3b8f1e"
                      color="white"
                      p={1}
                    >
                      {t("textTittleDescripcion")}
                    </Typography>
                    <Grid container>
                      {/* <Grid item xs={12}>
                        <Typography variant="body1" p={1}>
                          Nuestros bungalows de sitio para uso como Almacenes
                          están perfectamente adaptados para servir como Almacen
                          en su campamento base, proyectos militares o civiles
                          con el fin de poner a sus equipos técnicos en
                          condiciones óptimas de comodidad y trabajo, para una
                          mejor tasa de productividad y desempeño diario.
                        </Typography>
                        <Typography variant="body1" p={1}>
                          Están diseñadas con unas dimensiones estándar de 6,00
                          X 2,40 m con una altura exterior de 2,60 m, o 12 X
                          2,40 m entre las muchas ventajas que tienen tienes: el
                          hecho de que se pueden personalizar según los colores
                          y las necesidades del cliente en cuanto a de
                          dimensiones y tabiques interiores.
                        </Typography>
                      </Grid> */}
                      <Grid item xs={12}>
                        <Accordion
                          expanded={expanded === "panel1"}
                          onChange={handleChange("panel1")}
                        >
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                          >
                            <Typography
                              variant="h5"
                              sx={{ textDecoration: "underline" }}
                            >
                              {t("textTittleCaracteristicas")}
                            </Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <TableContainer component={Paper}>
                              <Table
                                sx={{ minWidth: 500 }}
                                aria-label="custom pagination table"
                              >
                                <TableBody>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textLongitud")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      594.0 cm
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textAncho")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      240.0 cm
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textAlturaTotal")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      280.0 cm
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textAltura")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      250.0 cm
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textPeso")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      1600 kg
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textEstructura")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      {t("textEstructuraGeneral")}
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textPaneles")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      {t("textPanelesGeneral")}
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textSuelo")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      {t("textSuelosGeneral")}
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textPuertas")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      {t("textPuertasWc4")}
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textVentanas")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      {t("textVentanasWc4")}
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textEqSanitario")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      {t("textEqSanitarioWc4")}
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textAire")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      {t("textAireGeneral2")}
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textElectricidad")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      {t("textElectricidadWc4")}
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textOtros")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      {t("textOtrosGeneral")}
                                    </TableCell>
                                  </TableRow>
                                </TableBody>
                                <TableFooter></TableFooter>
                              </Table>
                            </TableContainer>
                          </AccordionDetails>
                        </Accordion>
                        <Accordion
                          expanded={expanded === "panel2"}
                          onChange={handleChange("panel2")}
                        >
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2bh-content"
                            id="panel2bh-header"
                          >
                            <Typography
                              variant="h5"
                              sx={{ textDecoration: "underline" }}
                            >
                              {t("textTittleDimensiones")}
                            </Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <CardMedia
                              component="img"
                              height="500"
                              image="../../plano-wc-tipo4.png"
                              alt="img"
                              sx={{ objectFit: "contain" }}
                            />
                          </AccordionDetails>
                        </Accordion>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          )}

          {vistaBungalowVestuario && (
            <Grid container item xs={12} spacing={2} p={3}>
              <Grid item xs={12}>
                <Card>
                  <CardHeader
                    title={t("textButtonVestuarios")}
                    titleTypographyProps={{
                      color: "#3b8f1e",
                      align: "left",
                      fontWeight: "bold",
                    }}
                  />
                  <CardMedia
                    component="img"
                    height="500"
                    image={
                      fotoSeleccionada
                        ? fotoSeleccionada
                        : "../../vestuario.png"
                    }
                    alt="img"
                    sx={{ objectFit: "contain" }}
                  />
                  <Container xs={12}>
                    <Divider
                      sx={{
                        border: 1,
                        borderColor: "#3b8f1e",
                        my: 3,
                        opacity: "initial",
                      }}
                    />
                  </Container>

                  <CardContent
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      gap: 1,
                      flexWrap: "wrap",
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="100"
                      image="../../vestuario.png"
                      onClick={(e) => {
                        e.preventDefault();
                        setFotoSeleccionada("../../vestuario.png");
                      }}
                      alt="img"
                      sx={{
                        objectFit: "contain",
                        maxWidth: "100px",
                        cursor: "pointer",
                        border: 1,
                        borderColor: "#3b8f1e",
                      }}
                    />
                    <CardMedia
                      component="img"
                      height="100"
                      image="../../vestuario.jpeg"
                      onClick={(e) => {
                        e.preventDefault();
                        setFotoSeleccionada("../../vestuario.jpeg");
                      }}
                      alt="img"
                      sx={{
                        objectFit: "contain",
                        maxWidth: "100px",
                        cursor: "pointer",
                        border: 1,
                        borderColor: "#3b8f1e",
                      }}
                    />
                    <CardMedia
                      component="img"
                      height="100"
                      image="../../vestuario1.jpg"
                      onClick={(e) => {
                        e.preventDefault();
                        setFotoSeleccionada("../../vestuario1.jpg");
                      }}
                      alt="img"
                      sx={{
                        objectFit: "contain",
                        maxWidth: "100px",
                        cursor: "pointer",
                        border: 1,
                        borderColor: "#3b8f1e",
                      }}
                    />
                    <CardMedia
                      component="img"
                      height="100"
                      image="../../vestuario2.jpg"
                      onClick={(e) => {
                        e.preventDefault();
                        setFotoSeleccionada("../../vestuario2.jpg");
                      }}
                      alt="img"
                      sx={{
                        objectFit: "contain",
                        maxWidth: "100px",
                        cursor: "pointer",
                        border: 1,
                        borderColor: "#3b8f1e",
                      }}
                    />
                    <CardMedia
                      component="img"
                      height="100"
                      image="../../vestuario3.jpeg"
                      onClick={(e) => {
                        e.preventDefault();
                        setFotoSeleccionada("../../vestuario3.jpeg");
                      }}
                      alt="img"
                      sx={{
                        objectFit: "contain",
                        maxWidth: "100px",
                        cursor: "pointer",
                        border: 1,
                        borderColor: "#3b8f1e",
                      }}
                    />
                  </CardContent>
                  <CardContent
                    sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                  >
                    <Typography
                      variant="h4"
                      bgcolor="#3b8f1e"
                      color="white"
                      p={1}
                    >
                      {t("textTittleDescripcion")}
                    </Typography>
                    <Grid container>
                      {/* <Grid item xs={12}>
                        <Typography variant="body1" p={1}>
                          Nuestros bungalows de sitio para uso como Almacenes
                          están perfectamente adaptados para servir como Almacen
                          en su campamento base, proyectos militares o civiles
                          con el fin de poner a sus equipos técnicos en
                          condiciones óptimas de comodidad y trabajo, para una
                          mejor tasa de productividad y desempeño diario.
                        </Typography>
                        <Typography variant="body1" p={1}>
                          Están diseñadas con unas dimensiones estándar de 6,00
                          X 2,40 m con una altura exterior de 2,60 m, o 12 X
                          2,40 m entre las muchas ventajas que tienen tienes: el
                          hecho de que se pueden personalizar según los colores
                          y las necesidades del cliente en cuanto a de
                          dimensiones y tabiques interiores.
                        </Typography>
                      </Grid> */}
                      <Grid item xs={12}>
                        <Accordion
                          expanded={expanded === "panel1"}
                          onChange={handleChange("panel1")}
                        >
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                          >
                            <Typography
                              variant="h5"
                              sx={{ textDecoration: "underline" }}
                            >
                              {t("textTittleCaracteristicas")}
                            </Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <TableContainer component={Paper}>
                              <Table
                                sx={{ minWidth: 500 }}
                                aria-label="custom pagination table"
                              >
                                <TableBody>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textLongitud")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      594.0 cm
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textAncho")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      240.0 cm
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textAlturaTotal")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      280.0 cm
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textAltura")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      250.0 cm
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textPeso")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      1200 kg
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textEstructura")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      {t("textEstructuraGeneral")}
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textPaneles")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      {t("textPanelesGeneral")}
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textSuelo")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      {t("textSuelosGeneral")}
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textPuertas")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      {t("textPuertasOficina1")}
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textVentanas")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      {t("textVentanasGarita1")}
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textEquipamiento")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      {t("textEqVestuario")}
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textElectricidad")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      {t("textElectricidadGeneral")}
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell
                                      style={{ width: "25%" }}
                                      align="left"
                                    >
                                      {t("textOtros")}
                                    </TableCell>
                                    <TableCell
                                      style={{ maxWidth: "75%" }}
                                      align="left"
                                    >
                                      {t("textOtrosGeneral")}
                                    </TableCell>
                                  </TableRow>
                                </TableBody>
                                <TableFooter></TableFooter>
                              </Table>
                            </TableContainer>
                          </AccordionDetails>
                        </Accordion>
                        <Accordion
                          expanded={expanded === "panel2"}
                          onChange={handleChange("panel2")}
                        >
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2bh-content"
                            id="panel2bh-header"
                          >
                            <Typography
                              variant="h5"
                              sx={{ textDecoration: "underline" }}
                            >
                              {t("textTittleDimensiones")}
                            </Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <CardMedia
                              component="img"
                              height="500"
                              image="../../plano-vestuario.png"
                              alt="img"
                              sx={{ objectFit: "contain" }}
                            />
                          </AccordionDetails>
                        </Accordion>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          )}

          {vistaEstructuras && (
            <Grid container item xs={12} spacing={2} p={3}>
              <Grid item xs={12}>
                <Card>
                  <CardHeader
                    title="Estructuras Metalicas"
                    titleTypographyProps={{
                      color: "#3b8f1e",
                      align: "left",
                      fontWeight: "bold",
                    }}
                  />
                  <CardMedia
                    component="img"
                    height="500"
                    image="../../estructuras.jpg"
                    alt="img"
                  />
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="#3b8f1e"
                      fontWeight="bold"
                    >
                      La estructura es lo mas importante de toda obra
                    </Typography>
                  </CardContent>
                  <CardContent
                    sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                  >
                    <Typography
                      variant="h4"
                      bgcolor="#3b8f1e"
                      color="white"
                      p={1}
                    >
                      Descripcion
                    </Typography>
                    <Grid container>
                      <Grid item xs={12}>
                        <Typography variant="body1" p={1}>
                          Nuestras estructuras metálicas, hangares, naves
                          industriales son de muy alta calidad, y son
                          personalizables según sus necesidades, el tamaño y el
                          alcance del sitio a precios imbatibles.
                        </Typography>
                        <Typography variant="body1" p={1}>
                          Es decir, podemos realizar sus proyectos llave en mano
                          a medida para cubrir perfectamente todas sus
                          necesidades y objetivos estratégicos.
                        </Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          )}

          {vistaEdificios && (
            <Grid container item xs={12} spacing={2} p={3}>
              <Grid item xs={12}>
                <Card>
                  <CardHeader
                    title="Edificios Prefabricados"
                    titleTypographyProps={{
                      color: "#3b8f1e",
                      align: "left",
                      fontWeight: "bold",
                    }}
                  />
                  <CardMedia
                    component="img"
                    height="500"
                    image="../../edificio.jpeg"
                    alt="img"
                  />
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="#3b8f1e"
                      fontWeight="bold"
                    >
                      Edificios especiales prefabricados
                    </Typography>
                  </CardContent>
                  <CardContent
                    sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                  >
                    <Typography
                      variant="h4"
                      bgcolor="#3b8f1e"
                      color="white"
                      p={1}
                    >
                      Descripcion
                    </Typography>
                    <Grid container>
                      <Grid item xs={12}>
                        <Typography variant="body1" p={1}>
                          Nuestras naves prefabricadas están compuestas por
                          estructuras ligeras de acero galvanizado, las paredes
                          y la cubierta son de paneles sándwich de varios
                          espesores según el proyecto con espuma de poliuretano
                          expandido como aislante, a esto se suman las
                          escaleras, los pasillos de las naves prefabricadas.
                        </Typography>
                        <Typography variant="body1" p={1}>
                          Su montaje no requiere cimentaciones especiales, en la
                          mayoría de los casos una losa de 15 o 20 cm es
                          suficiente para instalar los postes y accesorios de
                          montaje de los paneles sándwich.
                        </Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          )}

          {vistaNaves && (
            <Grid container item xs={12} spacing={2} p={3}>
              <Grid item xs={12}>
                <Card>
                  <CardHeader
                    title="Naves Industriales"
                    titleTypographyProps={{
                      color: "#3b8f1e",
                      align: "left",
                      fontWeight: "bold",
                    }}
                  />
                  <CardMedia
                    component="img"
                    height="500"
                    image="../../hangar2.jpg"
                    alt="img"
                  />
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="#3b8f1e"
                      fontWeight="bold"
                    >
                      Naves Industriales y Hangares
                    </Typography>
                  </CardContent>
                  <CardContent
                    sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                  >
                    <Typography
                      variant="h4"
                      bgcolor="#3b8f1e"
                      color="white"
                      p={1}
                    >
                      Descripcion
                    </Typography>
                    <Grid container>
                      <Grid item xs={12}>
                        <Typography variant="body1" p={1}>
                          Nuestras estructuras metálicas, hangares, naves
                          industriales son de muy alta calidad, y son
                          personalizables según sus necesidades, el tamaño y el
                          alcance del sitio a precios imbatibles.
                        </Typography>
                        <Typography variant="body1" p={1}>
                          Es decir, podemos realizar sus proyectos llave en mano
                          a medida para cubrir perfectamente todas sus
                          necesidades y objetivos estratégicos.
                        </Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          )}

          {vistaMaritimos && (
            <Grid container item xs={12} spacing={2} p={3}>
              <Grid item xs={12}>
                <Card>
                  <CardHeader
                    title="Contenedores Maritimos"
                    titleTypographyProps={{
                      color: "#3b8f1e",
                      align: "left",
                      fontWeight: "bold",
                    }}
                  />
                  <CardMedia
                    component="img"
                    height="500"
                    image="../../contenedor-maritimo.jpg"
                    alt="img"
                  />
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="#3b8f1e"
                      fontWeight="bold"
                    >
                      Contenedores Maritimos
                    </Typography>
                  </CardContent>
                  <CardContent
                    sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                  >
                    <Typography
                      variant="h4"
                      bgcolor="#3b8f1e"
                      color="white"
                      p={1}
                    >
                      Descripcion
                    </Typography>
                    <Grid container>
                      <Grid item xs={12}>
                        <Typography variant="body1" p={1}>
                          Nuestras estructuras metálicas, hangares, naves
                          industriales son de muy alta calidad, y son
                          personalizables según sus necesidades, el tamaño y el
                          alcance del sitio a precios imbatibles.
                        </Typography>
                        <Typography variant="body1" p={1}>
                          Es decir, podemos realizar sus proyectos llave en mano
                          a medida para cubrir perfectamente todas sus
                          necesidades y objetivos estratégicos.
                        </Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          )}
        </Grid>
      </Grid>
      <ScrollToTopButton />
    </Container>
  );
}
