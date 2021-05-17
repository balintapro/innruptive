import React, { useState, useEffect, useRef } from "react";
import { parseTime, toClipboard } from "../Helper/utils"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { Helmet } from "react-helmet";
import { useHistory } from 'react-router-dom';

const Post = ({ entries }) => {
	const [code, setCode] = useState();
	const article = useRef(null);
	const popup = useRef(null);
	const [visible, setVisible] = useState("");
	const history = useHistory();
	const currUrl = useState(history.location.pathname.split('/').pop())

	const copycode = e => {
		if (e.target.nodeName === "CODE") {
			toClipboard(e.target.innerText);
			setCode(e.target.innerText);
			setVisible("active")
			setTimeout(() => {
				setVisible("")
			}, 4000);
		}
	}

	useEffect(() => {
		article.current.addEventListener("click", copycode);
	}, []);

	return (
		<>
			<section ref={article} className="article">
				{entries.filter(entry => entry.title_slug.includes(currUrl[0])).map((post) => (
					<div className="blog" key={post._id}>
						<Helmet>

							<meta name="description" content={post.excerpt} />
							<meta name="keywords" content={post.meta_keywords} />

							<meta property="og:type" content="website" />
							<meta property="og:url" content={"https://innruptive.com/post/" + post.title_slug} />
							<meta property="og:title" content={"Innruptive - " + post.title} />
							<meta property="og:description" content={post.excerpt} />
							<meta property="og:image" content={"https://innruptive.com/api/storage/uploads" + post.image.path} />

							<meta property="twitter:card" content={"https://innruptive.com/api/storage/uploads" + post.image.path} />
							<meta property="twitter:url" content={"https://innruptive.com/post/" + post.title_slug} />
							<meta property="twitter:title" content={"Innruptive - " + post.title} />
							<meta property="twitter:description" content={post.excerpt} />
							<meta property="twitter:image" content={"https://innruptive.com/api/storage/uploads" + post.image.path} />

						</Helmet>
						<div className="innr">
							<div className="main" >
								<img src={"https://innruptive.com/api/storage/uploads" + post.image.path} alt="" />
							</div>
							<h1>{post.title}</h1>
							<p className="excerpt" dangerouslySetInnerHTML={{
								__html: post.excerpt
							}} />
							<span className="time" dangerouslySetInnerHTML={{
								__html: parseTime(post._modified)
							}}></span>
							<div dangerouslySetInnerHTML={{
								__html: post.content
							}} >
							</div>
						</div>
					</div>
				))}
				<div ref={popup} className={"popup " + visible}>
					<p><FontAwesomeIcon icon={faCopy} /> <code>{code}</code></p>
				</div>
			</section>
		</>
	);
};

export default Post;