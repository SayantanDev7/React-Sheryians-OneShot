// --- REACT PRACTICE POINT: DESTRUCTURING PROPS ---
// We destructure the individual `note` object and the parent's `onDelete` handler.
// This makes accessing properties cleaner (e.g., `note.title` instead of `props.note.title`).
const NoteCard = ({ note, onDelete }) => {
  
  // Custom tag styling based on category for a premium, clean look
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
    <div className="bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.015)] border border-slate-100 flex flex-col justify-between hover:shadow-md hover:translate-y-[-1px] transition-all duration-300 w-full min-h-[160px] group">
      <div>
        {/* Top Header of Card */}
        <div className="flex items-center justify-between w-full">
          {/* File Icon & Category Tag */}
          <div className="flex items-center gap-2">
            <i className="fa-regular fa-file-lines text-slate-400 text-lg"></i>
            <span className={`px-2.5 py-0.5 rounded-md text-xs font-bold tracking-wide ${getTagStyle(note.type)}`}>
              {note.type}
            </span>
          </div>

          {/* Action Icons (Edit & Delete) */}
          <div className="flex items-center gap-2.5">
            <button 
              title="Edit Note (Practice Task)" 
              onClick={() => alert("Practice Task: Implement edit note mode using local component state (like isEditing)!")}
              className="text-slate-400 hover:text-blue-600 transition-colors duration-200 cursor-pointer p-1 rounded hover:bg-slate-50"
            >
              <i className="fa-regular fa-pen-to-square text-sm"></i>
            </button>
            
            {/* Delete button triggering the onDelete callback passed from App.jsx */}
            <button 
              title="Delete Note"
              onClick={() => onDelete(note.id)}
              className="text-slate-400 hover:text-red-500 transition-colors duration-200 cursor-pointer p-1 rounded hover:bg-slate-50"
            >
              <i className="fa-regular fa-trash-can text-sm"></i>
            </button>
          </div>
        </div>

        {/* Note Title */}
        <h4 className="text-[#0a2540] font-bold text-base md:text-lg mt-4 truncate">
          {note.title}
        </h4>

        {/* Note Content */}
        <p className="text-slate-500 text-xs md:text-sm mt-1.5 leading-relaxed break-words whitespace-pre-wrap">
          {note.content}
        </p>
      </div>
    </div>
  );
};

export default NoteCard;