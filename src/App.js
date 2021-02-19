import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navbar from "./Navbar";
import Home from "./Home";
import Create from "./Create";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route path="/create" component={Create}></Route>
            <Route exact path="/" component={Home}></Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
