import { ExpenseChart } from "../Graphics Logic/ExpenseChart";
import BarChart from "../Graphics Logic/BarChart";
import { useContext } from "react";
import { historyContext } from "./History";

export default function HistoryBar() {
  const {
    nameMonth,
    incomeOpeeration,
    expenseOpeeration,
    remains,
    operationData,
    expenceCategoryMonth,
  } = useContext(historyContext);

  return (
    <div className="flex flex-col justify-between gap-0 xl:flex-row xl:gap-5">
      <div className="bg-container-mini p-3 rounded-[0.5rem] shadow-section-mini flex flex-col justify-between gap-5 xl:w-[50%]">
        <h3 className="text-[1.3rem] font-bold">{nameMonth}</h3>
        <div className="h-[250px]">
          <BarChart
            incomeOpeeration={incomeOpeeration}
            expenseOpeeration={expenseOpeeration}
          />
        </div>
        <div>
          <p className="bg-expenceList mb-2 text-white p-1 rounded-[0.5rem]">
            Доходы: {incomeOpeeration}₽
          </p>
          <p className="bg-expenceList mb-2 text-white p-1 rounded-[0.5rem]">
            Расходы: {expenseOpeeration}₽
          </p>
          <p className="bg-expenceList mb-2 text-white p-1 rounded-[0.5rem]">
            Остаток: {remains}₽
          </p>
        </div>
      </div>

      <div className="bg-container-mini p-3 rounded-[0.5rem] shadow-section-mini flex flex-col justify-between gap-5 xl:w-[100%]">
        <h3 className="text-[1.3rem] font-bold">Основные расходы</h3>
        <div className="h-[250px] m-auto ">
          <ExpenseChart data={operationData} />
        </div>
        <div>
          {expenceCategoryMonth.map((el) => (
            <p
              className="bg-expenceList mb-2 text-white p-1 rounded-[0.5rem]"
              key={el.category}
            >
              {`${el.category}: ${el.amount}р`}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
