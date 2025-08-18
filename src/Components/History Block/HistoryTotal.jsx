export default function HistoryTotal({ children }) {
  return (
    <div className="">
      <div className="bg-container-mini p-3 rounded-[0.5rem] shadow-section-mini flex flex-col gap-5 ">
        <h2 className="text-[1.3rem] font-bold">История за месяц</h2>
        <div>
          <ul className="flex flex-col gap-3">{children}</ul>
        </div>
      </div>
    </div>
  );
}
