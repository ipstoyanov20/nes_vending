"use client"
import React, { useState, useEffect, useRef} from 'react';
import gsap from "gsap";
import SplitType from "split-type";


const SwitchContainer = ({ isChecked, children, onClick } : { isChecked:any, children: any, onClick:any }) => {
  return (
    <div
        className='mt-20 sm:scale-[500%] scale-[250%]'
      style={{
        position: 'relative',
        display: 'inline-block',
        width: 65,
        height: 34,
        backgroundColor: isChecked ? '#0bc148' : '#de0015',
        borderRadius: 34,
        // transform: 'scale(5)',
        transition: 'background-color 0.3s ease-in-out',
        cursor: 'pointer', // Make the entire container clickable
      }}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

const SwitchButton = ({ isChecked } : {isChecked:any}) => {
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

const Phone = ({ isChecked } : {isChecked:any}) => {
  const phoneRef = useRef(null);
  useEffect(()=>{
    phoneRef.current ? new SplitType(phoneRef.current) : null;
    let chars = document.querySelectorAll(".char");
    
    for (let i = 0; i < chars.length; i++) {
      chars[i].classList.add("translate-y-[300%]");
    }
    
    gsap.to(".char", {
      y: 0,
      stagger: 0.05,
      duration: 0.5,
      opacity: 1,
      delay: 0,
    });
  },[isChecked])
  return (

    <label
    ref={phoneRef}
    className='font-bold font-nuni whitespace-nowrap'
    style={{
      position: 'absolute',
      overflow: 'hidden',
      top: isChecked ? '130%' : '80%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      fontSize: 7,
      color:'white',
      opacity: isChecked ? '1' : '0',
      pointerEvents: 'none',
      transition: 'all 0.3s ease-in-out',
    }}
    >
        0886611719 
         </label>
    );
};

const SwitchLabel = ({ isChecked }: { isChecked:any}) => {
    return (
        <label
        className='font-bold font-nuni'
        style={{
            position: 'absolute',
            top: '50%',
            left: isChecked ? '25%' : '75%',
            transform: 'translate(-50%, -50%)',
            fontSize: 12,
            color:'white',
            opacity:isChecked ? '1' : '0.5',
            pointerEvents: 'none',
            transition: 'left 0.2s ease-in-out',
        }}
    >
      Да 
         </label>
  );
};

const HoverSwitch = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <SwitchContainer isChecked={isChecked} onClick={handleToggle}>
      <SwitchButton isChecked={isChecked} />
      <SwitchLabel isChecked={isChecked} />
      <Phone isChecked={isChecked} />
    </SwitchContainer>
  );
};

export default HoverSwitch;