import { Link, useLocation } from 'react-router-dom'
import './Breadcrumb.css'
import history from './history';
const Breadcrumb=()=> {
console.log(history)
  return (
    <nav>
      <Link to="/ui-ux" className={history.location.pathname === "/ui-ux" ? "breadcrumb-active" : "breadcrumb-not-active"}>
    UI/UX
     </Link>
     <span>&gt;</span>
      <Link to="/refer&earn" className={history.location.pathname === "/refer&earn" ? "breadcrumb-active" : "breadcrumb-not-active"}>
    Refer&Earn
      </Link>
    </nav>
  );
}

export default Breadcrumb;