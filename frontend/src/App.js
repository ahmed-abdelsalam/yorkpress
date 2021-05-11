import logo from './logo.svg';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './Dashboard';
import ClassRoom from './ClassRoom';
import Student from './Student';

function App() {
    return (
        <div className="container">
            <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route exact path="/classroom/:id" component={ClassRoom} />
                <Route exact path="/student" component={Student} />
            </Switch>
        </div>
    );
}

export default App;
