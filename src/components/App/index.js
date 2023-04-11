import Header from '../Header';
import Navigation from '../Navigation';
import Tools from '../Tools';
import Skills from '../Skills';
import Footer from '../Footer';
import reactLogo from './react-logo.svg';
import './styles.css';
import Portfolio from '../Portfolio';

function App() {
  return (
    <div className="app">
      <img src={reactLogo} alt="react logo" />
      <h1>Bienvenue sur mon nouveau site youpi</h1>
      <Header />
      <Navigation />
      <Tools />
      <Skills />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
