import React, { useEffect } from 'react';

const ClearCookiesOnFirstLoad = () => {
  useEffect(() => {
    // Clear all cookies
    const clearAllCookies = () => {
      const cookies = document.cookie.split(";");

      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i];
        const eqPos = cookie.indexOf("=");
        const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
      }
    }

    // Check if it's the first time loading the website
    if (!localStorage.getItem('firstTime')) {
      // Clear cookies
      clearAllCookies();

      // Set a flag indicating that it's not the first time anymore
      localStorage.setItem('firstTime', 'true');
    }
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  // Render null since this component doesn't render anything to the DOM
  return null;
}

export default ClearCookiesOnFirstLoad;
