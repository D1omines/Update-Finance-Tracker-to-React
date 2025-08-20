import { createContext, useEffect, useMemo, useReducer, useState } from "react";

export const operationContext = createContext();

function operationsReducer(state, action) {
  switch (action.type) {
    case "init_operations": {
      return Array.isArray(action.payload) ? action.payload : [];
    }
    case "add_operation": {
      return [action.payload, ...state];
    }
    case "delete_operation": {
      return state.filter((op) => op.id !== action.payload);
    }
    case "changeSave_operation": {
      return (state = action.payload);
    }
    default:
      return state;
  }
}

const RUB = { style: "currency", currency: "RUB", minimumFractionDigits: 0 };
const fmt = (n) => new Intl.NumberFormat("ru-RU", RUB).format(n);

export function Layout({ children }) {
  const [operations, dispatch] = useReducer(operationsReducer, []);

  // UI‑состояния
  const [switchValue, setSwitchValue] = useState("main");
  const [currentOperation, setCurrentOperation] = useState(null);
  const [filterOperation, setFilterOperation] = useState("all");
  const [searchValue, setSearchValue] = useState("");
  const [isShowOperation, setIsShowOperation] = useState(false);

  // Форма
  const [formInput, setFormInput] = useState({
    selectValue: "income",
    amountValue: "",
    categoryValue: "",
    kommentValue: "",
  });

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("operations") || "[]");
    dispatch({ type: "init_operations", payload: saved });

    if (!localStorage.getItem("id")) localStorage.setItem("id", "1");
  }, []);

  useEffect(() => {
    localStorage.setItem("operations", JSON.stringify(operations));
  }, [operations]);

  const nowMonth = String(new Date().getMonth() + 1).padStart(2, "0");

  const monthOperation = useMemo(
    () => operations.filter((op) => op.date.includes(`${nowMonth}`)),
    [operations, nowMonth]
  );

  const { resultIncome, resultExpense, currentBalance } = useMemo(() => {
    const income = monthOperation
      .filter((op) => op.selectName === "income")
      .reduce((s, op) => s + Number(op.amount), 0);

    const expense = monthOperation
      .filter((op) => op.selectName === "expense")
      .reduce((s, op) => s + Number(op.amount), 0);

    const balance = operations.reduce((sum, op) => {
      const val = Number(op.amount) || 0;
      return op.selectName === "income" ? sum + val : sum - val;
    }, 0);

    return {
      resultIncome: income,
      resultExpense: expense,
      currentBalance: balance,
    };
  }, [monthOperation, operations]);

  const expenceCategory = useMemo(() => {
    return monthOperation
      .filter((op) => op.selectName === "expense")
      .reduce((acc, curr) => {
        const hit = acc.find((i) => i.category === curr.category);
        if (hit) hit.amount += Number(curr.amount);
        else acc.push({ category: curr.category, amount: Number(curr.amount) });
        return acc;
      }, [])
      .sort((a, b) => b.amount - a.amount);
  }, [monthOperation]);

  const filterResult = useMemo(() => {
    return monthOperation.filter((op) => {
      const matchesText = op.category
        .toLowerCase()
        .includes(searchValue.toLowerCase());
      const matchesType =
        filterOperation === "all" ? true : op.selectName === filterOperation;
      return matchesText && matchesType;
    });
  }, [monthOperation, searchValue, filterOperation]);

  function addOperation() {
    const id = Number(localStorage.getItem("id") || "1");
    const now = new Date().toLocaleDateString("ru-RU");

    const newOperation = {
      id,
      selectName: formInput.selectValue,
      amount: formInput.amountValue,
      category: formInput.categoryValue,
      komment: formInput.kommentValue,
      date: now,
    };

    dispatch({ type: "add_operation", payload: newOperation });

    localStorage.setItem("id", String(id + 1));
    setFormInput({
      selectValue: "income",
      amountValue: "",
      categoryValue: "",
      kommentValue: "",
    });
  }

  function deleteOperation(id) {
    dispatch({ type: "delete_operation", payload: id });
  }

  function showOperation(id) {
    const op = operations.find((o) => o.id === id) || null;

    setCurrentOperation(op);
    setIsShowOperation(true);
  }

  function closeModal(classListStr) {
    const isClose = classListStr.split(" ").includes("modalOut");
    if (isClose) setIsShowOperation(false);
  }

  const formattedTotal = fmt(currentBalance);
  const formattedIncome = fmt(resultIncome);
  const formattedExpense = fmt(resultExpense);

  return (
    <operationContext.Provider
      value={{
        // данные
        operations,
        monthOperation,
        expenceCategory,
        filterResult,
        currentOperation,

        // форматированные суммы
        formattedTotal,
        formattedIncome,
        formattedExpense,

        // ui
        switchValue,
        setSwitchValue,
        isShowOperation,
        setIsShowOperation,
        searchValue,
        setSearchValue,
        filterOperation,
        setFilterOperation,

        // форма
        formInput,
        setFormInput,

        // экшены
        addOperation,
        deleteOperation,
        showOperation,
        closeModal,
        dispatch,
      }}
    >
      {children}
    </operationContext.Provider>
  );
}
