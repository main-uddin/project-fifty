'use client';
import './Checkbox.css'; // Import the CSS file for styling
import CustomCheckbox from './CustomCheckbox';

const CheckInput = () => {
  return (
    <div className="checkbox_container">
      <label htmlFor="my_checkbox">My Checkbox</label>
      <input id="my_checkbox" type="checkbox" className="checkbox-input" />

      <div className="py-5">
        <CustomCheckbox
          label="Custom Checkbox Left"
          labelPosition="left"
          labelClass="text-blue-500"
        />
      </div>

      <div className="py-5">
        <h2 className="text-xl font-medium leading-5 mb-3">Pseudo Elements</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque modi labore in quasi,
          vero tempore sapiente mollitia repudiandae earum animi ullam dolore a sint similique alias
          reprehenderit harum, ab ratione!
        </p>
      </div>
    </div>
  );
};

export default CheckInput;
