const Paragraph = ({ text }) => {
  return (
    <p className="text-gray-500 text-[14px] md:text-[15px] leading-[1.7] font-medium max-w-[280px]">
      {text}
    </p>
  );
};

export default Paragraph;
