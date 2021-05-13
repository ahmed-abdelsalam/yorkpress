import logo from './logo.svg';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Dashboard from './Dashboard';
import ClassRoom from './ClassRoomDetails';
import Student from './Student';

function App() {
    return (
        <>
            <Header />
            <main className="container">
                <Switch>
                    <Route exact path="/" component={Dashboard} />
                    <Route exact path="/classrooms" component={Dashboard} />
                    <Route exact path="/classrooms/:id" component={ClassRoom} />
                    {/* <Route exact path="/student" component={Student} /> */}
                </Switch>
            </main>
        </>
    );
}

export default App;
