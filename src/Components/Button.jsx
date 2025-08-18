export default function Button({ children, style = "", func, valueFunc = "" }) {
  return (
    <button
      className={`${style} bg-btn-first text-white p-1 rounded-[0.5rem] cursor-pointer hover:bg-btn-hover duration-300`}
      onClick={() => func(valueFunc)}
    >
      {children}
    </button>
  );
}
