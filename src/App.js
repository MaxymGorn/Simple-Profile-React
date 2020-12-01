import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import React from "react";
import { hot } from 'react-hot-loader/root';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Info from './components/Info';
class App extends React.Component {
  render() {
    const { name } = this.props;
    return (
        <div className="App">
          <Router>
            <Switch>
                            <Route path="/">
                              <Info />
                            </Route>

            </Switch>
          </Router>
        </div>
    );
  }
}

export default hot(App);
