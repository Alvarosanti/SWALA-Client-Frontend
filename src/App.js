import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Products from './pages/Products';
import SignUp from './pages/SingUp';
import Ofertas from './pages/Ofertas';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component= {Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/ofertas' component={Ofertas} />
          <Route path='/sign-up' component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
