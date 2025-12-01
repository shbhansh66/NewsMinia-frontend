import React from "react";
import FooterBrand from "./FooterBrand";
import FooterSources from "./FooterSources";
import FooterCategories from "./FooterCategories";
import FooterDeveloper from "./FooterDeveloper";
import FooterBottom from "./FooterBottom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full  bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 mt-12 py-8 shadow-inner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col md:flex-row md:justify-between md:items-start space-y-8 md:space-y-0">

          <FooterBrand />

          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-x-12">
            <FooterSources />
            <FooterCategories />
            <FooterDeveloper />
          </div>

        </div>

        <FooterBottom currentYear={currentYear} />

      </div>
    </footer>
  );
};

export default Footer;
