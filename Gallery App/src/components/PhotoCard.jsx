const PhotoCard = ({ title, url, id }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300 flex flex-col">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <img 
          src={url} 
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
        {/* Small ID Badge */}
        <span className="absolute top-2 left-2 bg-black/60 text-white text-xs px-2 py-0.5 rounded-md font-mono">
          #{id}
        </span>
      </div>

      {/* Content Container */}
      <div className="p-4 grow flex flex-col justify-between">
        <p className="text-gray-700 font-medium text-sm capitalize line-clamp-2">
          {title}
        </p>
      </div>
    </div>
  );
};

export default PhotoCard;