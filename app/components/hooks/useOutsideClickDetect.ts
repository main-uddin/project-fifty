import { RefObject, useEffect } from 'react';

const useOutsideClickDetect = <T extends HTMLElement>(
  ref: RefObject<T | null>,
  callback: () => void
) => {
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (!ref.current) return;

      if (!ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [ref, callback]);
};

export default useOutsideClickDetect;
