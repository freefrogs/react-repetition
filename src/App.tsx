import { HashRouter as Router } from 'react-router-dom';
import './styles/App.scss';
import MyFooter from './components/MyFooter';
import TransitionRoutes from './components/TransitionRoutes';
import Navigation from './components/Navigation';

const App = () => {
  return (
    <div className="App">
      <Router>
        <div className="section">
          <Navigation />
          <TransitionRoutes />
        </div>
      </Router>
      <MyFooter />
    </div>
  );
}

export default App;
