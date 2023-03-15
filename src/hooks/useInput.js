import { useState } from "react";

export const useInput = (initialState) => {
  const [value, setValue] = useState(initialState);

  function onChange(e) {
    setValue(e.target.value);
  }

  return { value, onChange };
};
