import { createPortal } from 'react-dom';
import './ModalCss.css';
import { useEffect, useRef } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal = ({ isOpen, onClose }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const previouslyFocusedElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!isOpen || !modalRef.current) return;

    const handleOutsideClick = (event: MouseEvent) => {
      if (!modalRef.current?.contains(event.target as Node)) {
        onClose();
      }
    };

    previouslyFocusedElement.current = document.activeElement as HTMLElement | null;
    modalRef.current.focus();

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      previouslyFocusedElement.current?.focus();
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div className="modal-overlay">
      <div
        ref={modalRef}
        className="modal-content"
        role="dialog"
        aria-labelledby="modal-title"
        aria-describedby="modal-content"
        aria-modal={true}
        tabIndex={-1}
      >
        <header className="flex justify-between items-center">
          <h2 id="modal-title">This is title</h2>
          <button onClick={() => onClose()}>x</button>
        </header>
        <div id="modal-content" className="pt-4">
          Modal content will be here.
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
