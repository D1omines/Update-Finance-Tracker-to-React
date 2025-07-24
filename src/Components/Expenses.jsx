export default function Expenses({ children }) {
  return (
    <div className="card">
      <h2>Расходы по категориям за месяц</h2>
      <p className="info-title-null categoryes-title-null">Нет расходов</p>
      <ul className="stats">{children}</ul>
    </div>
  );
}
