import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

function App() {
  // 더 이상 직접 컴포넌트를 렌더링하지 않고, router를 render함. 라우터는 URL을 가리키는 컴포넌트이고, 그 컴포넌트를 리턴할 것임.
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/movie/:id">
          <Detail></Detail>
        </Route>
        <Route path="/">
          <Home></Home>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
