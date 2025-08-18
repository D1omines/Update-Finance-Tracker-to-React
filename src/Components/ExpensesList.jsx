export default function ExpensesList({ category, amount }) {
  return (
    <li className="flex justify-between bg-expenceList text-white p-1 rounded-[0.3rem]">
      <p>{category}</p>
      <p className="font-bold">{amount}₽</p>
    </li>
  );
}
