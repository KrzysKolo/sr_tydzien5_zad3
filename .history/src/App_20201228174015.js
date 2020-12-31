import React from 'react';
import 'styled-components';
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
const SomeContent = styled.h2`
  color: #fff;
`;
const App = () => {
  return (
    <div className="App">
      <AppContainer>
        <Navbar />
        <InnerContainer>
          <SomeContent>Coś tam</SomeContent>
        </InnerContainer>
      </AppContainer>
    </div>
  )
}

export default App;
