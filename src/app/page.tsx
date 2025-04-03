"use client";
import Counter from "@/components/Counter";
import Stats from "@/components/Stats";
import { CounterContext } from "@/context/CounterContext";

import { Counter as CounterType } from "@/types";
import { useContext } from "react";

const HomeContent = () => {
  const { counters, totalCount, handleIncrement, handleDecrement } =
    useContext(CounterContext);

  return (
    <div className="w-screen h-screen p-10 bg-gray-100 text-slate-700">
      <h1 className="max-w-md mx-auto text-center text-2xl font-bold">
        Simple Counter Application
      </h1>

      <div className="max-w-md mx-auto mt-10 space-y-5">
        {counters.map((counter: CounterType) => (
          <Counter
            key={counter.id}
            count={counter.value}
            onIncrement={() => handleIncrement(counter.id)}
            onDecrement={() => handleDecrement(counter.id)}
          />
        ))}
        <Stats totalCount={totalCount} />
      </div>
    </div>
  );
};

export default HomeContent;
