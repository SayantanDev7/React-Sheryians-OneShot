const PlatformLabel = () => {
  return (
    <div className="flex items-center gap-2.5 text-[10px] font-bold tracking-[0.25em] text-gray-500 uppercase">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
      </svg>
      <span>Digital Banking Platform</span>
    </div>
  );
};

export default PlatformLabel;
