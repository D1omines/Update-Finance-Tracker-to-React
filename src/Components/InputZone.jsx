export default function Inputzone({
  addOperation,
  setSetectName,
  selectName,
  setAmount,
  amount,
  setCategory,
  category,
  setKomment,
  komment,
}) {
  function clearDefautl(event) {
    event.preventDefault();
    addOperation();
  }

  return (
    <form className="form" id="transaction-form" onSubmit={clearDefautl}>
      <select
        id="type"
        value={selectName}
        onChange={(e) => setSetectName(e.target.value)}
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
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <input
        type="text"
        id="category"
        value={category}
        placeholder="Категория"
        onChange={(e) =>
          setCategory(
            e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1)
          )
        }
        required
      />
      <input
        type="text"
        value={komment}
        id="komment"
        placeholder="Комментарий (необязательно)"
        onChange={(e) => setKomment(e.target.value)}
      />
      <button className="form__btn" type="submit">
        + Добавить операцию
      </button>
    </form>
  );
}
