import React from "react";

export const useWindowWidth = () => {
  const [width, setWidth] = React.useState(window.innerWidth);

  const handleWidth = () => setWidth(window.innerWidth);

  React.useEffect(() => {
    window.addEventListener("resize", handleWidth, { once: true });
  }, [width);

  return width;
};
