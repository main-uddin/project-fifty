'use client';

import useCounter from './components/hooks/useCounter';
import useToggle from './components/hooks/useToggle';

export default function Home() {
  const { counter, increment, decrement, reset } = useCounter(98);
  const { value, toggle } = useToggle();

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold text-foreground">PROJECT FIFTY</h1>

      <div className="py-5">
        <div className="flex justify-start items-center gap-2">
          <button onClick={decrement} className="py-2 px-4 border rounded">
            -
          </button>
          <p className="min-w-[30px] flex justify-center items-center">{counter}</p>
          <button onClick={increment} className="py-2 px-4 border rounded">
            +
          </button>
          <button onClick={reset} className="py-2 px-4 border rounded">
            Reset
          </button>
        </div>
      </div>

      <div className="py-5">
        <button onClick={toggle} className={`px-8 py-2 rounded-full border`}>
          {value ? 'OFF' : 'ON'}
        </button>
      </div>
    </div>
  );
}
