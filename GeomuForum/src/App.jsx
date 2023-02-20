import { useState } from 'react';
import './App.css';
import Topbar from './components/Topbar/Topbar';
import Footer from './Footer';
import GeneralInformation from './components/Generalinformation/GeneralInformation';
import ServerCurrencies from './components/Servercurrencies/ServerCurrencies';
import EventSystem from './components/EventSystem/EventSystem';
import VipSystem from './components/VipSystem/VipSystem';
import BoxSystem from './components/BoxSystem/BoxSystem';
import GameCommands from './components/GameCommands/GameCommands';
import ResetInformation from './components/ResetInformation/ResetInformation';
function App() {
  const [activeTab, setActiveTab] = useState('General Information');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className='my-component'>
      <Topbar handleTabClick={handleTabClick} setActiveTab={setActiveTab} activeTab={activeTab} />
      <div className='main-content'>
        {/* Content for the active tab goes here */}
        {activeTab === 'General Information' && <GeneralInformation />}
        {activeTab === 'Server Currencies' && (
          <div>
            <ServerCurrencies />
          </div>
        )}
        {activeTab === 'Event System' && (
          <div>
            <EventSystem />
          </div>
        )}
        {activeTab === 'Box System' && (
          <div>
            <BoxSystem />
          </div>
        )}
        {activeTab === 'Reset Information' && (
          <div>
            <ResetInformation />
          </div>
        )}
        {activeTab === 'Game Commands' && (
          <div>
            <GameCommands />
          </div>
        )}
        {activeTab === 'Vip System' && (
          <div>
            <VipSystem />
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
