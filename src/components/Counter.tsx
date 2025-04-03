
import { CounterProps } from "@/types";
import Button from "./Button";
import Count from "./Count";

const Counter:React.FC<CounterProps> = ({count, onIncrement, onDecrement}) => {


  return (
    <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
      <Count count={count} />
      <div className="flex space-x-3">
        <Button handler={onIncrement} type={"normal"}>Increment</Button>
        <Button handler={onDecrement} type={"danger"}>Decrement</Button>
      </div>
    </div>
  );
};

export default Counter;
