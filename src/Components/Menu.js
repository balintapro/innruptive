import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTerminal,
	faProjectDiagram,
	faThList
} from "@fortawesome/free-solid-svg-icons";

// header component for display routing
const Header = props => {
	const { color } = props;
	return (
		<header className={color}>
			<nav className="nav crt" id="nav">
				<Link to="/">
					<b>
						<FontAwesomeIcon icon={faTerminal} />
					</b>
					<span>Home</span>
				</Link>
				<Link to="/about">
					<b>
						<FontAwesomeIcon icon={faProjectDiagram} />
					</b>
					<span>Projects</span>
				</Link>
				<Link to="/blog">
					<b>
						<FontAwesomeIcon icon={faThList} />
					</b>
					<span>Blog</span>
				</Link>
			</nav>
		</header>
	);
};

export default Header;
