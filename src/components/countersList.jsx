import React, { useState } from "react";
import Counter from "./counter";

const CountersList = () => {
  const initialState = [
    { id: 0, value: 0, name: "Ненужная вещь" },
    { id: 1, value: 0, name: "Ложка" },
    { id: 2, value: 0, name: "Вилка" },
    { id: 3, value: 0, name: "Тарелка" },
    { id: 4, value: 0, name: "Набор минималиста" },
  ];

  const [counters, setCounters] = useState(initialState);
  const handleDelete = (id) => {
    const newCounters = counters.filter((c) => c.id !== id);
    setCounters(newCounters);
  };
  const handleReset = () => {
    setCounters(initialState);
  };

  const handleIncrement = (id) => {
    let incrementCounters = counters.map((element) => {
      if (element.id == id) {
        element.value = element.value + 1;
      }
      return element;
    });
    setCounters(incrementCounters);
  };
  const handleDecrement = (id) => {
    let decrementCounters = counters.map((element) => {
      if (element.id == id) {
        element.value = element.value - 1;
      }
      return element;
    });
    setCounters(decrementCounters);
  };
  return (
    <>
      {counters.map((count) => (
        <Counter
          key={count.id}
          onDelete={handleDelete}
          {...count}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
        />
      ))}
      <button className="btn btn-primary btn-sam m-2" onClick={handleReset}>
        Сброс
      </button>
    </>
  );
};
export default CountersList;
