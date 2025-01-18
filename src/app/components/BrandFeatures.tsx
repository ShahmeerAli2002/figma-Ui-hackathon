import * as React from "react";

const features = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/5f33c89f603a59bebcd874d3179f26fbab862b4d6c6689a97a26cc8546b5184c?placeholderIfAbsent=true&apiKey=4de81f06890b4bbb91cb079950880245",
    title: "Next day as standard",
    description: "Order before 3pm and get your order the next day as standard",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/e1e9f9851b62df1d5dba2b23fe0327b1f711a3fc93bee1a5555dc06e93065550?placeholderIfAbsent=true&apiKey=4de81f06890b4bbb91cb079950880245",
    title: "Made by true artisans",
    description: "Handmade crafted goods made with real passion and craftsmanship",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4bf750bd578cade42d1dc10b027960eb56c0d97f9139a5767b6314c72a232f5d?placeholderIfAbsent=true&apiKey=4de81f06890b4bbb91cb079950880245",
    title: "Unbeatable prices",
    description: "For our materials and quality, you won't find better prices anywhere",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/1a615f9d12bc6e83dc0ce32a34ff26152e349a3eb73d225ce2eabbaa7c936625?placeholderIfAbsent=true&apiKey=4de81f06890b4bbb91cb079950880245",
    title: "Recycled packaging",
    description: "We use 100% recycled packaging to ensure our footprint is manageable",
  },
];

export const BrandFeatures: React.FC = () => {
  return (
    <div className="flex flex-col items-center px-20 py-20 w-full bg-white max-md:px-5">
      <h2 className="text-xl font-bold text-indigo-950">
        What makes our brand different
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 max-w-screen-lg">
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
  );
};

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col p-4">











      <img
        loading="lazy"
        src={icon}
        alt={title}
        className="object-contain w-10 h-10 mb-4"
      />
      <div className="text-indigo-950">
        <h3 className="text-base font-medium">{title}</h3>
        <p className="mt-1 text-xs">{description}</p>
      </div>
    </div>
  );

};