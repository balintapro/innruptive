import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import { Helmet } from "react-helmet";

import { fetchApi } from "../Helper/fetch"
import { parseTime } from "../Helper/utils"

const Blog = props => {
	const { color } = props;
	const [posts, setPosts] = useState({ entries: [] });
	const history = useHistory();

	function toPost(title) {
		let url = title
			.toLowerCase()
			.replace(/ /g, '-')
			.replace(/[^\w-]+/g, '');
		history.push('/post/' + url);
	}

	useEffect(() => {
		fetchApi("blog/", setPosts)
		return () => {
			setPosts()
		}
	}, [])

	return (
		<>
			<Helmet>
				<meta name="description" content="My blog, posts about professional stuff. Well sometimes not so profesional..." />
			</Helmet>
			<section className={color + " intro"}>
				<h1>Blog</h1>
			</section>
			<section>
				<div className="container blog">
					{posts.entries.map((post) => (
						<div key={post._id} onClick={() => toPost(post.title)} className="row post">
							<div className="col-sm-8">
								<h2>{post.title}</h2>
								<p className="excerpt" dangerouslySetInnerHTML={{
									__html: post.excerpt
								}} />
								<span dangerouslySetInnerHTML={{
									__html: parseTime(post._modified)
								}}></span>
							</div>
							<div className="col-sm-4 bg" style={{ backgroundImage: "url(https://innruptive.com/api/storage/uploads" + post.image.path + ")" }} />
						</div>
					))}
				</div>
			</section>
		</>
	);
};

export default Blog;