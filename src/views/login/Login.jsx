import { useState } from "react";
import FormLogin from "../../components/FormLogin/FormLogin";
import FormRegister from "../../components/FormRegister/FormRegister";
import ScrollToTopButton from "../../components/ScrollToTopButton/ScrollToTopButton";
import { useTranslation } from "react-i18next";
import FormEmailResendPass from "../../components/FormEmailResendPass/FormEmailResendPass";

export default function Login() {
  document.title = "Login/Register";
  const { t } = useTranslation();
  const [view, setView] = useState(true);
  const [viewResendPass, setViewResendPass] = useState(false);
  return (
    <>
      {!view ? (
        viewResendPass ? (
          <FormEmailResendPass
            vista={view}
            estado={setView}
            vistaResendPass={viewResendPass}
            estadoResendPass={setViewResendPass}
          />
        ) : (
          <FormRegister vista={view} estado={setView} />
        )
      ) : (
        <FormLogin
          vista={view}
          estado={setView}
          vistaResendPass={viewResendPass}
          estadoResendPass={setViewResendPass}
        />
      )}
      <ScrollToTopButton />
    </>
  );
}
