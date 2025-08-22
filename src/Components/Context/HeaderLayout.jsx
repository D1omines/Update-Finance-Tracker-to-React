import menuIco from "/public/menu-ico.png";
import googleIco from "/public/google-ico.png";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import {
  loginWithEmail,
  loginWithGoogle,
  registrationWithEmail,
} from "../Data/registration";
import { auth, provider } from "../Data/firebase";

export const HeaderContext = createContext();

export default function HeaderLayout({ children }) {
  const [showRegistrationEnter, setShowRegistrationEnter] = useState(false);
  const [ShowRegistration, setShowRegistration] = useState(false);
  const [user, setUser] = useState(null);
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [enterUserValue, setEnterUserValue] = useState({
    email: "",
    password: "",
  });
  const [errorStyle, setErrorStyle] = useState({
    email: false,
    password: false,
  });

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => setUser(u));
    return unsub;
  }, []);

  async function loginEmail() {
    const user = await loginWithEmail(
      auth,
      enterUserValue.email,
      enterUserValue.password
    );
    setShowRegistrationEnter(false);
  }

  async function regEmail() {
    const user = registrationWithEmail(
      auth,
      newUser.name,
      newUser.email,
      newUser.password
    );

    setUser(user);
    setShowRegistration(false);
  }

  async function loginGoogle() {
    const user = await loginWithGoogle(auth, provider);
    setUser(user);
    setShowRegistrationEnter(false);
    setShowRegistration(false);
  }

  function userSignOut() {
    signOut(auth);
    setUser(null);
  }

  function closeRegInfo(value) {
    const isClose = value.split(" ").some((el) => el === "reg_info");

    if (isClose) {
      setShowRegistrationEnter(false);
      setShowRegistration(false);
    }
  }

  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function validateRegistration() {
    setErrorStyle({ email: false, password: false });

    if (!validateEmail(newUser.email)) {
      setErrorStyle((prev) => ({ ...prev, email: true }));
      return alert("почта неверная");
    }
    if (newUser.password.length === 0) {
      return alert("пароль короткий");
    }

    regEmail();
  }
  return (
    <HeaderContext.Provider
      value={{
        setShowRegistrationEnter,
        setShowRegistration,
        setEnterUserValue,
        setShowRegistration,
        setNewUser,

        user,
        newUser,
        showRegistrationEnter,
        ShowRegistration,
        enterUserValue,

        loginEmail,
        loginGoogle,
        loginWithGoogle,
        validateRegistration,
        closeRegInfo,
        userSignOut,

        errorStyle,
        menuIco,
        googleIco,
      }}
    >
      {children}
    </HeaderContext.Provider>
  );
}
