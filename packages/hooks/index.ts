import { useState } from "react";

export const useCounter = (initialValue = 0) => {
  const [value, setValue] = useState(initialValue);

  const increment = () => setValue(value + 2);
  const decrement = () => setValue(value - 1);

  return { value, increment, decrement };
};
