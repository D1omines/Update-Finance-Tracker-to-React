import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Section from "./Components/Section";
import Inputzone from "./Components/InputZone";
import Operation from "./Components/Operation";

import Expenses from "./Components/Expenses";
import ModalOperation from "./Components/ModalOperation";

import History from "./Components/History Block/History";
import { useContext } from "react";
import { operationContext } from "./Components/Layout";
import Button from "./Components/Button";

function App() {
  const {
    setSwitchValue,
    switchValue,
    formattedTotal,
    isShowOperation,
    formattedIncome,
    formattedExpense,
  } = useContext(operationContext);

  return (
    <>
      <Header />
      <main className="max-w-[90%] m-auto flex flex-col gap-5 mt-10 md:w-[60%] xl:w-[50%] 2xl:w-[40%]">
        <div className="flex flex-col gap-3 lg:flex-row lg:justify-between">
          <Button
            style="h-10 lg:w-[50%]"
            func={setSwitchValue}
            valueFunc={"main"}
          >
            Новая операция
          </Button>
          <Button
            style="h-10 lg:w-[50%]"
            func={setSwitchValue}
            valueFunc={"history"}
          >
            История операций
          </Button>
        </div>

        {switchValue === "main" && (
          <>
            <Inputzone />
            <h3 className="m-auto text-center text-[1.2rem] font-normal border-2 border-col-border p-2 w-[100%] rounded-[0.5rem]">
              Текущий баланс: {formattedTotal}
            </h3>
            <Section>
              <Operation />
            </Section>
            <Section>
              <Expenses />
            </Section>
            {isShowOperation && <ModalOperation />}
            <Section>
              <div className="flex flex-col">
                <h2 className="text-[1.3rem] font-bold border-b-2">Итого</h2>
                <div className="mt-1">
                  <div className="flex flex-col gap-1">
                    <div className="flex justify-between items-center">
                      <p>Доходы</p>
                      <div className="font-bold">{formattedIncome}</div>
                    </div>
                    <div className="flex justify-between items-center">
                      <p>Расходы</p>
                      <div className="font-bold">{formattedExpense}</div>
                    </div>
                  </div>
                </div>
              </div>
            </Section>
          </>
        )}
        {switchValue === "history" && (
          <>
            <History />
          </>
        )}
      </main>
      <Footer />
    </>
  );
}

export default App;
