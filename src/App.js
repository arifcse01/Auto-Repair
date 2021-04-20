
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import AddReview from './components/Dashboard/AddReview/AddReview';
import Login from './components/Login/Login';
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import OrderList from './components/Dashboard/OrderList/OrderList';
import AddService from './components/Dashboard/AddService/AddService';
import ManageServices from './components/Dashboard/ManageServices/ManageServices';
import AllOrderList from './components/Dashboard/AllOrderLIst/AllOrderList';
import NotFound from './components/NotFound/NotFound';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]} >
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute path="/dashboard/dashboard/:id">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute path="/reviews">
            <AddReview></AddReview>
          </PrivateRoute>
          <PrivateRoute path="/orderList">
            <OrderList></OrderList>
          </PrivateRoute>
          <PrivateRoute path="/addService">
            <AddService></AddService>
          </PrivateRoute>
          <PrivateRoute path='/manageServices'>
            <ManageServices></ManageServices>
          </PrivateRoute>
          <Route path="/totalOrder">
            <AllOrderList></AllOrderList>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
         <Route path="*">
         <NotFound></NotFound>
         </Route>
        </Switch>
      </Router>
      
    </UserContext.Provider>
  );
}

export default App;
