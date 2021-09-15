import { Helmet } from 'react-helmet'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./pages/Home"
import CustomerHome from "./pages/customer/CustomerHome"
import CustomerRegister from "./pages/customer/CustomerRegister"
import CustomerCard from "./pages/customer/CustomerCard"
import Register from "./pages/Register"
import Login from './pages/Login';
import PinMerchantLogin from './pages/PinMerchantLogin';
import StaffView from './pages/StaffView'
import requireAuth from './utils/requireAuth'
import { createBrowserHistory } from 'history'
import PinReset from './pages/PinReset';
import StaffManagement from './pages/StaffManagement';
import BranchManagement from './pages/BranchManagement';
import Navigation from './layouts/Navigation';
const browserHistory = createBrowserHistory();

function App() {
  return (


    
    <div className="App">

<div>
      
      
      
    </div>
      
      <Helmet>
        <title>Buddy Rewards</title>
      </Helmet>
      <Router history={browserHistory}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/merchant/login" component={Login} />
          <Route exact path="/merchant/login/pin" component={requireAuth(PinMerchantLogin)} />
          <Route exact path="/merchant/login/pin/reset" component={requireAuth(PinReset)} />
          <Route exact path="/merchant/register" component={Register} />
          <Route exact path="/merchant/branch" component={requireAuth(StaffView)} />
          <Route exact path="/merchant/branch/staff-Management" component={StaffManagement} />
          <Route exact path="/merchant/branch/branch-Management" component={BranchManagement} />


          <Route exact path="/customer/home" component={CustomerHome} />
          <Route exact path="/customer/register" component={CustomerRegister} />
          <Route exact path="/customer/mycard" component={CustomerCard} />
        </Switch>
      </Router>
      
    </div >
  );
}


export default App;