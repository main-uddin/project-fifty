'use client';
import { useRef, useState } from 'react';
import OutsideClick from './OutsideClick';
import PracticeForwardRef from './PracticeForwardRef';
import Modal from './modal';
import TestModal from './testModal';
import Dropdown from './dropdown';
import TestDropdown from './testdropdown';

const PracticeRefs = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenTestModal, setIsOpenTestModal] = useState(false);
  const parentsRef = useRef<HTMLInputElement>(null);

  const [dropdownVale, setDropdownValue] = useState<{
    id: string;
    label: string;
    value: string;
  } | null>(null);
  const [isOpenDropdown, setIsOpenDropdown] = useState<boolean>(false);

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

      <div className="border-b py-5">
        <h3>Test dropdown</h3>
        <div className="flex justify-end">
          <TestDropdown
            options={[
              { id: '1', label: 'Orange', value: 'orange' },
              { id: '2', label: 'Apple', value: 'apple' },
              { id: '3', label: 'Mango', value: 'mango' },
            ]}
            onChange={(value) => setDropdownValue(value)}
            selectedValue={dropdownVale}
            placeholder="Select ..."
            isOpen={isOpenDropdown}
            setOpen={(value) => setIsOpenDropdown(value)}
          />
        </div>
      </div>

      <div className="border-b py-5">
        <Dropdown
          options={[
            { label: 'Orange', value: 'orange' },
            { label: 'Apple', value: 'apple' },
            { label: 'Mango', value: 'mango' },
          ]}
          onChange={(e) => console.log(e)}
        />
      </div>
    </div>
  );
};

export default PracticeRefs;
