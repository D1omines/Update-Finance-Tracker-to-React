import { useContext } from "react";
import { operationContext } from "./Layout";

export default function Inputzone() {
  const { addOperation, setFormInput, formInput } =
    useContext(operationContext);

  function clearDefautl(event) {
    event.preventDefault();
    addOperation();
  }

  return (
    <div>
      <form
        className="form flex flex-wrap gap-2 p-[1rem] rounded-2xl shadow-section"
        id="transaction-form"
        onSubmit={clearDefautl}
      >
        <select
          id="type"
          value={formInput.selectValue}
          onChange={(e) =>
            setFormInput((prev) => ({ ...prev, selectValue: e.target.value }))
          }
        >
          <option value="income">Доход</option>
          <option value="expense">Расход</option>
        </select>
        <input
          type="number"
          step="0.01"
          inputMode="decimal"
          id="amount"
          placeholder="Сумма"
          value={formInput.amountValue}
          onChange={(e) =>
            setFormInput((prev) => ({ ...prev, amountValue: e.target.value }))
          }
          required
        />
        <input
          type="text"
          id="category"
          value={formInput.categoryValue}
          placeholder="Категория"
          onChange={(e) =>
            setFormInput((prev) => ({ ...prev, categoryValue: e.target.value }))
          }
          required
        />
        <input
          type="text"
          value={formInput.kommentValue}
          id="komment"
          placeholder="Комментарий (необязательно)"
          onChange={(e) =>
            setFormInput((prev) => ({ ...prev, kommentValue: e.target.value }))
          }
        />

        <button
          className=" bg-btn-first p-3 text-white rounded-[0.5rem] cursor-pointer hover:bg-btn-hover duration-300 w-[100%] xl:w-[50%]"
          type="submit"
        >
          + Добавить операцию
        </button>
      </form>
    </div>
  );
}
