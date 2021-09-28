
import './App.css';
import Header from './components/Header'
import Home from './components/Home'

import { BrowserRouter as Router, Switch , Route } from 'react-router-dom'
import Product1 from './components/Product1'
import Tv from './components/All'
import Footer from './components/Footer';
import Cart from './components/Cart';
import Mobiles from './components/Mobiles';
import Bed from './components/Bed';
import LoginT from './components/Login';
import PayMent from './components/payMent';


function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route exact path = '/'>
          <Header></Header>
          <Home></Home>
          <Footer></Footer>
        </Route>
        <Route path = '/tv'>
          <Tv></Tv>
          
        </Route>
        

        <Route path = '/product'>
        <Header></Header>
          <Product1/>
          <Footer></Footer>
        </Route>

        <Route path = '/cart'>
          <Header></Header>
          <Cart></Cart>
          <Footer></Footer>
        </Route>

        <Route path = '/mobile'>
          <Header></Header>
          <Mobiles/>
          <Footer></Footer>
        </Route>
        <Route path = '/bed'>
          <Header></Header>
          <Bed></Bed>
          <Footer></Footer>
        </Route>
        <Route path = '/log'>
          <Header></Header>
          <LoginT/>
          <Footer></Footer>
        </Route>
        <Route path = '/pay'>
          <Header></Header>
          <PayMent/>
          <Footer></Footer>
        </Route>
      </Switch>
    </Router>
     
    </div>
  );
}

export default App;
