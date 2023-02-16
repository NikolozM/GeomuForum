import React, { useState } from 'react';
import './App.css';
import GameHistory from './components/GameHistory';
function Topbar() {
  const [activeTab, setActiveTab] = useState('game history');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="topbar-container">
      <div className="topbar">
        <div
          className={`topbar-section ${activeTab === 'game history' ? 'active' : ''}`}
          onClick={() => handleTabClick('game history')}
        >
          Game History
        </div>
        <div
          className={`topbar-section ${activeTab === 'about' ? 'active' : ''}`}
          onClick={() => handleTabClick('about')}
        >
          About
        </div>
        <div
          className={`topbar-section ${activeTab === 'classes' ? 'active' : ''}`}
          onClick={() => handleTabClick('classes')}
        >
          Classes
        </div>
        <div
          className={`topbar-section ${activeTab === 'instances' ? 'active' : ''}`}
          onClick={() => handleTabClick('instances')}
        >
          Instances
        </div>
        <div
          className={`topbar-section ${activeTab === 'bosses' ? 'active' : ''}`}
          onClick={() => handleTabClick('bosses')}
        >
          Bosses
        </div>
      </div>
      <div className="topbar-content">
        {/* Content for the active tab goes here */}
        {activeTab === 'game history' && <div><GameHistory/></div>}
        {activeTab === 'about' && <div>About content goes here</div>}
        {activeTab === 'classes' && <div>Classes content goes here</div>}
        {activeTab === 'instances' && <div>Instances content goes here</div>}
        {activeTab === 'bosses' && <div>Bosses content goes here</div>}
      </div>
    </div>
  );
}

export default Topbar;
