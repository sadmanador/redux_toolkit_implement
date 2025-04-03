"use client";
import { Counter, CounterContextProps } from "@/types";
import React, { createContext, useState } from "react";

const initialCounters: Counter[] = [
  { id: 1, value: 0 },
  { id: 2, value: 0 },
];

const defaultCounter: CounterContextProps = {
  counters: initialCounters,
  totalCount: 0,
  handleIncrement: () => {},
  handleDecrement: () => {},
};

export const CounterContext =
  createContext<CounterContextProps>(defaultCounter);

export const CounterContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [counters, setCounters] = useState(initialCounters);
  const totalCount = counters.reduce((acc, counter) => acc + counter.value, 0);

  const handleIncrement = (counterId: number) => {
    setCounters((prevCounters) =>
      prevCounters.map((counter) =>
        counter.id === counterId
          ? { ...counter, value: counter.value + 1 }
          : counter
      )
    );
  };

  const handleDecrement = (counterId: number) => {
    setCounters((prevCounters) =>
      prevCounters.map((counter) =>
        counter.id === counterId
          ? { ...counter, value: counter.value - 1 }
          : counter
      )
    );
  };

  return (
    <CounterContext.Provider
      value={{ counters, totalCount, handleIncrement, handleDecrement }}
    >
      {children}
    </CounterContext.Provider>
  );
};
