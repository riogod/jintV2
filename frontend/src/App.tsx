import React from 'react';
import './App.css';
import { useTranslation } from 'react-i18next';

function App() {

  const handleSubmit = () => {
    fetch('/app', {
      method: 'GET'
    })
      .then((res) => res.json())
      // Update the state with the received response
      .then((res) => {
        console.log(res)
      })
  }

  const { t } = useTranslation();

  return (
    <div className="App">
      <header className="App-header">
        {t('title')}
        <button
          onClick={handleSubmit}

        >
          Learn React
        </button>
      </header>
    </div>
  );
}

export default App;
