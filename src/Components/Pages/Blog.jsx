import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import { NavLink } from "react-router-dom";

import { fetchApi } from "../Helper/fetch"
import { parseTime } from "../Helper/utils"

import Footer from "../Footer";

const Blog = (props) => {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		fetchApi("blog/", setPosts);
		
		return () => {
			setPosts()
		}
	}, [])

	return (
		<>
			<Helmet>
				<meta name="description" content="My blog, posts about professional stuff. Well sometimes not so profesional..." />

				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://innruptive.com/projects/" />
				<meta property="og:title" content="Innruptive - blog" />
				<meta property="og:description" content="My blog, posts about professional stuff. Well sometimes not so profesional..." />
				<meta property="og:image" content="https://innruptive.com/api/storage/uploads/2020/08/30/5f4bd27e69feeinnruptive.png" />

				<meta property="twitter:card" content="https://innruptive.com/api/storage/uploads/2020/08/30/5f4bd27e69feeinnruptive.png" />
				<meta property="twitter:url" content="https://innruptive.com/projects/" />
				<meta property="twitter:title" content="Innruptive - blog" />
				<meta property="twitter:description" content="My blog, posts about professional stuff. Well sometimes not so profesional..." />
				<meta property="twitter:image" content="https://innruptive.com/api/storage/uploads/2020/08/30/5f4bd27e69feeinnruptive.png" />

			</Helmet>
			<section className="list">
				{posts.map((post) => (
					<NavLink key={post._id} exact to={"post/" + post.title_slug} className="row post">
						<div className="col-md-5 thumb">
							<img src={"https://innruptive.com/api/storage/uploads" + post.image.path} alt="" />
						</div>
						<div className="col-md-7">
							<div className="">
								<h2>{post.title}</h2>
							</div>
							<div className="">
								<p className="excerpt" dangerouslySetInnerHTML={{
									__html: post.excerpt
								}} />
							</div>
							<div className="">
								<span className="time" dangerouslySetInnerHTML={{
									__html: parseTime(post._modified)
								}}></span>
							</div>
						</div>
					</NavLink>
				))}
			</section>
			{props.isMobile ? (<Footer />) : ""

			}		</>
	);
};

export default Blog;