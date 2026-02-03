'use client';

import { useEffect } from 'react';

const PracticeDOM = () => {
  useEffect(() => {
    const parent = document.getElementById('parent');
    const child = document.getElementById('child');
    const grandChild = document.getElementById('btn');

    const parentClick = () => {
      console.log('FROM PARENT');
    };
    const childClick = () => {
      console.log('FROM CHILD');
    };
    const buttonClick = (e: MouseEvent) => {
      console.log('FROM Button');
      e.stopPropagation();
    };

    parent?.addEventListener('click', parentClick);
    child?.addEventListener('click', childClick);
    grandChild?.addEventListener('click', buttonClick);

    return () => {
      parent?.removeEventListener('click', parentClick);
      child?.removeEventListener('click', childClick);
      grandChild?.removeEventListener('click', buttonClick);
    };
  }, []);

  return (
    <div>
      <div id="parent" className="border p-5 rounded">
        <div id="child" className="border p-5 rounded">
          <button id="btn" className="border rounded px-4 py-2">
            CLICK ME
          </button>
        </div>
      </div>
    </div>
  );
};

export default PracticeDOM;
