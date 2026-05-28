import React, { useState } from 'react'

const Settings = () => {
  // Local state toggles to make the settings interactive and highly engaging!
  const [notifications, setNotifications] = useState(true)
  const [analytics, setAnalytics] = useState(false)
  const [mfa, setMfa] = useState(true)

  return (
    <div className="flex flex-col items-center space-y-6">
      {/* Settings Header */}
      <div className="text-center">
        <h2 className="text-2xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-indigo-500 tracking-tight">
          System Settings
        </h2>
        <p className="text-gray-400 text-xs mt-1">Configure your dashboard preferences</p>
      </div>

      {/* Settings List Container */}
      <div className="w-full space-y-4 bg-gray-950/60 p-5 rounded-xl border border-gray-800/80">
        
        {/* Toggle 1: Push Notifications */}
        <div className="flex justify-between items-center py-1">
          <div>
            <h4 className="text-sm font-semibold text-gray-200">Push Notifications</h4>
            <p className="text-[11px] text-gray-500">Receive alert popups and notifications</p>
          </div>
          <button 
            onClick={() => setNotifications(!notifications)}
            className={`w-11 h-6 rounded-full transition-colors duration-300 relative focus:outline-none cursor-pointer ${
              notifications ? 'bg-blue-600' : 'bg-gray-800 border border-gray-700'
            }`}
          >
            <span className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white transition-transform duration-300 ${
              notifications ? 'translate-x-5' : 'translate-x-0'
            }`}></span>
          </button>
        </div>

        {/* Toggle 2: Security MFA */}
        <div className="flex justify-between items-center py-3 border-t border-gray-900/50">
          <div>
            <h4 className="text-sm font-semibold text-gray-200">Two-Factor Auth (MFA)</h4>
            <p className="text-[11px] text-gray-500">Protect account with secondary authentication</p>
          </div>
          <button 
            onClick={() => setMfa(!mfa)}
            className={`w-11 h-6 rounded-full transition-colors duration-300 relative focus:outline-none cursor-pointer ${
              mfa ? 'bg-blue-600' : 'bg-gray-800 border border-gray-700'
            }`}
          >
            <span className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white transition-transform duration-300 ${
              mfa ? 'translate-x-5' : 'translate-x-0'
            }`}></span>
          </button>
        </div>

        {/* Toggle 3: Telemetry Analytics */}
        <div className="flex justify-between items-center py-1 border-t border-gray-900/50">
          <div>
            <h4 className="text-sm font-semibold text-gray-200">Share Telemetry Data</h4>
            <p className="text-[11px] text-gray-500">Help improve security and platform speeds</p>
          </div>
          <button 
            onClick={() => setAnalytics(!analytics)}
            className={`w-11 h-6 rounded-full transition-colors duration-300 relative focus:outline-none cursor-pointer ${
              analytics ? 'bg-blue-600' : 'bg-gray-800 border border-gray-700'
            }`}
          >
            <span className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white transition-transform duration-300 ${
              analytics ? 'translate-x-5' : 'translate-x-0'
            }`}></span>
          </button>
        </div>

      </div>

      {/* Save Button Action */}
      <button className="w-full bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold py-2.5 px-4 rounded-xl shadow-lg hover:shadow-blue-500/10 active:scale-[0.98] transition-all duration-200 text-sm cursor-pointer">
        Save Configurations
      </button>
    </div>
  )
}

export default Settings