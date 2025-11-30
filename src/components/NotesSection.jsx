import React, { useState, useEffect } from "react";
import { Plus } from "lucide-react";

const NotesSection = () => {
  const [notes, setNotes] = useState(() => {
    try {
      const saved = localStorage.getItem("news-aggregator-notes");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [newNote, setNewNote] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  // Save notes
  useEffect(() => {
    localStorage.setItem("news-aggregator-notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = () => {
    if (!newNote.trim()) return;
    setNotes([...notes, { id: Date.now(), text: newNote }]);
    setNewNote("");
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((n) => n.id !== id));
  };

  return (
    <>
      {/* BOTTOM CENTER ADD BUTTON */}
     <div className="
  fixed bottom-4 z-[9999] 
  left-1/2 -translate-x-1/2 
  md:left-auto md:right-6 md:translate-x-0
  flex justify-center
">
  <button
    onClick={() => setIsOpen(true)}
    className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center shadow-2xl border-4 border-white text-white hover:bg-blue-700 active:scale-95 transition"
  >
  📝
  </button>
</div>

      {/* NOTES DRAWER */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl border-l border-gray-300 transform transition-transform duration-300 z-[99999] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="p-4 border-b flex justify-between items-center bg-gray-100">
          <h2 className="text-xl font-semibold">📝 Notes</h2>
          <button
            className="text-gray-600 hover:text-black text-2xl"
            onClick={() => setIsOpen(false)}
          >
            ✕
          </button>
        </div>

        {/* Add Note */}
        <div className="p-4 flex space-x-2">
          <input
            type="text"
            value={newNote}
            onChange={(e) => setNewNote(e.target.value)}
            placeholder="Type a note..."
            className="flex-grow p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={addNote}
            className="px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
          >
            ➕
          </button>
        </div>

        {/* Notes List */}
        <div className="p-4 overflow-y-auto h-[75%] space-y-3">
          {notes.length === 0 ? (
            <p className="text-gray-500 text-sm">No notes yet.</p>
          ) : (
            notes.map((note) => (
              <div
                key={note.id}
                className="flex justify-between items-center bg-gray-50 p-3 rounded-md border-l-4 border-blue-500"
              >
                <p className="text-gray-800 text-sm">{note.text}</p>
                <button
                  onClick={() => deleteNote(note.id)}
                  className="text-red-500 text-lg hover:text-red-700"
                >
                  🗑️
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default NotesSection;
