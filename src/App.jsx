import { useEffect } from "react";
import { Route, Switch, useLocation } from "wouter";
import Shell from "./components/Shell.jsx";
import Home from "./pages/Home.jsx";
import How from "./pages/How.jsx";
import Demo from "./pages/Demo.jsx";
import Ecosystem from "./pages/Ecosystem.jsx";
import Architecture from "./pages/Architecture.jsx";
import Compare from "./pages/Compare.jsx";
import Verify from "./pages/Verify.jsx";
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
        <Route path="/ecosystem" component={Ecosystem} />
        <Route path="/architecture" component={Architecture} />
        <Route path="/compare" component={Compare} />
        <Route path="/verify" component={Verify} />
        <Route path="/risks" component={Risks} />
        {/* Grant-only pages removed from public demo: /submit /reviewers /method */}
        <Route component={NotFound} />
      </Switch>
    </Shell>
  );
}
