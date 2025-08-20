import { useContext, useState } from "react";
import { operationContext } from "./Layout";
import Button from "./Button";

export default function ModalOperation() {
  const {
    currentOperation,
    setIsShowOperation,
    operations,
    closeModal,
    dispatch,
  } = useContext(operationContext);

  const { id, category, amount, date, komment } = currentOperation;

  const [currentAmount, setCurrentAmount] = useState(amount);
  const [currentKomment, setCurrentKomment] = useState(komment);

  function saveOperationChange() {
    const updatedOperations = operations.map((el) =>
      el.id === id
        ? { ...el, amount: currentAmount, komment: currentKomment }
        : el
    );

    localStorage.setItem("operations", JSON.stringify(updatedOperations));
    dispatch({ type: "changeSave_operation", payload: updatedOperations });
    setIsShowOperation(false);
  }

  return (
    <div
      className="modalOut fixed z-50 top-0 right-0 w-[100%] h-[100vh] bg-modal flex justify-center items-center"
      onClick={(e) => closeModal(e.target.className)}
    >
      <div className="bg-white p-10 rounded-2xl flex flex-col text-center ">
        <h3 className="font-bold text-[1.2rem]">{`Операция № ${id}`}</h3>
        <div className="flex flex-col items-center justify-around gap-5 mt-5 xl:flex-row xl:justify-between">
          <div className="flex flex-col xl:justify-between xl:h-[91px]">
            <p className="flex mb-2 font-semibold">Категория</p>
            <input
              className="border-1 border-stone-400 p-1 rounded-[0.3rem]"
              type="text"
              value={category}
              readOnly
            />
          </div>

          <div className="flex flex-col items-start ">
            <p className="flex font-semibold">Доход / Расход</p>
            <p className="mb-2 italic">можно изменить</p>
            <input
              className="border-1 border-stone-400 p-1 rounded-[0.3rem]"
              type="text"
              placeholder="Можно изменить"
              value={currentAmount}
              onChange={(e) => setCurrentAmount(e.target.value)}
            />
          </div>

          <div className="flex flex-col xl:h-[91px] xl:justify-between">
            <p className="flex mb-2 font-semibold">Дата операции</p>
            <input
              className="border-1 border-stone-400 p-1 rounded-[0.3rem]"
              type="text"
              value={date}
              readOnly
            />
          </div>

          <div className="flex flex-col items-start">
            <p className="flex font-semibold ">Коментарий</p>
            <p className="mb-2 italic">можно изменить</p>
            <input
              className="border-1 border-stone-400 p-1 rounded-[0.3rem]"
              type="text"
              placeholder="Можно изменить"
              value={currentKomment}
              onChange={(e) => setCurrentKomment(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-3 mt-10 xl:flex-row">
          <Button style="w-[100%] xl:w-[30%]" func={saveOperationChange}>
            Сохранить
          </Button>
          <Button style="w-[100%] xl:w-[30%]" func={setIsShowOperation}>
            Закрыть
          </Button>
        </div>
      </div>
    </div>
  );
}
