import { useEffect,useState } from "react";
import Header from "./components/Header";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";

const App = () => {
  // --- REACT PRACTICE POINT: LIFTING STATE UP ---
  // Since both NoteForm (which adds notes) and NoteList (which displays notes) 
  // need access to the same list of notes, we "lift" this state to their closest
  // common parent component, which is App.jsx.

  
  // --- REACT PRACTICE POINT: LAZY STATE INITIALIZATION ---
  // Instead of starting with a default state and updating it after mounting (which causes a double render),
  // we pass an anonymous function to useState. React runs this function ONLY ONCE when the component first loads.
  // It checks if there are saved notes in localStorage. If yes, it loads them immediately. If not, it uses the default notes.
  const [notes, setNotes] = useState(() => {
    const storedNotes = localStorage.getItem('my-notes');
    //JSON.parse() -> converts JSON string into a JavaScript object
    //JSON.stringify() -> converts JavaScript object into a JSON string
    return storedNotes ? JSON.parse(storedNotes) : [
      {
        id: 1,
        title: "Weekly Groceries",
        type: "Groceries",
        content: "Remember milk, bread, butter, cheese, apples..."
      },
      {
        id: 2,
        title: "Ideas Ideas",
        type: "Ideas",
        content: "Remember milk, bread, butter, cheese, butter, apples..."
      },
      {
        id: 3,
        title: "Weekly Groceries",
        type: "Ideas",
        content: "Remember milk, bread, butter, cheese, apples..."
      },
      {
        id: 4,
        title: "Weekly Description",
        type: "Ideas",
        content: "Remember milk, bread, butter, cheese, apples..."
      }
    ];
  });

  // Handler to add a new note
  // We pass this function down to NoteForm as a prop
  const handleAddNote = (newNote) => {
    const noteWithId = {
      ...newNote,
      id: Date.now() // Simple way to generate a unique ID
    }; //adding id to the new note
    // React state is immutable: we create a new array with the new note appended
    setNotes([...notes, noteWithId]);
  };

  // Handler to delete a note by its ID
  // We pass this function down to NoteList, which passes it to NoteCard
  const handleDeleteNote = (id) => {
    // Immutably remove the note by filtering it out
    setNotes(notes.filter((note) => note.id !== id));
  };

  // --- REACT PRACTICE POINT: UPDATING STATE IMMUTABLY ---
  // To edit a note, we need to update the parent state in App.jsx.
  // In React, we never modify the existing state array directly. Instead, we use
  // `notes.map()`, which creates a brand new array. If the ID of a note matches
  // the edited note, we swap it with the edited one. Otherwise, we keep the original.
  const handleEditNote = (updatedNote) => {
    setNotes(notes.map((note) => (note.id === updatedNote.id ? updatedNote : note)));
  };

  // --- REACT PRACTICE POINT: SIDE EFFECTS ---
  // Every time our 'notes' state array changes, this effect automatically runs 
  // and backs up the new array to localStorage under the key 'my-notes'.
  useEffect(() => {
    localStorage.setItem('my-notes', JSON.stringify(notes));
    console.log("Notes successfully backed up to storage!");
  }, [notes]); // dependency array


  return (
    <div className="min-h-screen bg-linear-to-br from-[#f8fafc] via-[#f1f5f9] to-[#e2e8f0] p-6 md:p-12 relative overflow-hidden flex flex-col items-center">
      {/* Decorative Blur Background Element (looks like the subtle light glow in the screenshot) */}
      <div className="absolute -bottom-36 -right-36 w-80 h-80 bg-blue-200/50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      
      {/* Decorative Sparkle icon at bottom-right of the dashboard content, matching the screenshot */}
      <div className="absolute bottom-6 right-8 text-blue-300 opacity-40 pointer-events-none select-none">
        <i className="fa-solid fa-sparkles text-xl"></i>
      </div>

      <div className="max-w-6xl w-full flex flex-col gap-8 z-10">
        {/* Simple Notes App Header Component */}
        <Header />

        {/* Column layout for creation panel and notes grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-2">
          {/* Left Column: Note Form (33% width on large screens) */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <h2 className="text-[#0a2540] text-xl font-bold tracking-wide pl-1">Creation Panel</h2>
            <NoteForm onAddNote={handleAddNote} />
          </div>

          {/* Right Column: Note List (66% width on large screens) */}
          <div className="lg:col-span-8 flex flex-col gap-4">
            <h2 className="text-[#0a2540] text-xl font-bold tracking-wide pl-1">Notes Grid</h2>
            <NoteList 
              notes={notes} 
              onDeleteNote={handleDeleteNote} 
              onEditNote={handleEditNote} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;