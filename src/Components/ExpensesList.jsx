export default function ExpensesList({ category, amount }) {
  return (
    <li className="stats__items">
      <p className="stats__items-category">{category}</p>
      <p className="stats__items-price">{amount}₽</p>
    </li>
  );
}
