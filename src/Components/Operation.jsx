export default function Operation({
  operation,
  setSearchValue,
  searchValue,
  setFilterOperation,
  children,
}) {
  return (
    <>
      <div className="card">
        <div className="operation-header">
          <h2>Операции в этом месяце</h2>
          <input
            className="operation-search"
            type="search"
            placeholder="Поиск по категории"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
        <div className="operation-button-filter">
          <button
            className="income-btn"
            onClick={() => setFilterOperation("income")}
          >
            Доходы
          </button>
          <button
            className="expense-btn"
            onClick={() => setFilterOperation("expense")}
          >
            Расходы
          </button>
          <button
            className="clear-btn"
            onClick={() => setFilterOperation("all")}
          >
            Очистить фильтр
          </button>
        </div>
        {operation.length === 0 ? (
          <p className="info-title-null operation-title-null">Нет операций</p>
        ) : (
          ""
        )}
        <ul className="transactions" id="transaction-list">
          {children}
        </ul>
      </div>
    </>
  );
}
