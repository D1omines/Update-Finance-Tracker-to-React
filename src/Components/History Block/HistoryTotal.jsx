import { useContext } from "react";
import { historyContext } from "./History";

export default function HistoryTotal() {
  const { currentMonthOperation } = useContext(historyContext);
  return (
    <div className="">
      <div className="bg-container-mini p-3 rounded-[0.5rem] shadow-section-mini flex flex-col gap-5 ">
        <h2 className="text-[1.3rem] font-bold">История за месяц</h2>
        <div>
          <ul className="flex flex-col gap-3 h-150 overflow-y-scroll">
            {currentMonthOperation.map((el) => (
              <li
                key={el.id}
                className="flex items-center justify-between border-b-1 border-stone-400"
                data-id={el.id}
              >
                <p className="flex justify-start w-[40%]">
                  <span className="w-[30%]">
                    {el.selectName === "income" ? "+" : "-"}
                    {el.amount}₽
                  </span>{" "}
                  {""}
                  <span>{el.category}</span>
                </p>
                <p>{el.date}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
