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
			<section className={"intro"}>
				<h1>Blog</h1>
			</section>
			<section className="list">
				<div className="container">
					{posts.entries.map((post) => (
						<div key={post._id} onClick={() => toPost(post.title)} className="row post">
							<div className="col-sm-2">
								<img src={"https://innruptive.com/api/storage/uploads" + post.image.path} alt="" />
							</div>
							<div className="col-sm-3">
								<h2>{post.title}</h2>
							</div>
							<div className="col-sm-5">
								<p className="excerpt" dangerouslySetInnerHTML={{
									__html: post.excerpt
								}} />
							</div>
							<div className="col-sm-2">
								<span className="time" dangerouslySetInnerHTML={{
									__html: parseTime(post._modified)
								}}></span>
							</div>
						</div>
					))}
				</div>
			</section>
		</>
	);
};

export default Blog;