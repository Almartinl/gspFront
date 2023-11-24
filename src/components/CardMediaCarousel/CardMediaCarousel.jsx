import { CardContent, CardMedia, Container, Divider } from "@mui/material";
import * as React from "react";
import { useState } from "react";

export default function CardMediaCarousel({ imgArray }) {
  const [fotoSeleccionada, setFotoSeleccionada] = useState("");

  return (
    <>
      {imgArray.length == 1 && (
        <CardMedia
          component="img"
          height="500"
          image={fotoSeleccionada ? fotoSeleccionada : imgArray[0]}
          alt="img"
          sx={{ objectFit: { xs: "contain", md: "cover" } }}
        />
      )}

      {imgArray.length > 1 && (
        <>
          <CardMedia
            component="img"
            height="500"
            image={fotoSeleccionada ? fotoSeleccionada : imgArray[0]}
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
            {imgArray.map((img) => (
              <CardMedia
                component="img"
                height="100"
                image={img}
                onClick={(e) => {
                  e.preventDefault();
                  setFotoSeleccionada(img);
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
            ))}
          </CardContent>
        </>
      )}
    </>
  );
}
