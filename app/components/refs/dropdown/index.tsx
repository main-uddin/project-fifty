import { useEffect, useRef, useState } from 'react';

interface Option {
  label: string;
  value: string;
}

interface DropdownProps {
  options: Option[];
  onChange: (value: string) => void;
  placeholder?: string;
}

const Dropdown = ({ options, onChange, placeholder = 'Select' }: DropdownProps) => {
  const [open, setOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const listRef = useRef<HTMLUListElement | null>(null);

  // Close on outside click
  useEffect(() => {
    if (!open) return;

    const handleClick = (e: MouseEvent) => {
      if (
        !buttonRef.current?.contains(e.target as Node) &&
        !listRef.current?.contains(e.target as Node)
      ) {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };

    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [open]);

  // Keyboard handling
  const handleKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setOpen(true);
        setHighlightedIndex((i) => (i + 1) % options.length);
        break;

      case 'ArrowUp':
        e.preventDefault();
        setHighlightedIndex((i) => (i - 1 + options.length) % options.length);
        break;

      case 'Enter':
      case ' ':
        e.preventDefault();
        if (open && highlightedIndex != null) {
          setSelectedIndex(highlightedIndex);
          onChange(options[highlightedIndex].value);
          setOpen(false);
          buttonRef.current?.focus();
        } else {
          setOpen(true);
        }
        break;

      case 'Escape':
        setOpen(false);
        buttonRef.current?.focus();
        break;
    }
  };

  return (
    <div className="relative inline-block">
      <button
        ref={buttonRef}
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        onKeyDown={handleKeyDown}
        className="dropdown-trigger border rounded-md px-4 py-2 mb-1"
      >
        {selectedIndex !== null ? options[selectedIndex].label : placeholder}
      </button>

      {open && (
        <ul
          ref={listRef}
          role="listbox"
          tabIndex={-1}
          className="dropdown-menu shadow-md rounded-md border"
        >
          {options.map((option, index) => (
            <li
              key={option.value}
              role="option"
              aria-selected={selectedIndex === index}
              className={`dropdown-item ${highlightedIndex === index ? 'bg-gray-200' : ''} border-b px-4 py-2 hover:bg-gray-200 rounded-t-md ${options.length - 1 === index && 'border-b-0 rounded-b-md'}`}
              // onMouseEnter={() => setHighlightedIndex(index)}
              onClick={() => {
                setSelectedIndex(index);
                setHighlightedIndex(index);
                onChange(option.value);
                setOpen(false);
                buttonRef.current?.focus();
              }}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
