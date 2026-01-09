'use client';
import { useRef } from 'react';
import InputFocus from './InputFocus';
import OutsideClick from './OutsideClick';

const PracticeRefs = () => {
  const parentsRef = useRef<HTMLInputElement>(null);

  const handleParentButtonClick = () => {
    console.log(parentsRef.current?.value);
    if (parentsRef.current) {
      parentsRef.current.focus();
      // console.dir('Input focused from Child Component', parentsRef.current);
    }
  };
  return (
    <div>
      <h2 className="text-2xl font-bold leading-7 mb-5">Practice Refs Component</h2>
      <InputFocus ref={parentsRef} />
      <button onClick={handleParentButtonClick}>Parents button</button>

      <OutsideClick />
    </div>
  );
};

export default PracticeRefs;
