import React from 'react';
import styled from 'styled-components';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import Products from './components/pages/Products';

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
    <Router>
      <AppContainer>
        <Navbar />
        <InnerContainer>
          <SomeContent>
            <Home />
            <About />
            <Contact />
            <Products />
          </SomeContent>
        </InnerContainer>
      </AppContainer>
    </Router>
  )
}

export default App;
