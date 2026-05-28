import React from 'react';

const Card = (props) => {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 shadow-xl hover:shadow-2xl hover:border-blue-500/50 hover:scale-[1.02] transition-all duration-300 flex flex-col h-full w-full max-w-sm">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-full bg-linear-to-tr from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-lg shadow-md shrink-0">
          {props.username ? props.username.charAt(0) : '?'}
        </div>
        <div>
          <h2 className="text-lg font-bold text-white tracking-tight leading-tight">{props.username}</h2>
          <p className="text-xs font-semibold text-blue-400 mt-0.5">{props.title}</p>
        </div>
      </div>
      <p className="text-gray-400 text-sm leading-relaxed mb-6 grow">
        {props.description}
      </p>
      <button className="w-full bg-linear-to-r from-blue-600 to-indigo-600 text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:from-blue-500 hover:to-indigo-500 hover:shadow-blue-500/20 active:scale-95 transition-all duration-200 cursor-pointer text-sm">
        View Profile
      </button>
    </div>
  )
}

export default Card;