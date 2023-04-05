import './App.css';
import {BrowserRouter,Switch,Link,router} from 'react-router-dom';
import Register from './Component/Register/register'
import Login from './Component/Login/login'

function App() {
  return (
    <BrowserRouter>
    <div className="">
    <Link to={'/login'}>Login</Link>
    <Link to={'/register'}>Register</Link>
    </div>
    <hr/>
    <Register/>
    </BrowserRouter>
  );
}

export default App;
