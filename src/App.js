// App.js
import React from 'react';
import Header from './components/Header';
import GuestList from './components/GuestList';
import GuestForm from './components/GuestForm';


function App() {
  const { guestList, addGuest, updateGuest, removeGuest } = useGuestList();

  return (
    <div>
      <Header />
      <GuestList
        guests={guestList}
        onUpdateGuest={updateGuest}
        onRemoveGuest={removeGuest}
      />
      <GuestForm onAddGuest={addGuest} />
    </div>
  );
}

export default App;