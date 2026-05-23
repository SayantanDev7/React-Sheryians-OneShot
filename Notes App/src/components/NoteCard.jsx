import { useState } from "react";

// --- REACT PRACTICE POINT: DESTRUCTURING PROPS & DATA FLOW ---
// 1. We receive `note` (the data object), `onDelete` (delete callback), and `onEdit` (edit callback).
// 2. These callbacks are defined in App.jsx (the parent) and passed down through NoteList.jsx.
// 3. Triggering `onEdit(updatedNote)` inside NoteCard will "bubble" the changes up to App.jsx,
//    which updates its state and triggers a full page re-render, displaying the updated card instantly!
const NoteCard = ({ note, onDelete, onEdit }) => {
  // Local state for controlling whether this specific card is in "edit mode"
  const [isEditing, setIsEditing] = useState(false);
  
  // Local state to hold the temporary changes of the inputs while editing.
  // We initialize it with the current note data.
  const [isEdit, setIsEdit] = useState(note);

  // Custom tag styling based on category
  const getTagStyle = (type) => {
    switch (type) {
      case "Groceries":
        return "bg-[#e0f2fe] text-[#0369a1] border border-[#bae6fd]/50";
      case "Ideas":
        return "bg-[#eef2ff] text-[#4f46e5] border border-[#e0e7ff]/50";
      case "Work":
        return "bg-[#f0fdf4] text-[#16a34a] border border-[#dcfce7]/50";
      case "Personal":
        return "bg-[#faf5ff] text-[#9333ea] border border-[#f3e8ff]/50";
      default:
        return "bg-[#f1f5f9] text-[#475569] border border-[#e2e8f0]/50";
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.015)] border border-slate-100 flex flex-col justify-between hover:shadow-md hover:-translate-y-px transition-all duration-300 w-full min-h-[160px]">
      <div>
        {/* Top Header of Card */}
        <div className="flex items-center justify-between w-full pb-3 border-b border-slate-50 select-none">
          {/* File Icon & Category Tag */}
          <div className="flex items-center gap-2">
            <i className="fa-regular fa-file-lines text-slate-400 text-lg"></i>
            <span className={`px-2.5 py-0.5 rounded-md text-xs font-bold tracking-wide ${getTagStyle(note.type)}`}>
              {note.type}
            </span>
          </div>

          {/* Action Icons: Edit & Delete (Hidden during edit mode for a cleaner look) */}
          <div className="flex items-center gap-2">
            {!isEditing && (
              <>
                <button 
                  title="Edit Note" 
                  onClick={() => {
                    setIsEditing(true);
                    setIsEdit(note); // Load the current note details into editing input state
                  }}
                  className="text-slate-400 hover:text-blue-600 transition-colors duration-200 cursor-pointer p-1.5 rounded hover:bg-slate-50"
                >
                  <i className="fa-regular fa-pen-to-square text-sm"></i>
                </button>
                <button 
                  title="Delete Note"
                  onClick={() => onDelete(note.id)}
                  className="text-slate-400 hover:text-red-500 transition-colors duration-200 cursor-pointer p-1.5 rounded hover:bg-slate-50"
                >
                  <i className="fa-regular fa-trash-can text-sm"></i>
                </button>
              </>
            )}
          </div>
        </div>

        {/* Content Area: Conditional Rendering */}
        {isEditing ? (
          /* --- EDIT MODE FORM --- */
          <div className="mt-4 flex flex-col gap-3">
            <div>
              <label className="text-slate-400 text-[10px] font-bold uppercase tracking-wider block mb-1">
                Edit Title
              </label>
              <input
                type="text"
                value={isEdit.title}
                // --- REACT PRACTICE POINT: CONTROLLED INPUT ---
                // We copy the existing properties of `isEdit` using the spread operator (`...isEdit`)
                // and overwrite only the `title` key with the input's current value.
                onChange={(e) => setIsEdit({ ...isEdit, title: e.target.value })}
                className="w-full bg-[#f0f7ff] text-[#0a2540] border border-[#c6e2ff] rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white transition-all font-semibold"
                placeholder="Title"
              />
            </div>

            <div>
              <label className="text-slate-400 text-[10px] font-bold uppercase tracking-wider block mb-1">
                Edit Description
              </label>
              <textarea
                value={isEdit.content}
                onChange={(e) => setIsEdit({ ...isEdit, content: e.target.value })}
                className="w-full bg-[#f0f7ff] text-[#0a2540] border border-[#c6e2ff] rounded-lg px-3 py-2 text-sm h-24 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white transition-all leading-relaxed font-medium"
                placeholder="Description"
              />
            </div>

            {/* Action Buttons inside Edit Mode */}
            <div className="flex gap-2 justify-end mt-1 select-none">
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className="px-3.5 py-1.5 cursor-pointer bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-lg text-xs font-bold transition-all"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => {
                  // Trigger the parent callback function with the updated note data
                  onEdit(isEdit);
                  // Close the edit mode form
                  setIsEditing(false);
                }}
                className="px-3.5 py-1.5 cursor-pointer bg-[#005bf6] hover:bg-[#004cd8] text-white rounded-lg text-xs font-bold transition-all shadow-[0_2px_8px_rgba(0,91,246,0.15)]"
              >
                Save Changes
              </button>
            </div>
          </div>
        ) : (
          /* --- VIEW MODE (DEFAULT STATE) --- */
          <div className="mt-4">
            <h4 className="text-[#0a2540] font-bold text-base md:text-lg truncate">
              {note.title}
            </h4>
            <p className="text-slate-500 text-xs md:text-sm mt-1.5 leading-relaxed break-words whitespace-pre-wrap font-medium">
              {note.content}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NoteCard;

