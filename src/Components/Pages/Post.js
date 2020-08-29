import React, { useState, useEffect, useRef } from "react";
import { parseTime, toClipboard } from "../Helper/utils"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { Helmet } from "react-helmet";

const Post = ({ entries }) => {
	const [code, setCode] = useState();
	const article = useRef(null);
	const popup = useRef(null);
	const [visible, setVisible] = useState("");

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
			<section ref={article} className="intro">
				{entries.map((post) => (
					<div className="blog" key={post._id}>
						<Helmet>
							<meta name="description" content={post.excerpt} />
							<meta name="keywords" content={post.meta_keywords} />
						</Helmet>
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
						<div className="content" dangerouslySetInnerHTML={{
							__html: post.content
						}} >
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