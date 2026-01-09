'use client';
import { forwardRef, useRef, useState } from 'react';

const PracticeForwardRef = forwardRef<HTMLInputElement>((_, ref) => {
  const inputRef = useRef<HTMLButtonElement | null>(null);
  const [closestElement, setClosestElement] = useState<string | null>(null);

  const handleClick = () => {
    if (inputRef.current) {
      setClosestElement(inputRef.current.closest('div')?.innerHTML || null);
    }
  };

  return (
    <div>
      {/* REAL forwarded ref */}
      <input ref={ref} type="text" className="border" />

      <h4 className="mb-3 text-lg font-semibold">Practice closest</h4>
      <div className="mt-2">
        <div className="hidden">INNDER HTML</div>
        <button
          ref={inputRef}
          onClick={handleClick}
          className="bg-black text-white font-medium text-base rounded-md px-4 py-3"
        >
          Inspect closest
        </button>

        {closestElement && (
          <div className="mt-3 p-3 border border-gray-300 rounded-md bg-gray-50">
            <strong>Closest div inner HTML:</strong>
            <pre className="whitespace-pre-wrap break-all">{closestElement}</pre>
          </div>
        )}
      </div>
    </div>
  );
});

PracticeForwardRef.displayName = 'PracticeForwardRef';

export default PracticeForwardRef;
