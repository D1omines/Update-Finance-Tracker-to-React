export default function OperationList({
  id,
  selectName,
  amount,
  category,
  date,
  showOperation,
  deleteOperation,
}) {
  return (
    <li
      className={`${selectName} transaction-item`}
      data-id={id}
      onClick={() => showOperation(id)}
    >
      <p className="transactions__text">
        {selectName === "income" ? "+" : "-"}
        <span className="transactions__text-price">{amount}</span>₽ {""}
        <span className="transactions__text-category">{category}</span>
      </p>
      <p className="transactions__text-date">{date}</p>
      <button
        className="delete"
        onClick={(e) => {
          e.stopPropagation();
          deleteOperation(id);
        }}
      >
        🗑
      </button>
    </li>
  );
}
