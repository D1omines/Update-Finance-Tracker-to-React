export default function HistoryTotal({ children }) {
  return (
    <div className="card monthlyExpenses">
      <h2 className="monthlyExpenses__title">История за месяц</h2>
      <div className="container-mini monthlyExpenses__container">
        <div className="monthlyExpenses__block">
          <ul className="monthlyExpenses__list">{children}</ul>
        </div>
      </div>
    </div>
  );
}
