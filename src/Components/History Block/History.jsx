import HistoryBar from "./HistoryBar";
import HistiryMonths from "./HistoryMonths";
import { createContext, useContext, useEffect, useState } from "react";
import HistoryTotal from "./HistoryTotal";
import { operationContext } from "../Layout";
import Section from "../Section";

export const historyContext = createContext();

export default function History() {
  const { operations, monthOperation } = useContext(operationContext);

  const [currentMonthOperation, setCurrentMonthOperation] = useState([]);
  const [styleCurrMonth, setStyleCurrMonth] = useState("");
  const [nameMonth, setNameMonth] = useState("");

  const monthName = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентября",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ];

  const expenceCategoryMonth = currentMonthOperation
    .filter((op) => op.selectName === "expense")
    .sort((a, b) => b.amount - a.amount)
    .slice(0, 3);

  useEffect(() => {
    const now = String(new Date().getMonth() + 1).padStart(2, "0");

    setCurrentMonthOperation(monthOperation);
    setStyleCurrMonth(now);
    setNameMonth(monthName[Number(now - 1)]);
  }, [operations]);

  const operationFilter = currentMonthOperation
    .filter((el) => el.selectName === "expense")
    .sort((a, b) => b.amount - a.amount);

  const operationData = operationFilter.slice(0, 3).map((el) => ({
    category: el.category,
    amount: el.amount,
  }));

  const incomeOpeeration = currentMonthOperation
    .filter((el) => el.selectName === "income")
    .reduce((sum, op) => {
      return (sum += Number(op.amount));
    }, 0);

  const expenseOpeeration = currentMonthOperation
    .filter((el) => el.selectName === "expense")
    .reduce((sum, op) => {
      return (sum += Number(op.amount));
    }, 0);

  const remains = incomeOpeeration - expenseOpeeration;

  function changeMonth(month) {
    const currMonthOper = operations.filter((el) =>
      el.date.includes(`${month}`)
    );

    setCurrentMonthOperation(currMonthOper);
    setStyleCurrMonth(month);
    setNameMonth(monthName[Number(month - 1)]);
  }

  return (
    <historyContext.Provider
      value={{
        changeMonth,
        styleCurrMonth,
        nameMonth,
        incomeOpeeration,
        expenseOpeeration,
        remains,
        operationData,
        currentMonthOperation,
        expenceCategoryMonth,
      }}
    >
      <Section>
        <HistiryMonths />
      </Section>

      <Section>
        <HistoryBar />
      </Section>

      <Section>
        <HistoryTotal />
      </Section>
    </historyContext.Provider>
  );
}
