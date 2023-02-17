import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Topbar from './Topbar';
import Footer from './Footer';
import GeneralInformation from './components/GeneralInformation';
import ServerCurrencies from './components/ServerCurrencies'
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
        {activeTab === 'Server Currencies' && <div><ServerCurrencies/></div>}
        {activeTab === 'Event System' && <div>Event System content goes here</div>}
        {activeTab === 'Box System' && <div>Box System content goes here</div>}
        {activeTab === 'Reset Information' && <div>Reset Information content goes here</div>}
        {activeTab === 'Game Commands' && <div>Game Commands content goes here</div>}
        {activeTab === 'Vip System' && <div>Bosses content goes here</div>}
      </div>
      <Footer />
    </div>
  );
}

export default App;
