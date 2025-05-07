import Home from './pages/Home';
import ModeSelect from './pages/ModeSelect';
import GameOptions from './pages/GameOptions';
import MainGame from './pages/MainGame';
import Results from './pages/Results';
import About from './pages/About';

export const routes = {
  home: {
    path: '/',
    component: Home,
  },
  modeSelect: {
    path: '/mode-select',
    component: ModeSelect,
  },
  gameOptions: {
    path: '/game-options',
    component: GameOptions,
  },
  mainGame: {
    path: '/game',
    component: MainGame,
  },
  results: {
    path: '/results',
    component: Results,
  },
  about: {
    path: '/about',
    component: About,
  },
};