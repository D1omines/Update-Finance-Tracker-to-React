import { useContext } from "react";
import { HeaderContext } from "./Context/HeaderLayout";

export default function EnterAccount() {
  const {
    enterUserValue,
    loginEmail,
    loginGoogle,
    googleIco,
    closeRegInfo,
    setEnterUserValue,
    setShowRegistration,
    setShowRegistrationEnter,
  } = useContext(HeaderContext);

  return (
    <div
      className="reg_info w-[100%] h-[100vh] bg-modal fixed top-0 right-0 flex"
      onClick={(e) => closeRegInfo(e.target.className)}
    >
      <div className="flex flex-col items-center p-5 bg-white w-[90%] h-fit m-auto rounded-2xl md:w-[50%] xl:w-[30%] 2xl:w-[20%]">
        <h2 className="text-2xl font-bold mt-6">Вход</h2>
        <div className="flex flex-col gap-5 mt-5 w-[80%]">
          <input
            className="border-b-2 border-stone-300 h-10 p-1"
            type="email"
            placeholder="Почта"
            value={enterUserValue.email}
            onChange={(e) =>
              setEnterUserValue((prev) => ({
                ...prev,
                email: e.target.value,
              }))
            }
          />
          <input
            className="border-b-2 border-stone-300 h-10 p-1"
            type="password"
            placeholder="Пароль"
            value={enterUserValue.password}
            onChange={(e) =>
              setEnterUserValue((prev) => ({
                ...prev,
                password: e.target.value,
              }))
            }
          />
        </div>
        <div className="mt-10 w-[100%] text-center flex flex-col  items-center gap-3">
          <button
            className="p-2 bg-btn-first text-white w-[80%] rounded-[0.5rem] hover:bg-btn-hover duration-300 cursor-pointer"
            onClick={loginEmail}
          >
            Войти
          </button>
          <p>или</p>
          <div
            className="cursor-pointer flex items-center bg-blue-500 text-white font-bold p-2 rounded-[0.5rem] gap-2 "
            onClick={loginGoogle}
          >
            <div className="w-10 bg-white p-1 rounded-[0.2rem]">
              <img src={googleIco} alt="" />
            </div>
            <p>Войти с помощью Google</p>
          </div>
        </div>
        <div className="flex gap-2 mt-8 text-stone-600 text-[0.8rem]">
          <p>Нет учетной записи?</p>
          <p
            className="cursor-pointer hover:text-stone-900"
            onClick={() => {
              setShowRegistrationEnter(false);
              setShowRegistration(true);
            }}
          >
            Зарегистрироваться
          </p>
        </div>
      </div>
    </div>
  );
}
