import { useContext } from "react";
import { HeaderContext } from "./Context/HeaderLayout";

export default function RegistrationUser() {
  const { setShowRegistrationEnter, setShowRegistration } =
    useContext(HeaderContext);

  return (
    <div className="hidden xl:flex xl:gap-5 xl:pt-1">
      <p
        className="cursor-pointer hover:text-btn-first duration-300"
        onClick={() => setShowRegistrationEnter(true)}
      >
        Вход
      </p>
      <p
        className="cursor-pointer hover:text-btn-first duration-300"
        onClick={() => setShowRegistration(true)}
      >
        Регистрация
      </p>
    </div>
  );
}
