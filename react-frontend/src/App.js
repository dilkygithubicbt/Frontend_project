import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import LiatEmployeeComponent from './components/LiatEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateEmployeeComplonent from './components/CreateEmployeeComplonent';

function App() {
  return (

    <div>
      <Router>
          <HeaderComponent />
            <div className="container">
              <Switch>
                <Route path = "/" exact component = {LiatEmployeeComponent}></Route>
                <Route path = "/employees" component = {LiatEmployeeComponent}></Route>
                <Route path = "/add-employee" component = {CreateEmployeeComplonent}></Route>
                <LiatEmployeeComponent />
              </Switch>
            </div>
          <FooterComponent /> 
      </Router>
    </div>
  );
}

export default App;
