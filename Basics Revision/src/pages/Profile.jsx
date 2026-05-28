import React from 'react'

const Profile = () => {
  return (
    <div className="flex flex-col items-center text-center space-y-6">
      {/* Profile Header */}
      <div>
        <h2 className="text-2xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-indigo-500 tracking-tight">
          User Profile
        </h2>
        <p className="text-gray-400 text-xs mt-1">Nested Route Dashboard</p>
      </div>

      {/* Styled Avatar Placeholder */}
      <div className="relative">
        <div className="w-24 h-24 rounded-full bg-linear-to-tr from-blue-500 to-indigo-600 flex items-center justify-center text-white text-3xl font-bold shadow-lg shadow-indigo-500/20 border-2 border-gray-800">
          SD
        </div>
        <span className="absolute bottom-1 right-1 w-4 h-4 bg-emerald-500 border-2 border-gray-900 rounded-full animate-pulse"></span>
      </div>

      {/* User Details Grid */}
      <div className="w-full space-y-3 bg-gray-950/60 p-5 rounded-xl border border-gray-800/80 text-left">
        <div className="flex justify-between items-center py-1 border-b border-gray-900/50">
          <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Full Name</span>
          <span className="text-sm font-medium text-gray-200">Sayantan Dev</span>
        </div>
        <div className="flex justify-between items-center py-1 border-b border-gray-900/50">
          <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Email Address</span>
          <span className="text-sm font-medium text-gray-200">sayantan.dev@example.com</span>
        </div>
        <div className="flex justify-between items-center py-1 border-b border-gray-900/50">
          <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Role</span>
          <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
            Developer
          </span>
        </div>
        <div className="flex justify-between items-center py-1">
          <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Membership</span>
          <span className="text-xs font-mono text-gray-300">Premium Rev-Member</span>
        </div>
      </div>

      {/* Custom Button Action */}
      <button className="w-full bg-gray-800 hover:bg-gray-700 text-gray-200 hover:text-white font-semibold py-2.5 px-4 rounded-xl border border-gray-700 active:scale-[0.98] transition-all duration-200 text-sm cursor-pointer">
        Edit Profile Credentials
      </button>
    </div>
  )
}

export default Profile