import './App.css';
import { BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom';
import  {DietContextProvider}  from './context/DietContext';

//pages
import Form from './components/Form';
import Body from './components/Body';
import MyCalculations from './components/MyCalculations';
import InfoBMI from './components/InfoBMI';


function App() {
  return (
    <DietContextProvider>
    <Router>
      <div className="App">
        <nav className="nav">
          <div className="navbarFirst"><li>
              <NavLink to="/" exact activeClassName="active" className="listClass">
                BMI
              </NavLink>
            </li></div>
          <ul className="header">
            <li >
              <NavLink to="/" exact activeClassName="active" className="listClass">
                BMI Calculate 
              </NavLink>
            </li>
            <li>
              <NavLink to="/infobmi" exact activeClassName="active" className="listClass">
                What's The BMI ? 
              </NavLink>
            </li>
            <li>
              <NavLink to="/mycalculations" exact activeClassName="active" className="listClass">
                My Calculations
              </NavLink>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/" exact component={Form}/>
          <Route path="/infobmi" exact component={InfoBMI}/> 
          <Route path="/body" exact component={Body}/> 
          <Route path="/mycalculations" exact component={MyCalculations}/> 
        </Switch>
      </div>
    </Router>
    </DietContextProvider>
  );
}

export default App;
