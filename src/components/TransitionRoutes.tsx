import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion'; // framer-motion/dist/framer-motion
import Assumptions from '../pages/Assumptions';
import Factorial from '../pages/Factorial';
import GithubSearch from '../pages/GithubSearch';
import NotFound from '../pages/NotFound';
import ProjectDetails from '../pages/ProjectDetails';


const TransitionRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={ location } key={ location.pathname }>
        <Route path="/" element={ <Assumptions /> } />
        <Route path="/factorial" element={ <Factorial /> } />
        <Route path="/githubsearch" element={ <GithubSearch /> } />
        <Route path="/project" element={ <ProjectDetails /> } />
        <Route path="*" element={ <NotFound /> } />
      </Routes>
    </AnimatePresence>
  );
}

export default TransitionRoutes;
