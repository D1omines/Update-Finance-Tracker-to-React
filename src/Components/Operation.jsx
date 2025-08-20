import { useContext } from "react";
import { operationContext } from "./Layout";
import Button from "./Button";

export default function Operation() {
  const {
    operations,
    setSearchValue,
    searchValue,
    setFilterOperation,
    filterResult,
    showOperation,
    deleteOperation,
  } = useContext(operationContext);
  return (
    <>
      <div className="flex flex-col items-center gap-3 xl:flex-row xl:justify-between">
        <h2 className="text-[1.3rem] font-bold mb-2">Операции в этом месяце</h2>
        <input
          className="border-1 border-col-border p-1 rounded-[0.3rem] w-[100%] xl:w-[40%]"
          type="search"
          placeholder="Поиск по категории"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
      <div className="flex flex-col my-5 gap-3 lg:flex-row">
        <Button style="w-[100%]" func={setFilterOperation} valueFunc={"income"}>
          Доходы
        </Button>
        <Button
          style="w-[100%]"
          func={setFilterOperation}
          valueFunc={"expense"}
        >
          Расходы
        </Button>
        <Button style="w-[100%]" func={setFilterOperation} valueFunc={"all"}>
          Очистить фильтр
        </Button>
      </div>
      {operations.length === 0 ? (
        <p className="info-title-null operation-title-null">Нет операций</p>
      ) : (
        ""
      )}
      <ul className="mt-[1rem] min-h-70 max-h-100 overflow-y-scroll">
        {filterResult.map((el) => (
          <li
            key={el.id}
            className={`${
              el.selectName === "income" ? "text-green-600" : "text-red-500"
            } flex items-center justify-between my-2 p-1 cursor-pointer border-b-1 border-stone-300 hover:bg-blue-100 duration-200`}
            data-id={el.id}
            onClick={() => showOperation(el.id)}
          >
            <p className="w-[14rem]">
              <span>
                {el.selectName === "income" ? "+" : "-"}
                {el.amount}₽
              </span>{" "}
              {""}
              <span>{el.category}</span>
            </p>
            <p className="w-[10rem]">{el.date}</p>
            <p
              onClick={(e) => {
                e.stopPropagation();
                deleteOperation(el.id);
              }}
            >
              🗑
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}
