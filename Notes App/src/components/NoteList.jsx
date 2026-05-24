import NoteCard from "./NoteCard";

// --- REACT PRACTICE POINT: PROPS & DYNAMIC RENDERING ---
// We receive the `notes` array and `onDeleteNote` and 'onEditNode' callback from the parent App.jsx.
// In React, we use standard Javascript `.map()` to iterate over data arrays 
// and return JSX elements dynamically.
const NoteList = ({ notes, onDeleteNote, onEditNote }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
      {notes.map((note) => (
        // --- REACT PRACTICE POINT: THE "key" PROP ---
        // When rendering arrays of elements in React, you MUST provide a unique `key` prop
        // (usually an ID) to the top-level element in the map. This helps React's virtual DOM
        // efficiently track, update, or remove items when the list changes.
        <NoteCard 
          key={note.id} 
          note={note} 
          onDelete={onDeleteNote} 
          onEdit={onEditNote}
        />
      ))}
    </div>
  );
};

export default NoteList;
