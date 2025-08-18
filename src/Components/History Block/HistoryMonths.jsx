import Button from "../Button";

export default function HistiryMonths({ changeMonth, styleCurrMonth }) {
  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-[1.3rem] font-bold">Расходы по месяцам</h2>
      <div className="grid grid-cols-6 gap-2 ">
        <Button
          style={`${styleCurrMonth === "01" ? "bg-month-active" : ""}`}
          func={changeMonth}
          valueFunc="01"
        >
          Январь
        </Button>
        <Button
          style={`${styleCurrMonth === "02" ? "bg-month-active" : ""}`}
          func={changeMonth}
          valueFunc="02"
        >
          Февраль
        </Button>
        <Button
          style={`${styleCurrMonth === "03" ? "bg-month-active" : ""}`}
          func={changeMonth}
          valueFunc="03"
        >
          Март
        </Button>
        <Button
          style={`${styleCurrMonth === "04" ? "bg-month-active" : ""}`}
          func={changeMonth}
          valueFunc="04"
        >
          Апрель
        </Button>
        <Button
          style={`${styleCurrMonth === "05" ? "bg-month-active" : ""}`}
          func={changeMonth}
          valueFunc="05"
        >
          Май
        </Button>
        <Button
          style={`${styleCurrMonth === "06" ? "bg-month-active" : ""}`}
          func={changeMonth}
          valueFunc="06"
        >
          Июнь
        </Button>
        <Button
          style={`${styleCurrMonth === "07" ? "bg-month-active" : ""}`}
          func={changeMonth}
          valueFunc="07"
        >
          Июль
        </Button>
        <Button
          style={`${styleCurrMonth === "08" ? "bg-month-active" : ""}`}
          func={changeMonth}
          valueFunc="08"
        >
          Август
        </Button>
        <Button
          style={`${styleCurrMonth === "09" ? "bg-month-active" : ""}`}
          func={changeMonth}
          valueFunc="09"
        >
          Сентябрь
        </Button>
        <Button
          style={`${styleCurrMonth === "10" ? "bg-month-active" : ""}`}
          func={changeMonth}
          valueFunc="10"
        >
          Октябрь
        </Button>
        <Button
          style={`${styleCurrMonth === "11" ? "bg-month-active" : ""}`}
          func={changeMonth}
          valueFunc="11"
        >
          Ноябрь
        </Button>
        <Button
          style={`${styleCurrMonth === "12" ? "bg-month-active" : ""}`}
          func={changeMonth}
          valueFunc="12"
        >
          Декабрь
        </Button>
      </div>
    </div>
  );
}
