import React from 'react'
import { useParams, Link } from 'react-router-dom'

const AboutDetail = () => {
  // Extract dynamic route parameter
  const { name } = useParams()

  return (
    <div className="min-h-[calc(100vh-68px)] bg-gray-950 text-gray-100 py-12 px-4 sm:px-6 lg:px-8 flex justify-center items-center">
      <div className="max-w-md w-full bg-gray-900 border border-gray-800 rounded-2xl p-8 shadow-xl text-center space-y-6">
        {/* Dynamic Detail Header */}
        <div>
          <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 uppercase tracking-widest">
            Dynamic Detail View
          </span>
          <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-indigo-500 tracking-tight capitalize mt-4">
            About {name || 'Explorer'}
          </h1>
          <p className="text-gray-400 text-sm mt-2">
            Detailed parameter insights fetched from URL location state.
          </p>
        </div>

        {/* Dynamic Visual Mock Card */}
        <div className="bg-gray-950/60 p-6 rounded-xl border border-gray-800/80 text-left space-y-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold text-xl capitalize">
              {name ? name.charAt(0) : '?'}
            </div>
            <div>
              <h4 className="font-semibold text-gray-200 capitalize">{name || 'N/A'}</h4>
              <p className="text-xs text-gray-500">React Router Parameter</p>
            </div>
          </div>
          <p className="text-xs text-gray-400 leading-relaxed border-t border-gray-900/50 pt-4">
            This page represents a dynamic detail dashboard. By rendering routing parameters utilizing the <strong>useParams()</strong> hook, React Router creates highly custom, search-optimized dynamic pages seamlessly.
          </p>
        </div>

        {/* Back Link Button */}
        <Link 
          to="/about"
          className="inline-block w-full bg-gray-800 hover:bg-gray-700 text-gray-200 hover:text-white font-semibold py-2.5 px-4 rounded-xl border border-gray-700 active:scale-[0.98] transition-all duration-200 text-sm cursor-pointer text-center"
        >
          ← Return to About Index
        </Link>
      </div>
    </div>
  )
}

export default AboutDetail