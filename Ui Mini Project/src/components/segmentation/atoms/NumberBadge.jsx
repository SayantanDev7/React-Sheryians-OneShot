const NumberBadge = ({ number }) => {
  return (
    <div className="bg-white text-gray-900 font-bold text-[11px] h-6 w-6 rounded-full flex items-center justify-center shadow-md">
      {number}
    </div>
  );
};

export default NumberBadge;
