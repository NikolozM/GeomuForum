import React, { useState } from 'react';
import '../../App.css';

function Topbar({ handleTabClick, activeTab }) {
  return (
    <div className='topbar'>
      <div className='topbar-categories'>
        <ul
          className={`topbar-section ${activeTab === 'General Information' ? 'active' : ''}`}
          onClick={() => handleTabClick('General Information')}
        >
          <h2>General Information</h2>
        </ul>
        <ul
          className={`topbar-section ${activeTab === 'Server Currencies' ? 'active' : ''}`}
          onClick={() => handleTabClick('Server Currencies')}
        >
          <h2>Server Currencies</h2>
        </ul>
        <ul
          className={`topbar-section ${activeTab === 'Event System' ? 'active' : ''}`}
          onClick={() => handleTabClick('Event System')}
        >
          <h2>Event System</h2>
        </ul>
        <ul
          className={`topbar-section ${activeTab === 'Box System' ? 'active' : ''}`}
          onClick={() => handleTabClick('Box System')}
        >
          <h2>Box System</h2>
        </ul>
        <ul
          className={`topbar-section ${activeTab === 'Reset Information' ? 'active' : ''}`}
          onClick={() => handleTabClick('Reset Information')}
        >
          <h2>Reset Information</h2>
        </ul>
        <ul
          className={`topbar-section ${activeTab === 'Game Commands' ? 'active' : ''}`}
          onClick={() => handleTabClick('Game Commands')}
        >
          <h2>Game Commands</h2>
        </ul>
        <ul
          className={`topbar-section ${activeTab === 'Vip System' ? 'active' : ''}`}
          onClick={() => handleTabClick('Vip System')}
        >
          <h2>Vip System</h2>
        </ul>
      </div>
    </div>
  );
}

export default Topbar;
