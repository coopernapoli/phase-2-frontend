import './App.css';
import Home from './Home'
import About from './About'
import Contact from './Contact';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Navbar from './Link';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </div>
  </BrowserRouter>
  );
}

export default App;
