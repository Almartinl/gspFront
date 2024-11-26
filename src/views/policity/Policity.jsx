import { Container, Grid, Typography } from "@mui/material";
import ScrollToTopButton from "../../components/ScrollToTopButton/ScrollToTopButton";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

export default function Policity() {
  const { t } = useTranslation();

  document.title = t("textTittlePolicity");

  useEffect(() => {
    const scrollToTop = () => {
      window.scroll(0, 0);
    };
    scrollToTop();
  }, []);

  return (
    <Container maxWidth="md">
      <Grid>
        <Typography variant="h2" fontWeight="bold" color="#3b8f1e" marginY={5}>
          {t("textTittlePolicity")}
        </Typography>
        <Grid container spacing={2}>
          <Grid container gap={2} item md={12}>
            <Typography
              textAlign="left"
              variant="p"
              dangerouslySetInnerHTML={{ __html: t("textPolicity") }}
            ></Typography>
          </Grid>
        </Grid>
        <Grid container justifyContent="center" my={5}></Grid>
      </Grid>
      <ScrollToTopButton />
    </Container>
  );
}
