import { useEffect, useState } from "react";
import Inputzone from "./Components/InputZone";
import Operation from "./Components/Operation";
import OperationList from "./Components/OperationList";
import Expenses from "./Components/Expenses";
import ExpensesList from "./Components/ExpensesList";
import ModalOperation from "./Components/ModalOperation";

import History from "./Components/History Block/History";

function App() {
  //Switch State
  const [switchValue, setSwitchValue] = useState("main");
  //App State
  const [selectName, setSetectName] = useState("income");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [komment, setKomment] = useState("");
  const [operation, setOperation] = useState([]);
  const [currentOperation, setCurrentOperation] = useState({});
  const [monthOperation, setMonthOperation] = useState([]);
  const [currentBalance, setCurrentBalance] = useState(0);

  //Operation State
  const [filterOperation, setFilterOperation] = useState("all");
  const [searchValue, setSearchValue] = useState("");

  //Expence State
  const [expenceCategory, setExpenceCategory] = useState([]);

  //Total State
  const [resultAmount, setResultAmount] = useState({
    resultIncome: 0,
    resultExpense: 0,
  });

  //History State

  //Modal State
  const [isShowOperation, setIsShowOperation] = useState(false);

  let id = JSON.parse(localStorage.getItem("id") || 1);
  const date = new Date();
  const now = String(date.getMonth() + 1).padStart(2, "0");

  useEffect(() => {
    setOperation(JSON.parse(localStorage.getItem("operations")) || []);
    calculateBalance();
  }, []);

  useEffect(() => {
    const currMonthOper = operation.filter((el) => el.date.includes(`${now}`));
    console.log(currMonthOper);

    const income = currMonthOper
      .filter((el) => el.selectName === "income")
      .reduce((sum, op) => {
        return (sum += Number(op.amount));
      }, 0);

    const expense = currMonthOper
      .filter((el) => el.selectName === "expense")
      .reduce((sum, op) => {
        return (sum += Number(op.amount));
      }, 0);

    const expenceCategory = currMonthOper
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

    calculateBalance();
    setExpenceCategory(expenceCategory);
    setResultAmount({ resultIncome: income, resultExpense: expense });
    setMonthOperation(currMonthOper);
  }, [operation]);

  //FUNCTION

  function addOperation() {
    const now = new Date().toLocaleDateString("ru-RU");

    const newOperation = {
      id,
      selectName,
      amount,
      category,
      komment,
      date: now,
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
      JSON.stringify([newOperation, ...operation])
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

  //Logic Operation

  const filterResult = monthOperation.filter((el) => {
    const searchInput = el.category
      .toLowerCase()
      .includes(searchValue.toLowerCase());
    const searchFilterType =
      filterOperation === "all" ? true : el.selectName === filterOperation;

    return searchInput && searchFilterType;
  });

  const formattedTotal = new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "RUB",
    minimumFractionDigits: 0,
  }).format(currentBalance);

  const formattedIncome = new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "RUB",
    minimumFractionDigits: 0,
  }).format(resultAmount.resultIncome);

  const formattedExpense = new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "RUB",
    minimumFractionDigits: 0,
  }).format(resultAmount.resultExpense);

  return (
    <div className="container">
      <h1>💰 Финансовый трекер</h1>
      <header>
        <button className="button" onClick={() => setSwitchValue("main")}>
          Новая операция
        </button>
        <button className="button" onClick={() => setSwitchValue("history")}>
          История операций
        </button>
      </header>

      {switchValue === "main" && (
        <>
          <Inputzone
            addOperation={addOperation}
            setSetectName={setSetectName}
            selectName={selectName}
            setAmount={setAmount}
            amount={amount}
            setCategory={setCategory}
            category={category}
            setKomment={setKomment}
            komment={komment}
          />

          <h3 className="currentBalans balance">
            Текущий баланс: {formattedTotal}
          </h3>
          <Operation
            operation={operation}
            setSearchValue={setSearchValue}
            setOperation={setOperation}
            searchValue={searchValue}
            setFilterOperation={setFilterOperation}
          >
            {filterResult.map((el) => (
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
          <Expenses expenceCategory={expenceCategory}>
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
          <section>
            <div className="result-container card">
              <h2>Итого</h2>
              <div className="result-container__block">
                <div className="result-container__text">
                  <div className="result__income">
                    <p>Доходы</p>
                    <div className="result__amount">{formattedIncome}</div>
                  </div>
                  <div className="result__expense">
                    <p>Расходы</p>
                    <div className="result__amount">{formattedExpense}</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
      {switchValue === "history" && (
        <>
          <History
            operation={operation}
            monthOperation={monthOperation}
          ></History>
        </>
      )}
    </div>
  );
}

export default App;
