const Tag = ({ text }) => {
  return (
    <div className="bg-[#0a0a0a] text-white text-xs font-bold tracking-[0.25em] uppercase px-5 py-4 rounded-full w-fit shadow-sm">
      {text}
    </div>
  );
};

export default Tag;
