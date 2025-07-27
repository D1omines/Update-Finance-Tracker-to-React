export default function Expenses({ children, expenceCategory }) {
  return (
    <section>
      <div className="card">
        <h2>Расходы по категориям за месяц</h2>
        {!expenceCategory ? (
          <p className="info-title-null categoryes-title-null">Нет расходов</p>
        ) : (
          ""
        )}
        <ul className="stats">{children}</ul>
      </div>
    </section>
  );
}
