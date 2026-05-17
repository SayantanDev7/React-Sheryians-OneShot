import NumberBadge from '../atoms/NumberBadge';
import CardButton from './CardButton';

const SegmentCard = ({ number, text, buttonText, buttonColor, buttonTextClass, imageUrl }) => {
  return (
    <div className="relative overflow-hidden  w-full h-[420px] flex flex-col justify-between p-6 bg-gray-900 group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 ease-out transform hover:-translate-y-1">
      {/* Background photo */}
      <img
        src={imageUrl}
        alt="Segment background"
        className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 group-hover:opacity-50 transition-all duration-700 ease-in-out"
      />
      {/* Dark gradient at bottom for text legibility */}
      <div className="absolute inset-0  from-[#0d1117]/90 via-[#0d1117]/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-between h-full">
        <NumberBadge number={number} />
        <div className="flex flex-col gap-4">
          <p className="text-gray-100 text-[14px] leading-[1.6] font-medium tracking-wide">
            {text}
          </p>
          <CardButton text={buttonText} colorClass={buttonColor} textClass={buttonTextClass} />
        </div>
      </div>
    </div>
  );
};

export default SegmentCard;
