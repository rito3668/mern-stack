
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar';
function App() {
  return (
    <div className="App">

    <BrowserRouter>
    <Navbar/>
      <div className="pages">
        
        <Switch>
          <Route path='/'>
            <Home/>
          </Route>

        </Switch>
      </div>
    
    </BrowserRouter>
    </div>
  );
}

export default App;
