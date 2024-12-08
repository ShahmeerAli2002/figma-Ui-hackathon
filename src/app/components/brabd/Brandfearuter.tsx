import * as React from "react";
import { FeatureCard } from "./Fearurecard";

const features = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/5f33c89f603a59bebcd874d3179f26fbab862b4d6c6689a97a26cc8546b5184c?placeholderIfAbsent=true&apiKey=4de81f06890b4bbb91cb079950880245",
    title: "Next day as standard",
    description: "Order before 3pm and get your order\nthe next day as standard"
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/e1e9f9851b62df1d5dba2b23fe0327b1f711a3fc93bee1a5555dc06e93065550?placeholderIfAbsent=true&apiKey=4de81f06890b4bbb91cb079950880245",
    title: "Made by true artisans",
    description: "Handmade crafted goods made with\nreal passion and craftmanship"
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4bf750bd578cade42d1dc10b027960eb56c0d97f9139a5767b6314c72a232f5d?placeholderIfAbsent=true&apiKey=4de81f06890b4bbb91cb079950880245",
    title: "Unbeatable prices",
    description: "For our materials and quality you won't find better prices anywhere"
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/1a615f9d12bc6e83dc0ce32a34ff26152e349a3eb73d225ce2eabbaa7c936625?placeholderIfAbsent=true&apiKey=4de81f06890b4bbb91cb079950880245",
    title: "Recycled packaging",
    description: "We use 100% recycled packaging to ensure our footprint is manageable"
  }
];

export const BrandFeatures: React.FC = () => {
  return (
    <div className="flex flex-col px-20 py-20 w-full bg-white max-md:px-5 max-md:max-w-full">
      <h2 className="self-center text-2xl leading-snug text-indigo-950">
        What makes our brand different
      </h2>
      <div className="mt-12 w-full max-w-[1244px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};