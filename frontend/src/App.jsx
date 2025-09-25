// frontend/src/App.js
import React from 'react';
import ClientList from './components/ClientList';

function App() {
  return (
    <div className="bg-green-500 text-white p-4 m-4 rounded">
      <header className="App-header">
        <h1>Consumiendo API de Django</h1>
        <ClientList />
      </header>
    </div>
  );
}

export default App;