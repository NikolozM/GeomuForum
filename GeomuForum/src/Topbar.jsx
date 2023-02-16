import React, { useState } from 'react';
import './App.css';
import GameHistory from './components/GeneralInformation';

function Topbar({ handleTabClick, setActiveTab, activeTab }) {
  return (
    <div>
      <div className='topbar-container'>
        <div className='topbar'>
          <div
            className={`topbar-section ${activeTab === 'General Information' ? 'active' : ''}`}
            onClick={() => handleTabClick('General Information')}
          >
            General Information
          </div>
          <div
            className={`topbar-section ${activeTab === 'Server Currencies' ? 'active' : ''}`}
            onClick={() => handleTabClick('Server Currencies')}
          >
            Server Currencies
          </div>
          <div
            className={`topbar-section ${activeTab === 'Event System' ? 'active' : ''}`}
            onClick={() => handleTabClick('Event System')}
          >
            Event System
          </div>
          <div
            className={`topbar-section ${activeTab === 'Box System' ? 'active' : ''}`}
            onClick={() => handleTabClick('Box System')}
          >
            Box System
          </div>
          <div
            className={`topbar-section ${activeTab === 'Reset Information' ? 'active' : ''}`}
            onClick={() => handleTabClick('Reset Information')}
          >
            Reset Information
          </div>
          <div
            className={`topbar-section ${activeTab === 'Game Commands' ? 'active' : ''}`}
            onClick={() => handleTabClick('Game Commands')}
          >
            Game Commands
          </div>
          <div
            className={`topbar-section ${activeTab === 'Vip System' ? 'active' : ''}`}
            onClick={() => handleTabClick('Vip System')}
          >
            Vip System
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
