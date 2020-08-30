import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import { fetchApi } from "../Helper/fetch"

const Intro = props => {
	const { color } = props;
	const [intro, setIntro] = useState({ entries: [] });

	useEffect(() => {
		fetchApi("frontpage/", setIntro)
		return () => {
			setIntro()
		}
	}, [])

	return (
		<section className={color + " intro"}>
			{
				intro.entries.map((entry) => (
					<div className="wrap" key={entry._id}>
						<Helmet>
							<meta name="description" content={entry.meta_description} />
							<meta name="keywords" content={entry.meta_keywords} />
						</Helmet>
						<div dangerouslySetInnerHTML={{
							__html: entry.description
						}} />
					</div>
				))
			}
		</section>

	);
};

export default Intro;


