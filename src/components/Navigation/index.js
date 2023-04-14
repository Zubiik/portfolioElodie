import PropTypes from 'prop-types';

import './styles.scss';

const Navigation = () => {
  console.log('coucou');
  return (
    <header className="header">
      <span>Elodie Frappat</span>
      <nav className="navigation">
        <a className="navigation-link">Skills</a>
        <a className="navigation-link">Portfolio</a>
        <a className="navigation-link">Tools</a>
        <a className="navigation-link">Tools</a>
      </nav>
    </header>
  );
};

Navigation.propTypes = {

};

export default Navigation;
