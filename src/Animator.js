import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { fetchApi } from "./Components/Helper/fetch"

import { PageTransition } from '@steveeeie/react-page-transition';

import Intro from "./Components/Pages/Intro";
import Projects from "./Components/Pages/Projects";
import Blog from "./Components/Pages/Blog";
import Post from "./Components/Pages/Post";
import Footer from "./Components/Footer"

const Animator = () => {
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
							preset="scaleUpScaleUp"
							transitionKey={location.pathname}
							className="content"
						>
							<Switch location={location}>
								<Route component={Intro} exact path="/" />
								<Route component={Projects} exact path="/projects" />
								<Route component={Blog} exact path="/blog" />
								<Route exact
									path='/post/:title'
									render={(props) => (
										<Post {...props} entries={posts} />
									)}
								/>
							</Switch>
							<div className="mob-only">
								<Footer />
							</div>
						</PageTransition>
					);
				}}
			/>
	);
};
export default Animator;
