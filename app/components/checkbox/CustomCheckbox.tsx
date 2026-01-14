'use client';
import './CustomCheckbox.css'; // Import the CSS file for styling

interface CustomCheckboxProps {
  label?: string;
  labelPosition?: 'left' | 'right';
  labelClass?: string;
}
const CustomCheckbox = ({ label, labelClass, labelPosition = 'right' }: CustomCheckboxProps) => {
  return (
    <div className="checkbox">
      {label && labelPosition === 'left' && (
        <label htmlFor="checkbox" className={`text-base font-normal leading-4 mr-2 ${labelClass}`}>
          {label}
        </label>
      )}
      <input id="checkbox" type="checkbox" />
      <span className="checkmark"></span>
      {label && labelPosition === 'right' && (
        <label htmlFor="checkbox" className={`text-base font-normal leading-4 ml-2 ${labelClass}`}>
          {label}
        </label>
      )}
    </div>
  );
};
export default CustomCheckbox;
