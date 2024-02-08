import React from 'react';
import './App.css';
import HomeComponent from './components/HomeComponent';
import QuizComponent from './components/QuizComponent';
import ResultComponent from './components/ResultComponent'

function App() {
  return (
    <div className="App">
      <div className="components">
      <HomeComponent />
      </div>
      <div className="components">
      <QuizComponent/>
      </div>
      <div className="components">
      <ResultComponent/>
      </div>
    </div>
  );
}

export default App;
