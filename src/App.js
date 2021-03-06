import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navbar from "./Navbar";
import Home from "./Home";
import Create from "./Create";
import BlogDetails from "./BlogDetails";
import NotFound from "./NotFound";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route path="/blogs/:id" component={BlogDetails}></Route>
            <Route path="/create" component={Create}></Route>
            <Route exact path="/" component={Home}></Route>
            <Route path="*" component={NotFound}></Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
