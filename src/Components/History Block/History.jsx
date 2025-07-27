import { ExpenseChart } from "../Graphics Logic/ExpenseChart";
import BarChart from "../Graphics Logic/BarChart";

export default function History({ operation }) {
  const sampleData = [
    { category: "Еда", amount: 3000 },
    { category: "Развлечения", amount: 1200 },
    { category: "Транспорт", amount: 700 },
  ];

  const incomeOpeeration = operation
    .filter((el) => el.selectName === "income")
    .reduce((sum, op) => {
      return (sum += Number(op.amount));
    }, 0);

  const expenseOpeeration = operation
    .filter((el) => el.selectName === "expense")
    .reduce((sum, op) => {
      return (sum += Number(op.amount));
    }, 0);

  const remains = incomeOpeeration - expenseOpeeration;

  return (
    <section>
      <div className="card-info">
        <div className="month__data container-mini">
          <h3>Июль</h3>

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
              <ExpenseChart data={sampleData} />
            </div>
            <div className="month__total-values">
              <p>Еда</p>
              <p>Транспорт</p>
              <p>Разввлечения</p>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <h2>История за месяц</h2>
        <div>
          <ul>
            <li></li>
          </ul>
        </div>
      </div>
    </section>
  );
}
