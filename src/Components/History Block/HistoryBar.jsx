import { ExpenseChart } from "../Graphics Logic/ExpenseChart";
import BarChart from "../Graphics Logic/BarChart";

export default function HistoryBar({
  nameMonth,
  incomeOpeeration,
  expenseOpeeration,
  remains,
  operationData,
}) {
  return (
    <div className="flex justify-between gap-10">
      <div className="bg-container-mini p-3 rounded-[0.5rem] shadow-section-mini flex flex-col justify-between ">
        <h3 className="text-[1.3rem] font-bold">{nameMonth}</h3>
        <div className="h-[60%]">
          <BarChart
            incomeOpeeration={incomeOpeeration}
            expenseOpeeration={expenseOpeeration}
          />
        </div>
        <div className="">
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

      <div className="bg-container-mini p-3 rounded-[0.5rem] shadow-section-mini flex flex-col justify-between ">
        <h4 className="text-[1.3rem] font-bold">Основные расходы</h4>

        <div className="my-5">
          <ExpenseChart data={operationData} />
        </div>
        <div>
          {operationData.map((el) => (
            <p
              className="bg-expenceList mb-2 text-white p-1 rounded-[0.5rem]"
              key={el.category}
            >
              {el.category}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
