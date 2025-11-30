import React from 'react';
import { Rss, Code, Send, Heart, GitBranch, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 mt-12 py-8 shadow-inner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section: Logo and Links */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start space-y-8 md:space-y-0">
          
          {/* Logo/Branding Section */}
          <div className="flex flex-col items-start space-y-2">
            <h2 className="text-3xl font-extrabold text-indigo-600 dark:text-indigo-400 flex items-center">
              <Rss className="w-8 h-8 mr-2" /> Global News Aggregator
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xs">
              Bringing you the world's news classified and aggregated using Gemini API intelligence.
            </p>
          </div>

          {/* Navigation Links Grid - Expanded to include all categories */}
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-x-12">
            
            {/* Column 1: Sources */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Sources</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition duration-150">The Hindu</a></li>
                <li><a href="#" className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition duration-150">Economic Times</a></li>
                <li><a href="#" className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition duration-150">Hindustan Times</a></li>
                <li><a href="#" className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition duration-150">Times of India</a></li>
              </ul>
            </div>

            {/* Column 2: Core Categories */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Core Categories</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition duration-150">Business</a></li>
                <li><a href="#" className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition duration-150">Politics</a></li>
                <li><a href="#" className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition duration-150">Technology</a></li>
                <li><a href="#" className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition duration-150">Sports</a></li>
              </ul>
            </div>

            {/* Column 3: Global Categories (New/Replaced Column) */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Global & Science</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition duration-150">World</a></li>
                <li><a href="#" className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition duration-150">India</a></li>
                <li><a href="#" className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition duration-150">Science</a></li>
                <li><a href="#" className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition duration-150">Miscellaneous</a></li>
              </ul>
            </div>

            {/* Column 4: Developer Links (Updated) */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Developer Links</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <GitBranch className="w-4 h-4 mr-2 text-gray-400" />
                  <a href="https://github.com/shubhanshu-s-366073205/news-aggregator" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition duration-150">GitHub Source Code</a>
                </li>
                <li className="flex items-center">
                  <Code className="w-4 h-4 mr-2 text-gray-400" />
                  <a href="https://leetcode.com/user_profile" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition duration-150">LeetCode Profile</a>
                </li>
                <li className="flex items-center">
                  <Code className="w-4 h-4 mr-2 text-gray-400" />
                  <a href="https://www.geeksforgeeks.org/user/user_profile" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition duration-150">GFG Profile</a>
                </li>
                <li className="flex items-center">
                  <Send className="w-4 h-4 mr-2 text-gray-400" />
                  <a href="#" className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition duration-150">Powered by Gemini</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className="mt-8 pt-8 border-t border-gray-300 dark:border-gray-700">
          
          {/* Bottom Row: Copyright and Socials */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-4 md:space-y-0">
            
            {/* Copyright */}
            <p className="text-sm text-gray-500 dark:text-gray-500">
              &copy; {currentYear} Global News Aggregator. All rights reserved.
              <span className="ml-4 flex items-center text-xs text-indigo-500 dark:text-indigo-400">
                Made with <Heart className="w-3 h-3 mx-1 fill-indigo-500 text-indigo-500" /> using React and Express.
              </span>
            </p>

            {/* Social Media Links */}
            <div className="flex space-x-6">
              <a 
                href="https://www.linkedin.com/in/shubhanshu-s-366073205" // Corrected LinkedIn URL with https://
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition duration-150"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition duration-150">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition duration-150">
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
