import React from "react";
import { Route, Switch } from "react-router-dom";

// this is only for generating sitemaps
// https://www.steadylearner.com/blog/read/How-to-build-a-sitemap-for-React
export default (
		<Switch>
			<Route exact path="/" />
			<Route path="/projects" />
			<Route path="/blog" />
		</Switch>
	)