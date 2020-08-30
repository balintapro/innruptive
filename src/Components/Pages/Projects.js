import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import { fetchApi } from "../Helper/fetch"

const About = props => {
	const { color } = props;
	const [projects, setProjects] = useState({ entries: [] });

	useEffect(() => {
		fetchApi("projects/", setProjects)
		return () => {
			setProjects()
		}
	}, [])

	return (
		<>
			<Helmet>
				<meta name="description" content="Projects, I'm proud of." />
			</Helmet>
			<section className={color + " intro"}>
				<h1>Projects</h1>
			</section>
			<section>
				<div className="container">
					<div className="row">
						{projects.entries.map((project) => (
							<div key={project._id} className="col-sm-4">
								<div className="card">
									<div className="headline">
										<a href={project.projectlink} target="_blank" className="site">
											<img src={"https://innruptive.com/api/storage/uploads" + project.image.path} alt={project.image.title} />
											<h2>{project.title}</h2>
											<p dangerouslySetInnerHTML={{
												__html: project.excerpt
											}} />
											<span className="tooltip">click to visit them</span>
										</a>
									</div>
									<div className="content" dangerouslySetInnerHTML={{
										__html: project.content
									}} />
									<span className="finished">{project.finished}</span>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
};

export default About;
