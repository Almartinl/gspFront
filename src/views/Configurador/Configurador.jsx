import {
  Container,
  Grid,
  Typography,
  Box,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
  CircularProgress,
  OutlinedInput,
} from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { useEffect, useState, Suspense, useContext } from "react";
import { Canvas, render, useThree } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Html, useProgress } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useAuthContext } from "../../contexts/AuthContext";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import ScrollToTopButton from "../../components/ScrollToTopButton/ScrollToTopButton";
import { useTranslation } from "react-i18next";
import { ShepherdTour, ShepherdTourContext } from "react-shepherd";
import "shepherd.js/dist/css/shepherd.css";
import { offset } from "@floating-ui/react";

const tourOptions = {
  defaultStepOptions: {
    cancelIcon: {
      enabled: true,
    },
  },
  useModalOverlay: true,
};

export default function Configurador() {
  document.title = "Configurador";

  const { t } = useTranslation();

  const { dataToken } = useAuthContext();

  const navigate = useNavigate();

  const [disableButton, setDisableButton] = useState(true);
  const [disposicion, setDisposicion] = useState([]);
  const [disposicionValue, setDisposicionValue] = useState("");
  const [orientacion, setOrientacion] = useState([]);
  const [orientacionValue, setOrientacionValue] = useState("");
  const [modelo, setModelo] = useState([]);
  const [modeloValue, setModeloValue] = useState("");
  const [tipo, setTipo] = useState([]);
  const [tipoValue, setTipoValue] = useState("");
  const [bungalowa, setBungalowa] = useState([]);
  const [bungalowaValue, setBungalowaValue] = useState("");
  const [bungalowb, setBungalowb] = useState([]);
  const [bungalowbValue, setBungalowbValue] = useState("");
  const [bungalowc, setBungalowc] = useState([]);
  const [bungalowcValue, setBungalowcValue] = useState("");
  const [nombreProyecto, setNombreProyecto] = useState("");
  const fotoInicio = "../../introConf.png";

  const [planta, setPlanta] = useState([]);
  const [modelo3d, setModelo3d] = useState([]);
  const [open, setOpen] = useState(false);
  const [open3d, setOpen3d] = useState(false);
  const [openInfo, setOpenInfo] = useState(false);

  function Button1() {
    const tour = useContext(ShepherdTourContext);
    return (
      <Button
        variant="contained"
        color="info"
        onClick={tour.start}
        sx={{ fontSize: { xs: "small", md: "large" } }}
      >
        <HelpOutlineIcon />
      </Button>
    );
  }

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpenView3d = () => {
    setOpen3d(true);
  };
  const handleCloseView3d = () => {
    setOpen3d(false);
  };
  const handleClickOpenInfo = () => {
    setOpenInfo(true);
  };
  const handleCloseInfo = () => {
    setOpenInfo(false);
  };

  useEffect(() => {
    async function fetchSelector() {
      const response = await fetch(
        `https://almartindev.online/api/config/disposicion`
      );
      const selector = await response.json();
      setDisposicion(selector);
    }
    fetchSelector();
  }, []);

  useEffect(() => {
    async function fetchSelector() {
      const response = await fetch(
        `https://almartindev.online/api/config/orientacion`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ disposicion: disposicionValue }),
        }
      );
      const selector = await response.json();
      setOrientacion(selector);
    }
    if (disposicionValue !== "") {
      fetchSelector();
    }
  }, [disposicionValue]);

  useEffect(() => {
    async function fetchSelector() {
      const response = await fetch(
        `https://almartindev.online/api/config/modelo`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ orientacion: orientacionValue }),
        }
      );
      const selector = await response.json();
      setModelo(selector);
    }
    if (orientacionValue !== "") {
      fetchSelector();
    }
  }, [orientacionValue]);

  useEffect(() => {
    async function fetchSelector() {
      const response = await fetch(
        `https://almartindev.online/api/config/modelo`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ orientacion: "3" }),
        }
      );
      const selector = await response.json();
      setModelo(selector);
      setOrientacionValue("3");
      setModeloValue("3");
      setTipoValue("11");
    }
    if (disposicionValue == "2") {
      fetchSelector();
    }
  }, [disposicionValue]);

  useEffect(() => {
    async function fetchSelector() {
      const response = await fetch(
        `https://almartindev.online/api/config/modelo`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ orientacion: "4" }),
        }
      );
      const selector = await response.json();
      setModelo(selector);
      setOrientacionValue("4");
      setModeloValue("5");
      setTipoValue("17");
    }
    if (disposicionValue == "3") {
      fetchSelector();
    }
  }, [disposicionValue]);

  useEffect(() => {
    async function fetchSelector() {
      const response = await fetch(
        `https://almartindev.online/api/config/tipo`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ modelo: modeloValue }),
        }
      );
      const selector = await response.json();
      setTipo(selector);
    }
    if (modeloValue !== "") {
      fetchSelector();
    }
  }, [modeloValue]);

  useEffect(() => {
    async function fetchSelector() {
      const response = await fetch(
        `https://almartindev.online/api/config/tipo`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ modelo: "4" }),
        }
      );
      const selector = await response.json();
      setTipo(selector);
      setModeloValue("4");

      console.log(selector);
    }
    if (orientacionValue == "1") {
      fetchSelector();
    }
  }, [orientacionValue]);

  useEffect(() => {
    async function fetchSelector() {
      const response = await fetch(
        `https://almartindev.online/api/config/bungalowa`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ tipo: tipoValue }),
        }
      );
      const selector = await response.json();
      setBungalowa(selector);
    }
    if (tipoValue !== "" && disposicionValue != 1) {
      fetchSelector();
    }
  }, [tipoValue]);

  useEffect(() => {
    async function fetchSelector() {
      const response = await fetch(
        `https://almartindev.online/api/config/bungalowb`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ bungalowa: bungalowaValue }),
        }
      );
      const selector = await response.json();
      setBungalowb(selector);
    }
    if (bungalowaValue !== "") {
      fetchSelector();
    }
  }, [bungalowaValue]);

  useEffect(() => {
    async function fetchSelector() {
      const response = await fetch(
        `https://almartindev.online/api/config/bungalowc`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ bungalowb: bungalowbValue }),
        }
      );
      const selector = await response.json();
      setBungalowc(selector);
    }
    if (bungalowbValue !== "" && disposicionValue != 2) {
      fetchSelector();
    }
  }, [bungalowbValue]);

  useEffect(() => {
    async function fetchSelector() {
      const response = await fetch(
        `https://almartindev.online/api/config/modelosimple`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            disposicion: disposicionValue,
            orientacion: orientacionValue,
            modelo: modeloValue,
            tipo: tipoValue,
          }),
        }
      );
      const selector = await response.json();
      setPlanta(selector);
      setModelo3d(selector[0].modelo3d);
      setDisableButton(false);
    }
    if (disposicionValue == 1 && tipoValue != "") {
      fetchSelector();
    }
  }, [tipoValue]);

  useEffect(() => {
    async function fetchSelector() {
      const response = await fetch(
        `https://almartindev.online/api/config/modelodoble`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            disposicion: disposicionValue,
            orientacion: orientacionValue,
            modelo: modeloValue,
            tipo: tipoValue,
            bungalowa: bungalowaValue,
            bungalowb: bungalowbValue,
          }),
        }
      );
      const selector = await response.json();
      setPlanta(selector);
      setModelo3d(selector[0].modelo3d);
      setDisableButton(false);
    }
    if (disposicionValue == 2 && bungalowb != "") {
      fetchSelector();
    }
  }, [bungalowbValue]);

  useEffect(() => {
    async function fetchSelector() {
      const response = await fetch(
        `https://almartindev.online/api/config/modelotriple`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            disposicion: disposicionValue,
            orientacion: orientacionValue,
            modelo: modeloValue,
            tipo: tipoValue,
            bungalowa: bungalowaValue,
            bungalowb: bungalowbValue,
            bungalowc: bungalowcValue,
          }),
        }
      );
      const selector = await response.json();
      setPlanta(selector);
      setModelo3d(selector[0].modelo3d);
      setDisableButton(false);
    }
    if (disposicionValue == 3 && bungalowc != "") {
      fetchSelector();
    }
  }, [bungalowcValue]);

  function handleChangeDisposicion(event) {
    setDisposicionValue(event.target.value);
  }

  function handleChangeOrientacion(event) {
    setOrientacionValue(event.target.value);
  }

  function handleChangeModelo(event) {
    setModeloValue(event.target.value);
  }

  function handleChangeTipo(event) {
    setTipoValue(event.target.value);
  }

  function handleChangeBungalowa(event) {
    setBungalowaValue(event.target.value);
  }

  function handleChangeBungalowb(event) {
    setBungalowbValue(event.target.value);
  }

  function handleChangeBungalowc(event) {
    setBungalowcValue(event.target.value);
  }

  function handleSubmitGuardar(event) {
    event.preventDefault();
    fetch("https://almartindev.online/api/bungalows/save", {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify({
        nombre: nombreProyecto,
        usuario: dataToken.id,
        planta: planta[0].planta,
        nombrebungalow: planta[0].id,
      }),
    }).then((response) => {
      console.log(response.status);
      if (response.status == 400) {
        Swal.fire({
          title: t("tittleTextAlertLoginConfig"),
          text: t("textSubtittleAlertLoginConfig"),
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#d33",
          cancelButtonColor: "#3085d6",
          confirmButtonText: t("textButtonAlertLoginConfig"),
        }).then((result) => {
          if (result.isConfirmed) {
            navigate("/login");
          }
        });
      } else if (response.status == 200) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: t("tittleTextAlertConfig"),
        });
        setNombreProyecto("");
      } else if (response.status == 409) {
        alert("modelo ya registrado");
      }
    });

    setOpen(false);
  }

  useEffect(() => {
    setOrientacion([]);
    setOrientacionValue("");
    setModelo([]);
    setModeloValue("");
    setTipo([]);
    setTipoValue("");
    setBungalowa([]);
    setBungalowaValue("");
    setBungalowb([]);
    setBungalowbValue("");
    setBungalowc([]);
    setBungalowcValue("");
    setDisableButton(true);
    setPlanta([]);
    setModelo3d([]);
  }, [disposicionValue]);

  useEffect(() => {
    if (orientacion.length > 1) {
      setModelo([]);
      setModeloValue("");
      setTipo([]);
      setTipoValue("");
      setBungalowa([]);
      setBungalowaValue("");
      setBungalowb([]);
      setBungalowbValue("");
      setBungalowc([]);
      setBungalowcValue("");
      setDisableButton(true);
      setPlanta([]);
      setModelo3d([]);
    }
  }, [orientacionValue]);

  useEffect(() => {
    if (modelo.length > 1) {
      setTipo([]);
      setTipoValue("");
      setBungalowa([]);
      setBungalowaValue("");
      setBungalowb([]);
      setBungalowbValue("");
      setBungalowc([]);
      setBungalowcValue("");
      setDisableButton(true);
      setPlanta([]);
      setModelo3d([]);
    }
  }, [modeloValue]);

  useEffect(() => {
    if (tipo.length > 1) {
      setBungalowa([]);
      setBungalowaValue("");
      setBungalowb([]);
      setBungalowbValue("");
      setBungalowc([]);
      setBungalowcValue("");
      setDisableButton(true);
      setPlanta([]);
      setModelo3d([]);
    }
  }, [tipoValue]);

  useEffect(() => {
    setBungalowb([]);
    setBungalowbValue("");
    setBungalowc([]);
    setBungalowcValue("");
    setDisableButton(true);
    setPlanta([]);
    setModelo3d([]);
  }, [bungalowaValue]);

  useEffect(() => {
    setBungalowc([]);
    setBungalowcValue("");
    setDisableButton(true);
    setPlanta([]);
    setModelo3d([]);
  }, [bungalowbValue]);

  function reset() {
    setDisposicionValue("");
    setOrientacion([]);
    setOrientacionValue("");
    setModelo([]);
    setModeloValue("");
    setTipo([]);
    setTipoValue("");
    setBungalowa([]);
    setBungalowaValue("");
    setBungalowb([]);
    setBungalowbValue("");
    setBungalowc([]);
    setBungalowcValue("");
    setPlanta([]);
    setDisableButton(true);
    setModelo3d([]);
  }

  function Loader() {
    const { progress } = useProgress();
    return (
      <Html center scale={5}>
        <Grid width="100%">
          <Typography variant="h4" textAlign="center" color="#3b8f1e">
            {Math.floor(progress * 1)} % Cargado
          </Typography>
        </Grid>
      </Html>
    );
  }

  function View3d() {
    const Model = () => {
      const gltf = useLoader(
        GLTFLoader,
        `https://almartindev.online/api/${modelo3d}`
      );
      return (
        <>
          <primitive object={gltf.scene} scale={4} />
        </>
      );
    };

    return (
      <Canvas camera={{ position: [-1.8, 1.5, 2.5], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={0.4} />
        <Suspense fallback={<Loader />}>
          <Model />
          <OrbitControls />
        </Suspense>
      </Canvas>
    );
  }
  let newSteps = [
    {
      id: "disposicion-select",
      attachTo: { element: "#disposicion-select", on: "right" },
      title: "<b>Bienvenido a la Guia del configurador</b>",
      text: `Ahora vamos a Configurar un Bungalow de prueba y lo primero que debemos hacer es seleccionar la cantidad de Bungalows que queremos.<br/> <br/> <b>En este caso hemos elegido 1 Bungalow</b>`,
      floatingUIOptions: { middleware: [offset(10)] },
      buttons: [
        {
          classes: "shepherd-button-primary",
          text: "Next",
          type: "next",
        },
      ],
      canClickTarget: false,

      when: {
        show: () => {
          setDisposicionValue("1");
        },
        cancel: () => {
          reset();
        },
      },
    },
    {
      id: "orientacion-select",
      attachTo: { element: "#orientacion-select", on: "right" },
      text: "Como en el paso anterior la seleccion ha sido de 1 Bungalow, las opciones que tenemos ahora diponibles seran distintas a las que hubiesemos tenido si hubiesemos seleccionado otra cantidad de bungalows <br/> <br/> <b>Por ejemplo ahora vamos aseleccionar Vertical</b>",
      floatingUIOptions: { middleware: [offset(10)] },
      buttons: [
        {
          classes: "shepherd-button-primary",
          text: "Back",
          type: "back",
        },
        {
          classes: "shepherd-button-primary",
          text: "Next",
          type: "next",
        },
      ],
      canClickTarget: false,
      when: {
        show: () => {
          setOrientacionValue("1");
        },
        cancel: () => {
          reset();
        },
      },
    },
    {
      id: "tipo-select",
      attachTo: { element: "#tipo-select", on: "right" },
      text: "Ahora hemos llegado al punto el cual seleccionamos que tipo de bungalow queremos.<br/> <br/> <b>Por ejemplo Wc</b>",
      floatingUIOptions: { middleware: [offset(10)] },
      buttons: [
        {
          classes: "shepherd-button-primary",
          text: "Back",
          type: "back",
        },
        {
          classes: "shepherd-button-primary",
          text: "Next",
          type: "next",
        },
      ],
      canClickTarget: false,
      when: {
        show: () => {
          setTipoValue("15");
        },
        cancel: () => {
          reset();
        },
      },
    },
    {
      id: "foto-selected",
      attachTo: { element: "#foto-selected", on: "top" },
      text: `<b>Aquí se muestra el resultado en vista de planta de las elecciones del configurador</b>`,
      floatingUIOptions: { middleware: [offset(10)] },
      buttons: [
        {
          classes: "shepherd-button-primary",
          text: "Back",
          type: "back",
        },
        {
          classes: "shepherd-button-primary",
          text: "Next",
          type: "next",
        },
      ],
      canClickTarget: false,
      when: {
        cancel: () => {
          reset();
        },
      },
    },
    {
      id: "boton-reset",
      attachTo: { element: "#boton-reset", on: "top" },
      text: `<b>Cuando se pulsa este Boton se resetea el configurador y se tiene que empezar de nuevo</b>`,
      floatingUIOptions: { middleware: [offset(10)] },
      buttons: [
        {
          classes: "shepherd-button-primary",
          text: "Back",
          type: "back",
        },
        {
          classes: "shepherd-button-primary",
          text: "Next",
          type: "next",
        },
      ],
      canClickTarget: false,
      when: {
        cancel: () => {
          reset();
        },
      },
    },
    {
      id: "boton-guardar",
      attachTo: { element: "#boton-guardar", on: "top" },
      text: `<b>Cuando se pulsa este Boton sale una ventana emergente que te pide que le des un nombre al Bungalow configurado para así poder guardarlo en tu cuenta y posteriormente dentro de su cuenta poder enviar un presupuesto de este Bungalow</b>`,
      floatingUIOptions: { middleware: [offset(10)] },
      buttons: [
        {
          classes: "shepherd-button-primary",
          text: "Back",
          type: "back",
        },
        {
          classes: "shepherd-button-primary",
          text: "Next",
          type: "next",
        },
      ],
      canClickTarget: false,
      when: {
        cancel: () => {
          reset();
        },
      },
    },
    {
      id: "boton-vista3d",
      attachTo: { element: "#boton-vista3d", on: "top" },
      text: `<b>Cuando se pulsa este Boton sale una ventana emergente en la cual puedes ver el Bungalow configurado en 3D </b>`,
      floatingUIOptions: { middleware: [offset(10)] },
      buttons: [
        {
          classes: "shepherd-button-primary",
          text: "Back",
          type: "back",
        },
        {
          classes: "shepherd-button-primary",
          text: "Next",
          type: "next",
        },
      ],
      canClickTarget: false,
      when: {
        cancel: () => {
          reset();
        },
      },
    },
    {
      id: "fin-tour",
      attachTo: { element: "#fin-tour", on: "auto" },
      title: "<b>Fin Del Tutorial</b>",
      text: "Ahora configure el bungalow como prefiera.",
      floatingUIOptions: { middleware: [offset(10)] },
      buttons: [
        {
          classes: "shepherd-button-primary",
          text: "Finish",
          type: "cancel",
        },
      ],
      canClickTarget: false,
      when: {
        show: () => {
          reset();
        },
      },
    },
  ];
  console.log(bungalowa);
  console.log("disposicion", disposicionValue);
  console.log("orientacion", orientacionValue);
  console.log("modelo", modeloValue);
  console.log("tipo", tipoValue);
  console.log("bungalowa", bungalowaValue);
  console.log("bungalowb", bungalowbValue);
  console.log("bungalowc", bungalowcValue);
  console.log(planta);
  console.log(modelo3d);

  return (
    <>
      <Container
        maxWidth="xl"
        sx={{
          marginTop: "24px",
        }}
      >
        <ShepherdTour steps={newSteps} tourOptions={tourOptions}>
          <Grid container spacing={2}>
            <Grid
              item
              md={12}
              sx={{
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
              }}
            >
              <Typography
                variant="h1"
                color="#3b8f1e"
                sx={{ my: "48px", fontWeight: "bold", fontSize: "5rem" }}
              >
                {t("textTittleConfig")}
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                display: { xs: "flex", md: "none" },
                justifyContent: "center",
              }}
            >
              <Typography
                variant="h3"
                color="#3b8f1e"
                sx={{ my: "48px", fontWeight: "bold" }}
              >
                {t("textTittleConfig")}
              </Typography>
            </Grid>
            <Grid container item xs={12}>
              {/* <Grid md={4}></Grid> */}
              <Grid
                container
                item
                alignContent="flex-start"
                gap="24px"
                xs={12}
                md={4}
                sx={{ pr: { sx: 0, md: 4 } }}
              >
                <Grid item xs={12}>
                  <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                      <InputLabel id="cantidadBungalows" color="success">
                        {t("labelCantidadBungalows")}
                      </InputLabel>
                      <Select
                        input={
                          <OutlinedInput label={t("labelCantidadBungalows")} />
                        }
                        id="disposicion-select"
                        labelId="cantidadBungalows"
                        value={disposicionValue}
                        label="cantidadBungalows"
                        onChange={handleChangeDisposicion}
                        color="success"
                      >
                        {disposicion.map((item) => (
                          <MenuItem key={item.id} value={item.id}>
                            {item.disposicion}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Box>
                </Grid>

                {orientacion.length > 1 && (
                  <Grid item xs={12}>
                    <Box sx={{ minWidth: 120 }}>
                      <FormControl fullWidth>
                        <InputLabel id="orientacion" color="success">
                          {t("labelOrientacion")}
                        </InputLabel>
                        <Select
                          input={
                            <OutlinedInput label={t("labelOrientacion")} />
                          }
                          labelId="demo-simple-select-label"
                          id="orientacion-select"
                          value={orientacionValue}
                          label="demo-simple-select-label"
                          onChange={handleChangeOrientacion}
                          color="success"
                        >
                          {orientacion.map((item) => (
                            <MenuItem key={item.id} value={item.id}>
                              {t(`orientacion.${item.orientacion}`)}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                )}
                {modelo.length > 1 && (
                  <Grid item xs={12}>
                    <Box sx={{ minWidth: 120 }}>
                      <FormControl fullWidth>
                        <InputLabel id="modelo" color="success">
                          {t("labelModelo")}
                        </InputLabel>
                        <Select
                          input={<OutlinedInput label={t("labelModelo")} />}
                          labelId="demo-simple-select-label"
                          id="modelo-select"
                          value={modeloValue}
                          label="demo-simple-select-label"
                          onChange={handleChangeModelo}
                          color="success"
                        >
                          {modelo.map((item) => (
                            <MenuItem key={item.id} value={item.id}>
                              {t(`modelo.${item.modelo}`)}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                )}
                {tipo.length > 1 && (
                  <Grid item xs={12}>
                    <Box sx={{ minWidth: 120 }}>
                      <FormControl fullWidth>
                        <InputLabel id="tipo" color="success">
                          {t("labelTipo")}
                        </InputLabel>
                        <Select
                          input={<OutlinedInput label={t("labelTipo")} />}
                          labelId="demo-simple-select-label"
                          id="tipo-select"
                          value={tipoValue}
                          label="demo-simple-select-label"
                          onChange={handleChangeTipo}
                          color="success"
                        >
                          {tipo.map((item) => (
                            <MenuItem key={item.id} value={item.id}>
                              {t(`tipo.${item.tipo}`)}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                )}
                {bungalowa.length > 0 && (
                  <Grid item xs={12}>
                    <Box sx={{ minWidth: 120 }}>
                      <FormControl fullWidth>
                        <InputLabel id="bungalowa" color="success">
                          Bungalow-A
                        </InputLabel>
                        <Select
                          input={<OutlinedInput label="Bungalow-A" />}
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={bungalowaValue}
                          label="demo-simple-select-label"
                          onChange={handleChangeBungalowa}
                          color="success"
                        >
                          {bungalowa.map((item) => (
                            <MenuItem key={item.id} value={item.id}>
                              {t(`bungalowa.${item.bungalowa}`)}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                )}
                {bungalowb.length > 0 && (
                  <Grid item xs={12}>
                    <Box sx={{ minWidth: 120 }}>
                      <FormControl fullWidth>
                        <InputLabel id="bungalowb" color="success">
                          Bungalow-B
                        </InputLabel>
                        <Select
                          input={<OutlinedInput label="Bungalow-B" />}
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={bungalowbValue}
                          label="demo-simple-select-label"
                          onChange={handleChangeBungalowb}
                          color="success"
                        >
                          {bungalowb.map((item) => (
                            <MenuItem key={item.id} value={item.id}>
                              {t(`bungalowb.${item.bungalowb}`)}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                )}
                {bungalowc.length > 0 && (
                  <Grid item xs={12}>
                    <Box sx={{ minWidth: 120 }}>
                      <FormControl fullWidth>
                        <InputLabel id="bungalowc" color="success">
                          Bungalow-C
                        </InputLabel>
                        <Select
                          input={<OutlinedInput label="Bungalow-C" />}
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={bungalowcValue}
                          label="demo-simple-select-label"
                          onChange={handleChangeBungalowc}
                          color="success"
                        >
                          {bungalowc.map((item) => (
                            <MenuItem key={item.id} value={item.id}>
                              {t(`bungalowc.${item.bungalowc}`)}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                )}
                <Grid container item xs={12} justifyContent="space-between">
                  <Button
                    id="boton-reset"
                    onClick={reset}
                    variant="contained"
                    color="error"
                    sx={{ fontSize: { xs: "small", md: "large" } }}
                  >
                    Reset
                  </Button>

                  <Button
                    id="boton-guardar"
                    variant="contained"
                    color="success"
                    sx={{
                      backgroundColor: "#3b8f1e",
                      fontSize: { xs: "small", md: "large" },
                    }}
                    disabled={disableButton}
                    onClick={handleClickOpen}
                  >
                    {t("buttonGuardar")}
                  </Button>

                  <Button
                    id="boton-vista3d"
                    variant="contained"
                    color="success"
                    sx={{
                      backgroundColor: "#3b8f1e",
                      fontSize: { xs: "small", md: "large" },
                    }}
                    disabled={disableButton}
                    onClick={handleClickOpenView3d}
                  >
                    {t("button3d")}
                  </Button>
                  <Button1 />
                  {/* <Button
                    variant="contained"
                    color="info"
                    onClick={handleClickOpenInfo}
                    sx={{ fontSize: { xs: "small", md: "large" } }}
                  >
                    Info
                  </Button> */}
                </Grid>
              </Grid>
              <Grid id="fin-tour"></Grid>
              {planta.length > 0 ? (
                <Grid
                  item
                  id="foto-selected"
                  xs={12}
                  md={8}
                  mt={{ xs: 4, md: 0 }}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    height: "70vh",
                    objectFit: "contain",
                    backgroundImage: `url(${`https://almartindev.online/api/${planta[0].planta}`})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: {
                      xs: "center center",
                      md: "top center",
                    },
                    backgroundSize: "contain",
                  }}
                ></Grid>
              ) : (
                <Grid
                  item
                  xs={12}
                  md={8}
                  mt={{ xs: 4, md: 0 }}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    height: "60vh",
                    objectFit: "cover",
                    backgroundImage:
                      modeloValue == 4
                        ? `url(../../vertical.png)`
                        : orientacionValue == 2
                        ? `url(../../horizontal.png)`
                        : modeloValue == 3
                        ? `url(../../a-b.png)`
                        : modeloValue == 5
                        ? `url(../../a-b-c.png)`
                        : `url(${fotoInicio})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "top center",
                    backgroundSize: "contain",
                  }}
                ></Grid>
              )}
              <Dialog
                maxWidth="lg"
                fullWidth
                open={open3d}
                onClose={handleCloseView3d}
              >
                <DialogTitle>{t("button3d")}</DialogTitle>
                <DialogContent>
                  <Grid
                    item
                    xs={12}
                    width="100%"
                    height="70vh"
                    marginTop="24px"
                  >
                    <View3d />
                    {/* <iframe
                  src="http://localhost:8000/showRoomGsp.html"
                  title="My External Content"
                  width="100%"
                  height="100%"
                /> */}
                  </Grid>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleCloseView3d} variant="contained">
                    {t("buttonCerrar")}
                  </Button>
                </DialogActions>
              </Dialog>
              <Dialog
                maxWidth="sm"
                fullWidth
                open={openInfo}
                onClose={handleCloseInfo}
              >
                <DialogTitle>Info</DialogTitle>
                <DialogContent
                  sx={{
                    display: "flex",
                    alignItems: "stretch",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src="../../INFO-WEB.jpg"
                    style={{
                      maxWidth: "100%",
                      objectFit: "cover",
                    }}
                  />
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleCloseInfo} variant="contained">
                    {t("buttonCerrar")}
                  </Button>
                </DialogActions>
              </Dialog>
              <Dialog open={open} onClose={handleClose}>
                <DialogTitle>{t("dialogTittleGuardar")}</DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    {t("dialogContentGuardar")}
                  </DialogContentText>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label={t("dialogTextFieldGuardar")}
                    type="text"
                    fullWidth
                    variant="standard"
                    value={nombreProyecto}
                    onChange={(e) => setNombreProyecto(e.target.value)}
                  />
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose}>Cancel</Button>
                  <Button onClick={handleSubmitGuardar}>
                    {t("buttonGuardar")}
                  </Button>
                </DialogActions>
              </Dialog>
            </Grid>
          </Grid>
          <ScrollToTopButton />
        </ShepherdTour>
      </Container>
    </>
  );
}
