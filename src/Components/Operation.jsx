import { useState } from "react";

export default function Operation({
  operation,
  setSearchValue,
  searchValue,
  children,
}) {
  return (
    <>
      <div className="card">
        <div className="operation-header">
          <h2>Операции в этом месяце</h2>
          <input
            className="operation-search"
            type="search"
            placeholder="Поиск по категории"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
        {operation.length === 0 ? (
          <p className="info-title-null operation-title-null">Нет операций</p>
        ) : (
          ""
        )}
        <ul className="transactions" id="transaction-list">
          {children}
        </ul>
      </div>
    </>
  );
}
