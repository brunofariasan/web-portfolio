import ReactGA from "react-ga4";

export const initGA = () => {
  ReactGA.initialize("G-EC6HMLVNY0"); 
};

export const trackPageView = (url) => {
  ReactGA.send({ hitType: "pageview", page: url });
};
