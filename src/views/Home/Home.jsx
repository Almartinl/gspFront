import "./home.css";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Divider,
  Grid,
  Paper,
  Typography,
  duration,
} from "@mui/material";
import CarouselPrincipal from "../../components/CarouselPrincipal/CarouselPrincipal";
import { Link } from "react-router-dom";
import ScrollToTopButton from "../../components/ScrollToTopButton/ScrollToTopButton";
import { useTranslation } from "react-i18next";
import { useEffect, useRef, useState } from "react";
import StoreMallDirectoryOutlinedIcon from "@mui/icons-material/StoreMallDirectoryOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import ApartmentOutlinedIcon from "@mui/icons-material/ApartmentOutlined";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import SpeedOutlinedIcon from "@mui/icons-material/SpeedOutlined";
import UpdateOutlinedIcon from "@mui/icons-material/UpdateOutlined";
import ShowChartOutlinedIcon from "@mui/icons-material/ShowChartOutlined";

export default function Home() {
  const { t } = useTranslation();

  document.title = t("buttonIni");

  const [offer, setOffer] = useState([]);
  const containerRef = useRef(null);
  const containerRef2 = useRef(null);

  const beneficios = [
    t("contentTextBen1"),
    t("contentTextBen2"),
    t("contentTextBen3"),
    t("contentTextBen4"),
    t("contentTextBen5"),
    t("contentTextBen6"),
    t("contentTextBen7"),
    t("contentTextBen8"),
    t("contentTextBen9"),
    t("contentTextBen10"),
  ];

  useEffect(() => {
    async function fetchOffer() {
      const response = await fetch(
        `https://globalsolutionsprefabriquees.com/api/product/offer/active`
      );
      const data = await response.json();
      setOffer(data);
    }
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };
    fetchOffer();
    scrollToTop();
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    const handleScroll = () => {
      if (container.getBoundingClientRect().top < window.innerHeight) {
        container.classList.add("slide-in-fwd-left");
      }
    };
    window.addEventListener("scroll", handleScroll);
    const container2 = containerRef2.current;
    const handleScroll2 = () => {
      if (container2.getBoundingClientRect().top < window.innerHeight) {
        container2.classList.add("slide-in-fwd-right");
      }
    };
    window.addEventListener("scroll", handleScroll2);
    return (
      () => window.removeEventListener("scroll", handleScroll),
      () => window.removeEventListener("scroll", handleScroll2)
    );
  }, []);

  return (
    <Grid marginTop={2}>
      <Container
        maxWidth="xl"
        sx={{
          marginTop: "0px",
          paddingTop: { xs: 0, md: 0 },
          paddingBottom: 0,
        }}
      >
        <CarouselPrincipal />
      </Container>
      <Grid marginY={10}>
        <Container maxWidth="lg">
          <Grid container spacing={10}>
            <Grid item xs={12} md={4}>
              <Card
                sx={{
                  maxWidth: 500,
                  p: 4,
                  border: 1,
                  borderColor: "green",
                  borderRadius: 5,
                  height: 450,
                  boxShadow: "0 0 10px 5px green",
                }}
              >
                <StoreMallDirectoryOutlinedIcon
                  className="neonSvg"
                  sx={{
                    fontSize: 80,
                    color: "green",
                  }}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    fontWeight="bold"
                  >
                    {t("titleProp1")}
                  </Typography>
                  <Typography gutterBottom paragraph component="div">
                    {t("subTitleProp1")}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card
                sx={{
                  maxWidth: 500,
                  p: 4,
                  border: 1,
                  borderColor: "green",
                  borderRadius: 5,
                  height: 450,
                  boxShadow: "0 0 10px 5px green",
                }}
              >
                <LocalShippingOutlinedIcon
                  className="neonSvg"
                  sx={{ fontSize: 80, color: "green" }}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    fontWeight="bold"
                  >
                    {t("titleProp2")}
                  </Typography>
                  <Typography gutterBottom paragraph component="div">
                    {t("subTitleProp2")}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card
                sx={{
                  maxWidth: 500,
                  p: 4,
                  border: 1,
                  borderColor: "green",
                  borderRadius: 5,
                  height: 450,
                  boxShadow: "0 0 10px 5px green",
                }}
              >
                <ApartmentOutlinedIcon
                  className="neonSvg"
                  sx={{ fontSize: 80, color: "green" }}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    fontWeight="bold"
                  >
                    {t("titleProp3")}
                  </Typography>
                  <Typography gutterBottom paragraph component="div">
                    {t("subTitleProp3")}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            {/* <Grid
              item
              md={2}
              sx={{ display: { xs: "none", md: "block" } }}
            ></Grid> */}
            <Grid item xs={12} md={4}>
              <Card
                sx={{
                  maxWidth: 500,
                  p: 4,
                  border: 1,
                  borderColor: "green",
                  borderRadius: 5,
                  height: 450,
                  boxShadow: "0 0 10px 5px green",
                }}
              >
                <VerifiedUserOutlinedIcon
                  className="neonSvg"
                  sx={{ fontSize: 80, color: "green" }}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    fontWeight="bold"
                  >
                    {t("titleProp4")}
                  </Typography>
                  <Typography gutterBottom paragraph component="div">
                    {t("subTitleProp4")}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card
                sx={{
                  maxWidth: 500,
                  p: 4,
                  border: 1,
                  borderColor: "green",
                  borderRadius: 5,
                  height: 450,
                  boxShadow: "0 0 10px 5px green",
                }}
              >
                <SpeedOutlinedIcon
                  className="neonSvg"
                  sx={{ fontSize: 80, color: "green" }}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    fontWeight="bold"
                  >
                    {t("titleProp5")}
                  </Typography>
                  <Typography gutterBottom paragraph component="div">
                    {t("subTitleProp5")}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card
                sx={{
                  maxWidth: 500,
                  p: 4,
                  border: 1,
                  borderColor: "green",
                  borderRadius: 5,
                  height: 450,
                  boxShadow: "0 0 10px 5px green",
                }}
              >
                <ShowChartOutlinedIcon
                  className="neonSvg"
                  sx={{ fontSize: 80, color: "green" }}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    fontWeight="bold"
                  >
                    {t("titleProp6")}
                  </Typography>
                  <Typography
                    gutterBottom
                    paragraph
                    component="div"
                    dangerouslySetInnerHTML={{ __html: t("subTitleProp6") }}
                  ></Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid
              item
              md={2}
              sx={{ display: { xs: "none", md: "block" } }}
            ></Grid>
          </Grid>
        </Container>
      </Grid>
      {offer.length > 0 && (
        <Container
          maxWidth="xl"
          sx={{
            marginTop: "24px",
            paddingTop: { xs: 3, md: 10 },
            paddingBottom: 0,
          }}
        >
          <Grid container item xs={12} justifyContent="center">
            {offer.map((image) => (
              <Card key={image.id}>
                <CardMedia
                  component="img"
                  image={`https://globalsolutionsprefabriquees.com/api${image.path}`}
                  alt="img"
                  sx={{ objectFit: "cover" }}
                />
              </Card>
            ))}
          </Grid>
        </Container>
      )}

      <Container
        maxWidth="xl"
        sx={{
          marginTop: "24px",
          px: { xs: 0, md: 3 },
          paddingTop: 10,
          paddingBottom: 0,
        }}
        ref={containerRef}
      >
        <Grid
          container
          spacing={{ xs: 0, md: 2 }}
          flexDirection={{ xs: "column", md: "row" }}
          alignItems={{ xs: "center", md: "flex-start" }}
        >
          <Grid item xs={12} textAlign="start" md>
            <Typography
              variant="h3"
              color="#3b8f1e"
              fontWeight="bold"
              sx={{ paddingLeft: { xs: 0, md: 4 } }}
              dangerouslySetInnerHTML={{ __html: t("textTittleVent") }}
            ></Typography>
          </Grid>

          <Grid
            item
            bgcolor="#3b8f1e"
            md={8}
            xs={12}
            marginRight={{ xs: 0, md: 6 }}
            boxShadow="3px 4px 5px 2px #727272"
            marginTop={{ xs: 5, md: 0 }}
          >
            <Grid color="white" p={4}>
              {t("contentTextVent")}
              <br />
              <br />
              <Typography fontWeight="bold">{t("contentTextVent1")}</Typography>
              <br />
              <ol>
                <li>{t("contentTextVent1_1")}</li>
                <li>{t("contentTextVent1_2")}</li>
                <li>{t("contentTextVent1_3")}</li>
                <li>{t("contentTextVent1_4")}</li>
                <li>{t("contentTextVent1_5")}</li>
                <li>{t("contentTextVent1_6")}</li>
              </ol>
              <br />
              <Typography fontWeight="bold">{t("contentTextVent2")}</Typography>
              <br />
              <ul>
                <li>{t("contentTextVent3")}</li>
                <li>{t("contentTextVent4")}</li>
                <li>{t("contentTextVent5")}</li>
              </ul>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Container
        maxWidth="xl"
        sx={{
          marginTop: "24px",
          px: { xs: 0, md: 3 },
          paddingTop: 10,
          paddingBottom: 0,
        }}
        ref={containerRef2}
      >
        <Grid
          container
          spacing={{ xs: 0, md: 2 }}
          flexDirection={{ xs: "column", md: "row" }}
          alignItems={{ xs: "center", md: "flex-start" }}
        >
          <Grid
            item
            textAlign="center"
            md
            display={{ xs: "block", md: "none" }}
          >
            <Typography
              variant="h3"
              color="#3b8f1e"
              fontWeight="bold"
              sx={{ paddingLeft: { xs: 0, md: 4 } }}
              dangerouslySetInnerHTML={{ __html: t("textTittleBen") }}
            ></Typography>
          </Grid>
          <Grid
            item
            bgcolor="#3b8f1e"
            md={8}
            xs={12}
            marginRight={{ xs: 0, md: 6 }}
            boxShadow="3px 4px 5px 2px #727272"
            marginTop={{ xs: 5, md: 0 }}
          >
            <Grid color="white" p={4}>
              <ol>
                {beneficios.map((beneficio, index) => (
                  <li key={index}>{beneficio}</li>
                ))}
              </ol>
            </Grid>
          </Grid>
          <Grid
            item
            textAlign="center"
            md
            display={{ xs: "none", md: "block" }}
          >
            <Typography
              variant="h3"
              color="#3b8f1e"
              fontWeight="bold"
              sx={{ paddingLeft: { xs: 0, md: 4 } }}
              dangerouslySetInnerHTML={{ __html: t("textTittleBen") }}
            ></Typography>
          </Grid>
        </Grid>
      </Container>
      <Container
        maxWidth="xl"
        sx={{
          marginTop: "24px",
        }}
      >
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
              variant="h2"
              color="#3b8f1e"
              sx={{ marginTop: "40px", fontWeight: "bold" }}
            >
              {t("textTittleServ")}
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
              variant="h2"
              color="#3b8f1e"
              sx={{ my: "48px", fontWeight: "bold" }}
            >
              {t("textTittleServ")}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Divider
              orientation="horizontal"
              sx={{ border: "1px solid #3b8f1e" }}
            />
          </Grid>
          <Grid item md={4}>
            <Grid sx={{ boxShadow: "7px 5px 8px 0px #727272" }}>
              <img
                src="../../BoxProduitsHome.jpg"
                loading="lazy"
                width="100%"
                alt="img"
              />
            </Grid>
          </Grid>

          <Grid container md={4} item textAlign="center" alignItems="center">
            <Link
              to="/configurateur"
              style={{ textDecoration: "none", height: "100%" }}
            >
              <Button
                sx={{
                  height: "100%",
                  color: "#d3b73d",
                  ":hover": { bgcolor: "#3b8f1e", color: "white" },
                }}
              >
                <Typography variant="h3" sx={{ fontWeight: "bold" }}>
                  {t("contentTextServ1")}
                </Typography>
              </Button>
            </Link>
          </Grid>

          <Grid item md={4}>
            <Grid sx={{ boxShadow: "-7px 5px 8px 0px #727272" }}>
              <img
                src="../../BoxProjetsHome.jpg"
                loading="lazy"
                width="100%"
                alt="img"
              />
            </Grid>
          </Grid>
          <Grid
            container
            item
            md={4}
            alignItems="center"
            justifyContent="center"
          >
            <Link
              to="/produits"
              style={{
                textDecoration: "none",
                height: "100%",
                width: "100%",
              }}
            >
              <Button
                fullWidth
                sx={{
                  height: "100%",
                  color: "#d3b73d",
                  ":hover": { bgcolor: "#3b8f1e", color: "white" },
                }}
              >
                <Typography variant="h3" sx={{ fontWeight: "bold" }}>
                  {t("contentTextServ2")}
                </Typography>
              </Button>
            </Link>
          </Grid>
          <Grid item md={4}>
            <Grid sx={{ boxShadow: "0px -4px 8px 2px #727272" }}>
              <img src="../../exp1.jpg" loading="lazy" width="100%" alt="img" />
            </Grid>
          </Grid>
          <Grid container item md={4} textAlign="center" alignItems="center">
            <Link
              to="/projets"
              style={{ textDecoration: "none", height: "100%" }}
            >
              <Button
                sx={{
                  height: "100%",
                  color: "#d3b73d",
                  ":hover": { bgcolor: "#3b8f1e", color: "white" },
                }}
              >
                <Typography variant="h3" sx={{ fontWeight: "bold" }}>
                  {t("contentTextServ3")}
                </Typography>
              </Button>
            </Link>
          </Grid>
        </Grid>
        <Grid item xs={12} marginTop={8}>
          <Divider
            orientation="horizontal"
            sx={{ border: "1px solid #3b8f1e" }}
          />
        </Grid>
      </Container>
      <Container
        maxWidth="xl"
        sx={{
          marginTop: "24px",
          px: { xs: 0, md: 3 },
          paddingTop: 10,
          paddingBottom: 0,
        }}
      >
        <Grid
          container
          spacing={{ xs: 0, md: 2 }}
          flexDirection={{ xs: "column", md: "row" }}
          alignItems={{ xs: "center", md: "flex-start" }}
        >
          <Grid item textAlign="center" md>
            <Typography
              variant="h3"
              color="#3b8f1e"
              fontWeight="bold"
              sx={{ paddingLeft: { xs: 0, md: 4 } }}
            >
              {t("textTittleContact")}
            </Typography>
            <Grid item md={0} xs={12} mt={8}>
              <Link className="epilepsy-button" to="/contact">
                {t("textButtonClick")}
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <ScrollToTopButton />
    </Grid>
  );
}
