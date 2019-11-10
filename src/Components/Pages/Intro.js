import React from "react";

const Intro = props => {
	const { color } = props;

	return (
		<section className={color}>
			<div className="intro">
				<h2>HI,</h2>
				<p>Welcome at Innruptive. I'm Balint Apro a front-end developer from Hungary.</p>
				<p>So what is the name you ask. Well, web technologies are always about to change and a fron-end guy like myself can only try to be ahead of innovations, technologies.</p>
			</div>
		</section>
	);
};

export default Intro;
