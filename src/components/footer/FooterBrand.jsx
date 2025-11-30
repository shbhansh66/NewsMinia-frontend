import React from "react";
import { Rss } from "lucide-react";

const FooterBrand = () => (
  <div className="flex flex-col items-start space-y-2">
    <h2 className="text-3xl font-extrabold text-indigo-600 dark:text-indigo-400 flex items-center">
      <Rss className="w-8 h-8 mr-2" /> Global News Aggregator
    </h2>
    <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xs">
      Bringing you the world's news classified and aggregated using Gemini API intelligence.
    </p>
  </div>
);

export default FooterBrand;
