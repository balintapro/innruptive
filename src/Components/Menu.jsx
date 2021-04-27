import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTerminal,
	faProjectDiagram,
	faThList
} from "@fortawesome/free-solid-svg-icons";

const isPost = window.location.href.includes("post");
console.log(isPost)

// header component for display routing
const Menu = (props, isMobile, location) => {
	const { color } = props;
	return (
		<header className={color}>
			<nav className="nav crt" id="nav">
				<NavLink exact to="/" className="home" activeClassName="active">
					<b>
						<FontAwesomeIcon icon={faTerminal} />
					</b>
					<span>Home</span>
				</NavLink>
				<NavLink exact to="/projects" className="projects" activeClassName="active">
					<b>
						<FontAwesomeIcon icon={faProjectDiagram} />
					</b>
					<span>Projects</span>
				</NavLink>
				<NavLink to="/blog" className="blog" activeClassName="active">
					<b>
						<FontAwesomeIcon icon={faThList} />
					</b>
					<span>Blog</span>
				</NavLink>
			</nav>
		</header>
	);
};

export default Menu;
