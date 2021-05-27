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
import StaffView from './pages/StaffView'
import requireAuth from './utils/requireAuth'
import { createBrowserHistory } from 'history'

const browserHistory = createBrowserHistory();

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Buddy Rewards</title>
      </Helmet>
      <Router history={browserHistory}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/merchant/login" component={Login} />
          <Route exact path="/merchant/login/pin" component={requireAuth(PinMerchantLogin)} />
          <Route exact path="/merchant/register" component={Register} />
          <Route exact path="/merchant/branch/staff-view" component={StaffView /*requireAuth(StaffView)*/} />
        </Switch>
      </Router>
    </div >
  );
}


export default App;