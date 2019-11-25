import React from "react";

// footer
const Footer = props => {
	const { color } = props;
	return (
		<footer className={color}>
			<p><span className="logo">INNRUPTIVE</span> © by Balint Apro</p>
			<p>2019</p>
		</footer>
	);
};

export default Footer;