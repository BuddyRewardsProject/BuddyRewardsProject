import { Helmet } from 'react-helmet'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./pages/Home"
import Register from "./pages/Register"
import Login from './pages/Login';
import PinMerchantLogin from './pages/PinMerchantLogin';

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Buddy Rewards</title>
      </Helmet>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/merchant/login">
            <Login />
          </Route>
          <Route path="/merchant/PinMerchantLogin">
            <PinMerchantLogin />
          </Route>
          <Route path="/merchant/register">
            <Register />
          </Route>
        </Switch>
      </Router>
    </div >
  );
}


export default App;