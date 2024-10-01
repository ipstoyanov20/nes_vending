import React, { useState } from 'react';

const SwitchContainer = ({ children, onClick }) => {
  return (
    <div
      style={{
        position: 'relative',
        display: 'inline-block',
        width: 60,
        height: 34,
        backgroundColor: '#ccc',
        borderRadius: 34,
        transform: 'scale(6)',
        transition: 'background-color 0.3s ease-in-out',
        cursor: 'pointer', // Make the entire container clickable
      }}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

const SwitchButton = ({ isChecked }) => {
  return (
    <div
      style={{
        position: 'absolute',
        top: 2,
        left: isChecked ? '27px' : '3px',
        width: 30,
        height: 30,
        transform: 'scale(1)',
        backgroundColor: '#fff',
        borderRadius: 34,
        transition: 'left 0.3s ease-in-out',
      }}
    />
  );
};

const SwitchLabel = () => {
  return (
    <label
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        fontSize: 14,
        color: '#fff',
        pointerEvents: 'none',
      }}
    >
      Yes
    </label>
  );
};

const HoverSwitch = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <SwitchContainer onClick={handleToggle}>
      <SwitchButton isChecked={isChecked} />
      <SwitchLabel />
    </SwitchContainer>
  );
};

export default HoverSwitch;