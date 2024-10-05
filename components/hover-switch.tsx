"use client";

import React, { useState, useEffect } from 'react';

const SwitchContainer = ({ isChecked, children, onClick }: { isChecked: any, children: any, onClick: any }) => {
  return (
    <a href={isChecked ? "tel:+359886611719" : undefined} className='w-fit'>
      <div
        className="translate-y-[300%] lg:max-xl:scale-[500%] xl:scale-[500%] scale-[290%]"
        style={{
          position: "relative",
          display: "inline-block",
          width: 65,
          height: 34,
          backgroundColor: isChecked ? "#0bc148" : "#de0015",
          borderRadius: 34,
          transition: "background-color 0.3s ease-in-out",
          cursor: "pointer",
        }}
        onClick={onClick}
      >
        {children}
      </div>
    </a>
  );
};

const SwitchButton = ({ isChecked }: { isChecked: any }) => {
  return (
    <div
      style={{
        position: 'absolute',
        top: 2,
        left: isChecked ? '50%' : '4%',
        width: 30,
        height: 30,
        transform: 'scale(1)',
        backgroundColor: 'white',
        borderRadius: 34,
        transition: 'left 0.2s ease-in-out',
      }}
    />
  );
};

const SwitchLabel = ({ isChecked }: { isChecked: any }) => {
  return (
    <label
      className='font-bold font-nuni'
      style={{
        position: 'absolute',
        top: '50%',
        left: isChecked ? '25%' : '75%',
        transform: 'translate(-50%, -50%)',
        fontSize: 12,
        color: 'white',
        opacity: isChecked ? '1' : '0.5',
        pointerEvents: 'none',
        transition: 'left 0.2s ease-in-out',
      }}
    >
      Да
    </label>
  );
};

const LoadingScreen = () => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
      }}
    >
      {/* Faphone animation or loader */}
      <div style={{ fontSize: '24px', color: 'white' }}>Loading...</div>
    </div>
  );
};

const HoverSwitch = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleToggle = () => {
    if (!isChecked) {
      setLoading(false);
      return;
    }
    setLoading(true);
    setIsChecked(!isChecked);
    
    // Simulate a loading time of 1000ms (1 second)
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <>
      {loading && <LoadingScreen />}
      <SwitchContainer isChecked={isChecked} onClick={handleToggle}>
        <SwitchButton isChecked={isChecked} />
        <SwitchLabel isChecked={isChecked} />
      </SwitchContainer>
    </>
  );
};

export default HoverSwitch;
