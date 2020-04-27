module.exports = {
	policy: [
		{
			userAgent: "*",
			disallow: ["/search", "/admin", "/login"],
			allow: ["/", "/blog", "/portfolio"],
			crawlDelay: 2,
			cleanParam: "ref /blog/"
		}
	],
	sitemap: "https://innruptive.com/sitemap.xml",
	host: "https://innruptive.com"
};
