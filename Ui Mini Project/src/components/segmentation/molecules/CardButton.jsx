const CardButton = ({ text, colorClass, textClass = "text-white" }) => {
  return (
    <button className={`flex items-center justify-between w-full rounded-full pl-5 pr-1.5 py-1.5 text-[14px] font-bold tracking-wide transition-colors duration-300 ${colorClass} ${textClass}`}>
      <span>{text}</span>
      <div className={`h-8 w-8 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 ${textClass === "text-black" ? "bg-black/10" : "bg-white/25"}`}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </div>
    </button>
  );
};

export default CardButton;
