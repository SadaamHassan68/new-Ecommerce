import React from 'react';
import GuestItem from './GuestItem';

const GuestList = ({ guests, toggleGuest, removeGuest }) => {
  return (
    <div className="w-full max-w-sm">
      {guests.map((guest, index) => (
        <GuestItem
          key={index}
          index={index}
          guest={guest}
          toggleGuest={toggleGuest}
          removeGuest={removeGuest}
        />
      ))}
    </div>
  );
};

export default GuestList;