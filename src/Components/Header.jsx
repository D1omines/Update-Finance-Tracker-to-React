export default function Header() {
  return (
    <header className="h-10 bg-stone-800 flex px-10">
      <div className=" flex items-center w-[100%] text-white justify-center ">
        <h1 className=" text-[1.3rem] font-bold cursor-default">
          💰 Финансовый трекер
        </h1>
        <div className="flex  gap-4 w-[10%] justify-end">
          <p className="cursor-pointer hover:text-btn-first duration-300">
            Вход
          </p>
          <p className="cursor-pointer hover:text-btn-first duration-300">
            Регистрация
          </p>
        </div>
      </div>
    </header>
  );
}
