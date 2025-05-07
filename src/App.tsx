import React, { useState } from 'react';
import { routes } from './routes';
import { GameProvider } from './contexts/GameContext';
import Navigation from './components/Navigation';
import './App.css';

function App() {
  const [currentRoute, setCurrentRoute] = useState('home');

  const CurrentComponent = routes[currentRoute]?.component || (() => <div>Page not found</div>);

  return (
    <GameProvider>
      <div className="min-h-screen bg-gradient-to-b from-indigo-900 to-purple-900 text-white font-sans">
        <div className="container mx-auto px-4 py-8">
          <Navigation setRoute={setCurrentRoute} currentRoute={currentRoute} />
          <main className="mt-8">
            <CurrentComponent setRoute={setCurrentRoute} />
          </main>
        </div>
      </div>
    </GameProvider>
  );
}

export default App;