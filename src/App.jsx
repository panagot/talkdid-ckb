import { useEffect } from "react";
import { Route, Switch, useLocation } from "wouter";
import Shell from "./components/Shell.jsx";
import Home from "./pages/Home.jsx";
import How from "./pages/How.jsx";
import Demo from "./pages/Demo.jsx";
import Architecture from "./pages/Architecture.jsx";
import Compare from "./pages/Compare.jsx";
import Reviewers from "./pages/Reviewers.jsx";
import Method from "./pages/Method.jsx";
import Submit from "./pages/Submit.jsx";
import Risks from "./pages/Risks.jsx";

function NotFound() {
  const [, setLoc] = useLocation();
  useEffect(() => {
    setLoc("/");
  }, [setLoc]);
  return null;
}

export default function App() {
  return (
    <Shell>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/how" component={How} />
        <Route path="/demo" component={Demo} />
        <Route path="/architecture" component={Architecture} />
        <Route path="/compare" component={Compare} />
        <Route path="/reviewers" component={Reviewers} />
        <Route path="/method" component={Method} />
        <Route path="/submit" component={Submit} />
        <Route path="/risks" component={Risks} />
        <Route component={NotFound} />
      </Switch>
    </Shell>
  );
}
