import './App.scss';
import Nav from './components/Nav/Nav.js';
import Hero from './components/Hero/Hero.js';
import Home from './views/Home/Home.js';
import Search from './views/Search/Search.js';
import Random from './views/RandomBeer/Random.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

const App = () => {
  return (
    <Router>
    <div className="App">
      <div className="container">
      <Nav />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/Search" exact component={Search}/>
          <Route path="/random-beer" exact component={Random}/>
        </Switch>
    </div>
    </div>
    </Router>
    
  );
}

export default App;
