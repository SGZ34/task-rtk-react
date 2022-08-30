import { useState } from "react";

export const useForm = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const onChange = ({ target }) => {
    setValue({ ...value, [target.name]: target.value });
  };
  const setForm = (newValue) => {
    setValue(newValue);
  };
  return { ...value, value, onChange, setForm };
};
