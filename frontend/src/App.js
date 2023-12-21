
import {BrowserRouter,Switch,Route,Redirect} from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { useAuthContext } from './hooks/useAuthContext';
function App() {
  const {user} = useAuthContext()
  return (
    <div className="App">

    <BrowserRouter>
    <Navbar/>
      <div className="pages">
        
        <Switch>
          <Route exact path='/'>
            {user && <Home/>}
            {!user && <Redirect to='/login'/>}
          </Route>
          <Route path='/login'>
            {!user && <Login/>}
            {user && <Redirect to='/'/>}
          </Route>
          <Route path='/signup'>
          {!user && <Signup/>}
            {user && <Redirect to='/'/>}
          </Route>
        </Switch>
      </div>
    
    </BrowserRouter>
    </div>
  );
}

export default App;
