import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { fetchApi } from "../Helper/fetch"

const About = () => {
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
				<meta name="keywords" content="Balint, Apro, blog, front-end, developer, disruptive innovation, portfolio" />

				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://innruptive.com/projects/" />
				<meta property="og:title" content="Innruptive - projects" />
				<meta property="og:description" content="Projects, I'm proud of." />
				<meta property="og:image" content="https://innruptive.com/api/storage/uploads/2020/08/30/5f4bd27e69feeinnruptive.png" />

				<meta property="twitter:card" content="https://innruptive.com/api/storage/uploads/2020/08/30/5f4bd27e69feeinnruptive.png" />
				<meta property="twitter:url" content="https://innruptive.com/projects/" />
				<meta property="twitter:title" content="Innruptive - projects" />
				<meta property="twitter:description" content="Projects, I'm proud of." />
				<meta property="twitter:image" content="https://innruptive.com/api/storage/uploads/2020/08/30/5f4bd27e69feeinnruptive.png" />
			</Helmet>
			<section className="projects">
				<div className="row">
					{projects.entries.map((project) => (
						<div key={project._id} className="col-md-6 col-sm-12 ">
							<div className="card">
								<div className="shdw">
									<div className="headline">
										<a href={project.projectlink} target="_blank" rel="noreferrer" className="site">
											<img src={"https://innruptive.com/api/storage/uploads" + project.image.path} alt={project.image.title} />
											<h2>{project.title}</h2>
											<p dangerouslySetInnerHTML={{
												__html: project.excerpt
											}} />
											<span className="tooltip">click here to visit them</span>
										</a>
									</div>
									<div className="content" dangerouslySetInnerHTML={{
										__html: project.content
									}} />
									<span className="finished">{project.finished}</span>
								</div>
							</div>
						</div>
					))}
				</div>
			</section>
		</>
	);
};

export default About;
