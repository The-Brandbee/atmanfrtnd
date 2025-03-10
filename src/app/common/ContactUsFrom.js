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
          portalId: "6190130",
          formId: "2996b4de-67e8-4033-9695-0f4b6504cad3",
          target: "#New",
        });
      } 
    };
    document.body.appendChild(script);
  }, []);

  return (
    <> 
     <div id="New"></div>   
    </> 
  );
};

export default HubSpotForm;
