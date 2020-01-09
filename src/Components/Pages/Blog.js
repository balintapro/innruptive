import React from "react";

const Blog = props => {
	const { color } = props;

	return (
		<section className={color}>
			<div className="intro">
				<h2>Blog</h2>
				<p>
					I plan to write about some technologies I dealt with, or just about some linux tips I found useful.
				</p>
			</div>
		</section>
	);
};

export default Blog;
