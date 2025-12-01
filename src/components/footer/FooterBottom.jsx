import React from "react";
import { Linkedin, Twitter, Facebook, Heart } from "lucide-react";

const FooterBottom = ({ currentYear }) => (
  <div className="mt-8 pt-4 border-t border-gray-300 dark:border-gray-700">

    <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-4 md:space-y-0">

      <p className="text-sm text-gray-500 dark:text-gray-500">
        &copy; {currentYear} Global News Aggregator. All rights reserved.
        <span className="ml-4 flex items-center text-xs text-indigo-500 dark:text-indigo-400">
          Made with <Heart className="w-3 h-3 mx-1 fill-indigo-500 text-indigo-500" /> using React and Express.
        </span>
      </p>

      <div className="flex space-x-6">
        <a href="https://www.linkedin.com/in/shubhanshu-s-366073205" target="_blank" className="text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400">
          <Linkedin className="w-6 h-6" />
        </a>
        <a href="#" className="text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400">
          <Twitter className="w-6 h-6" />
        </a>
        <a href="#" className="text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400">
          <Facebook className="w-6 h-6" />
        </a>
      </div>

    </div>

  </div>
);

export default FooterBottom;
