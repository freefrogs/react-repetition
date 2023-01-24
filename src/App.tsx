import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.scss';
import Navigation from './components/Navigation';
import Assumptions from './pages/Assumptions';
import Factorial from './pages/Factorial';
import GithubSearch from './pages/GithubSearch';
import NotFound from './pages/NotFound';
import MyFooter from './components/MyFooter';

const App = () => {
  return (
    <div className="App">
      <Router>
        <div className="section">
          <Navigation />
          <Routes>
            <Route path="/" element={ <Assumptions /> } />
            <Route path="/factorial" element={ <Factorial /> } />
            <Route path="/githubsearch" element={ <GithubSearch /> } />
            <Route path="*" element={ <NotFound /> } />
          </Routes>
        </div>
      </Router>
      <MyFooter />
    </div>
  );
}

export default App;
