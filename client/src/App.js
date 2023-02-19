import './App.css';
import Menus from './view/Menus';
import { BrowserRouter, Route } from 'react-router-dom';
import Detallles from './view/detallles';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" render={ (routeProps) => <Menus {...routeProps} />}/>
        <Route path="/:id" render={ routeProps => <Detallles {...routeProps} />} />
      </BrowserRouter>
    </div>
  );
}

export default App;
