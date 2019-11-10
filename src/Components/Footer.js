import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faReact,
	faTwitter,
	faNpm,
	faSass,
	faSpotify,
	faGithub,
	faLinux
} from "@fortawesome/free-brands-svg-icons";

import { faCoffee, faArchive } from "@fortawesome/free-solid-svg-icons";

// footer
const Footer = props => {
	const { color } = props;
	return (
		<footer className={color}>
			<div className="wrap">
				<a href="http://" target="_blank">
					<FontAwesomeIcon icon={faTwitter} />
				</a>
				<a href="http://" target="_blank">
					<FontAwesomeIcon icon={faSpotify} />
				</a>
				<a href="http://" target="_blank">
					<FontAwesomeIcon icon={faCoffee} />
				</a>
			</div>
			<div className="wrap">
				<a href="http://" target="_blank">
					<FontAwesomeIcon icon={faNpm} />
				</a>
				<a href="http://" target="_blank">
					<FontAwesomeIcon icon={faReact} />
				</a>
				<a href="http://" target="_blank">
					<FontAwesomeIcon icon={faArchive} />
				</a>
				<a href="http://" target="_blank">
					<FontAwesomeIcon icon={faSass} />
				</a>
				<a href="http://" target="_blank">
					<FontAwesomeIcon icon={faGithub} />
				</a>
				<a href="http://" target="_blank">
					<FontAwesomeIcon icon={faLinux} />
				</a>
			</div>

			<div className="wrap">
				<p>INNRUPTIVE</p>
				<p>2019</p>
			</div>
		</footer>
	);
};

export default Footer;
