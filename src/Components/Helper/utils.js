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

  const [width, setWidth] = React.useState(0);

  React.useEffect(() => {
    const updateWindowDimensions = () => {
      const newWidth = window.innerWidth;
      setWidth(newWidth);
      console.log("updating width");
    };

    window.addEventListener("resize", updateWindowDimensions);

    return () => window.removeEventListener("resize", updateWindowDimensions)

  }, []);


  React.useEffect(() => {
    const mobile = window.innerWidth < 1024 ? true : false
    
    window.addEventListener('resize', () => {
      setMobile(mobile);
    });
    window.addEventListener('orientationchange', () => {
      setMobile(mobile);
    });

    setMobile(mobile);
  }, [width]);

  return { isMobile };
}