import logo from './logo.svg';
import './App.css';
import {NavBar} from './componets/NavBar';
import {HomeBanner} from './componets/HomeBanner';
import {Skills} from './componets/Skills';
import {Project} from './componets/Project';
import { Footer } from './componets/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <HomeBanner />
      <Skills />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
