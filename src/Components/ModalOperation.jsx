import { useState } from "react";

export default function ModalOperation({
  currentOperation,
  setIsShowOperation,
  setOperation,
  operation,
}) {
  const [{ id, category, amount, date, komment }] = currentOperation;

  const [currentAmount, setCurrentAmount] = useState(amount);
  const [currentKomment, setCurrentKomment] = useState(komment);

  function saveOperationChange() {
    const updatedOperations = operation.map((el) =>
      el.id === id
        ? { ...el, amount: currentAmount, komment: currentKomment }
        : el
    );

    setOperation(updatedOperations);
    localStorage.setItem("operations", JSON.stringify(updatedOperations));
    setIsShowOperation(false);
  }

  return (
    <div className="modal__card">
      <div className="modal__card-container">
        <h3 className="modal__card-container-title">
          {`Операция № ${id}`}
          <span className="modal__card-container-titleId"></span>
        </h3>
        <div className="modal__card-container-data">
          <div className="modal__card-container-data-category">
            <p className="modal__card-container-data-category-text media-padding">
              Категория
            </p>
            <input
              className="modal__card-container-data-category-input"
              type="text"
              value={category}
              readOnly
            />
          </div>

          <div className="modal__card-container-data-operation">
            <p className="modal__card-container-data-operation-text media-padding">
              Доход / Расход
            </p>
            <input
              className="modal__card-container-data-operation-input"
              type="text"
              value={currentAmount}
              onChange={(e) => setCurrentAmount(e.target.value)}
            />
          </div>

          <div className="modal__card-container-data-date">
            <p className="modal__card-container-data-date-text media-padding">
              Дата операции
            </p>
            <input
              className="modal__card-container-data-date-input"
              type="text"
              value={date}
              readOnly
            />
          </div>

          <div className="modal__card-container-data-komment">
            <p className="modal__card-container-data-komment-text media-padding">
              Коментарий
            </p>
            <input
              className="modal__card-container-data-komment-input"
              type="text"
              value={currentKomment}
              onChange={(e) => setCurrentKomment(e.target.value)}
            />
          </div>
        </div>
        <div className="modal__card-container-btn">
          <button
            className="modal-save btn-modal"
            onClick={saveOperationChange}
          >
            Сохранить
          </button>
          <button
            className="modal-close btn-modal"
            onClick={() => setIsShowOperation(false)}
          >
            Закрыть
          </button>
        </div>
      </div>
    </div>
  );
}
