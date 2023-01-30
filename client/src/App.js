import './App.css';
import Main from './views/Main';
import Detail from './views/Detail';
import Update from './views/Update';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
            <Route exact path="/" render={ (routeProps) => <Main {...routeProps} />}/>
            <Route exact path="/:id" render={ (routeProps) => <Detail {...routeProps} />} />
            <Route exact path="/:id/update" render={ (routeProps) => <Update {...routeProps} />}/>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
