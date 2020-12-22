import React from 'react';
import ReactDOM from 'react-dom';
import PaslauguListContainer from './components/Paslaugos/PaslauguListContainer';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import NavigationComponent from './components/Navigation/NavigationComponent';
import TeikejuListContainer from './components/Teikejai/TeikejuListContainer';
import VienosPaslaugosContainer from './components/Paslaugos/Paslauga/VienosPaslaugosContainer';

var NoMatch = (props) => {
  var goApp = () => props.history.push("/");
  return (
    <div>
      Route did not match<br></br>
      <button onClick={goApp}>Go Home</button>
    </div>
  );
};



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <NavigationComponent />
          <Switch>
            <Route exact path='/' component={PaslauguListContainer} />
            <Route exact path='/paslaugos' component={PaslauguListContainer} />
            <Route exact path='/teikejai' component={TeikejuListContainer} />
            <Route exact path='/paslaugos/:id' component={VienosPaslaugosContainer} />
            <Route path="*" component={NoMatch} />
          </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
