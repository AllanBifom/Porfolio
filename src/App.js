import logo from './logo.svg';
import './App.css';
import {NavBar} from './componets/NavBar';
import {HomeBanner} from './componets/HomeBanner';
import {Skills} from './componets/Skills'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <HomeBanner />
    </div>
  );
}

export default App;
