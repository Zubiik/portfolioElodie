import PropTypes from 'prop-types';
import avatar from '../../img/avatar.png';

import './style.scss';

const Header = () => (
  <main className="home">
    <div>
      <p className="home-title">Développeuse web front-end</p>
      <p className="home-description">
        Actuellement à la recherche d'un nouvel emploi, je suis intéressée par
        les postes de :
      </p>
      <p className="home-description">Développeuse front-end & full-stack</p>
    </div>
    <section>
      <img
        className="home-avatarImage"
        src={avatar}
        alt="illustration avatar"
      />
    </section>
  </main>
);

Header.propTypes = {

};

export default Header;
