export default function HistoryList({
  selectName,
  id,
  date,
  amount,
  category,
}) {
  return (
    <li
      className="flex items-center justify-between border-b-1 border-stone-400"
      data-id={id}
    >
      <p className="flex justify-start w-[40%]">
        <span className="w-[30%]">
          {selectName === "income" ? "+" : "-"}
          {amount}₽
        </span>{" "}
        {""}
        <span>{category}</span>
      </p>
      <p>{date}</p>
    </li>
  );
}
