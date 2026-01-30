import { useState } from 'react';

const useToggle = () => {
  const [value, setValue] = useState(false);

  const toggle = () => {
    setValue((prev) => !prev);
  };

  const on = () => setValue(true);
  const off = () => setValue(false);

  return { value, toggle, on, off };
};

export default useToggle;
