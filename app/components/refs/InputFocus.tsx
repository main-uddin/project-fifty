'use client';
import { forwardRef, useRef } from 'react';

const InputFocus = forwardRef<HTMLInputElement>((_, ref) => {
  const inputRef = useRef<HTMLButtonElement | null>(null);

  const handleClick = () => {
    if (inputRef.current) {
      console.log(inputRef.current.closest('div')?.innerHTML);
    }
  };

  return (
    <div>
      {/* REAL forwarded ref */}
      <input ref={ref} type="text" className="border" />

      <div className="mt-2">
        <div>Innder DIV</div>
        <button ref={inputRef} onClick={handleClick}>
          Inspect closest
        </button>
      </div>
    </div>
  );
});

InputFocus.displayName = 'InputFocus';

export default InputFocus;
