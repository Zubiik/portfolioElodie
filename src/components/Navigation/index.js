import PropTypes from 'prop-types';
import SvgFlagFR from '../../img/SvgFlagFR';
import SvgFlagGB from '../../img/SvgFlagGB';

import './styles.scss';

const Navigation = () => {
  console.log('coucou');
  return (
    <header className="header">
      <div className="header-homeText">Elodie Frappat</div>
      <nav className="navigation">
        <a className="navigation-link">Skills</a>
        <a className="navigation-link">Portfolio</a>
        <a className="navigation-link">Tools</a>
        <a className="navigation-link">Tools</a>
      </nav>
      <div className="header-flags">
        <SvgFlagFR />
        <SvgFlagGB />
      </div>
    </header>
  );
};

Navigation.propTypes = {

};

export default Navigation;
