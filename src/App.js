import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import Breadcrumb from './Breadcrumb';
import { Route, Router, BrowserRouter } from "react-router-dom"
import history from './history';
import HomePage from './HomePage';
import NextSection from './NextSection';
function App() {
  return (<Router history={history}>
  <NavBar>
  
  </NavBar>
  <Breadcrumb></Breadcrumb>
  <HomePage></HomePage>
  <NextSection></NextSection>
  </Router>
  );
}

export default App;
