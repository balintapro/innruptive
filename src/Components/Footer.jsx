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
				<div className="social">
					<a href="https://twitter.com/balint_apro" title="My Twitter" rel="noreferrer" target="_blank">
						<b><FontAwesomeIcon icon={faTwitter} /></b>
					</a>
					<a href="https://www.npmjs.com/~zeracoke" title="My public NPM packages" rel="noreferrer" target="_blank">
						<b><FontAwesomeIcon icon={faNpm} /> </b>
					</a>
					<a href="https://github.com/abalint88" title="My github page" rel="noreferrer" target="_blank">
						<b><FontAwesomeIcon icon={faGithub} /></b>
					</a>
				</div>
				<div className="legal">
					<p>INNRUPTIVE</p>
					<p>{year}</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
