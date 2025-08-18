export default function Header() {
  return (
    <header className="h-10 bg-stone-800 flex px-10">
      <div className=" flex items-center w-[100%] text-white justify-center ">
        <h1 className=" text-[1.3rem] font-bold ">💰 Финансовый трекер</h1>
        <div className="flex  gap-4 w-[10%] justify-end">
          <p className="cursor-pointer">Вход</p>
          <p className="cursor-pointer">Регистрация</p>
        </div>
      </div>
    </header>
  );
}
