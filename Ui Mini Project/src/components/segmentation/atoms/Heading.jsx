const Heading = ({ children }) => {
  return (
    <h2 className="text-4xl md:text-[2.85rem] font-extrabold leading-[1.12] text-gray-900 tracking-[-0.03em]">
      {children}
    </h2>
  );
};

export default Heading;
