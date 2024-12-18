import { useEffect, useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import "./CarouselSplider.css";

export default function CarouselSplider({ img }) {
  const images = [
    {
      id: 1,
      src: `https://globalsolutionsprefabriquees.com/api${img}`,
      alt: "Image1",
    },
    {
      id: 2,
      src: `https://globalsolutionsprefabriquees.com/api/images/products/obarsRojo.jpeg`,
      alt: "Image2",
    },
    {
      id: 3,
      src: `https://globalsolutionsprefabriquees.com/api/images/products/obrasAmarillo.jpeg`,
      alt: "Image3",
    },
    {
      id: 4,
      src: `https://globalsolutionsprefabriquees.com/api/images/products/obrasAzul.jpeg`,
      alt: "Image4",
    },
    {
      id: 5,
      src: `https://globalsolutionsprefabriquees.com/api/images/products/boxVerde.jpg`,
      alt: "Image5",
    },
    // Add other image objects here...
  ];

  const mainRef = useRef();
  const thumbsRef = useRef();

  useEffect(() => {
    if (mainRef.current && thumbsRef.current && thumbsRef.current.splide) {
      mainRef.current.sync(thumbsRef.current.splide);
    }
  }, []);

  const mainOptions = {
    type: "fade",
    perPage: 1,
    perMove: 1,
    gap: "0.5rem",
    cover: true,
    height: 500,
    pagination: false,
    breakpoints: {
      640: {
        height: 200,
      },
    },
  };

  const thumbsOptions = {
    rewind: true,
    gap: 10,
    pagination: false,
    fixedWidth: 110,
    fixedHeight: 70,
    focus: "center",
    cover: true,
    isNavigation: true,
    arrows: false,
    breakpoints: {
      640: {
        fixedWidth: 60,
        fixedHeight: 44,
      },
    },
  };

  return (
    <div>
      <Splide
        options={mainOptions}
        ref={mainRef}
        aria-labelledby="thumbnail-slider-example"
      >
        {images.map((image) => (
          <SplideSlide key={image.id}>
            <img src={image.src} alt={image.alt} />
          </SplideSlide>
        ))}
      </Splide>

      <Splide
        className="splide"
        options={thumbsOptions}
        ref={thumbsRef}
        aria-label="The carousel with thumbnails. Selecting a thumbnail will change the main carousel"
      >
        {images.map((image, index) => (
          <SplideSlide
            className="splide__slide"
            style={{ border: "none" }}
            key={image.id}
          >
            <img src={image.src} alt={image.alt} />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}
