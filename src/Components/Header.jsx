import { useState } from "react";
import menuIco from "/public/menu-ico.png";

export default function Header() {
  const [showRegistrationInfo, setShowRegistrationInfo] = useState(false);

  return (
    <header className="h-20 bg-stone-800 flex px-5">
      <div className=" flex flex-col items-center w-[100%] justify-center text-white xl:flex-row xl:justify-between xl:w-[50%] xl:m-auto 2xl:w-[40%]">
        <div className="flex items-center justify-between w-[100%] md:w-[60%] lg:gap-10  xl:display-block xl:w-fit">
          <h1 className=" text-[1.3rem] font-bold cursor-default ">
            💰 Финансовый трекер
          </h1>
          <div className="pt-1 xl:hidden">
            <p onClick={() => setShowRegistrationInfo(true)}>
              <img className="w-8 sm:w-10" src={menuIco} alt="menu icon" />
            </p>
          </div>
        </div>
        <div
          className="hidden xl:flex xl:gap-5 xl:pt-1"
          onClick={() => setShowRegistrationInfo(true)}
        >
          <p className="cursor-pointer hover:text-btn-first duration-300">
            Вход
          </p>
          <p className="cursor-pointer hover:text-btn-first duration-300">
            Регистрация
          </p>
        </div>
      </div>

      {showRegistrationInfo && (
        <div className="w-[100%] h-[100vh] bg-amber-50 fixed top-0 right-0">
          <div className="flex items-center justify-center p-5">
            <h2>Вход/Регистрация</h2>
          </div>
        </div>
      )}
    </header>
  );
}
