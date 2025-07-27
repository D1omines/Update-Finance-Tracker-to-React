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
    <div className="card-info">
      <div className="month__data container-mini">
        <h3>{nameMonth}</h3>

        <div style={{ height: "300px" }} className="month_data-graphics">
          <BarChart
            incomeOpeeration={incomeOpeeration}
            expenseOpeeration={expenseOpeeration}
          />
        </div>
        <div className="month__total-remains">
          <p>Доходы: {incomeOpeeration}₽</p>
          <p>Расходы: {expenseOpeeration}₽</p>
          <p>Остаток: {remains}₽</p>
        </div>
      </div>

      <div className="month__total container-mini">
        <h4>Основные расходы</h4>

        <div className="month__total-stats">
          <div className="month__total-graphics">
            <ExpenseChart data={operationData} />
          </div>
          <div className="month__total-values">
            {operationData.map((el) => (
              <p key={el.category}>{el.category}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
