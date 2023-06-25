import * as React from "react";
import { Button, Grid, IconButton, Paper, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import CloseIcon from "@mui/icons-material/Close";

export default function Cookies({ onAccept, onClose }) {
  const { t } = useTranslation();
  return (
    <Grid
      container
      item
      xs={12}
      maxWidth="xl"
      position="fixed"
      bottom={20}
      left={0}
      right={0}
      justifyContent="center"
    >
      <Paper elevation={12} sx={{ p: 5, position: "relative" }}>
        <Typography variant="h6">{t("textCookies")}</Typography>
        <Button href="/policity">{t("buttonTextPolicity")}</Button>
        <Button onClick={onAccept}>{t("buttonAceptar")}</Button>
        <IconButton
          color="error"
          sx={{ position: "absolute", top: 0, right: 0 }}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      </Paper>
    </Grid>
  );
}
