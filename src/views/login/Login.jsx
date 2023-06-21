import { useState } from "react";
import FormLogin from "../../components/FormLogin/FormLogin";
import FormRegister from "../../components/FormRegister/FormRegister";
import ScrollToTopButton from "../../components/ScrollToTopButton/ScrollToTopButton";
import { useTranslation } from "react-i18next";

export default function Login() {
  document.title = "Login/Register";
  const { t } = useTranslation();
  const [view, setView] = useState(true);
  return (
    <>
      {!view ? (
        <FormRegister vista={view} estado={setView} />
      ) : (
        <FormLogin vista={view} estado={setView} />
      )}
      <ScrollToTopButton />
    </>
  );
}
