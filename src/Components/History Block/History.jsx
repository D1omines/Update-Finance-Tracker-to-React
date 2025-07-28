import HistoryBar from "./HistoryBar";
import HistoryList from "./HistoryList";
import HistiryMonths from "./HistoryMonths";
import { useEffect, useState } from "react";
import HistoryTotal from "./HistoryTotal";

export default function History({ operation, monthOperation }) {
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

  useEffect(() => {
    const now = String(new Date().getMonth() + 1).padStart(2, "0");

    setCurrentMonthOperation(monthOperation);
    setStyleCurrMonth(now);
    setNameMonth(monthName[Number(now - 1)]);
  }, [operation]);

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
    const currMonthOper = operation.filter((el) =>
      el.date.includes(`${month}`)
    );

    setCurrentMonthOperation(currMonthOper);
    setStyleCurrMonth(month);
    setNameMonth(monthName[Number(month - 1)]);
  }

  return (
    <>
      <HistiryMonths
        changeMonth={changeMonth}
        styleCurrMonth={styleCurrMonth}
      />
      <section>
        <HistoryBar
          nameMonth={nameMonth}
          incomeOpeeration={incomeOpeeration}
          expenseOpeeration={expenseOpeeration}
          remains={remains}
          operationData={operationData}
        />

        <HistoryTotal>
          {currentMonthOperation.map((el) => (
            <HistoryList
              key={el.id}
              selectName={el.selectName}
              id={el.id}
              date={el.date}
              amount={el.amount}
              category={el.category}
            ></HistoryList>
          ))}
        </HistoryTotal>
      </section>
    </>
  );
}
