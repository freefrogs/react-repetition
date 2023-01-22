import { useState, useEffect } from 'react';
import { useLocation  } from 'react-router-dom';
import { Link } from 'react-router-dom'
import '../styles/navigation.scss'

const Navigation = () => {
  const [activeLink, setActiveLink] = useState<string>('')
  let location = useLocation()

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname])

  const checkIfActive = (name: string) => {
    return activeLink === name ? 'navigation__link--active': ''
  }

  return (
    <nav className="navigation">
      <Link className={(`navigation__link ${checkIfActive('/')}`).trim()} to="/">Założenia</Link>
      <Link className={(`navigation__link ${checkIfActive('/factorial')}`).trim()} to="/factorial">Silnia</Link>
      <Link className={(`navigation__link ${checkIfActive('/githubsearch')}`).trim()} to="/githubsearch">Wyszukiwarka Github</Link>
    </nav>
  );
}

export default Navigation;
