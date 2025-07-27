export default function HistiryMonths({ changeMonth, styleCurrMonth }) {
  return (
    <section>
      <div className="card">
        <h2>Расходы по месяцам</h2>
        <div className="month-container">
          <button
            className={`month ${
              styleCurrMonth === "01" ? "monthActive" : ""
            } button`}
            onClick={() => changeMonth("01")}
          >
            Январь
          </button>
          <button
            className={`month ${
              styleCurrMonth === "02" ? "monthActive" : ""
            } button`}
            onClick={() => changeMonth("02")}
          >
            Февраль
          </button>
          <button
            className={`month ${
              styleCurrMonth === "03" ? "monthActive" : ""
            } button`}
            onClick={() => changeMonth("03")}
          >
            Март
          </button>
          <button
            className={`month ${
              styleCurrMonth === "04" ? "monthActive" : ""
            } button`}
            onClick={() => changeMonth("04")}
          >
            Апрель
          </button>
          <button
            className={`month ${
              styleCurrMonth === "05" ? "monthActive" : ""
            } button`}
            onClick={() => changeMonth("05")}
          >
            Май
          </button>
          <button
            className={`month ${
              styleCurrMonth === "06" ? "monthActive" : ""
            } button`}
            onClick={() => changeMonth("06")}
          >
            Июнь
          </button>
          <button
            className={`month ${
              styleCurrMonth === "07" ? "monthActive" : ""
            } button`}
            onClick={() => changeMonth("07")}
          >
            Июль
          </button>
          <button
            className={`month ${
              styleCurrMonth === "08" ? "monthActive" : ""
            } button`}
            onClick={() => changeMonth("08")}
          >
            Август
          </button>
          <button
            className={`month ${
              styleCurrMonth === "09" ? "monthActive" : ""
            } button`}
            onClick={() => changeMonth("09")}
          >
            Сентябрь
          </button>
          <button
            className={`month ${
              styleCurrMonth === "10" ? "monthActive" : ""
            } button`}
            onClick={() => changeMonth("10")}
          >
            Октябрь
          </button>
          <button
            className={`month ${
              styleCurrMonth === "11" ? "monthActive" : ""
            } button`}
            onClick={() => changeMonth("11")}
          >
            Ноябрь
          </button>
          <button
            className={`month ${
              styleCurrMonth === "12" ? "monthActive" : ""
            } button`}
            onClick={() => changeMonth("12")}
          >
            Декабрь
          </button>
        </div>
      </div>
    </section>
  );
}
