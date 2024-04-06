/* eslint-disable  */
import { Router } from './Router';
import AboutPage from './pages/About';
import HomePage from './pages/Home';
import SearchPage from './pages/Search';
import './App.css';

const appRoutes = [
  {
    path: '/',
    Component: HomePage,
  },
  {
    path: '/about',
    Component: AboutPage,
  },
  {
    path: '/search/:query',
    Component: SearchPage,
  },
];

function App() {
  return (
    <>
      <Router routes={appRoutes} />
    </>
  );
}

export default App;
