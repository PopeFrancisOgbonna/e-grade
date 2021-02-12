import {BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NotFound from './Pages/NotFound/NotFound';
import Home from './Pages/HomePage/Home';
import Login from './Pages/AuthPage/Login/Login';
import SignUp from './Pages/AuthPage/SignUp/SignUp';
import Dashboard from './Pages/Dasboard/Lecturer/index'
import ViewResult from './Pages/Dasboard/Lecturer/ViewResult';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/login'>
            <Login />
          </Route>
          <Route exact path='/register'>
            <SignUp />
          </Route>
          <Route exact path='/dashboard/user/lecturer'>
            <Dashboard />
          </Route>
          <Route path='/404'>
            <NotFound />
          </Route>
          <Redirect to ="/404" >
            <NotFound />
          </Redirect>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
