import React from "react";

const NewsPopup = ({ visible, onClose, newsSources, onSelect }) => {
  if (!visible) return null;

  return (
    <div
      className="fixed inset-0  bg-opacity-40 flex justify-center items-end z-[9999]"
      onClick={onClose}
    >
      {/* Popup Box */}
      <div
        className="bg-white w-full rounded-t-2xl p-5 shadow-2xl max-h-[60vh] overflow-y-auto animate-slideUp"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-semibold mb-4 text-center">
          📰 Select News Source
        </h2>

        <div className="space-y-3">
          {newsSources.map((src) => (
            <button
              key={src.id}
              onClick={() => onSelect(src.id)}
              className="w-full p-3 bg-indigo-600 text-white rounded-xl shadow hover:bg-indigo-700 transition"
            >
              {src.name}
            </button>
          ))}
        </div>
      </div>

      {/* Animation */}
      <style>
        {`
        @keyframes slideUp {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }
        .animate-slideUp {
          animation: slideUp 0.35s ease-out;
        }
      `}
      </style>
    </div>
  );
};

export default NewsPopup;
