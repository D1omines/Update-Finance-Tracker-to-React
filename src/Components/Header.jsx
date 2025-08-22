import EnterAccount from "./EnterAccount";
import RegistrationAccount from "./RegistrationAcoount";
import RegistrationUser from "./RegistrationUser";
import { HeaderContext } from "./Context/HeaderLayout";
import { useContext } from "react";

export default function Header() {
  const {
    user,
    setShowRegistrationEnter,
    userSignOut,
    showRegistrationEnter,
    ShowRegistration,
    menuIco,
  } = useContext(HeaderContext);

  return (
    <header className="h-fit bg-stone-800 flex p-5">
      <div
        className={` flex flex-col items-center justify-center w-[100%] text-white ${
          user
            ? "sm:flex-row sm:justify-between sm:items-center md:justify-between lg:justify-between lg:w-[60%] lg:m-auto"
            : ""
        } xl:flex-row xl:justify-between xl:w-[50%] xl:m-auto 2xl:w-[40%]`}
      >
        <div
          className={`flex items-center ${
            user
              ? "justify-center sm:justify-between lg:w-fit"
              : "justify-between"
          } w-[100%] md:w-[60%] xl:display-block xl:w-fit`}
        >
          <h1 className=" text-[1.3rem] font-bold cursor-default ">
            💰 Финансовый трекер
          </h1>
          <div className="pt-1 xl:hidden">
            <p onClick={() => setShowRegistrationEnter(true)}>
              <img
                className={`w-8 sm:w-10 ${user ? "hidden" : ""}`}
                src={menuIco}
                alt="menu icon"
              />
            </p>
          </div>
        </div>
        {!user ? (
          <RegistrationUser />
        ) : (
          <div className="flex items-center gap-5 mt-4 sm:w-100 sm:mt-0 md:justify-end lg:w-fit">
            <div className="flex items-center gap-2 cursor-default">
              {user.photoURL === null ? (
                <p>Привет</p>
              ) : (
                <img
                  className="w-10 rounded-2xl"
                  src={user?.photoURL}
                  alt="user photo"
                />
              )}

              <p className="font-bold">{user?.displayName}</p>
            </div>
            <div
              className="cursor-pointer hover:text-btn-first"
              onClick={userSignOut}
            >
              <p>Выход</p>
            </div>
          </div>
        )}
      </div>

      {showRegistrationEnter && <EnterAccount />}
      {ShowRegistration && <RegistrationAccount />}
    </header>
  );
}
