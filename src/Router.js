import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { fetchApi } from "./Components/Helper/fetch"

import Intro from "./Components/Pages/Intro";
import Projects from "./Components/Pages/Projects";
import Blog from "./Components/Pages/Blog";
import Post from "./Components/Pages/Post";
import Nope404 from "./Components/Pages/Nope404";

const Routes = () => {
	const [posts, setPosts] = useState({ entries: [] });
	useEffect(() => {
		fetchApi("blog/", setPosts)
		return () => {
			setPosts()
		}
	}, [])
	return (
		<Switch>
			<Route component={Intro} exact path="/" />
			<Route component={Projects} path="/projects" />
			<Route component={Blog} path="/blog" />
			<Route
				path='/post/:title'
				render={(props) => (
					<Post {...props} entries={posts.entries} />
				)}
			/>
			<Route component={Nope404} />
		</Switch>
	);
};
export default Routes;
