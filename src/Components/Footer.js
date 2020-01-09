import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faNpm, faGithub } from "@fortawesome/free-brands-svg-icons";

// footer
const Footer = props => {
	const { color } = props;
	const year = new Date().getFullYear();
	return (
		<footer className={color}>
			<div className="wrap">
				<a href="https://twitter.com/balint_apro" target="_blank">
					<FontAwesomeIcon icon={faTwitter} />
				</a>
				<a href="https://www.npmjs.com/~zeracoke" target="_blank">
					<FontAwesomeIcon icon={faNpm} />
				</a>
				<a href="https://github.com/abalint88" target="_blank">
					<FontAwesomeIcon icon={faGithub} />
				</a>
			</div>
			<div className="wrap">
				<p>INNRUPTIVE</p>
				<p>{year}</p>
			</div>
		</footer>
	);
};

export default Footer;
