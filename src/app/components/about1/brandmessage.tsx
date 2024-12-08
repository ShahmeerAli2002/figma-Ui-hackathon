import * as React from "react";
import BrandMessage from "./brandmessage1";

const BrandMessageContainer: React.FC = () => {
  const brandMessage = "A brand built on the love of craftmanship,\nquality and outstanding customer service";
  
  return <BrandMessage message={brandMessage} />;
}

export default BrandMessageContainer;