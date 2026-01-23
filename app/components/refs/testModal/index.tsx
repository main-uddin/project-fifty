import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

interface TestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TestModal = ({ isOpen, onClose }: TestModalProps) => {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const previouslyFocusedElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!isOpen || !modalRef.current) return;

    const handleOutsideClick = (event: MouseEvent) => {
      if (!modalRef.current?.contains(event?.target as Node)) {
        onClose();
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      console.log(event.key);
      if (event.key === 'Escape') {
        onClose();
      }
    };

    const previousOverflow = document.body.style.overflow;
    previouslyFocusedElement.current = document.activeElement as HTMLElement | null;
    const previousBackground = document.body.style.background;

    document.body.style.overflow = 'hidden';
    document.body.style.background = 'green';
    modalRef.current.focus();

    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      previouslyFocusedElement.current?.focus();
      document.body.style.background = previousBackground;
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 bg-black/75 flex justify-center items-center">
      <div
        tabIndex={-1}
        ref={modalRef}
        id="tst"
        className="p-5 rounded-lg shadow-lg bg-background max-w-[500px]
      min-h-[400px]"
      >
        <header className="flex justify-between items-center mb-5">
          <div className="text-lg font-medium">This Title</div>
          <button
            id="btn"
            className="p-2 rounded-md text-sm font-semibold"
            onClick={() => onClose()}
          >
            X
          </button>
        </header>
        <p className="text-base font-medium text-left">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat totam minus cum. Neque
          tempora nemo totam aliquam, mollitia non fuga rem. Consequatur repellat necessitatibus
          facilis qui impedit, at optio dolore!
        </p>
      </div>
    </div>,
    document.body
  );
};

export default TestModal;
