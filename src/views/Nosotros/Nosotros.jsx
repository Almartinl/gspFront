import { Container, Grid, Typography } from "@mui/material";
import ScrollToTopButton from "../../components/ScrollToTopButton/ScrollToTopButton";
import { useTranslation } from "react-i18next";

export default function Nosotros() {
  document.title = "Sobre Nosotros";
  const { t } = useTranslation();
  return (
    <Container maxWidth="md">
      <Grid>
        <Typography variant="h2" fontWeight="bold" color="#3b8f1e" marginY={5}>
          {t("tittleTextNosotros")}
        </Typography>
        <Grid container spacing={2}>
          <Grid container gap={2} item md={12}>
            <Typography
              textAlign="left"
              variant="p"
              dangerouslySetInnerHTML={{ __html: t("textNosotros") }}
            ></Typography>
            <Typography
              textAlign="left"
              color="#833f42"
              fontWeight="bold"
              variant="h4"
            >
              {t("tittleTextVision")}
            </Typography>
            <Typography textAlign="left" variant="p">
              {t("textVision")}
            </Typography>
          </Grid>
        </Grid>
        <Grid container justifyContent="center" my={5}>
          <img
            src="https://almartindev.online/api/images/products/nosotros.jpeg"
            alt="imagen"
            width="100%"
          />
        </Grid>
      </Grid>
      <ScrollToTopButton />
    </Container>
  );
}
