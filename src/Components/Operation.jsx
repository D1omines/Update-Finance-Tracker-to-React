import { useContext } from "react";
import { operationContext } from "./Layout";
import Button from "./Button";

export default function Operation({ children }) {
  const { operation, setSearchValue, searchValue, setFilterOperation } =
    useContext(operationContext);
  return (
    <section>
      <div className="flex items-center justify-between">
        <h2 className="text-[1.3rem] font-bold">Операции в этом месяце</h2>
        <input
          className="border-1 border-col-border p-1 rounded-[0.3rem]"
          type="search"
          placeholder="Поиск по категории"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
      <div className="flex mt-5 gap-3">
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
      {operation.length === 0 ? (
        <p className="info-title-null operation-title-null">Нет операций</p>
      ) : (
        ""
      )}
      <ul className="mt-[1rem]">{children}</ul>
    </section>
  );
}
