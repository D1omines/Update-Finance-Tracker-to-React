import { useContext } from "react";
import { operationContext } from "./Layout";

export default function Expenses() {
  const { expenceCategory } = useContext(operationContext);

  return (
    <div className="card">
      <h2 className="text-[1.3rem] font-bold text-center">
        Расходы по категориям за месяц
      </h2>
      {!expenceCategory ? (
        <p className="info-title-null categoryes-title-null">Нет расходов</p>
      ) : (
        ""
      )}
      <ul className="mt-[1.3rem] flex flex-col gap-3">
        {expenceCategory.map((el) => (
          <li
            key={el.category}
            className="flex justify-between bg-expenceList text-white p-1 rounded-[0.3rem]"
          >
            <p>{el.category}</p>
            <p className="font-bold">{el.amount}₽</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
