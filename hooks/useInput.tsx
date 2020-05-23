import { useState } from "react";

const useInput = (initialValue: any) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e: any) => {
    setValue(e.target.value);
  };

  return [value, handleChange];
};

export default useInput;
