const Header = () => {
  return (
    <div className="flex items-center gap-3 select-none py-2 border-b border-gray-200/50 pb-4">
      {/* Icon: solid navy blue file/document icon */}
      <div className="bg-[#0a2540] text-white p-2.5 rounded-lg flex items-center justify-center shadow-md">
        <i className="fa-solid fa-file-lines text-2xl"></i>
      </div>
      <h1 className="text-2xl md:text-3xl font-black text-[#0a2540] tracking-wider">
        SIMPLE NOTES APP
      </h1>
    </div>
  );
};

export default Header;