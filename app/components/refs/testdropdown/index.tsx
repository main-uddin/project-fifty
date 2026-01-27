import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

export type Option = {
  id: string;
  label: string;
  value: string;
};

interface DropdownProps {
  options: Option[] | [];
  selectedValue?: Option | null;
  onChange: (value: Option) => void;
  placeholder?: string;
  isOpen: boolean;
  setOpen: (value: boolean) => void;
}

const TestDropdown: React.FC<DropdownProps> = ({
  onChange,
  selectedValue,
  placeholder,
  options,
  isOpen,
  setOpen,
}) => {
  const menuRef = useRef<HTMLUListElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const [positionStyles, setPositionStyles] = useState({});

  useLayoutEffect(() => {
    if (!buttonRef.current || !menuRef.current) return;

    const updatePosition = () => {
      const buttonRect = buttonRef.current!.getBoundingClientRect();

      const menuHeight = menuRef.current!.getBoundingClientRect();
      const spaceBelow = window.innerHeight - buttonRect.bottom;
      const shouldFlip = spaceBelow < menuHeight?.height;

      if (buttonRect.bottom < 0 || buttonRect.top > window.innerHeight) {
        setOpen(false);
        return;
      }

      let top;
      if (shouldFlip) {
        top = buttonRect.top + window.scrollY - menuHeight?.height;
      } else {
        top = buttonRect.bottom + window.scrollY;
      }

      setPositionStyles({
        position: 'absolute',
        left: buttonRect.left + window.scrollX,
        top: top,
        width: buttonRect.width,
        maxHeight: `${menuHeight?.height}px`,
      });
    };

    updatePosition();

    window.addEventListener('resize', updatePosition);
    window.addEventListener('scroll', updatePosition, { capture: true });

    return () => {
      window.removeEventListener('resize', updatePosition);
      window.removeEventListener('scroll', updatePosition, { capture: true });
    };
  }, [isOpen, setOpen]);

  useEffect(() => {
    if (!isOpen || !menuRef.current) return;

    const handleMouseDown = (event: MouseEvent) => {
      if (!menuRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleMouseDown);

    return () => {
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, [isOpen, setOpen]);

  return (
    <div>
      <button
        ref={buttonRef}
        className="px-3 py-2 border rounded"
        onClick={() => {
          setOpen(true);
        }}
      >
        {selectedValue ? selectedValue?.value : placeholder}
      </button>
      {isOpen &&
        createPortal(
          <ul
            ref={menuRef}
            style={positionStyles}
            className="bg-white border shadow-lg overflow-auto z-50 inline-flex flex-col absolute"
          >
            {options?.map((option) => (
              <li
                key={option?.id}
                onClick={() => {
                  onChange(option);
                }}
              >
                {option?.value}
              </li>
            ))}
          </ul>,
          document.body
        )}
    </div>
  );
};

export default TestDropdown;
