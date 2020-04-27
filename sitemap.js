require("@babel/register");

const router = require("./src/routes").default;
const Sitemap = require("react-router-sitemap").default;

function generateSitemap() {
	return new Sitemap(router)
		.build("https://innruptive.com")
		.save("./dist/sitemap.xml");
}

generateSitemap();
