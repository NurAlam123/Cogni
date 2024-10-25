"use client";

import productImage from "@/assets/product-image.png";
import { useState } from "react";
import FeatureTab from "./FeatureTab";
import { tabs } from "@/constants";

// Features section
const Features = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <h2 className="text-5xl md:text-6xl font-medium text-center tracking-tighter">
          Elevate your SEO efforts.
        </h2>
        <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto tracking-tight text-center mt-5">
          Form small startups to large enterprises, our AI-driven tool has
          revolutionized the way business approach SEO.
        </p>
        <div className="mt-10 flex flex-col lg:flex-row gap-3">
          {tabs.map((tab, tabIndex) => (
            <FeatureTab
              {...tab}
              onClick={() => setSelectedTab(tabIndex)}
              selected={selectedTab === tabIndex}
              key={tab.title}
            />
          ))}
        </div>
        <div className="border border-white/20 rounded-xl mt-3 p-2.5">
          <div
            className="aspect-video border border-white/20 rounded-lg bg-cover"
            style={{
              backgroundImage: `url(${productImage.src})`,
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
