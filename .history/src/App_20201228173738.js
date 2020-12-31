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
const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <AppContainer>

      </AppContainer>
    </div>
  )
}

export default App;
