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
		<section className={"full intro"}>
			{
				intro.entries.map((entry) => (
					<div className="wrap" key={entry._id}>
						<Helmet>
							<meta name="description" content={entry.meta_description} />
							<meta name="keywords" content={entry.meta_keywords} />

							<meta property="og:type" content="website" />
							<meta property="og:url" content="https://innruptive.com" />
							<meta property="og:title" content="Innruptive" />
							<meta property="og:description" content={entry.meta_description} />
							<meta property="og:image" content={"https://innruptive.com" + entry.og_default_img.path} />

							<meta property="twitter:card" content={"https://innruptive.com" + entry.og_default_img.path} />
							<meta property="twitter:url" content="https://innruptive.com" />
							<meta property="twitter:title" content="Innruptive" />
							<meta property="twitter:description" content={entry.meta_description} />
							<meta property="twitter:image" content={"https://innruptive.com" + entry.og_default_img.path} />
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


