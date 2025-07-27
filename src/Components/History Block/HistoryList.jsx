export default function HistoryList({
  selectName,
  id,
  date,
  amount,
  category,
}) {
  return (
    <li
      className="monthlyExpenses__item"
      data-id={id}
      onClick={() => showOperation(id)}
    >
      <p className="monthlyExpenses__item-description">
        <span className="monthlyExpenses__item-price">
          {selectName === "income" ? "+" : "-"}
          {amount}₽
        </span>{" "}
        {""}
        <span className="monthlyExpenses__item-category">{category}</span>
      </p>
      <p className="monthlyExpenses__item-date">{date}</p>
    </li>
  );
}
