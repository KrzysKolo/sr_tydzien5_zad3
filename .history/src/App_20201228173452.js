import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(15, 15, 15, 1);
  color: #fff;
`;

const App = () => {
  return (
    <div className="App">
      <Navbar />
    </div>
  )
}

export default App;
