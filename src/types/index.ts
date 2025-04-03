export type StatsProps = {
  totalCount: number;
};

export type CountProps = {
  count: number;
};

export type CounterProps = {
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
};

export type ButtonProps = {
  handler: () => void;
  type: "normal" | "danger";
  children: React.ReactNode;
};

export type Counter = {
  id: number;
  value: number;
};

export type CounterContextProps = {
  counters: Counter[];
  totalCount: number;
  handleIncrement: (counterId: number) => void;
  handleDecrement: (counterId: number) => void;
};
