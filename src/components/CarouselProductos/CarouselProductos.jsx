import { useTranslation } from "react-i18next";

export default function CarouselProductos() {
  const { t } = useTranslation();
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
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="5"
          aria-label="Slide 6"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="6"
          aria-label="Slide 7"
        ></button>
      </div>
      <div className="carousel-inner con">
        <div className="carousel-item active">
          <img
            src="../../carouselBaseVida.webp"
            className="d-block w-100"
            alt="carrusel"
            height="550px"
          />
          <div className="carousel-caption carousel-text">
            <h3 className="shadow-text display-4 fw-bold">
              {t("textCarouselBaseVida")}
            </h3>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="../../bungalowobra.jpg"
            className="d-block w-100 "
            alt="carrusel"
            height="550px"
          />
          <div className="carousel-caption carousel-text">
            <h3 className="shadow-text display-4 fw-bold">
              {t("textCarouselObras")}
            </h3>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="../../32.webp"
            className="d-block w-100 "
            alt="carrusel"
            height="550px"
          />
          <div className="carousel-caption carousel-text">
            <h3 className="shadow-text display-4 fw-bold">
              {t("textCarouselEstructura")}
            </h3>
          </div>
        </div>
        <div className="carousel-item">
          <img src="../../44.webp" className="d-block w-100" alt="carrusel" />
          <div className="carousel-caption carousel-text">
            <h3 className="shadow-text display-4 fw-bold">
              {t("textCarouselEdificios")}
            </h3>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="../../hangar2.jpg"
            className="d-block w-100"
            alt="carrusel"
          />
          <div className="carousel-caption carousel-text">
            <h3 className="shadow-text display-4 fw-bold">
              {t("textCarouselNaves")}
            </h3>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="../../contenedor-maritimo.jpg"
            className="d-block w-100"
            alt="carrusel"
          />
          <div className="carousel-caption carousel-text">
            <h3 className="shadow-text display-4 fw-bold">
              {t("textCarouselContenedores")}
            </h3>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="../../panelSandwich.webp"
            className="d-block w-100"
            alt="carrusel"
          />
          <div className="carousel-caption carousel-text">
            <h3 className="shadow-text display-4 fw-bold">
              {t("textCarouselPaneles")}
            </h3>
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
