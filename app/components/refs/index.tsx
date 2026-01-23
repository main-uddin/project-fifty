'use client';
import { useRef, useState } from 'react';
import OutsideClick from './OutsideClick';
import PracticeForwardRef from './PracticeForwardRef';
import Modal from './modal';
import TestModal from './testModal';

const PracticeRefs = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenTestModal, setIsOpenTestModal] = useState(false);
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
      <h2 className="text-2xl font-bold leading-7 mb-5 text-muted-background">
        Practice Refs Component
      </h2>

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

      <div className="border-b py-5">
        <h3 className="mb-3 text-lg font-semibold">Detect outside click - custom hook</h3>
        <OutsideClick />
      </div>

      <div className="border-b py-5">
        <button className="mb-3 text-lg font-semibold" onClick={() => setIsOpen(true)}>
          Open Modal
        </button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </div>

      <div className="border-b py-5">
        <button className="mb-3 text-lg font-semibold" onClick={() => setIsOpenTestModal(true)}>
          Open Test Modal
        </button>
        <TestModal isOpen={isOpenTestModal} onClose={() => setIsOpenTestModal(false)} />
      </div>
    </div>
  );
};

export default PracticeRefs;
