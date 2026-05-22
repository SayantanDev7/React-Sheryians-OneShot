import { useState } from "react";

// --- REACT PRACTICE POINT: PROPS & EVENT HANDLERS ---
// We accept `onAddNote` as a prop from App.jsx. This callback function allows 
// this child component to communicate back and send new note data to the parent's state.
const NoteForm = ({ onAddNote }) => {
  // --- REACT PRACTICE POINT: CONTROLLED COMPONENTS ---
  // We use local state to track what the user types in each input. 
  // By linking `value={state}` and `onChange={setter}`, React becomes the "single source of truth"
  // for the form inputs. This is called a "controlled component".
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [type, setType] = useState("Groceries"); // Default category matches screenshot's tags

  const categories = ["Groceries", "Ideas", "Work", "Personal"];

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation: do not allow empty notes
    if (!title.trim() || !content.trim()) {
      alert("Please fill in both the Title and Description.");
      return;
    }

    // Call the parent's handler passed via props to save the note
    onAddNote({
      title: title.trim(),
      content: content.trim(),
      type: type
    });

    // Reset the form fields back to empty after successful submission
    setTitle("");
    setContent("");
    setType("Groceries");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.03)] border border-slate-100/80 p-6 flex flex-col gap-5 w-full select-none"
    >
      <h3 className="text-lg font-bold text-[#0a2540] border-b border-slate-100 pb-3">
        Add New Note
      </h3>

      {/* Title Input */}
      <div>
        <label className="text-[#0a2540] text-xs font-bold tracking-wide uppercase block mb-1.5 pl-1">
          Note Title
        </label>
        <input
          type="text"
          className="w-full bg-[#f0f7ff] text-[#0a2540] placeholder-slate-400/80 border border-[#c6e2ff] rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white transition-all font-medium"
          placeholder="e.g., Grocery List"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      {/* Category Pills (Dynamic Selector for Note Type) */}
      <div>
        <label className="text-[#0a2540] text-xs font-bold tracking-wide uppercase block mb-2 pl-1">
          Category Tag
        </label>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              type="button"
              key={cat}
              onClick={() => setType(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all duration-200 cursor-pointer select-none ${
                type === cat
                  ? "bg-blue-600 text-white border border-blue-600 shadow-sm shadow-blue-300"
                  : "bg-[#f0f7ff] text-blue-600 border border-[#c6e2ff] hover:bg-blue-50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Description Input */}
      <div>
        <label className="text-[#0a2540] text-xs font-bold tracking-wide uppercase block mb-1.5 pl-1">
          Note Description
        </label>
        <textarea
          className="w-full bg-[#f0f7ff] text-[#0a2540] placeholder-slate-400/80 border border-[#c6e2ff] rounded-xl px-4 py-3 text-sm h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white transition-all font-medium leading-relaxed"
          placeholder="e.g., Milk, bread, eggs, spinach..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-[#005bf6] text-white font-bold py-3.5 px-6 rounded-xl hover:bg-[#004cd8] active:scale-[0.98] transition-all cursor-pointer mt-2 text-center text-sm shadow-[0_4px_14px_rgba(0,91,246,0.18)]"
      >
        Add Note
      </button>
    </form>
  );
};

export default NoteForm;