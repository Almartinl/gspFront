import jwtDecode from "jwt-decode";
import { createContext, useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import Swal from "sweetalert2";

const AuthContext = createContext({
  authorization: null,
  dataToken: {
    email: null,
    role: null,
    id: null,
  },
  login: () => {},
  logout: () => {},
  //errorMessage: null
});

export default AuthContext;

const MY_AUTH_APP = "MY_AUTH_APP";
const MY_AUTH_APP_DATA = "MY_AUTH_APP_DATA ";

export function AuthContextProvider({ children }) {
  const [authorization, setAuthorization] = useState(
    window.localStorage.getItem(MY_AUTH_APP) ?? null
  );
  const { t } = useTranslation();
  const [dataToken, setDataToken] = useState(
    JSON.parse(window.localStorage.getItem(MY_AUTH_APP_DATA)) ?? {
      email: null,
      role: null,
      id: null,
    }
  );
  async function login(e, user) {
    e.preventDefault();
    // console.log(user);

    await fetch("https://almartindev.online/api/user/login", {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((response) => {
        console.log(response.status);
        if (response.status == 400) {
          Swal.fire({
            position: "center",
            icon: "error",
            title: t("textAlertLoginError1"),
          });
        } else if (response.status == 200) {
          return response.json();
        } else if (response.status == 404 || response.status == 401) {
          Swal.fire({
            position: "center",
            icon: "error",
            title: t("textAlertLoginError2"),
          });
        } else if (response.status == 403) {
          Swal.fire({
            position: "center",
            icon: "error",
            title: t("textAlertLoginError3"),
          });
        }
      })
      .then((data) => {
        setAuthorization(data.jwt);
        setDataToken(jwtDecode(data.jwt));
        window.localStorage.setItem(
          MY_AUTH_APP_DATA,
          JSON.stringify(jwtDecode(data.jwt))
        );
        window.localStorage.setItem(MY_AUTH_APP, data.jwt);
        // console.log(data.jwt);
      });
  }
  // console.log(localStorage.getItem(MY_AUTH_APP));

  function logout() {
    window.localStorage.removeItem(MY_AUTH_APP);
    window.localStorage.removeItem(MY_AUTH_APP_DATA);
    setAuthorization(null);
    setDataToken({
      email: null,
      role: null,
      id: null,
    });
  }

  const value = {
    authorization,
    dataToken,
    //errorMessage,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
  return useContext(AuthContext);
}
