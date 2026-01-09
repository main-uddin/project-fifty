'use client';
import { useRef } from 'react';
import useOutsideClickDetect from '../hooks/useOutsideClickDetect';

const OutsideClick = () => {
  const divRef = useRef<HTMLDivElement>(null);

  useOutsideClickDetect(divRef, () => {
    console.log('Clicked outside the div - from custom hook');
  });

  return (
    <div className="p-10">
      <div
        ref={divRef}
        className="w-32 h-32 bg-gray-200 rounded-lg shadow-md border border-gray-300 flex items-center justify-center"
      >
        ❤️
      </div>
    </div>
  );
};

export default OutsideClick;
