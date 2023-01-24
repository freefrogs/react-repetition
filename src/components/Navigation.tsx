import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../styles/navigation.scss';
import { NAV_ELEMENTS } from '../utilities/variables';

const Navigation = () => {
  const [activeLink, setActiveLink] = useState<string>('');
  const { pathname } = useLocation();

  useEffect(() => {
    setActiveLink(pathname);
  }, [pathname]);

  const checkIfActive = (name: string) => {
    return activeLink === name ? 'navigation__link--active': '';
  }

  const renderNavList = () => {
    return NAV_ELEMENTS.map(({ name, path }) => {
      return (
        <Link
          className={(`navigation__link ${ checkIfActive(path) }`).trim()}
          to={ path }
          key={ path }
        >{ name }</Link>
      )
    });
  }

  return (
    <nav className="navigation">{ renderNavList() }</nav>
  );
}

export default Navigation;
