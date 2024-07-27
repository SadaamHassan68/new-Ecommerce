import React, { useState } from 'react';

const GuestForm = () => {
  const [guests, setGuests] = useState([]);
  const [newGuest, setNewGuest] = useState({ name: '', phone: '', gender: '' });

  const handleAddGuest = () => {
    // Check if the maximum number of guests (20) has been reached
    if (guests.length < 20) {
      // Create a new array with the new guest added
      setGuests([...guests, newGuest]);
      // Reset the newGuest object
      setNewGuest({ name: '', phone: '', gender: '' });
    } else {
      // Display an alert if the maximum number of guests has been reached
      alert('Maximum number of guests (20) reached.');
    }
  };

  const handleRemoveGuest = (index) => {
    // Create a new array with the guest at the specified index removed
    const updatedGuests = [...guests];
    updatedGuests.splice(index, 1);
    setGuests(updatedGuests);
  };

  return (
    <div className="max-w-3xl mx-auto my-8 space-y-4 bg-gray-100 p-6 rounded-md">
      <h1 className="text-3xl font-bold text-center text-blue-500">
        Somali Wedding Guest List Manager
      </h1>

      <div>
        <h2 className="text-2xl font-bold">Add New Guest</h2>
        <div className="flex space-x-2">
          <input
            type="text"
            placeholder="Enter name"
            value={newGuest.name}
            onChange={(e) => setNewGuest({ ...newGuest, name: e.target.value })}
            className="border px-4 py-2 rounded-md flex-1"
          />
          <input
            type="tel"
            placeholder="Enter phone"
            value={newGuest.phone}
            onChange={(e) => setNewGuest({ ...newGuest, phone: e.target.value })}
            className="border px-4 py-2 rounded-md flex-1"
          />
          <select
            value={newGuest.gender}
            onChange={(e) => setNewGuest({ ...newGuest, gender: e.target.value })}
            className="border px-4 py-2 rounded-md flex-1"
          >
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <button
            onClick={handleAddGuest}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Add Guest
          </button>
        </div>
      </div>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Phone</th>
            <th className="border px-4 py-2">Gender</th>
            <th className="border px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {guests.map((guest, index) => (
            <tr key={index} className="border">
              <td className="border px-4 py-2">{guest.name}</td>
              <td className="border px-4 py-2">{guest.phone}</td>
              <td className="border px-4 py-2">{guest.gender}</td>
              <td className="border px-4 py-2">
                <button
                  onClick={() => handleRemoveGuest(index)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4 text-right">
        <p className="text-lg font-bold">
          Total Guests: {guests.length} / 20
        </p>
      </div>
    </div>
  );
};

export default GuestForm;