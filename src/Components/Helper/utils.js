import React from "react";

export const backend = "http://backend.innruptive.com/api/1.1/tables/innruptive/rows"

export function parseTime(stamp) {
  let date = new Date(stamp * 1000),
    day = date.getDate(),
    month = date.getMonth(),
    year = date.getFullYear();
  return (
    year +
    '-' +
    (((month + 1) < 10 ? '0' : '') + (month + 1)) +
    '-' +
    day
  );
}

export const toClipboard = (str) => {
  let clipboard = document.createElement("textarea");

  clipboard.setAttribute("readonly", "");
  clipboard.value = str;
  clipboard.style = { display: "none" };
  document.body.appendChild(clipboard);

  clipboard.select();
  document.execCommand("copy");

  document.body.removeChild(clipboard);
}

// utils/useDeviceDetect.js

export default function useDeviceDetect() {
  const [isMobile, setMobile] = React.useState(false);

  React.useEffect(() => {
    const userAgent = typeof window.navigator === "undefined" ? "" : navigator.userAgent;
    const mobile = Boolean(userAgent.match(
        /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
      ) || window.innerWidth < 1024
    );
    
    window.addEventListener('resize', () => {
      setMobile(mobile);
      console.log("waa")
    });
    window.addEventListener('orientationchange', () => {
      setMobile(mobile);
    });

    setMobile(mobile);
  }, []);

  return { isMobile };
}