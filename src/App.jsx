import { useEffect, useState } from "react";
import Inputzone from "./Components/InputZone";
import Operation from "./Components/Operation";
import OperationList from "./Components/OperationList";
import Expenses from "./Components/Expenses";
import ExpensesList from "./Components/ExpensesList";
import ModalOperation from "./Components/ModalOperation";

function App() {
  const [selectName, setSetectName] = useState("income");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [komment, setKomment] = useState("");
  const [operation, setOperation] = useState([]);
  const [currentBalance, setCurrentBalance] = useState(0);
  const [currentOperation, setCurrentOperation] = useState({});

  const [expenceCategory, setExpenceCategory] = useState([]);
  const [isShowOperation, setIsShowOperation] = useState(false);

  const [searchValue, setSearchValue] = useState("");

  let id = JSON.parse(localStorage.getItem("id") || 1);
  const date = new Date();

  useEffect(() => {
    setOperation(JSON.parse(localStorage.getItem("operations")) || []);
    calculateBalance();
  }, []);

  useEffect(() => {
    calculateBalance();

    const expenceCategory = operation
      .filter((el) => el.selectName === "expense")
      .reduce((acc, curr) => {
        const existing = acc.find((item) => item.category === curr.category);

        if (existing) {
          existing.amount += Number(curr.amount);
        } else {
          acc.push({
            category: curr.category,
            amount: Number(curr.amount),
          });
        }

        return acc;
      }, [])
      .sort((a, b) => b.amount - a.amount);

    setExpenceCategory(expenceCategory);
  }, [operation]);

  function addOperation() {
    if (selectName === "expense") {
    }

    const newOperation = {
      id,
      selectName,
      amount,
      category,
      komment,
      date: `${String(date.getDate()).padStart(2, "0")}-${String(
        date.getMonth() + 1
      ).padStart(2, "0")}-${date.getFullYear()}`,
    };

    setOperation((prev) => [newOperation, ...prev]);

    setSetectName("income");
    setAmount("");
    setCategory("");
    setKomment("");

    id++;
    localStorage.setItem("id", JSON.stringify(id));
    localStorage.setItem(
      "operations",
      JSON.stringify([...operation, newOperation])
    );
  }

  function showOperation(id) {
    const clickCurrentOperation = operation.filter((el) => el.id === id);
    setCurrentOperation(clickCurrentOperation);
    setIsShowOperation(true);
  }

  function deleteOperation(id) {
    const operations = operation.filter((el) => el.id != id);
    setOperation(operations);

    localStorage.setItem("operations", JSON.stringify(operations));
  }

  function calculateBalance() {
    setCurrentBalance(
      operation.reduce((sum, el) => {
        return el.selectName === "income"
          ? (sum += Number(el.amount))
          : (sum -= Number(el.amount));
      }, 0)
    );
  }

  const filterSearchResult = operation.filter((el) =>
    el.category.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className="container">
      <h1>💰 Финансовый трекер</h1>
      <Inputzone
        setSetectName={setSetectName}
        selectName={selectName}
        setAmount={setAmount}
        amount={amount}
        setCategory={setCategory}
        category={category}
        setKomment={setKomment}
        komment={komment}
        addOperation={addOperation}
      />

      <div className="balance">
        Текущий баланс: <span id="balance">{`${currentBalance} ₽`}</span>
      </div>

      <Operation
        operation={operation}
        setSearchValue={setSearchValue}
        searchValue={searchValue}
      >
        {filterSearchResult.map((el) => (
          <OperationList
            key={el.id}
            id={el.id}
            selectName={el.selectName}
            amount={el.amount}
            category={el.category}
            showOperation={showOperation}
            deleteOperation={deleteOperation}
            date={el.date}
          />
        ))}
      </Operation>
      <Expenses>
        {expenceCategory.map((el) => (
          <ExpensesList
            key={el.category}
            category={el.category}
            amount={el.amount}
          />
        ))}
      </Expenses>
      {isShowOperation && (
        <ModalOperation
          currentOperation={currentOperation}
          setIsShowOperation={setIsShowOperation}
          setOperation={setOperation}
          operation={operation}
        />
      )}
    </div>
  );
}

export default App;
