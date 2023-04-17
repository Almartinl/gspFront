import { useState } from "react";
import FormLogin from "../../components/FormLogin/FormLogin";
import FormRegister from "../../components/FormRegister/FormRegister";
import ScrollToTopButton from "../../components/ScrollToTopButton/ScrollToTopButton";

export default function Login() {
  document.title = "Login/Register";
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
