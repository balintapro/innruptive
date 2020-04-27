import React from "react";
import { Route, Switch } from "react-router-dom";

import Intro from "./Components/Pages/Intro";
import Projects from "./Components/Pages/Projects";
import Blog from "./Components/Pages/Blog";
import Nope404 from "./Components/Pages/Nope404";

const Routes = () => {
	return (
		<Switch>
			<Route component={Intro} exact path="/" />
			<Route component={Projects} path="/projects" />
			<Route component={Blog} path="/blog" />
			<Route component={Nope404} />
		</Switch>
	);
};
export default Routes;
