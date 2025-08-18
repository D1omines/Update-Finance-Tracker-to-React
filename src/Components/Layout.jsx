import { createContext, useEffect, useState } from "react";

export const operationContext = createContext();

export function Layout({ children }) {
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

  function closeModal(value) {
    const isClose = value.split(" ");
    isClose.some((el) => el === "modalOut") ? setIsShowOperation(false) : "";
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
    <operationContext.Provider
      value={{
        setSwitchValue,
        switchValue,
        addOperation,
        setSetectName,
        selectName,
        setAmount,
        amount,
        setCategory,
        category,
        setKomment,
        komment,
        setSearchValue,
        searchValue,
        setOperation,
        setFilterOperation,
        operation,
        showOperation,
        deleteOperation,
        setIsShowOperation,
        currentOperation,
        monthOperation,
        expenceCategory,
        formattedTotal,
        filterResult,
        isShowOperation,
        formattedIncome,
        closeModal,
      }}
    >
      {children}
    </operationContext.Provider>
  );
}
