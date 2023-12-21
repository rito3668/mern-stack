
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Signup from './pages/Signup';
function App() {
  return (
    <div className="App">

    <BrowserRouter>
    <Navbar/>
      <div className="pages">
        
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route path='/login'>
            <Login/>
          </Route>
          <Route path='/signup'>
            <Signup/>
          </Route>
        </Switch>
      </div>
    
    </BrowserRouter>
    </div>
  );
}

export default App;
