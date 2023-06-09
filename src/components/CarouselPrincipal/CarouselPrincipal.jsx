import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function CarouselPrincipal() {
  const { t, i18n } = useTranslation("translation");
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="6000"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner con">
        <div className="carousel-item active">
          <img src="../../22.jpg" className="d-block w-100" alt="carrusel" />
          <div className="carousel-caption carousel-text">
            <h3 className="shadow-text display-2 fw-bold">
              {t("tittleCarousel")}
            </h3>
            <h4 className="shadow-text fw-bold">
              {t("subTittleCarousel")}
              {/* Bungalows y Edificios prefabricados */}
            </h4>
          </div>
        </div>
        <div className="carousel-item">
          <img src="../../44.jpg" className="d-block w-100 " alt="carrusel" />
          <div className="carousel-caption carousel-text">
            <h4 className="shadow-text display-4 fw-bold">
              {t("tittle2Carousel")}
            </h4>
            <h4 className="shadow-text fw-bold">{t("subTittle2Carousel")}</h4>
          </div>
        </div>
        <div className="carousel-item">
          <img src="../../16box.jpg" className="d-block w-100" alt="carrusel" />
          <div className="carousel-caption carousel-text">
            <h4 className="shadow-text display-4 fw-bold">
              {t("tittle3Carousel")}
            </h4>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
