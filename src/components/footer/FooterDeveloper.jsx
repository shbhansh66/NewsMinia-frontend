import React from "react";
import { GitBranch, Code, Send } from "lucide-react";

const FooterDeveloper = () => (
  <div>
    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Developer Links</h3>
    <ul className="space-y-2 text-sm">
      <li className="flex items-center">
        <GitBranch className="w-4 h-4 mr-2 text-gray-400" />
        <a href="https://github.com/shbhansh66" target="_blank" className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400">GitHub Source Code</a>
      </li>
      <li className="flex items-center">
        <Code className="w-4 h-4 mr-2 text-gray-400" />
        <a href="https://leetcode.com/u/shbhansh66/" target="_blank" className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400">LeetCode Profile</a>
      </li>
      <li className="flex items-center">
        <Code className="w-4 h-4 mr-2 text-gray-400" />
        <a href="https://www.geeksforgeeks.org/profile/shbhanypt4?tab=activity" target="_blank" className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400">GFG Profile</a>
      </li>
     
    </ul>
  </div>
);

export default FooterDeveloper;
