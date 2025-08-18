import { useContext } from "react";
import { operationContext } from "./Layout";

export default function OperationList({
  id,
  selectName,
  amount,
  category,
  date,
}) {
  const { showOperation, deleteOperation } = useContext(operationContext);
  return (
    <li
      className={`${
        selectName === "income" ? "text-green-600" : "text-red-500"
      } flex items-center justify-between my-2 p-1 cursor-pointer border-b-1 border-stone-300 hover:bg-blue-100 duration-200`}
      data-id={id}
      onClick={() => showOperation(id)}
    >
      <p className="w-[14rem]">
        <span>
          {selectName === "income" ? "+" : "-"}
          {amount}₽
        </span>{" "}
        {""}
        <span>{category}</span>
      </p>
      <p className="w-[10rem]">{date}</p>
      <p
        onClick={(e) => {
          e.stopPropagation();
          deleteOperation(id);
        }}
      >
        🗑
      </p>
    </li>
  );
}
