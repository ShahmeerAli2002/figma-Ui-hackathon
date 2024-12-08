"use client";  // Ensures this component runs on the client side

import * as React from "react";
import { Brand } from "./brandcontainer";

// This component is used to wrap the Brand component and pass necessary props.
export const BrandContainer: React.FC = () => {
  const handleButtonClick = () => {
    console.log("Button clicked");
  };

  return (
    <Brand
      title="From a studio in London to a global brand with over 400 outlets"
      description="When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market. Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique became the hotbed for the London interior design community."
      buttonText="Get in touch"
      onButtonClick={handleButtonClick}
    />
  );
};
