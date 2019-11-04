import React from "react";

// footer
const Footer = props => {
	const { color } = props;
	return (
		<footer className={color}>
			<span>INNRUPTIVE © by Balint Apro</span>
			<p>2019</p>
		</footer>
	);
};

export default Footer;
