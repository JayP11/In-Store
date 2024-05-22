
const Urls = {
  base_url: process.env.REACT_APP_BASE_URL,
  main_url:
    window.location.protocol && window.location.host
      ? `${window.location.protocol}//${window.location.host}/` 
      : process.env.REACT_APP_PRODUCTION_URL,
  // main_url :process.env.REACT_APP_DEVELOPMENT_URL
};
export default Urls;
 