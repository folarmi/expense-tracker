import "./App.css";
import Jobs from "./components/Jobs";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import JobsContextProvider from "./contexts/JobsContext";
import JobInfo from "./components/JobInfo";

function App() {
  return (
    <Router>
      <Switch>
        <JobsContextProvider>
          <div>
            <Route path="/" exact component={Jobs} />
            <Route path="/job/:id" exact component={JobInfo} />
          </div>
        </JobsContextProvider>
      </Switch>
    </Router>
  );
}

export default App;
