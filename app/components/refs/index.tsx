'use client';
import { useRef } from 'react';
import OutsideClick from './OutsideClick';
import PracticeForwardRef from './PracticeForwardRef';

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

      <div className="border-y py-5">
        <h3 className="mb-3 text-lg font-semibold">Forward refs and focus</h3>
        <button
          onClick={handleParentButtonClick}
          className="bg-black text-white font-medium text-base rounded-md px-4 py-3 mb-2"
        >
          Focus input from parent
        </button>
        <PracticeForwardRef ref={parentsRef} />
      </div>

      <div className="border-y py-5 mt-5">
        <h3 className="mb-3 text-lg font-semibold">Detect outside click - custom hook</h3>
        <OutsideClick />
      </div>
    </div>
  );
};

export default PracticeRefs;
