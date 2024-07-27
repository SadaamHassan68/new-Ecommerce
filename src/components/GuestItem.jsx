import React from 'react';

const GuestItem = ({ index, guest, toggleGuest, removeGuest }) => {
  if (!guest) {
    return null; // Return null if the guest object is undefined
  }

  return (
    <div
      className={`flex items-center justify-between p-2 rounded-md mb-2 ${
        guest.attending
          ? 'bg-gray-300 hover:bg-gray-400'
          : 'bg-gray-100 hover:bg-gray-200'
      }`}
    >
      <input
        type="checkbox"
        className="mr-2"
        checked={guest.attending}
        onChange={() => toggleGuest(index)}
      />
      <div className="flex-1">
        <div className="font-medium">{guest.name}</div>
        <div className="text-gray-500">{guest.number}</div>
        <div className="text-gray-500">{guest.gender}</div>
      </div>
      <button
        className="text-red-500 hover:text-red-700"
        onClick={() => removeGuest(index)}
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
};

export default GuestItem;