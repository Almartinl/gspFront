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
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="4"
          aria-label="Slide 5"
        ></button>
      </div>
      <div className="carousel-inner con">
        <div className="carousel-item active">
          <img
            src="../../besix-abobo.webp"
            className="d-block w-100 border rounded"
            alt="carrusel"
          />
          <div className="carousel-caption carousel-text">
            <h2 className="shadow-text display-6 fw-bold">
              {t("tittleCarousel")}
            </h2>
            {/* <h6 className="shadow-text fw-bold">{t("subTittleCarousel")}</h6> */}
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="../../carousel2.webp"
            className="d-block w-100 border rounded"
            alt="carrusel"
          />
          <div className="carousel-caption carousel-text">
            <h4 className="shadow-text display-6 fw-bold">{t("titleProp2")}</h4>
            {/* <h5 className="shadow-text fw-bold">{t("subTittle2Carousel")}</h5> */}
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="../../carousel_2.jpeg"
            className="d-block w-100 border rounded"
            alt="carrusel"
          />
          <div className="carousel-caption carousel-text">
            <h4 className="shadow-text display-6 fw-bold">{t("titleProp3")}</h4>
            {/* <h5 className="shadow-text fw-bold">{t("subTittle2Carousel")}</h5> */}
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="../../carousel3.webp"
            className="d-block w-100 border rounded"
            alt="carrusel"
          />
          <div className="carousel-caption carousel-text">
            <h4 className="shadow-text display-6 fw-bold">{t("titleProp4")}</h4>
            {/* <h5 className="shadow-text fw-bold">{t("subTittle2Carousel")}</h5> */}
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="../../carousel_3.webp"
            className="d-block w-100 border rounded"
            alt="carrusel"
          />
          <div className="carousel-caption carousel-text">
            <h4 className="shadow-text display-6 fw-bold">{t("titleProp5")}</h4>
            {/* <h5 className="shadow-text fw-bold">{t("subTittle3Carousel")}</h5> */}
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
