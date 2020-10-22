import React from 'react';

import { BrowserRouter as Router, Route, Link, Switch }
  from 'react-router-dom';

import Home from "./components/Home"
import Info from "./components/Info"
import Contacto from "./components/Contacto"
import PageNotFound from "./components/PageNotFound"
import Help from "./components/Help"
//import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  // destino (path) 
  // propiedad exact 

  return (  // JSX  1<div> 2<div></div> </div>
    // fragment < > </>   
    <React.Fragment>
      <Router>
        <nav class="navbar navbar-inverse">
          <div class="container-fluid">
            <div class="navbar-header">
              <a class="navbar-brand" href="/">WebSiteName</a>
            </div>
            <ul class="nav navbar-nav">
              <li class="active"><Link to="/">Inicio</Link></li>
              <li><Link to="/info">Info</Link></li>
              <li><Link to="/contacto">Contactanos</Link></li>
              <li><Link to="/help">Help</Link></li>
            </ul>
          </div>
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/info" component={Info} />
          <Route exact path="/contacto" component={Contacto} />
          <Route exact path="/help" component={Help} />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}


export default App;

