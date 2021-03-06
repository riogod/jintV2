import React from 'react';
import './App.css';

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

  return (
    <div className="App">
      <header className="App-header">
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
