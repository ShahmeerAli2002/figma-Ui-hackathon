import React from "react";

import { NewsletterSection1 } from "../components/NewsletterSection1";
import { BrandFeatures } from "../components/BrandFeatures";
import { AboutSection } from "../components/about";
import NewsletterSection from "../components/NewsletterSection";
import BrandMessage from "../components/BrandMessag";

const page = () => {
  return (
    <div>
      <BrandMessage />

      <AboutSection />
      <NewsletterSection />

      <BrandFeatures />

      <NewsletterSection1 />
    </div>
  );
};

export default page;
