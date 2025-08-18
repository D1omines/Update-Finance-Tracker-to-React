import { useContext } from "react";
import { operationContext } from "./Layout";

export default function Expenses({ children }) {
  const { expenceCategory } = useContext(operationContext);

  return (
    <div className="card">
      <h2 className="text-[1.3rem] font-bold">
        Расходы по категориям за месяц
      </h2>
      {!expenceCategory ? (
        <p className="info-title-null categoryes-title-null">Нет расходов</p>
      ) : (
        ""
      )}
      <ul className="mt-[1.3rem] flex flex-col gap-3">{children}</ul>
    </div>
  );
}
