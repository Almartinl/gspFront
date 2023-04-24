import { Container, Grid, Typography } from "@mui/material";
import ScrollToTopButton from "../../components/ScrollToTopButton/ScrollToTopButton";

export default function Nosotros() {
  document.title = "Sobre Nosotros";
  return (
    <Container maxWidth="md">
      <Grid>
        <Typography variant="h2" fontWeight="bold" color="#3b8f1e" marginY={5}>
          QUI SOMME-NOUS
        </Typography>
        <Grid container spacing={2}>
          <Grid container gap={2} item md={12}>
            <Typography textAlign="left" variant="p">
              Entreprise spécialisée dans la construction, préfabriquée,
              métallique et modulaire, Basée à Abidjan en Côte d'Ivoire, GSP a
              été fondée en 2020 lors de la crise de la COVID-19 pour répondre
              au besoin croissant de bâtiments préfabriqués sur le marché.
              <br />
              <br /> Depuis lors, nous avons réalisé avec succès plus de 3500m2
              de modules, bungalows et bâtiments préfabriqués, entièrement
              personnalisés et sur mesure, pour les plus grandes entreprises de
              BTP et Génie civil en Afrique.
              <br />
              <br /> Nous avons réalisé plus de 75 projets dans divers secteurs
              d'activités tels que des installations de chantiers pour les
              constructeurs, des extensions de bureaux, des boutiques et des
              points de vente pour les particuliers, les ONG, les organismes
              internationaux et d'autres institutions ivoiriennes.
              <br />
              <br />
              Nous avons également réalisé des hangars de stockage d'agrégats,
              des entrepôts industriels et des charpentes métalliques pour les
              grands projets de développement de la Côte d'Ivoire tels que la
              Tour F en cours de réalisation, le Parc d'Exposition de l'Aéroport
              PHB, l'échangeur du grand Rond-point d'Abobo, l'Esplanade du
              Palais Présidentiel, etc.
            </Typography>
            <Typography
              textAlign="left"
              color="#833f42"
              fontWeight="bold"
              variant="h4"
            >
              NOTRE VISION
            </Typography>
            <Typography textAlign="left" variant="p">
              Vulgariser et rendre totalement accessible toutes les techniques
              et systèmes de construction préfabriquées d’abord en Côte
              D’ivoire, ensuite au Sénégal et enfin en Afrique de l’Ouest,
              Participer à la formation et à l’emploi des jeunes en Afrique.
              Notre ambition est de devenir d’ici 2025 le LEADER de la
              construction Préfabriquée et Métallique en Afrique de l’Ouest, et
              surtout en Côte d’Ivoire ou nous comptons ouvrir d’autres ateliers
              de fabrication de nos installations préfabriquées comme celle que
              nous avons actuellement à Abidjan. Notre équipe est principalement
              composée de Jeune Ivoiriens et Africains et nous faisons tout
              notre possible pour leurs transmettre le savoir-faire nécessaire,
              et le Mindset pour qu’ils puissent participer demain au
              développement et au rayonnement de l’Afrique.
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
