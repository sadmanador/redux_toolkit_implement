"use client";
import { useDispatch, useSelector } from "react-redux";
import Counter from "@/components/Counter";
import Stats from "@/components/Stats";
import { decrement, increment } from "@/features/counters/countersSlice";
import { Counters } from "@/types";
import { RootState } from "@/redux/store";

export default function Home() {
  const counters = useSelector((state: RootState) => state.counters);
  const dispatch = useDispatch();

  const totalCount = counters.reduce((acc, counter) => acc + counter.value, 0);

  const handleIncrement = (counterId: number) => dispatch(increment(counterId));

  const handleDecrement = (counterId: number) => dispatch(decrement(counterId));

  return (
    <div className="w-screen h-screen p-10 bg-gray-100 text-slate-700">
      <h1 className="max-w-md mx-auto text-center text-2xl font-bold">
        Simple Counter Application
      </h1>

      <div className="max-w-md mx-auto mt-10 space-y-5">
        {counters.map((counter: Counters) => (
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
}
