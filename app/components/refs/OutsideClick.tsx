'use client';
import { useRef, useState } from 'react';
import useOutsideClickDetect from '../hooks/useOutsideClickDetect';

const OutsideClick = () => {
  const divRef = useRef<HTMLDivElement>(null);
  const [outsideClick, setOutsideClick] = useState<string | null>(null);

  useOutsideClickDetect(divRef, () => {
    setOutsideClick('Clicked outside click!');
  });

  return (
    <div>
      <div
        ref={divRef}
        className="w-48 h-48 bg-gray-200 rounded-lg shadow-md border border-gray-300 flex items-center justify-center"
      >
        ❤️
        {outsideClick && <div>{outsideClick}</div>}
      </div>
    </div>
  );
};

export default OutsideClick;
