import './App.scss';
import Home from './Components/Home/Home'
import { Route, Switch } from 'react-router-dom';
import Pomodoro from './Components/Pages/Pomodoro';
import Short from './Components/Pages/Short';
import Long from './Components/Pages/Long';
function App() {
  return (
   <>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/po' component={Pomodoro}/> 
        <Route exact path='/sh' component={Short}/> 
        <Route exact path='/l' component={Long}/> 

      </Switch>
   </>
  );
}

export default App;
