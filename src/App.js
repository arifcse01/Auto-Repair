
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dashboard';
import AddReview from './components/AddReview/AddReview';
import ManageReview from './components/ManageReview/ManageReview';
import Login from './components/Login/Login';


function App() {
  return (
    <div >
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/dashboard/:id">
            <Dashboard></Dashboard>
          </Route>
          <Route path="/reviews">
            <AddReview></AddReview>
          </Route>
          <Route to="/manageReview">
            <ManageReview></ManageReview>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
