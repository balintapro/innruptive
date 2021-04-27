import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { fetchApi } from "./Components/Helper/fetch"

import { PageTransition } from '@steveeeie/react-page-transition';

import Intro from "./Components/Pages/Intro";
import Projects from "./Components/Pages/Projects";
import Blog from "./Components/Pages/Blog";
import Post from "./Components/Pages/Post";
import Nope404 from "./Components/Pages/Nope404";

const Routes = () => {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		fetchApi("blog/", setPosts);
		return () => {
			setPosts()
		}
	}, [])
	return (
		<Route
			render={({ location }) => {
				return (
					<PageTransition
						preset="scaleDownFromTop"
						transitionKey={location.pathname}
						className="content"
					>
						<Switch location={location}>
							<Route component={Intro} exact path="/" />
							<Route component={Projects} exact path="/projects" />
							<Route component={Blog} exact path="/blog" />
							<Route exact
								path='/blog/:title'
								render={(props) => (
									<Post {...props} entries={posts} />
								)}
							/>
							<Route component={Nope404} />
						</Switch>
					</PageTransition>
				);
			}}
		/>
	);
};
export default Routes;
