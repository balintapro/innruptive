import { useState, useEffect } from "react";

const useColor = (defaultState) => {
	const [state, updateState] = useState(defaultState);

	const setColor = () => {
		if (location && location.pathname && location.pathname.includes("about")) {
			updateState("yellow");
		} else if (location && location.pathname && location.pathname.includes("contact")) {
			updateState("blue");
		} else if (location && location.pathname && location.pathname.includes("blog")) {
			updateState("orange");
		} else if (location && location.pathname && location.pathname.includes("photos")) {
			updateState("black");
		} else {
			updateState("green");
		}
	};

	useEffect(() => {
		navigateTrack();
		console.log(location)
	}, []);

	return [state, updateState];
};

export default useColor;
