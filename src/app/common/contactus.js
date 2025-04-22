import { useEffect } from 'react';
import Image from "next/image";

const HubSpotForm = () => {
  useEffect(() => {
   
    const script = document.createElement('script');
    script.src = "https://js.hsforms.net/forms/v2.js";
    script.async = true;
    script.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: "242539785",
          formId: "cb3b2ac8-13bd-4909-affd-0469b28b4390",
          target: "#Deepak",
        });
      } 
    };
    document.body.appendChild(script);
  }, []);

  return (
    <> 
     <div id="Deepak"></div>    
    </> 
  );
};

export default HubSpotForm;
